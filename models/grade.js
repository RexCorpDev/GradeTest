'use strict';

var express = require('express');
var router = express.Router();
var uuid = require('uuid');

var db = require('../config/db');


db.run(`CREATE TABLE IF NOT EXISTS grades (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT,
  score INTEGER,
  total INTEGER,
  grade TEXT
)`);

exports.get = function(cb){
  db.all('SELECT * FROM grades', cb);
};

exports.create = function(grade, cb){
  if(!grade.name || !grade.score || !grade.total){
    return cb('Missing required fields.');
  }
  var percent = (grade.score/grade.total)*100;
  var finalGrade = '';

  console.log(percent);

  if(percent <= 100 && percent >= 90) {
    finalGrade = 'A';
  } else if (percent <= 89 && percent >= 80) {
    finalGrade = 'B';
  } else if(percent <= 79 && percent >= 70) {
    finalGrade = 'C';
  } else if (percent <= 69 && percent >= 60) {
    finalGrade = 'D';
  } else if(percent <= 59 && percent >= 50) {
    finalGrade = 'F';
  }

  console.log(finalGrade);

  db.run(`INSERT INTO grades (name, score, total, grade) VALUES ( ?, ?, ?, ?)`,
  grade.name,
  grade.score,
  grade.total,
  finalGrade,
  cb
);
};
