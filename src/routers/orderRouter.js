import express from "express";
import { getOrderMain, postOrderMain, getOrderUpload, postOrderUpload } from "../controllers/savePgController";
import { protectorMiddleware, clickDeta } from "../middlewares";

const orderRouter = express.Router();

orderRouter.route("/main").all(protectorMiddleware).get(getOrderMain).post(clickDeta, postOrderMain);
orderRouter.route("/upload").all(protectorMiddleware).get(clickDeta, getOrderUpload).post(postOrderUpload);


export default orderRouter;