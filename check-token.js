/*
============================================
; Title:  Assignment 8.4
; Author: Professor Krasso
; Date:   5 December 2020
; Modified by: Anil Rayamajhi
; Description: API Gateway Part V
;===========================================
*/

var jwt = require("jsonwebtoken"),
  config = require("./config");

/**
 * Check the HTTP header form a valid JSON web token
 * @param {*} req
 * @param {*} res
 * @param {*} next
 */
function checkToken(req, res, next) {
  var token = req.headers["x-access-token"];

  if (!token)
    return res.status(403).send({ auth: false, message: "No token provided." });

  jwt.verify(token, config.web.secret, function (error, decoded) {
    if (error)
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });

    req.userId = decoded.id;
    next();
  });
}

module.exports = checkToken;
