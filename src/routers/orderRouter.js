import express from "express";
import { orderMain, orderUpload } from "../controllers/savePgController";
import { protectorMiddleware } from "../middlewares";

const orderRouter = express.Router();

orderRouter.get("/main", protectorMiddleware, orderMain);
orderRouter.get("/upload", protectorMiddleware, orderUpload);


export default orderRouter;