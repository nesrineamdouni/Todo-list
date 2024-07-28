const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());
const TodosModel = require("./Models/todos");

const TodosRoutes = require("./routes/todos");

app.use("/todos", TodosRoutes);
// connexion a la base de données
mongoose.connect("mongodb://127.0.0.1:27017/meanstackcourse", {
  useNewUrlParser: true,
});

const db = mongoose.connection;

db.once("open", () => {
  console.log("Database connected");
});

db.once("error", (err) => {
  console.log("Connection error :", err);
});

app.listen(3000, () => {
  console.log("serveur demarrer");
});
