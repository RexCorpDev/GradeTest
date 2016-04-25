'use strict';

$(() => {
  $('.newGradeModal').click(openNewGradeModal);
  $('form.newGradeForm').submit(createNewGrade);
  $('.submitGrade').click(closeModal);
});

function openNewGradeModal(){
  $('.modal').modal('show');
}

function closeModal(){
  $('.modal').modal('hide');
}

function createNewGrade(e){
  e.preventDefault(e);

  var newGrade = {
    name: $('#gradeName').val(),
    score: $('#gradeScore').val(),
    total: $('#gradeTotal').val()
  };
  $('#gradeName').val('');
  $('#gradeScore').val('');
  $('#gradeTotal').val('');

  console.log('new Grade: ', newGrade);
}
