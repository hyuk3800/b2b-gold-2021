import "dotenv/config";
import "./db";
import "./models/User";
import "./models/Product";
import "./models/Stone";
import "./models/Quote";
import "./models/Client";
import app from "./server";

const PORT = 5000;


const heandeListening = () => {
    console.log(`server listening on port http://localhost:${PORT}`)
};

app.listen(PORT, heandeListening);