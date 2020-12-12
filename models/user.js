/*
============================================
; Title:  Assignment 6.3
; Author: Professor Krasso
; Date:   22 November 2020
; Modified by: Anil Rayamajhi
; Description: API Gateway Part IV
;===========================================
*/

var mongoose = require("mongoose");

/**
    Fields username, password, and email
*/
var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

const User = (module.exports = mongoose.model("User", userSchema));

/**
 Database queries
 */

// user.save to add a new user in database
module.exports.add = (user, callback) => {
  user.save(callback);
};

module.exports.getById = (id, callback) => {
  var query = { _id: id };
  User.findById(query, callback);
};

module.exports.getOne = (email, callback) => {
  var query = { email: email };
  User.findOne(query, callback);
};
