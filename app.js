import express from "express";
import "dotenv/config";
import bodyParser from "body-parser";
import path from "path";

import handleSubmit from "./src/handleSubmit.js";

const app = express();
const port = process.env.PORT || 3000;

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/public/css")));
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/submit-form", handleSubmit);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
