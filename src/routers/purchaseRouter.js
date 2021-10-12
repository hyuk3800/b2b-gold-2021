import express from "express";
import { purchaseMain, getPurchaseUpload, postPurchaseUpload } from "../controllers/savePgController";
import { protectorMiddleware } from "../middlewares";

const purchaseRouter = express.Router();


purchaseRouter.get("/main", protectorMiddleware, purchaseMain);
purchaseRouter.route("/upload").all(protectorMiddleware).get(getPurchaseUpload).post(postPurchaseUpload);

export default purchaseRouter;