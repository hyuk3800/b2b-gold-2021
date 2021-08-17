import mongoose from "mongoose";

mongoose.connect(process.env.DB_URL, {
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