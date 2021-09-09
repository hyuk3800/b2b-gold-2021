import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    fileUrl: { type : String, required: true},// 제품 이미지
    createdAt: {type: Date, require: true, default: Date.now }, // 생성날짜
    click: {type: String, require: true, default: "off" }, // 채크여부
    // hashtags:[{ type: String, trim: true, }], // 해쉬태그, 카탈로그 분류
    
    // rea.body 시작부분
    gender: { type: String, required: true }, // 성별*
    // age: [{ type: String, trim: true, required: true }], // 나이대*
    // part: { type:String, required: true },  //부위*
    // styles: [{ type: String, trim: true, required: true }], // 스타일
    // material:{type: String, require: true }, // 소재*
    // weight:{type: String }, // 중량
    open:{ type: String, required: true }, //공개 설정*
    brandpage:{ type: String },//  공개순서(브랜드페이지)
    modelNumber: { type:String, trim: true, required: true }, //모델번호*
    title: { type: String, trim: true, require: true }, // 제품명*
    manufacturer: {type:String, trim: true, required: true },//제조사*
    manufacturerNumber: { type:String },//제조번호
    goldWeight: { type: Number }, // 금/은중량
    stoneWeight: { type: Number },//스톤중량
    size: { type: String },// 사이즈
    description: { type: String, trim: true, required: true}, // 설명*
    setCode: { type: String },// 세트코드
    basicWage: { type: Number },//기본공임
    additionWage: { type: Number },//추가공임
    stoneWage1: { type: Number },//스톤공임(중)
    stoneWage2: { type: Number },//스톤공임(보)
    purchaseWage:{ type: Number },//구매공임
    eggPurchasePrice: { type: Number },//알구매단가
    stone: { 
            stoneName: { type: String },// 스톤명
            stoneQuantity: { type: Number }, // 수량
            stoneDescription: { type: String },// 설명
            stoneWeight2: { type: Number },//스톤 중량(개당)
            stonePurchasePrice: { type: Number },// 매입단가(개당)
            stoneSellingPrice: { type: Number },// 판매단가(개당)
        },//스톤(메인)
    stone2: [{ 
            stoneName2: { type: String },// 스톤명
            stoneQuantity2: { type: Number }, // 수량
            stoneDescription2: { type: String },// 설명
            stoneWeight22: { type: Number },//스톤 중량(개당)
            stonePurchasePrice2: { type: Number },// 매입단가(개당)
            stoneSellingPrice2: { type: Number },// 판매단가(개당)
        }],//스톤(서브)


    meta: { 
        views: {type: Number, default: 0, require: true }, //조회수
        rating: {type: Number, default: 0, require: true },//평가
    },
    owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
});

const goldProduct = mongoose.model("Product", productSchema);
export default goldProduct;