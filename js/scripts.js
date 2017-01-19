


$(function() {
  $("form").submit(function() {
    event.preventDefault();
    var userInput = $("#user-input").val();
    $("#result").text(userInput);

  })
})
