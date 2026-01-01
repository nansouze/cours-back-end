import express from "express";
import pagesRouter from "./routes/pages/index.js";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use("/", pagesRouter);

app.listen(PORT, () => {
  console.log("Serveur démarré sur le port", `http://localhost:${PORT}/`);
});