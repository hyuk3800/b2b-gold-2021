import express from "express";
import morgan from "morgan";
import globalROuter from "../src/routers/globalRouter";
import catalogeRouter from "../src/routers/catalogeRouter";
import stockRouter from "../src/routers/stockRouter";
import orderRouter from "../src/routers/orderRouter";
import repairRouter from "../src/routers/repairRouter";
import purchaseRouter from "../src/routers/purchaseRouter";
import saleRouter from "../src/routers/saleRouter";
import rentRouter from "../src/routers/rentRouter";


const PORT = 5000;

const app = express();

const logger = morgan("dev");
app.use(logger);




app.use("/", globalROuter);
app.use("/cataloge", catalogeRouter);
app.use("/stock", stockRouter);
app.use("/order", orderRouter);
app.use("/repair", repairRouter);
app.use("/purchase", purchaseRouter);
app.use("/sale", saleRouter);
app.use("/rent", rentRouter);


const heandeListening = () => {
    console.log(`server listening on port http://localhost:${PORT}`)
};

app.listen(PORT, heandeListening);