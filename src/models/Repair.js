import mongoose from "mongoose";


const repairSchema = new mongoose.Schema({
    fileUrl: { type : String, required: true},// 제품 이미지
    createdAt: {type: Date, require: true, default: Date.now }, // 생성날짜\
    // clickThis: {type: Boolean, require: true, default: false }, // 채크여부
    owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },// 오너
    products: { type: mongoose.Schema.Types.ObjectId, ref: "Product" }, // 등록한 제품 id
    stocks: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Stock" }
       ],

    allNumber: { type: String, required: true, },// 수리번호


    gubun: { type: String, require: true, default: "접수" }, // 구분

    registrationdate: { type: String },// 등록일 (날짜 변경 가능)
    releasedate: {  type: String },// 출고일(변경 가능)
    account: { type: String },//거래처
    modelNumber: { type:String },//모델번호(모델번호가 없으면 등록하러 가자고함)
    manufacturer:{ type: String },//제조사
    material: { type: String },//재질
    color: { type: String },//색상
    quantity: { type: Number },//수량
    basicWage: { type: Number },//판매단가(기본)
    additionWage: { type: Number },//판매단가(추가)
    stoneWage1: { type: Number },//판매단가(중심)
    stoneWage2: { type: Number },//판매단가(보조)
    stone: {
        stoneName: { type: String },//스톤(메인)
        stoneQuantity: { type: Number },//개당알수(메인)
    },
    stone2: [{
        stoneName2: { type: String },//스톤(보조)
        stoneQuantity2: { type: Number },//개당알수(보조)
    }],
    stoneWeight3: { type: Number },//개당알중량
    size: { type: String },//사이즈
    description: { type: String },//비고
});



const goldRepair = mongoose.model("Repair", repairSchema);
export default goldRepair;

// 