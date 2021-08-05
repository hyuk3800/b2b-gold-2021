import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true }, //아이디
    password: { type: String, required: true }, //암호
    businesscard: { type: String}, //명함 or 사업자등록증     
    crnumber: { type:String, require: true }, // 사업자등록번호
    businessname: { type:String, require: true }, //상호명
    contact: { type: Number, required: true }, // 연락처
});


const User = mongoose.model('User', userSchema);
export default User;