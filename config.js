/*
============================================
; Title:  Assignment 2.3
; Author: Professor Krasso
; Date:   27 October 2020
; Modified by: Anil Rayamajhi
; Description: API Gateway Part II
;===========================================
*/

var config = {};
config.web = {};
config.web.port = process.env.PORT || "3000";
config.web.secret = "topsecret";

module.exports = config;
