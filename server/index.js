import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import router from "./router/route.js";
import Conneciton from "./database/db.js";
const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
const PORT = 8000;
app.use("/", router);
app.listen(PORT, () => {
  console.log(`the server is running in the port: ${PORT}`);
});
Conneciton();
