import express from "express";
import { purchaseMain, purchaseSave } from "../controllers/savePgController";

const purchaseRouter = express.Router();


purchaseRouter.get("/main", purchaseMain);
purchaseRouter.get("/save", purchaseSave);

export default purchaseRouter;