import express from "express";
import { repairMain, repairupload } from "../controllers/savePgController";
import { protectorMiddleware, clickDeta } from "../middlewares";

const repairRouter = express.Router();

repairRouter.get("/main", protectorMiddleware, repairMain);
repairRouter.get("/upload", protectorMiddleware, clickDeta, repairupload);

export default repairRouter;