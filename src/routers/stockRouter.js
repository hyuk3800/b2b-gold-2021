import express from "express";
import { stockMain, stockUpload, findStock } from "../controllers/savePgController";
import { protectorMiddleware } from "../middlewares";

const stockRouter = express.Router();

stockRouter.get("/main",protectorMiddleware, stockMain);
stockRouter.get("/upload",protectorMiddleware, stockUpload);
stockRouter.get("/find",protectorMiddleware, findStock);

export default stockRouter;