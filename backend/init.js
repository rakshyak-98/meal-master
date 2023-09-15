const CONST = {
  connectionString: "mongodb://localhost:27017/meal-master",
};
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const { createUser, createPost, loginUser, getUser } = require("./controller");
const app = express();
const { checkEnvFile } = require("./utils");
const { verify } = require("jsonwebtoken");
const { user } = require("./models");

// SEARCH for .env file
checkEnvFile()
  .then((res) => {
    console.info(res);
  })
  .catch((error) => {
    console.info(error);
  });

// CONSTANTS
const PORT = process.env.EXPRESS_PORT ?? 8000;

// mongodb connection.
mongoose
  .connect(CONST.connectionString)
  .then(() => console.info("connected to mongodb+srv!!"))
  .catch((error) => console.error(error.message));

// express

// ** ENABLE CORS FOR ALL ROUTES
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Content-Type, Authorization"
  );
  next();
});

// UTC+5:30 (Indian Standard Time)
const timeZoneOffset = 330; // Offset in minutes
const serverTimeZone = new Date().getTimezoneOffset() + timeZoneOffset;

// Middleware to set the time zone for each request
app.use((req, res, next) => {
  req.serverTimeZone = serverTimeZone;
  next();
});

// decode the data from html form urlencoded, INFO: enable to use req.body
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(express.json());

app.post("/login", loginUser);
app.post("/reqister", createUser);
app.post("/post", createPost);
app.get("/user", getUser);

app.listen(PORT, () => {
  console.info(`Express Listeing on port ${PORT}`);
});
