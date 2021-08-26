import express from "express";
import { rentMain, rentUpload } from "../controllers/savePgController";

const rentRouter = express.Router();

rentRouter.get("/main", rentMain);
rentRouter.get("/upload", rentUpload);

export default rentRouter;