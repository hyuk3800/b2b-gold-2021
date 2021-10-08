import express from "express";
import { getRepairMain, postRepairMain, getRepairUpload, postRepairUpload, deleteRepair } from "../controllers/savePgController";
import { protectorMiddleware, clickDeta } from "../middlewares";

const repairRouter = express.Router();

repairRouter.route("/main").all(protectorMiddleware).get(getRepairMain).post(clickDeta, postRepairMain);
repairRouter.route("/upload").all(protectorMiddleware).get(clickDeta, getRepairUpload).post(postRepairUpload);
repairRouter.get("/delete", deleteRepair);

export default repairRouter;