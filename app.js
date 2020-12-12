/*
============================================
; Title:  Assignment 1.4
; Author: Professor Krasso
; Date: 18 October 2020
; Modified By: Anil Rayamajhi
; Description:  API Gateway Part I
;===========================================
*/

var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var apiCatalog = require("./routes/api-catalog");

var app = express();

/**
 *
 * Database connection
 */

const conn =
  "mongodb+srv://admin:admin@ems.nvxn7.mongodb.net/api-gateway?retryWrites=true&w=majority";

mongoose
  .connect(conn, {
    promiseLibrary: require("bluebird"),
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("connection successful"))
  .catch((err) => console.error(err));

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/api", apiCatalog);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
