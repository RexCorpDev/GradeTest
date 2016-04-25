'use strict';

const PORT = process.env.PORT || 4000;

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var app = express();

var Grades = require('../models/grade');

app.set('view engine', 'ejs');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('/api', require('./routes/api'));

app.get('/', (req, res) => {
  Grades.get((err, grades) => {
    res.render('home');
  });
});



app.listen(PORT, err => {
  console.log(err || `Server listening on PORT ${PORT}`);
})
