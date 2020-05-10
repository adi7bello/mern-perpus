const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
require("dotenv").config();

app.use(bodyParser.json());

// IMPORT ROUTES
const postsRoute = require("./routes/posts");
app.use("/posts", postsRoute);

// ROUTES
app.get("/", (req, res) => {
  res.send("We are on home!");
});

//Db connect
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to db")
);

// Listening to server port
app.listen(3000, () => console.log(`Listening on port!`));
