import express from "express";
import { registerView } from "../controllers/rootSavePgController";

const apiRouter = express.Router();

apiRouter.post("/products/:id/view", registerView);

export default apiRouter;