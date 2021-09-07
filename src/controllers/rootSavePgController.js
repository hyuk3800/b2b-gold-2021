import User from "../models/User";
import goldQuote from "../models/Quote";
import goldStone from "../models/Stone";
import goldClient from "../models/Client";

export const chat = async (req, res) => {
   const pathname = req._parsedOriginalUrl.pathname;
   //console.log(res.locals, "은");
   return res.render("chat", {
      pageTitle: "채팅",
      pathname
   });
};


export const getStone = async (req, res) => {
   const {
      user: {
         _id
      }
   } = req.session;
   const user = await User.findById(_id).populate("stones");
   // console.log("세션 ID는",_id, "유저는",user);
   //console.log(user.stones);
   if (!user) {
      return res.status(404).render("404");
   }
   if (String(_id) !== String(user._id)) {
      return res.status(403).redirect("/");
   }
   const pathname = req._parsedOriginalUrl.pathname;
   return res.render("stone", {
      pageTitle: "스톤관리",
      user,
      pathname
   })
};
export const postStone = async (req, res) => {
   const {
      user: {
         _id
      },
   } = req.session;
   const {
      name,
      weight,
      purchasePrice,
      sellingPrice,
      description
   } = req.body;
   try {
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
   } catch {
      return res.status(400).render("stone", {
         pageTitle: "스톤관리",
         user
      });
   }
   // return res.redirect("/stone", {pageTitle: "스톤관리",})
};


export const getClient = async (req, res) => {
   const { user: {_id } } = req.session;
   console.log("유저 id =", _id);
   const user = await User.findById(_id).populate("clients");
   if (!user) {
      return res.status(404).render("404");
   }
   if (String(_id) !== String(user._id)) {
      return res.status(403).redirect("/");
   }
   // console.log(user.clients.findIndex((i) => i._id == "61288dea4ab0733648f0376f"));
   const pathname = req._parsedOriginalUrl.pathname;  
   const {
      keyword
   } = req.query;
   let clients = [];
   console.log("키워드", keyword);
   if (keyword) {
      clients = await goldClient.find({
         $and: [{
               $or: [
                  {
                     "clientName": { $regex: new RegExp(`${keyword}`, "i") } //상호명
                  },
                  {
                     "buisnessman.buisnessName": { $regex: new RegExp(`${keyword}`, "i") }// 사업체명
                  },
                  {
                     "buisnessman.representative": { $regex: new RegExp(`${keyword}`, "i") } //대표자명
                  },
                  {
                     "buisnessman.representativeNumber": { $regex: new RegExp(`${keyword}`, "i") }//대표자 연락처
                  },
                  {
                     "contact.phone": { $regex: new RegExp(`${keyword}`, "i") } //팩스
                  },
                  {
                     "contact.fax": { $regex: new RegExp(`${keyword}`, "i") } //팩스
                  },
                  {
                     "commonName": { $regex: new RegExp(`${keyword}`, "i") } //통상
                  },
                  {
                     "description": { $regex: new RegExp(`${keyword}`, "i") } //비고
                  },
                  {
                     "option.vat": { $regex: new RegExp(`${keyword}`, "i") } // vat
                  },
                  {
                     "option.transactionType": { $regex: new RegExp(`${keyword}`, "i") } // 거래형태
                  },
                  {
                     "option.harry": { $regex: new RegExp(`${keyword}`, "i") } // 해리
                  },
               ]
            },
            {
               owner: _id
            }
         ]
      });
      console.log("이거말이야", clients);
      return res.render("client", {
         pageTitle: "거래처",
         clients,
         pathname
      });
   }
   return res.render("client", {
      pageTitle: "거래처",
      user,
      pathname
   });
};

export const postClient = async (req, res) => {
   const {
      user: {
         _id
      },
   } = req.session;
   const {
      clientType,
      clientName,
      buisnessName,
      buisnessNumber,
      representative,
      representativeNumber,
      postNumber,
      addressLine1,
      addressLine2,
      addressLine3,
      harry,
      transactionType,
      vat,
      phone,
      fax,
      managerName,
      managerNumber,
      commonName,
      description,
   } = req.body;
   //  console.log(req.body);
   try {
      const newGoldClient = await goldClient.create({
         owner: _id,
         clientType,
         clientName,
         buisnessman: {
            buisnessName,
            buisnessNumber,
            representative,
            representativeNumber,
         },
         address: {
            postNumber,
            addressLine1,
            addressLine2,
            addressLine3,
         },
         option: {
            harry,
            transactionType,
            vat,
         },
         contact: {
            phone,
            fax,
         },
         manager: {
            managerName,
            managerNumber,
         },
         commonName,
         description,
      });
      const user = await User.findById(_id);
      user.clients.push(newGoldClient._id);
      user.save();
      //console.log(user);
      return res.redirect("/client");
   } catch {
      return res.status(400).render("client", {
         pageTitle: "거래처",
         user
      });
   }
   return res.redirect("/client");
};


export const getQuote = async (req, res) => {
   const {
      user: {
         _id
      }
   } = req.session;
   const user = await User.findById(_id).populate("quotes");
   if (!user) {
      return res.status(404).render("404");
   }
   if (String(_id) !== String(user._id)) {
      return res.status(403).redirect("/");
   }
   const pathname = req._parsedOriginalUrl.pathname;
   return res.render("quote", {
      pageTitle: "시세 관리",
      user,
      pathname
   });
};
export const postQuote = async (req, res) => {
   const {
      user: {
         _id
      },
   } = req.session;
   const {
      frontquote,
      backquote
   } = req.body;
   //console.log(frontquote, backquote);
   try {
      const newGoldQuote = await goldQuote.create({
         frontquote,
         backquote,
         owner: _id,
      });
      const user = await User.findById(_id);
      user.quotes.push(newGoldQuote._id);
      user.save();
      return res.redirect("/quote");
   } catch {
      return res.status(400).render("quote", {
         pageTitle: "시세 관리",
         user
      });
   }
   // return res.render("quote", {pageTitle: "시세 관리"});
};


export const accountsreceivable = (req, res) => {
   const pathname = req._parsedOriginalUrl.pathname;
   return res.render("accountsReceivable", {
      pageTitle: "거래처 미수 현황",
      pathname
   });
};