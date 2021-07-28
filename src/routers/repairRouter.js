import express from "express";
import { repairMain, repairSave } from "../controllers/savePgController";


const repairRouter = express.Router();

repairRouter.get("/main", repairMain);
repairRouter.get("/save", repairSave);

export default repairRouter;