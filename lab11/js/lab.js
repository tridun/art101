/**
  * Authors: Tristan Dunlop <tdunlop@ucsc.edu>
             Johnny Choi <cchoi14@ucsc.edu>
  * Created:   16 Feb. 2021
  * License:   Public Domain
 **/

// linking elements to jQuery
var challengesEl = $('#challenges');
var problemsEl = $('#problems');
var resultsEl = $('#results');

// button declaration
var button = "<button>Click Here!</button>";

//appending buttons to sections on page
challengesEl.append(button);
problemsEl.append(button);
resultsEl.append(button);

// make the button toggle the special task
$('#challenges button').click(function(){
  $('#challenges').toggleClass('special');
})

$('#problems button').click(function(){
  $('#problems').toggleClass('special');
})

$('#results button').click(function(){
  $('#results').toggleClass('special');
})
