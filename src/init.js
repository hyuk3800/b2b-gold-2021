import "./db";
import "./models/Product";
import app from "./server";

const PORT = 5000;


const heandeListening = () => {
    console.log(`server listening on port http://localhost:${PORT}`)
};

app.listen(PORT, heandeListening);