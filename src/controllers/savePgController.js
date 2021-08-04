import goldProduct from "../models/Product";


export const catalogeMain = async (req, res) =>{
    const products = await goldProduct.find({});
    return res.render("cataloge", { pageTitle:"카탈로그", products});
};


export const getUpload = (req, res) => {
    return res.render("catalogeUpload", { pageTitle:"카탈로그 등록" })
};
export const postUpload = (req, res) => {
    const { title } = req.body;
    
    console.log(title,status);
    return res.redirect("/cataloge/main");
};


export const getEdit = (req, res) => {
    const { id } = req.params;

    return res.render("catalogeedit",{ pageTitle:"카탈로그 수정" ,});
};
export const postEdit = (req, res) => {
    const { id } = req.params;
    const { title } = req.body;

    console.log(title);
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

