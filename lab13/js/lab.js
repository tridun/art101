/**
  * Authors: Tristan Dunlop <tdunlop@ucsc.edu>
             Johnny Choi <cchoi14@ucsc.edu>
  * Created:   24 Feb. 2021
  * License:   Public Domain
 **/

 // Create a "FizzBuzz" function similar to how we did in class.
function fizzBuzzBoom(num){

  var str = "";
  var bigStr = "";

  // Loop through numbers 1 to 200, listing them as you go
  for(var i = 1; i <= num; i++){

    // If the number is a multiple of 3, if should print "Fizz!"
    if(i%3==0){
      str+="Fizz";
    }

    // If the number is a multiple of 5, it should print "Buzz!"
    if(i%5==0){
      str+="Buzz";
    }

    // If the number is a multiple of 7, it should print "Boom!"
    if(i%7==0){
      str+="Boom";
    }

    // Bonus Task 1: adding another value set to "Bang!"
     if(i%4==0){
       str+="Bang";
     }
    // checks if none of the above values are met
    // if so, prints number
    if(str == ""){
      str+=i;
    }else{
      str+="!"
    }

    // new line
    str+="<br>";

    // store str in bigStr
    bigStr = bigStr + str;

    // empty str before next loop iteration
    str="";
  }
  // Then after you've run through all the numbers, output the str at the end to your output div using:
  // $("#output").html(oneLongString);
  //
  $("#output").html(bigStr);
}

$("#button").click(function(){
  // gets input value from user
  var number = $('#input').val();
  
  // Don't forget to call your function.
  fizzBuzzBoom(number);
});
