// const timeZone = require('mongoose-timezone');
var timestamps = require('mongoose-timestamp-date-unix');
var mongoose = require('mongoose');
var express = require('express');
var path = require('path');

var router = express.Router();
var app = express();
var DataPointschema = mongoose.Schema;

var DataPoint = new DataPointschema({
  _id: {
      type: String,
      required: true
  },
  date: {
    type: String,
    required: true
  },
  temp: {
    type: Number,
    required: true
  },
  humidity: {
    type: Number,
    required: true
  }
},
{
  timestamps: true // Saves createdAt and updatedAt as dates. createdAt will be our timestamp.
});
DataPoint.plugin(timestamps,  {
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});
var DataPointmodel = mongoose.model('DataPoint', DataPoint);

module.exports = DataPointmodel;
