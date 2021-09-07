import mongoose from "mongoose";

const clientSchema = new mongoose.Schema({
    createdAt: {type: Date, require: true, default: Date.now }, // 생성날짜
    clickThis: {type: Boolean, require: true, default: false }, // 채크여부
    owner: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    clientType: { type : String, required: true},// 거래처 구분
    clientName: { type : String, required: true}, // 상호명
    buisnessman: {
        buisnessName: { type: String },// 사업체명
        buisnessNumber: { type: String },//사업자 번호
        representative: { type: String }, //대표자명
        representativeNumber: { type: String },//대표자 연락처
    }, 
    address:{
        postNumber: { type: String }, // 우편번호
        addressLine1: { type: String }, //도로명주소
        addressLine2: { type: String }, //지번주소
        addressLine3: { type: String }, //상세주소
        addressLine4: { type: String }, // 참고목록
    }, //주소
    option: {
        harry:{ type: String }, //해리
        transactionType:{ type: String }, //거래형태
        vat:{ type: String }, //부가세
    },//옵션
    contact: {
        phone: {type: String}, //전화번호
        fax: {type: String}, // 팩스번호
    },//연락처
    manager:{       
        managerName: {type: String}, //담당자 이름
        managerNumber: {type: String}, // 담당자 연락처
    }, //담장자
    commonName: { type : String, }, //통상
    description: { type: String, }, // 비고
});

const goldClient = mongoose.model("Client", clientSchema);
export default goldClient;