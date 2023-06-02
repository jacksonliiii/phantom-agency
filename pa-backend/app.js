/********************************************************************************
 *   Initial Setup
 *******************************************************************************/
const express = require("express");
const app = express();
const path = require("path");

require("express-async-errors");
const cors = require("cors");
const mongoose = require("mongoose");
const config = require("./utils/config");
const logger = require("./utils/logger");
const middleware = require("./utils/middleware");
const ticketsRouter = require("./controllers/tickets");
const usersRouter = require("./controllers/users");
const loginRouter = require("./controllers/login");

mongoose.set("strictQuery", false);

/********************************************************************************
 *   MongoDB Connection
 *******************************************************************************/
logger.info("Establishing connection to MongoDB...");

mongoose
  .connect(config.MONGODB_URI)
  .then(() => {
    logger.info("Connected to MongoDB");
  })
  .catch((error) => {
    logger.error("Error connecting to MongoDB:", error.message);
  });

/********************************************************************************
 *   Middleware Setup
 *******************************************************************************/
app.use(cors());
app.use(express.json());
app.use(express.static("build"));

app.use(middleware.requestLogger);
app.use(middleware.tokenExtractor);
app.use("/api/tickets", ticketsRouter);
app.use("/api/users", usersRouter);
app.use("/api/login", loginRouter);

// Catch-all route handler
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);

module.exports = app;
