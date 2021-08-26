import express from "express";
import { saleMain, saleUpload } from "../controllers/savePgController";
import { protectorMiddleware } from "../middlewares";

const saleRouter = express.Router();

saleRouter.get("/main", protectorMiddleware, saleMain);
saleRouter.get("/upload", protectorMiddleware, saleUpload);

export default saleRouter;