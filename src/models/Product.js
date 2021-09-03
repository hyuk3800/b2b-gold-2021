import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    fileUrl: { type : String, required: true},// 제품 이미지
    createdAt: {type: Date, require: true, default: Date.now }, // 생성날짜
    click: {type: String, require: true, default: "off" }, // 채크여부
    hashtags:[{ type: String, trim: true, }], // 해쉬태그, 카탈로그 분류
    gender: { type: String, required: true }, // 성별*
    // age: [{ type: String, trim: true, required: true }], // 나이대*
    // part: { type:String, required: true },  //부위*
    // styles: [{ type: String, trim: true, required: true }], // 스타일
    // material:{type: String, require: true }, // 소재*
    open:{ type: String, required: true }, //공개 설정*
    orderOfDisclosure: { type: Number }, //공개순서
    modelNumber: { type:String, trim: true, required: true }, //모델번호*
    title: { type: String, trim: true, require: true }, // 제품명*
    manufacturer: {type:String, trim: true, required: true },//제조사*
    manufacturerNumber: { type:String },//제조번호
    goldWeight: { type:Number }, // 금/은중량
    stoneWeight: { type:Number },//스톤중량
    description: { type: String, trim: true, required: true}, // 설명*
    size: { type: String },// 사이즈
    setCode: { type: String },
    basicWage: { type: Number },//기본공임
    additionWage: { type: Number },//추가공임
    //스톤공임(중)
    //스톤공임(보)
    brandpage:{ type: Number, trim: true },//  공개순서(브랜드페이지)
    meta: { 
        views: {type: Number, default: 0, require: true }, //조회수
        rating: {type: Number, default: 0, require: true },//평가
    },
    owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
});

const goldProduct = mongoose.model("Product", productSchema);
export default goldProduct;