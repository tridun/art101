/**
  * Authors: Tristan Dunlop <tdunlop@ucsc.edu>
             Johnny Choi <cchoi14@ucsc.edu>
  * Created:   16 Feb. 2021
  * License:   Public Domain
 **/

 // find the button element
var buttonEl = document.getElementById("submit-button");

 // add eventListener
buttonEl.addEventListener("click", function(){
  //find the name element
  var nameEl = document.getElementById("name");

  var userName = nameEl.value;

  //modify the name
  var newName = userName.toLowerCase().split('').sort().reverse().join('');

  console.log("user name: ", newName);

  //find the title
  var titleEl = document.getElementById("title");
  //change the element
  titleEl.innerText = newName;
});

// find sort button element
var sortButton = document.getElementById("sortButton");

// add listener

sortButton.addEventListener("click", function(){
  //find the name element
  var sortNameEl = document.getElementById("sortName");

  var name = sortNameEl.value;

  //modify the name
  var orgName = name.split('').sort().join('');

  console.log("sorted name: ", orgName);

  //find the title
  var titleEl = document.getElementById("title");
  //change the element
  titleEl.innerText = orgName;
  });
