import express from "express";
import { indexhome , getJoin, postJoin, getLogin, postLogin } from "../controllers/userController";
import { chat , stone, client, quote, findstock, accountsreceivable } from "../controllers/noSavePgController";

const rootRouter = express.Router();


rootRouter.get("/", indexhome);
rootRouter.route("/login").get(getLogin).post(postLogin);
rootRouter.route("/join").get(getJoin).post(postJoin);
rootRouter.get("/chat", chat);
rootRouter.get("/stone", stone);
rootRouter.get("/client", client);
rootRouter.get("/quote", quote);
rootRouter.get("/findstock", findstock);
rootRouter.get("/accountsreceivable", accountsreceivable);


export default rootRouter;