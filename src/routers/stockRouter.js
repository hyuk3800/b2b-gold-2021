import express from "express";
import { stockMain, stockSave } from "../controllers/savePgController";
import { protectorMiddleware } from "../middlewares";

const stockRouter = express.Router();

stockRouter.get("/main",protectorMiddleware, stockMain);
stockRouter.get("/save",protectorMiddleware, stockSave);

export default stockRouter;