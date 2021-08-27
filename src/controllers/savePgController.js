import goldProduct from "../models/Product";
import User from "../models/User";


export const catalogeMain = async (req, res) =>{
    const {user:{_id}} = req.session;
    const user = await User.findById(_id).populate("products");
    // console.log("세션 ID는",_id, "유저는",user._id)
    if(!user){
        return res.status(404).render("404");
    }
    if(String(_id) !== String(user._id)){
        return res.status(403).redirect("/");
    }
    // const products = await goldProduct.find({});
    
    // console.log(products.fileUrl);
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("cataloge/cataloge", { pageTitle:"카탈로그", user, pathname});
};


export const getUpload = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("cataloge/catalogeUpload", { pageTitle:"카탈로그 등록", pathname })
};
export const postUpload = async (req, res) => {
    const { user:{_id}, } = req.session;
    const { path:fileUrl } = req.file;
    const { title, description, gender, open, modelNumber, manufacturer } = req.body;
    //console.log(req.body);
    try{
        const newGoldProduct = await goldProduct.create({
            title,
            fileUrl,
            description,       
            owner: _id,
            gender,
            open,
            modelNumber,
            manufacturer,
        });
        const user = await User.findById(_id);
        user.products.push(newGoldProduct._id);
        user.save();
        return res.redirect("/cataloge/main");
    }catch(error){
        return res.status(400).render("cataloge/catalogeUpload", { pageTitle:"카탈로그 등록", errorMessage: error._message, });
    }
};

// 해당제품 들어가서 삭제
export const deleteCataloge = async (req, res) => {
    const { id } = req.params;
    const {user:{_id}} = req.session;
    const product = await goldProduct.findById(id);
    const user = await User.findById(_id);
    if(!product){
        return res.status(404).render("404", {pageTitle:"Product not found."} )
    }
    if(String(_id) !== String(product.owner)){
        return res.status(403).redirect("/");
    }
    await goldProduct.findByIdAndDelete(id);
    user.products.splice(user.products.indexOf(id),1);
    user.save();
    return res.redirect("/cataloge/main");
};

export const getEdit = async (req, res) => {
    const { id } = req.params;
    const {user:{_id}} = req.session;
    const product = await goldProduct.findById(id);
    if(!product){
        return res.status(404).render("404", {pageTitle:"Product not found."} )
    }
    if(String(_id) !== String(product.owner)){
        return res.status(403).redirect("/");
    }
    return res.render("cataloge/catalogeEdit",{ pageTitle:"카탈로그 수정", product});
};
export const postEdit = async (req, res) => {
    const { id } = req.params;
    const {user:{_id}} = req.session;
    const { title, description } = req.body;
    const product = await goldProduct.findById(id);
    if(!product){
        return res.status(404).render("404", {pageTitle:"Product not found."} )
    }
    if(String(_id) !== String(product.owner)){
        return res.status(403).redirect("/");
    }
    // console.log(title, description );
    return res.redirect("/cataloge/main");
};

export const stockMain = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("stock/stockmain", {pageTitle:"재고 관리", pathname});
};
export const stockUpload = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("stock/stockupload",{pageTitle:"재고 등록", pathname});
};

export const findStock = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("stock/findstock",{pageTitle:"재고 조사", pathname});
};

export const orderMain = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("order/ordermain",{pageTitle:"주문 관리", pathname});
};
export const orderUpload = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("order/orderupload",{pageTitle:"주문 등록", pathname});
};

export const repairMain = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("repair/repairmain", {pageTitle:"수리 관리", pathname});
};
export const repairupload = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("repair/repairupload", {pageTitle:"수리 등록", pathname});
};

export const purchaseMain = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("purchase/purchasemain",{pageTitle: "매입 관리", pathname});
};
export const purchaseUpload = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("purchase/purchaseupload",{pageTitle: "매입 등록", pathname});
};

export const saleMain = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("sale/salemain", {pageTitle: "판매 관리", pathname});
};
export const saleUpload = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("sale/saleupload", {pageTitle: "판매 등록", pathname});
};

export const rentMain = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("rent/rentmain",{ pageTitle:"대여 관리", pathname});
};
export const rentUpload = (req, res) => {
    const pathname = req._parsedOriginalUrl.pathname;
    return res.render("rent/rentupload",{ pageTitle:"대여 등록", pathname});
};

