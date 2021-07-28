import express from "express";
import { rentMain, rentSave } from "../controllers/savePgController";

const rentRouter = express.Router();

rentRouter.get("/main", rentMain);
rentRouter.get("/save", rentSave);

export default rentRouter;