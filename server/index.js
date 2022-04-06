/* eslint-disable no-unused-vars */
// require means to import
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
// saving each library to a variable to use later
const Park = require("./routers/park");
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4040;

// goes with the middleware to log the url and time of request
const logging = (request, response, next) => {
  console.log(`${request.method} ${request.url} ${Date.now()}`);
  next();
};

// CORS Middleware
const cors = (req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Accept,Authorization,Origin"
  );
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};

// cors needs to go before middleware
// middleware goes before routes
app.use(cors);
app.use(express.json());
app.use(logging);

// adding the mongodb connection process to a method the assigning to a variable
mongoose.connect(process.env.MONGODB);
const db = mongoose.connection;

// error message when no connection
db.on("error", console.error.bind(console, "Connection Error:"));
db.once(
  "open",
  console.log.bind(console, "Successfully opened connection to Mongo!")
);

// routers
app.get("/status", (request, response) => {
  response.send(JSON.stringify({ message: "Service healthy" }));
});
app.get("/", (request, response) => {
  response
    .status(418)
    .json({ message: "No Resource Found Here, Please see instructions" });
});
app.post("/", (request, response) => {
  response.json(request.body);
});
app.post("/", (request, response) => {
  console.log("hiddenoddities-request:", request);
  const body = request.body;
  body.date = Date.now();
  response.json(body);
});
app.use("/park", Park);

// all routes go above the listen
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
