import express from "express";
import morgan from "morgan";
import session from "express-session";
import rootRouter from "../src/routers/rootRouter";
import catalogeRouter from "../src/routers/catalogeRouter";
import stockRouter from "../src/routers/stockRouter";
import orderRouter from "../src/routers/orderRouter";
import repairRouter from "../src/routers/repairRouter";
import purchaseRouter from "../src/routers/purchaseRouter";
import saleRouter from "../src/routers/saleRouter";
import rentRouter from "../src/routers/rentRouter";


const app = express();

const logger = morgan("dev");

app.set('view engine', 'pug');
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended : true }));

app.use(
    session({
        secret: "Gold",
        resave: true,
        saveUninitialized: true,
})
);

app.use((req, res, next) => {
    req.sessionStore.all((error, sessions) => {
        console.log(sessions);
        next();
    });
});


app.use("/", rootRouter);
app.use("/cataloge", catalogeRouter);
app.use("/stock", stockRouter);
app.use("/order", orderRouter);
app.use("/repair", repairRouter);
app.use("/purchase", purchaseRouter);
app.use("/sale", saleRouter);
app.use("/rent", rentRouter);


export default app;