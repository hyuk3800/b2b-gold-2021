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
    deleteStone,
    getClient,
    postClient,
    deleteClient,
    getQuote,
    postQuote,
    deleteQuote,
    accountsreceivable
} from "../controllers/rootSavePgController";
import {
    publicOnlyMiddleware,
    protectorMiddleware,
    businesscardimgUpload,
    clickDeta
} from "../middlewares";

const rootRouter = express.Router();


rootRouter.get("/", publicOnlyMiddleware, indexhome);
rootRouter.route("/login").all(publicOnlyMiddleware).get(getLogin).post(postLogin);
rootRouter.route("/join").all(publicOnlyMiddleware).get(getJoin).post(businesscardimgUpload.single("businesscard"), postJoin);
rootRouter.route("/chat").all(protectorMiddleware).get(chat);
rootRouter.route("/stone").all(protectorMiddleware).get(getStone).post(clickDeta, postStone);
rootRouter.get("/stone/delete", protectorMiddleware, clickDeta, deleteStone);
rootRouter.route("/client").all(protectorMiddleware).get(getClient).post(clickDeta, postClient);
rootRouter.get("/client/delete", protectorMiddleware, clickDeta, deleteClient);
rootRouter.route("/quote").all(protectorMiddleware).get(getQuote).post(clickDeta, postQuote);
rootRouter.get("/quote/delete", protectorMiddleware, clickDeta, deleteQuote);
rootRouter.get("/accountsreceivable", accountsreceivable);


export default rootRouter;