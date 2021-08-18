import express from "express";
import { indexhome , getJoin, postJoin, getLogin, postLogin } from "../controllers/userController";
import { chat , stone, client, quote, findstock, accountsreceivable } from "../controllers/noSavePgController";
import { publicOnlyMiddleware, businesscardimgUpload } from "../middlewares";

const rootRouter = express.Router();


rootRouter.get("/",publicOnlyMiddleware, indexhome);
rootRouter.route("/login").all(publicOnlyMiddleware).get(getLogin).post(postLogin);
rootRouter.route("/join").all(publicOnlyMiddleware).get(getJoin).post(businesscardimgUpload.single("businesscard"), postJoin);
rootRouter.get("/chat", chat);
rootRouter.get("/stone", stone);
rootRouter.get("/client", client);
rootRouter.get("/quote", quote);
rootRouter.get("/findstock", findstock);
rootRouter.get("/accountsreceivable", accountsreceivable);


export default rootRouter;