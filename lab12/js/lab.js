/**
  * Authors: Tristan Dunlop <tdunlop@ucsc.edu>
             Johnny Choi <cchoi14@ucsc.edu>
  * Created:   16 Feb. 2021
  * License:   Public Domain
 **/

// house descriptions
var houseDescription = [
  "To be a Gryffindor is to possess the characteristic traits of courage, chivalry, and determination. Good for you!",
  "To be a Hufflepuff is to possess the characteristic traits of dedication, patience, and loyalty!",
  "To be a Ravenclaw is to possess the characteristic traits of wit, learning prowess, and wisdom. Way to go smarty!",
  "To be a Slytherin means that you must be cunning and ambitious! Be warned however, these traits and this house have spawned many Death Eaters."
];

// Bouns Task #2
var house = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];

// Create a function sortingHat()
function sortingHat(string){
  return string.length % house.length;
};

$("#button").click(function(){
  // that gets the value of #input and assigns it to a variable name
  var name = $('#input').val();

  // runs sortingHat(name) and stores the result in a variable house
  var index = sortingHat(name);

  var newText = "The Sorting Hat has sorted you into " + house[index];
  $('#output').text(newText);
  $('#description').text(houseDescription[index]);
});

 // Create a function sortingHat()
 // that takes a string as an argument: function sortingHat(str)
//function sortingHat(string){
  // counts the letters in str and assigns it to a variable length
  //var strLength = string.length;

  // uses modulus (% operator) to get the remainder with 4: mod = length % 4;
  // mod will now be a value between 0 and 3
  //var value = strLength % 4;

  // create a conditional that will return Gryffindor, Ravenclaw, Slytherin, and Hufflepuff depending on whether the value of mod is 0, 1, 2, or 3
//   if(value == 0){
//     return "Gryffindor";
//   }else if(value == 1){
//     return "Hufflepuff";
//   }else if(value == 2){
//     return "Ravenclaw";
//   }else if(value == 3){
//     return "Slytherin";
//   }else{
//     return "Sorry you're not a wizard after all :(";
//   }
// }
// Create an event listener attached to #button
// $("#button").click(function(){
//   // that gets the value of #input and assigns it to a variable name
//   var name = $('#input').val();
//
//   // runs sortingHat(name) and stores the result in a variable house
//   var house = sortingHat(name);
//
//   // appends a new styled paragraph to #output that says "The Sorting Hat has sorted you into " + house
//   var newText = "The Sorting Hat has sorted you into " + house;
//   $('#output').text(newText);
//
//   if(house == "Gryffindor"){
//     $('#description').text(gryText);
//   }else if(house == "Hufflepuff"){
//     $('#description').text(huffText);
//   }else if(house == "Ravenclaw"){
//     $('#description').text(ravText);
//   }else if(house == "Slytherin"){
//     $('#description').text(slyText);
//   }else{
//     $('#description').text(":/");
//   }
// });
