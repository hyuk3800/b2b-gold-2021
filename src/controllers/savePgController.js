import goldProduct from "../models/Product";
import User from "../models/User";


export const catalogeMain = async (req, res) =>{
    const {user:{_id}} = req.session;
    const user = await User.findById(_id).populate("products");
    console.log("세션 ID는",_id, "유저는",user._id)
    if(!user){
        return res.status(404).render("404");
    }
    if(String(_id) !== String(user._id)){
        return res.status(403).redirect("/");
    }
    // const products = await goldProduct.find({});
    
    // console.log(products.fileUrl);
    return res.render("cataloge/cataloge", { pageTitle:"카탈로그", user});
};


export const getUpload = (req, res) => {
    return res.render("cataloge/catalogeUpload", { pageTitle:"카탈로그 등록" })
};
export const postUpload = async (req, res) => {
    const { user:{_id}, } = req.session;
    const { path:fileUrl } = req.file;
    const { title, description, gender } = req.body;
    try{
        const newGoldProduct = await goldProduct.create({
            title,
            fileUrl,
            description,       
            owner: _id,
            gender,
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
    console.log(title, description );
    return res.redirect("/cataloge/main");
};

export const stockMain = (req, res) => res.send("StockMain Page");
export const stockSave = (req, res) => res.send("StockSave Page");

export const orderMain = (req, res) => res.send("OrderMain Page");
export const orderSave = (req, res) => res.send("OrderSave Page");

export const repairMain = (req, res) => res.send("RepairMain Page");
export const repairSave = (req, res) => res.send("RepairSave Page");

export const purchaseMain = (req, res) => res.send("PurchaseMain Page");
export const purchaseSave = (req, res) => res.send("PurchaseSave Page");

export const saleMain = (req, res) => res.send("SaleMain Page");
export const saleSave = (req, res) => res.send("SaleSave Page");

export const rentMain = (req, res) => res.send("RentMain Page");
export const rentSave = (req, res) => res.send("RentSave Page");

