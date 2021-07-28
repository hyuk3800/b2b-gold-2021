import express from "express";
import { stockMain, stockSave } from "../controllers/savePgController";


const stockRouter = express.Router();

stockRouter.get("/main", stockMain);
stockRouter.get("/save", stockSave);

export default stockRouter;