/*
============================================
; Title:  Assignment 2.3
; Author: Professor Krasso
; Date:   27 October 2020
; Modified by: Anil Rayamajhi
; Description: API Gateway Part II
;===========================================
*/

var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "API Gateway" });
});

module.exports = router;
