import mongoose from "mongoose";

const stoneSchema = new mongoose.Schema({
    createdAt: {type: Date, require: true, default: Date.now }, // 생성날짜
    clickThis: {type: Boolean, require: true, default: false }, // 채크여부
    // idNumder: { type:String, required: true }, // 번호
    name: { type:String, required: true }, //스톤명*
    weight: { type:String, required: true },//표준중량*
    purchasePrice: { type:String, required: true },//매입단가*
    sellingPrice: { type:String, required: true },//판매단가*
    description: { type: String, trim: true},//비고
    owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
});

const goldStone = mongoose.model("Stone", stoneSchema);
export default goldStone;