import express from "express";
import { catalogeMain , getUpload, postUpload, getEdit, postEdit } from "../controllers/savePgController";

const catalogeRouter = express.Router();



catalogeRouter.get("/main", catalogeMain);
catalogeRouter.route("/upload").get(getUpload).post(postUpload);
catalogeRouter.route("/edit/:id(\\d+)").get(getEdit).post(postEdit);

export default catalogeRouter;