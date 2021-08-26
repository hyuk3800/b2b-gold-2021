import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true }, //아이디
    password: { type: String, required: true }, //암호
    businesscard: { type: String}, //명함 or 사업자등록증     
    crnumber: { type:String, require: true, maxLength: 10, }, // 사업자등록번호
    businessname: { type:String, require: true }, //상호명
    contact: { type: Number, required: true }, // 연락처

    products: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Product" }
       ], // 등록한 제품 id
    stones: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Stone" }
       ], // 등록한 스톤 id
    quotes: [
        { type: mongoose.Schema.Types.ObjectId, ref: "Quote" }
       ], // 등록한 시세 id
});


userSchema.pre('save', async function(){
    if(this.isModified("password")){
    this.password = await bcrypt.hash(this.password, 5);
    }
});

const User = mongoose.model('User', userSchema);
export default User;