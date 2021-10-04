import express from "express";
import {
    catalogeMain,
    postCatalogeMain,
    getUpload,
    postUpload,
    getEdit,
    postEdit,
    deleteCataloge
} from "../controllers/savePgController";
import {
    protectorMiddleware,
    catalogeimgUpload,
    clickDeta
} from "../middlewares";

const catalogeRouter = express.Router();



catalogeRouter.route("/main").all(protectorMiddleware).get(catalogeMain).post(clickDeta, postCatalogeMain);
catalogeRouter.route("/upload").all(protectorMiddleware).get(getUpload).post(catalogeimgUpload.array("catalogeimg",5), postUpload);
catalogeRouter.route("/edit/:id([0-9a-f]{24})").all(protectorMiddleware).get(getEdit).post(postEdit);
catalogeRouter.get("/delete", protectorMiddleware, deleteCataloge);
export default catalogeRouter;