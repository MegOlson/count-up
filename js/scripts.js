$(document).ready(function() {
  $("#form1").submit(function(event) {

    var countTo = parseInt($("input#inputCountTo").val());
    var countBy = parseInt($("input#inputCountBy").val());

    // if ((!countTo) || (!countBy)) {
    //   alert("Please fill out both fields");
    // }
    // if (isNaN(countTo) || (countBy)) {
    //   alert("Please enter a number");
    // }
    if(countTo && countBy){
      for (var i = countBy; i <= countTo; i = i + countBy){
        alert(i);
      }
    }
    else{
      alert("please enter numbers in both fields");
    }

    event.preventDefault();
  });
});
