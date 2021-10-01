import express from "express";
import { getStockMain, getStockUpload, postStockMain, deleteStock, postStockUpload, findStock, editStock } from "../controllers/savePgController";
import { protectorMiddleware, clickDeta } from "../middlewares";

const stockRouter = express.Router();

stockRouter.route("/main").all(protectorMiddleware).get(getStockMain).post(clickDeta, postStockMain);
stockRouter.route("/upload").all(protectorMiddleware).get(clickDeta, getStockUpload).post(postStockUpload);
stockRouter.get("/delete", protectorMiddleware, deleteStock)
stockRouter.get("/find",protectorMiddleware, findStock);
stockRouter.get("/editstock",protectorMiddleware, editStock);

export default stockRouter;