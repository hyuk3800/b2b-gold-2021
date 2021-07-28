import express from "express";
import { orderMain, orderSave } from "../controllers/savePgController";

const orderRouter = express.Router();

orderRouter.get("/main", orderMain);
orderRouter.get("/save", orderSave);


export default orderRouter;