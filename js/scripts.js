$(document).ready(function() {
  $("#form1").submit(function(event) {

    var countTo = parseInt($("input#inputCountTo").val());
    var countBy = parseInt($("input#inputCountBy").val());
    var numbers = [];
    if(countTo && countBy){
      if(countBy < countTo){
      for (var i = countBy; i <= countTo; i = i + countBy){
          numbers.push(i);
        }
      }
      else {
        alert("Count by should always be less than count to. Negative numbers are invalid.");
      }
    }
    else{
      alert("please enter numbers in both fields");
    }
    $("#result").text(numbers);
    event.preventDefault();
  });
});
