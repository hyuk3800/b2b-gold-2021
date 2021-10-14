import mongoose from "mongoose";

const purchaseSchema = new mongoose.Schema({
    createdAt: {type: Date, require: true, default: Date.now }, // 생성날짜\
    owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },// 오너

    purchNumber: { type: String }, //거래번호

    registrationDate: { type: String }, //등록일 (변경가능)\
    client: { type: String }, //매입처
    purBox: { type: String }, //구분
    material: { type: String }, //재질
    content: { type: Number }, //함량
    netWeight: {  type: Number }, //실중량
    harry: {  type: Number }, //해리
    netGoldConversion: {  type: Number }, //순금환산
    quantity: {  type: Number }, //수량
    unitPrice: {  type: Number }, //단가
    supplyPrice: {  type: Number }, //공급가
    tariff: {  type: String }, //세율
    taxAmount: {  type: Number }, //세액
    total: {  type: Number }, //합계금액
    description: {  type: String }, //비고
});

const goldPurchase = mongoose.model("Purchase", purchaseSchema);
export default goldPurchase;