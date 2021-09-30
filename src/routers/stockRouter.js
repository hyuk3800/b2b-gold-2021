import express from "express";
import { getStockMain, getStockUpload, postStockUpload, findStock, editStock } from "../controllers/savePgController";
import { protectorMiddleware, clickDeta } from "../middlewares";

const stockRouter = express.Router();

stockRouter.get("/main",protectorMiddleware, getStockMain);
stockRouter.route("/upload").all(protectorMiddleware).get(clickDeta, getStockUpload).post(postStockUpload);
stockRouter.get("/find",protectorMiddleware, findStock);
stockRouter.get("/editstock",protectorMiddleware, editStock);

export default stockRouter;