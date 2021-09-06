import express from "express";
import { orderMain, orderUpload } from "../controllers/savePgController";
import { protectorMiddleware, clickDeta } from "../middlewares";

const orderRouter = express.Router();

orderRouter.get("/main", protectorMiddleware, orderMain);
orderRouter.get("/upload", protectorMiddleware, clickDeta, orderUpload);


export default orderRouter;