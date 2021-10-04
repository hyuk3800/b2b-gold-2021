import express from "express";
import { orderMain, getOrderUpload, postOrderUpload } from "../controllers/savePgController";
import { protectorMiddleware, clickDeta } from "../middlewares";

const orderRouter = express.Router();

orderRouter.get("/main", protectorMiddleware, orderMain);
orderRouter.route("/upload").all(protectorMiddleware).get(clickDeta, getOrderUpload).post(postOrderUpload);


export default orderRouter;