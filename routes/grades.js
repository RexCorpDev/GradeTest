'use strict';

var express = require('express');
var router = express.Router();

var Grade = require('../models/grade');


router.route('/')
.get((req, res) => {
  Grade.get((err, grades) => {
    if(err){
      return res.status(400).send(err);
    }
    res.send(grades);
  });
})
.post((req, res) => {
  Grade.create(req.body, err => {
    if(err){
      return res.status(400).send(err);
    }
    res.send();
  });
});

module.exports = router;
//
// //////
//
// router.route('/')
// .get((req, res) => {
//   Todo.get((err, todos) => {
//     if(err){
//       return res.status(400).send(err);
//     }
//     res.send(todos);
//   });
// })
// .post((req, res) => {
//   Todo.create(req.body, err => {
//     if(err) {
//       return res.status(400).send(err);
//     }
//     res.send();
//   });
// });
