import express from "express";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Bienvenue sur la page");
});

app.listen(PORT, () => {
  console.log("Serveur démarré sur le port", `http://localhost:${PORT}/`);
});
