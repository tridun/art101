/*
 * Author: Tristan Dunlop <tdunlop@ucsc.edu>
 * Created: 3 Feb. 2021
 * License: Public Domain
 */

// turning user input into a variable
var name = window.prompt("Please enter your name so I can fix it!");

// initiating function sortUserName()
var newName = sortUserName(name);

// sortUserName
 function sortUserName(userName) {
     console.log("userName = ", userName);
     var nameArray = userName.split("");
     console.log("nameArray = ", nameArray);
     var nameArraySort = nameArray.sort();
     console.log("nameArraySort = ", nameArraySort);
     var nameSorted = nameArraySort.join("");
     console.log("nameSorted = ", nameSorted);
     return nameSorted;
 }

// output
document.writeln("This is what you wrote down: ", name, "<br><br>");
document.writeln("And here's your new name made just for you: ",
     newName, "</br>");
