import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    hachtags: [{ type: String }], //카탈로그 분류 
    title: String, // 제품명
    description: { type: String },
    createdAt: Date,
    meta: {
        views: Number,
        rating: Number,
    },
});

const goldProduct = mongoose.model("Product", productSchema);
export default goldProduct;