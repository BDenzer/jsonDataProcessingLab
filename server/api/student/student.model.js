'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var StudentSchema = new Schema({
  name: String,
  info: String,
  active: Boolean,
  firstName: String,
  lastName: String,
  dateOfBirth: String,
  gender: String,
  email: String,
  phone: String,
  address: String,
  major1: String,
  major2: String,
  courses: []

});

module.exports = mongoose.model('Student', StudentSchema);
