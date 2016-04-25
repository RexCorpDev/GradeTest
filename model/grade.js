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
  if(!todo.dueDate || !todo.desc){
    return cb('Missing required fields.');
  }

  var percent = (grade.score/grade.total)*100;
  var A = 100 > perecent && percent > 89;
  var B = 90 > percent && percent > 79;
  var C = 80 > percent && percent > 69;
  var D = 70 > percent && percent > 59;
  var F = 60 > percent;
  var finalGrade;

  switch(percent) {
    case A : finalGrade = 'A'; break;
    case B : finalGrade = 'B'; break;
    case C : finalGrade = 'C'; break;
    case D : finalGrade = 'D'; break;
    case F : finalGrade = 'F'; break;
    default; finalGrade = 'Did not submit'
  }

  db.run(`INSERT INTO grades (name, score, total, grade) VALUES ( ?, ?, ?, ?)`,
    grade.name,
    grade.score,
    grade.total,
    finalGrade,
    cb
  );
};
