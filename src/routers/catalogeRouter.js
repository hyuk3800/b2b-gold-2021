import express from "express";
import {
    catalogeMain,
    getUpload,
    postUpload,
    getEdit,
    postEdit,
    deleteCataloge
} from "../controllers/savePgController";
import {
    protectorMiddleware,
    catalogeimgUpload
} from "../middlewares";

const catalogeRouter = express.Router();



catalogeRouter.get("/main", protectorMiddleware, catalogeMain);
catalogeRouter.route("/upload").all(protectorMiddleware).get(getUpload).post(catalogeimgUpload.single("catalogeimg"), postUpload);
catalogeRouter.route("/edit/:id([0-9a-f]{24})").all(protectorMiddleware).get(getEdit).post(postEdit);
catalogeRouter.get("/delete/:id([0-9a-f]{24})", protectorMiddleware, deleteCataloge);
export default catalogeRouter;