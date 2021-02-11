/**
* Authors: Tristan Dunlop <tdunlop@ucsc.edu>
        and Elena Ibbetson <eibbetso@ucsc.edu>
 * Created:   11 Feb. 2021
 * License:   Public Domain
 **/

//function being called in html file by the button
function newElFunction() {

  //this did not end up doing anything
  var outputEl = document.getElementById("output");

  //declaration of new elements and text content
  var new1El = document.createElement("p");
  var newText = document.createTextNode("This is the new1El text");
  var new2El = document.createElement("p");
  var new2Text = document.createTextNode("This more text from new2El");

  //attaching text to elements
  new1El.appendChild(newText);
  new2El.appendChild(new2Text);

  //printing output in timed intervals at the bottom of "output"
  setTimeout(function(){
    document.getElementById("output").appendChild(new1El);
  }, 0);

  setTimeout(function(){
    document.getElementById("output").appendChild(new2El);
  }, 2000);
}

function cssEdits() {
  document.getElementById("output").style.color = "red";
  document.getElementById("h2").style.cssFloat = "right";
  document.getElementById("h3").style.cssFloat = "right";
  document.getElementById("h3").style.fontFamily = "Courier New";
  document.getElementById("challenge").style.color = "yellow";
  document.getElementById("challenge").style.fontFamily = "papyrus";
  document.getElementById("content").style.backgroundColor = "DarkViolet";
  document.body.style.backgroundColor = "SpringGreen";
}
