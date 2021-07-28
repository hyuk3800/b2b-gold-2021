import express from "express";
import { saleMain, saleSave } from "../controllers/savePgController";

const saleRouter = express.Router();

saleRouter.get("/main", saleMain);
saleRouter.get("/save", saleSave);

export default saleRouter;