/**
  * Authors: Tristan Dunlop <tdunlop@ucsc.edu>
             Johnny Choi <cchoi14@ucsc.edu>
  * Created:   8 Mar. 2021
  * License:   Public Domain
 **/

// declaration of global variable
var currentComicObj = {};

function getAndPutData(newApiUrl){
  // Using the core $.ajax() method
  $.ajax({
     // The URL for the request (from the api docs)
     url: newApiUrl,
     // The data to send (will be converted to a query string)
     data: {
             // here is where any data required by the api
             //   goes (check the api docs)
           },
     // Whether this is a POST or GET request
     type: "GET",
     // The type of data we expect back
     dataType : "json",
     // What do we do when the api call is successful
     //   all the action goes in here
     success: function(comicObj) {
        currentComicObj = comicObj;
         $("#output-image").html("<h2>" + comicObj.title + "</h2><img src=\""
        + comicObj.img + "\" alt=\"" + comicObj.transcript + "\" title=\"" + comicObj.title + "\">");
     },
     // What we do if the api call fails
     error: function (jqXHR, textStatus, errorThrown) {
         // do stuff
         console.log("Error:", textStatus, errorThrown);
     }
  });
}

// when I click the left arrow this function subtracts 1 from comicObj.num
$("#left").click(function(){
  var comicNum = currentComicObj.num - 1;
  var newApiUrl = "https://xkcd.com/" + comicNum + "/info.0.json";
  getAndPutData(newApiUrl);
  console.log(comicNum);
});

$("#right").click(function(){
  var comicNum = currentComicObj.num + 1;
  var newApiUrl = "https://xkcd.com/" + comicNum + "/info.0.json";
  getAndPutData(newApiUrl);
  console.log(comicNum);
});

getAndPutData("https://xkcd.com/" + (Math.round(Math.random()*2488)) + "/info.0.json");
