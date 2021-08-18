import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    fileUrl: { type : String, required: true},// 제품 이미지
    title: { type: String, trim: true, require: true }, // 제품명
    description: { type: String, trim: true }, // 설명
    createdAt: {type: Date, require: true, default: Date.now }, // 생성날짜
    hashtags:[{ type: String, trim: true, }], // 해쉬태그, 카탈로그 분류

    owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    gender: { type: String },
    
    meta: { 
        views: {type: Number, default: 0, require: true }, //조회수
        rating: {type: Number, default: 0, require: true },//평가
    },
});

const goldProduct = mongoose.model("Product", productSchema);
export default goldProduct;