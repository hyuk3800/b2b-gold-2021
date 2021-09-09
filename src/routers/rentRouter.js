import express from "express";
import { rentMain, rentUpload } from "../controllers/savePgController";
import { protectorMiddleware, clickDeta } from "../middlewares";

const rentRouter = express.Router();

rentRouter.get("/main",protectorMiddleware, rentMain);
rentRouter.get("/upload", protectorMiddleware, clickDeta, rentUpload);

export default rentRouter;