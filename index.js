import express from "express";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("pages/home", {
    title: "Explorer les dernières discussions 📣",
    userName: "Nansouze",
    isLoggedIn: true
  });
});

app.listen(PORT, () => {
  console.log("Serveur démarré sur le port", `http://localhost:${PORT}/`);
});
