import goldProduct from "../models/Product";
import User from "../models/User";


export const catalogeMain = async (req, res) => {
    const {
        user: {
            _id
        }
    } = req.session;
    const user = await User.findById(_id).populate("products");
    console.log("세션 ID는", _id, "유저는", user._id)
    if (!user) {
        return res.status(404).render("404");
    }
    if (String(_id) !== String(user._id)) {
        return res.status(403).redirect("/");
    }
    const pathname = req._parsedOriginalUrl.pathname;

    // 검색시
    const {
        keyword
    } = req.query;
    let products = [];
    if (keyword) {
        console.log(keyword);
        console.log(Math.floor(Number(keyword)));
        if (!Number(keyword)) {
            products = await goldProduct.find({
                $and: [{
                        "title": {
                            $regex: new RegExp(`${keyword}`, "i")
                        }
                    }, //상호명
                    {
                        "owner": _id
                    }
                ]
            });
        } else {

            products = await goldProduct.find({
                $and: [{ 
                    $or: [{
                        "goldWeight": {$gte: Number(keyword), $lt: (Math.floor(Number(keyword)) + 1)}
                    },
                    {
                        "stoneWeight": {$gte: Number(keyword), $lt: (Math.floor(Number(keyword)) + 1)}
                    },
                    {
                        "basicWage": {$gte: Number(keyword), $lt: (Math.floor(Number(keyword)) + 1)}
                    },
                    {
                        "additionWage": {$gte: Number(keyword), $lt: (Math.floor(Number(keyword)) + 1)}
                    },
                    {
                        "stoneWage1": {$gte: Number(keyword), $lt: (Math.floor(Number(keyword)) + 1)}
                    },
                    {
                        "stoneWage2": {$gte: Number(keyword), $lt: (Math.floor(Number(keyword)) + 1)}
                    },
                ]
                },
                    {
                        "owner": _id
                    }
                ] // 금/은중량
            });
        }


        console.log(products.stone2);

        return res.render("cataloge/cataloge", {
            pageTitle: "카탈로그",
            products,
            pathname
        });
    }



    return res.render("cataloge/cataloge", {
        pageTitle: "카탈로그",
        user,
        pathname
    });
};

export const postCatalogeMain = async (req, res) => {
    // const {user:{_id}} = req.session;
    console.log(req.body);
    const {
        click,
        hold,
        deleteBtn,
        wage,
        basicWage,
        additionWage,
        movestock,
        moveorder,
        moverepair,
        movesale,
        moverent
    } = req.body;
    // const user = await User.findById(_id).populate("products");
    console.log(click, "이거클릭");
    console.log( wage,basicWage,additionWage)
    if (!click) {
        // res.write("<script>alert('채크된것이 없습니다.')</script>");
        console.log("없다")
        return res.status(401).redirect("/cataloge/main");
    }
    if (hold) {
        console.log("안됨")
        return res.status(401).redirect("/cataloge/main");
    }
    if (wage) {
        const clickProduct = await goldProduct.find({
            _id: {
                $in: click
            }
        });
        console.log("공임", clickProduct);
        if (!basicWage) {
            return res.status(401).redirect("/cataloge/main");
        }
        if (!additionWage) {
            return res.status(401).redirect("/cataloge/main");
        }
        await goldProduct.updateMany({
            _id: {
                $in: click
            }
        }, {
            basicWage,
            additionWage,
        });
        console.log("변경후", clickProduct);
        return res.redirect("/cataloge/main");
    }
    if (movestock) {
        console.log("안녕 stock")
        const clickProduct = await goldProduct.find({
            _id: {
                $in: click
            }
        });
        req.session.anotherSaveDb = clickProduct;
        console.log(req.session.anotherSaveDb);
        return res.redirect("/stock/upload");
    }
    if (moveorder) {
        console.log("안녕 order")
        const clickProduct = await goldProduct.find({
            _id: {
                $in: click
            }
        });
        req.session.anotherSaveDb = clickProduct;
        console.log(req.session.anotherSaveDb);
        return res.redirect("/order/upload");
    }
    if (moverepair) {
        console.log("안녕 repair")
        const clickProduct = await goldProduct.find({
            _id: {
                $in: click
            }
        });
        req.session.anotherSaveDb = clickProduct;
        console.log(req.session.anotherSaveDb);
        return res.redirect("/repair/upload");
    }
    if (movesale) {
        console.log("안녕 sale")
        const clickProduct = await goldProduct.find({
            _id: {
                $in: click
            }
        }).populate("stone2");
        req.session.anotherSaveDb = clickProduct;
        console.log(req.session.anotherSaveDb);
        return res.redirect("/sale/upload");
    }
    if (moverent) {
        console.log("안녕 rent")
        const clickProduct = await goldProduct.find({
            _id: {
                $in: click
            }
        });
        req.session.anotherSaveDb = clickProduct;
        console.log(req.session.anotherSaveDb);
        return res.redirect("/rent/upload");
    }
    // for(let clickObj = 1; clickObj < clickObj.length ; clickObj++ ){
    if (deleteBtn) {
        const clickProduct = await goldProduct.find({
            _id: {
                $in: click
            }
        });
        // .populate("products");
        console.log("이거", clickProduct);
        // await goldProduct.findByIdAndUpdate({ _id :{ $in : click}},{
        //     click: "on",
        await goldProduct.updateMany({
            _id: {
                $in: click
            }
        }, {
            click: "on"
        });
        // });
        return res.redirect("/cataloge/delete");
    }

    return res.redirect("/cataloge/main");
};


