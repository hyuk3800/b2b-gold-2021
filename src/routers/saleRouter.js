import express from "express";
import { saleMain, saleUpload } from "../controllers/savePgController";
import { protectorMiddleware, clickDeta } from "../middlewares";

const saleRouter = express.Router();

saleRouter.get("/main", protectorMiddleware, saleMain);
saleRouter.get("/upload", protectorMiddleware, clickDeta, saleUpload);

export default saleRouter;