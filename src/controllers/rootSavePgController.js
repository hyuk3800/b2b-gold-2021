import User from "../models/User";

export const chat = async (req, res) => {

   console.log(res.locals, "은");
   return res.render("chat",{pageTitle: "채팅",});
};
export const getStone = (req, res) => {
   return res.render("stone", {pageTitle: "스톤관리",})
};
export const client = (req, res) => {
      return res.render("client",{pageTitle: "거래처"});
};
export const quote = (req, res) => {

   return res.render("quote", {pageTitle: "시세 관리"});
};
export const findstock = (req, res) => res.send("Findstock page");
export const accountsreceivable = (req, res) => res.send("AccountsReceivable page");
