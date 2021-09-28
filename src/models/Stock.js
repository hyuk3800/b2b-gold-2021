import mongoose from "mongoose";

const stockSchema = new mongoose.Schema({
    createdAt: {type: Date, require: true, default: Date.now }, // 생성날짜\
    clickThis: {type: Boolean, require: true, default: false }, // 채크여부
    owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },// 오너
    products: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, // 등록한 제품 id
    
    registrationdate: { type: String },// 등록일 (날짜 변경 가능)
    orderNumber: { type: String },//주문번호
    modelNumber: { type:String },//모델번호(모델번호가 없으면 등록하러 가자고함)
    manufacturer:{ type: String },//제조사
    material: { type: String },//재질
    color: { type: String },//색상
    quantity: { type: Number },//수량
    basicWage: { type: Number },//판매단가(기본)
    additionWage: { type: Number },//판매단가(추가)
    stoneWage1: { type: Number },//판매단가(중심)
    stoneWage2: { type: Number },//판매단가(보조)
    stoneWeight3: { type: Number },//개당알중량
    goldWeight: { type: Number }, //금중량
    stoneWeight: { type: Number },//알중량
    harry: { type: Number },//매입해리
    stoneQuantity: { type: Number },//개당알수(메인)
    stoneQuantity2: { type: Number },//개당알수(보조)
    unitPrice: { type: Boolean }, //단가상품
    stoneName: { type: String },//스톤(메인)
    stoneName2: { type: String },//스톤(보조)
    size: { type: String },//사이즈
    description: { type: String },//비고
    purchaseWage: { type: Number },//매입단가(기본)
    eggPurchasePrice: { type: Number }//매입단가(스톤)
});

const goldStock = mongoose.model("Stock", stockSchema);
export default goldStock;

////이거랑 나머지들은 별계이다!