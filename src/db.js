import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/b2bgold", {
    useNewUrlParser : true, 
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

const db = mongoose.connection;

const heandleOpen = () => console.log("Connected to DB"); 
const headleError = (error) => console.log("DB Error", error);
db.on("error", headleError);
db.once("open", heandleOpen);