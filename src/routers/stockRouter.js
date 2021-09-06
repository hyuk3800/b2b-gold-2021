import express from "express";
import { stockMain, stockUpload, findStock, editStock } from "../controllers/savePgController";
import { protectorMiddleware, clickDeta } from "../middlewares";

const stockRouter = express.Router();

stockRouter.get("/main",protectorMiddleware, stockMain);
stockRouter.get("/upload",protectorMiddleware, clickDeta, stockUpload);
stockRouter.get("/find",protectorMiddleware, findStock);
stockRouter.get("/editstock",protectorMiddleware, editStock);

export default stockRouter;