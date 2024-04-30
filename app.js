import express from "express";

const app = express();

const checkWorkingHours = (req, res, next) => {
  const date = new Date();
  const dayOfWeek = date.getDay();
  const hourOfDay = date.getHours();

  if (dayOfWeek >= 1) {
    next();
  } else {
    res.send(
      "Désolé, l'application n'est disponible que pendant les heures de travail."
    );
  }
};

app.use(checkWorkingHours);

app.get("/index", (req, res) => {
  res.sendFile(
    "C:/Users/teyss/OneDrive/Bureau/checkpoints/checkpoint-express/template/index.html"
  );
});
app.get("/", (req, res) => {
  res.sendFile(
    "C:/Users/teyss/OneDrive/Bureau/checkpoints/checkpoint-express/template/index.html"
  );
});

app.get("/services", (req, res) => {
  res.sendFile(
    "C:/Users/teyss/OneDrive/Bureau/checkpoints/checkpoint-express/template/services.html"
  );
});

app.get("/contact", (req, res) => {
  res.sendFile(
    "C:/Users/teyss/OneDrive/Bureau/checkpoints/checkpoint-express/template/contact.html"
  );
});
app.use(
  express.static(
    "C:/Users/teyss/oneDrive/Bureau/checkpoints/checkpoint-express/template"
  )
);

app.listen(5000, () => {
  console.log("Serveur démarré sur le port 5000");
});
