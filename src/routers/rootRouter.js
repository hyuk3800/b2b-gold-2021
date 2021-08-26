import express from "express";
import {
    indexhome,
    getJoin,
    postJoin,
    getLogin,
    postLogin
} from "../controllers/userController";
import {
    chat,
    getStone,
    postStone,
    client,
    getQuote,
    postQuote,
    accountsreceivable
} from "../controllers/rootSavePgController";
import {
    publicOnlyMiddleware,
    protectorMiddleware,
    businesscardimgUpload
} from "../middlewares";

const rootRouter = express.Router();


rootRouter.get("/", publicOnlyMiddleware, indexhome);
rootRouter.route("/login").all(publicOnlyMiddleware).get(getLogin).post(postLogin);
rootRouter.route("/join").all(publicOnlyMiddleware).get(getJoin).post(businesscardimgUpload.single("businesscard"), postJoin);
rootRouter.route("/chat").all(protectorMiddleware).get(chat);
rootRouter.route("/stone").all(protectorMiddleware).get(getStone).post(postStone);
rootRouter.get("/client", client);
rootRouter.route("/quote").all(protectorMiddleware).get(getQuote).post(postQuote);
rootRouter.get("/accountsreceivable", accountsreceivable);


export default rootRouter;