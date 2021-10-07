import express from "express";
import { getRepairMain, postRepairMain, getRepairUpload, postRepairUpload } from "../controllers/savePgController";
import { protectorMiddleware, clickDeta } from "../middlewares";

const repairRouter = express.Router();

repairRouter.route("/main").all(protectorMiddleware).get(getRepairMain).post(postRepairMain);
repairRouter.route("/upload").all(protectorMiddleware).get(clickDeta, getRepairUpload).post(postRepairUpload);

export default repairRouter;