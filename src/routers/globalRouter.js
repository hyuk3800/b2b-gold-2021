import express from "express";
import { indexhome , login } from "../controllers/userController";
import { chat , stone, client, quote, findstock, accountsreceivable } from "../controllers/noSavePgController";

const globalROuter = express.Router();


globalROuter.get("/", indexhome);
globalROuter.get("/login", login);
globalROuter.get("/chat", chat);
globalROuter.get("/stone", stone);
globalROuter.get("/client", client);
globalROuter.get("/quote", quote);
globalROuter.get("/findstock", findstock);
globalROuter.get("/accountsreceivable", accountsreceivable);


export default globalROuter;