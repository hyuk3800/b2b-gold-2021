import express from "express";
import { indexhome , getJoin, postJoin, getLogin, postLogin } from "../controllers/userController";
import { chat , getStone, client, quote, findstock, accountsreceivable } from "../controllers/rootSavePgController";
import { publicOnlyMiddleware, protectorMiddleware, businesscardimgUpload } from "../middlewares";

const rootRouter = express.Router();


rootRouter.get("/",publicOnlyMiddleware, indexhome);
rootRouter.route("/login").all(publicOnlyMiddleware).get(getLogin).post(postLogin);
rootRouter.route("/join").all(publicOnlyMiddleware).get(getJoin).post(businesscardimgUpload.single("businesscard"), postJoin);
rootRouter.route("/chat").all(protectorMiddleware).get(chat);
rootRouter.route("/stone").all(protectorMiddleware).get(getStone);
rootRouter.get("/client", client);
rootRouter.get("/quote", protectorMiddleware, quote);
rootRouter.get("/findstock", findstock);
rootRouter.get("/accountsreceivable", accountsreceivable);


export default rootRouter;