// 해당제품 들어가서 삭제
export const deleteCataloge = async (req, res) => {
    // const product = await goldProduct.find({click:"off"});
    // const id = product._id;
    const {
        user: {
            _id
        }
    } = req.session;
    const user = await User.findById(_id);

    if (String(_id) !== String(user._id)) {
        return res.status(403).redirect("/");
    }



    await goldProduct.deleteMany({
        $and: [{
            owner: _id
        }, {
            click: "on"
        }]
    });


    // await goldProduct.findByIdAndDelete(id);
    // user.products.splice(user.products.indexOf(id),1);
    // user.save();
    return res.redirect("/cataloge/main");
};

export const getUpload = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("cataloge/catalogeUpload", {
        pageTitle: "카탈로그 등록",
        pathname
    })
};
export const postUpload = async (req, res) => {
    const {
        user: {
            _id
        },
    } = req.session;
    const {
        path: fileUrl
    } = req.file;
    const {
        gender,
        open,
        brandpage,
        modelNumber,
        title,
        manufacturer,
        manufacturerNumber,
        goldWeight,
        stoneWeight,
        size,
        description,
        setCode,
        basicWage,
        additionWage,
        stoneWage1,
        stoneWage2,
        purchaseWage,
        eggPurchasePrice,
        stoneName,
        stoneQuantity,
        stoneDescription,
        stoneWeight2,
        stonePurchasePrice,
        stoneSellingPrice,
        stoneName2,
        stoneQuantity2,
        stoneDescription2,
        stoneWeight22,
        stonePurchasePrice2,
        stoneSellingPrice2
    } = req.body;

    console.log(req.body);


    let stone2 = [];
    for(let i=0; i<stoneName2.length; i++){
        stone2.push({
            stoneName2: stoneName2[i],
            stoneQuantity2: stoneQuantity2[i],
            stoneDescription2: stoneDescription2[i],
            stoneWeight22: stoneWeight22[i],
            stonePurchasePrice2: stonePurchasePrice2[i],
            stoneSellingPrice2: stoneSellingPrice2[i]
        });
    }
    console.log(stone2)
    console.log("요고", additionWage);
    try {
        const newGoldProduct = await goldProduct.create({
            fileUrl,
            gender,
            open,
            brandpage,
            modelNumber,
            title,
            manufacturer,
            manufacturerNumber,
            goldWeight,
            stoneWeight,
            size,
            description,
            setCode,
            basicWage,
            additionWage,
            stoneWage1,
            stoneWage2,
            purchaseWage,
            eggPurchasePrice,
            stone: {
                stoneName,
                stoneQuantity,
                stoneDescription,
                stoneWeight2,
                stonePurchasePrice,
                stoneSellingPrice,
            },
            stone2,

            owner: _id,
        });
        const user = await User.findById(_id);
        user.products.push(newGoldProduct._id);
        user.save();
        return res.redirect("/cataloge/main");
    } catch (error) {
        return res.status(400).render("cataloge/catalogeUpload", {
            pageTitle: "카탈로그 등록",
            errorMessage: error._message,
        });
    }
};


export const getEdit = async (req, res) => {
    const {
        id
    } = req.params;
    const {
        user: {
            _id
        }
    } = req.session;
    const product = await goldProduct.findById(id);
    if (!product) {
        return res.status(404).render("404", {
            pageTitle: "Product not found."
        })
    }
    if (String(_id) !== String(product.owner)) {
        return res.status(403).redirect("/");
    }
    return res.render("cataloge/catalogeEdit", {
        pageTitle: "카탈로그 수정",
        product
    });
};
export const postEdit = async (req, res) => {
    const {
        id
    } = req.params;
    const {
        user: {
            _id
        }
    } = req.session;
    const {
        title,
        description
    } = req.body;
    const product = await goldProduct.findById(id);
    if (!product) {
        return res.status(404).render("404", {
            pageTitle: "Product not found."
        })
    }
    if (String(_id) !== String(product.owner)) {
        return res.status(403).redirect("/");
    }
    // console.log(title, description );
    return res.redirect("/cataloge/main");
}; // 미완

export const stockMain = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("stock/stockmain", {
        pageTitle: "재고 관리",
        pathname
    });
};
export const stockUpload = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    console.log("안녕!!!!!!!!!!!");

    return res.render("stock/stockupload", {
        pageTitle: "재고 등록",
        pathname
    });
};

export const findStock = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("stock/findstock", {
        pageTitle: "재고 조사",
        pathname
    });
};

export const editStock = (req, res) => {
    console.log(req.session);
    res.redirect("/stock/upload");
};



export const orderMain = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("order/ordermain", {
        pageTitle: "주문 관리",
        pathname
    });
};
export const orderUpload = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("order/orderupload", {
        pageTitle: "주문 등록",
        pathname
    });
};

export const repairMain = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("repair/repairmain", {
        pageTitle: "수리 관리",
        pathname
    });
};
export const repairupload = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("repair/repairupload", {
        pageTitle: "수리 등록",
        pathname
    });
};

export const purchaseMain = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("purchase/purchasemain", {
        pageTitle: "매입 관리",
        pathname
    });
};
export const purchaseUpload = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("purchase/purchaseupload", {
        pageTitle: "매입 등록",
        pathname
    });
};

export const saleMain = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("sale/salemain", {
        pageTitle: "판매 관리",
        pathname
    });
};
export const saleUpload = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("sale/saleupload", {
        pageTitle: "판매 등록",
        pathname
    });
};

export const rentMain = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("rent/rentmain", {
        pageTitle: "대여 관리",
        pathname
    });
};
export const rentUpload = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("rent/rentupload", {
        pageTitle: "대여 등록",
        pathname
    });
};