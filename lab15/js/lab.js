/**
  * Authors: Tristan Dunlop <tdunlop@ucsc.edu>
             Johnny Choi <cchoi14@ucsc.edu>
  * Created:   3 Mar. 2021
  * License:   Public Domain
 **/

$("#activate").click(function(){

  var topic = $("#topic").val().toLowerCase();

  // create url variable
  var apiUrl = "https://pokeapi.co/api/v2/type/" + topic + "/" + "?redirect=true";

  // Using the core $.ajax() method
  $.ajax({
     // The URL for the request (from the api docs)
     url: apiUrl,
     // The data to send (will be converted to a query string)
     data: {},
     // Whether this is a POST or GET request
     type: "GET",
     // The type of data we expect back
     dataType : "json",
  })

  // if executes properly
  .done(function(data) {
    //retrieves data from API object
    //double damage to
    var arr = data.damage_relations.double_damage_to;
    var result = "";
    //searches for name key values
    for (var i in arr) {
       result = result + arr[i].name.toUpperCase() + " ";
    }
    $('#output').append(topic.toUpperCase() + "-type pokemon deal double damage to: " + result + "-type(s)");

    // double damage from
    var arrTwo = data.damage_relations.double_damage_from;
    var resultTwo = "";
    for (var i in arrTwo) {
       resultTwo = resultTwo + arrTwo[i].name.toUpperCase() + " ";
    }
    $('#output').append("<br><br>. . . and they take double damage from: " + resultTwo + "-type pokemon");
  })

  // What we do if the api call fails
  .fail(function (xhr, status, errorThrown) {
    // do stuff
    $("#output").text("<p>I couldn't find anything by that name :(");
  });
})
