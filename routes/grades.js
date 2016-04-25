'use strict';

var express = require('express');
var router = express.Router();

var Grades = require('../models/grade');


router.route('/')
.get((req, res) => {
  Grades.get((err, grades) => {
    if(err){
      return res.status(400).send(err);
    }
    res.send(grades);
  });
})
.post((req, res) => {
  Grades.create(req.body, err => {
    if(err){
      return res.status(400).send(err);
    }
    res.send();
  });
});

router.put('/:id/edit', (req, res) => {
  Grades.edit(req.params.id, (err, newScore) => {
    if(err){
      return res.status(400).send(err);
    }
    res.send({newScore: newScore});
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
