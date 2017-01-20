//Business Logicus
var userInput;
var finalArray = [];
var innerArray = [];

var lowerCase = function(input) {
  input = input.toLowerCase();
  return input;
};

var length = function(input) {
  innerArray = [];
  var sqRoot = Math.sqrt(input.length);
  for (j = 0; j < sqRoot; j++) {
    for (i = j; i < input.length; i += sqRoot){
      innerArray.push(input.charAt(i));
    };
  };
  return(innerArray);
};



//User Interface Logic
$(function() {
  $("form").submit(function() {
    event.preventDefault();
    userInput = $("#user-input").val();
    $("#result").text(length(userInput));

  })
})
