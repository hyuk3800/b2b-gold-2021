import mongoose from "mongoose";

const quoteSchema = new mongoose.Schema({
    createdAt: {type: Date, require: true, default: Date.now }, // 생성날짜\
    clickThis: {type: Boolean, require: true, default: false }, // 채크여부
    frontquote: { type:Number, required: true }, // 앞시세
    backquote: { type:Number, required: true }, //뒷시세
    owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
});

const goldQuote = mongoose.model("Quote", quoteSchema);
export default goldQuote;