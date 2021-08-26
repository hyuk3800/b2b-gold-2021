import goldQuote from "../models/Quote";
import goldStone from "../models/Stone";
import User from "../models/User";

export const chat = async (req, res) => {

   console.log(res.locals, "은");
   return res.render("chat",{pageTitle: "채팅",});
};


export const getStone = async (req, res) => {
   const {user:{_id}} = req.session;
   const user = await User.findById(_id).populate("stones");
   // console.log("세션 ID는",_id, "유저는",user);
   if(!user){
      return res.status(404).render("404");
   }
   if(String(_id) !== String(user._id)){
      return res.status(403).redirect("/");
   }
   return res.render("stone", {pageTitle: "스톤관리", user})
};
export const postStone = (req, res) => {
   const { user:{_id}, } = req.session;
   const { name, weight, purchasePrice, sellingPrice, description } = req.body;
   try{
      const newGoldStone = await goldStone.create({
         name,
         weight,
         purchasePrice,
         sellingPrice,
         description,
         owner: _id,
      });
      const user = await User.findById(_id);
      user.stones.push(newGoldStone._id);
      user.save();
      return res.redirect("/stone");
   }catch{
      return res.status(400).render("stone", {pageTitle: "스톤관리", user});
   }
   // return res.redirect("/stone", {pageTitle: "스톤관리",})
};


export const client = (req, res) => {
      return res.render("client",{pageTitle: "거래처"});
};


export const getQuote = async (req, res) => {
   const {user:{_id}} = req.session;
   const user = await User.findById(_id).populate("quotes");
   if(!user){
      return res.status(404).render("404");
   }
   if(String(_id) !== String(user._id)){
      return res.status(403).redirect("/");
   }
   return res.render("quote", {pageTitle: "시세 관리", user});
};
export const postQuote = async (req, res) => {
   const { user:{_id}, } = req.session;
   const { frontquote, backquote } = req.body;
   //console.log(frontquote, backquote);
   try{
      const newGoldQuote = await goldQuote.create({
         frontquote,
         backquote,
         owner: _id,
      });
      const user = await User.findById(_id);
      user.quotes.push(newGoldQuote._id);
      user.save();
      return res.redirect("/quote");
   }catch{
      return res.status(400).render("quote", {pageTitle: "시세 관리", user});
   }
   // return res.render("quote", {pageTitle: "시세 관리"});
};


export const accountsreceivable = (req, res) => {
   return res.render("accountsReceivable",{ pageTitle: "거래처 미수 현황"});
};
