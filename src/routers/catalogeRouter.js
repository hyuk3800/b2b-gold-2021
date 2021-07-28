import express from "express";
import { catalogeMain , catalogeSave } from "../controllers/savePgController";

const catalogeRouter = express.Router();



catalogeRouter.get("/main", catalogeMain);
catalogeRouter.get("/save", catalogeSave);

export default catalogeRouter;