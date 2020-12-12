/*
============================================
; Title:  Assignment 6.3
; Author: Professor Krasso
; Date:   22 November 2020
; Modified by: Anil Rayamajhi
; Description: API Gateway Part IV
;===========================================
*/

var express = require("express");
var router = express.Router();

var auth_controller = require("../controllers/authController");
var checkToken = require("../check-token");

/**
 * API Routes
 */

// POST request for registering a user
router.post("/auth/register", auth_controller.user_register);

// GET request for verifying user tokens
router.get("/auth/token", checkToken, auth_controller.user_token);

// POST request for login in a user
router.post("/auth/login", auth_controller.user_login);

// GET request for log out a user
router.get("/auth/logout", auth_controller.user_logout);

module.exports = router;
