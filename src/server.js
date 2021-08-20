import express from "express";
import morgan from "morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import catalogeRouter from "./routers/catalogeRouter";
import stockRouter from "./routers/stockRouter";
import orderRouter from "./routers/orderRouter";
import repairRouter from "./routers/repairRouter";
import purchaseRouter from "./routers/purchaseRouter";
import saleRouter from "./routers/saleRouter";
import rentRouter from "./routers/rentRouter";
import userRouter from "./routers/userRouter";
import { localsMiddleware } from "./middlewares";


const app = express();

const logger = morgan("dev");

app.set('view engine', 'pug');
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended : true }));

app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: true,
        saveUninitialized: true,
        store: MongoStore.create({mongoUrl: process.env.DB_URL }),
})
);

// app.use((req, res, next) => {
//     req.sessionStore.all((error, sessions) => {
//         console.log(sessions);
//         next();
//     });
// });

app.use(localsMiddleware);
app.use("/uploads", express.static("uploads"));
app.use("/assets", express.static("assets"));
app.use("/", rootRouter);
app.use("/users", userRouter);
app.use("/cataloge", catalogeRouter);
app.use("/stock", stockRouter);
app.use("/order", orderRouter);
app.use("/repair", repairRouter);
app.use("/purchase", purchaseRouter);
app.use("/sale", saleRouter);
app.use("/rent", rentRouter);


export default app;