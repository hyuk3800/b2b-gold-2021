import express from "express";
import { purchaseMain, purchaseUpload } from "../controllers/savePgController";
import { protectorMiddleware } from "../middlewares";

const purchaseRouter = express.Router();


purchaseRouter.get("/main", protectorMiddleware, purchaseMain);
purchaseRouter.get("/upload", protectorMiddleware, purchaseUpload);

export default purchaseRouter;