$(document).ready(function() {
  $("#main-form").submit(function(event) {
    var sideone = parseInt($("#side1").val());
    var sidetwo = parseInt($("#side2").val());
    var sidethree = parseInt($("#side3").val());
    var sumSide1 = (sideone + sidetwo) ;
    var sumSide2 = (sideone + sidethree) ;
    var sumSide3 = (sidetwo + sidethree);

  // alert(sumSide1 + ", " + sumSide3 + ", " + sumSide2);
  if ((sumSide1 <= sidethree) || (sumSide2 <= sidetwo) || (sumSide3 <= sideone)) {

    $("#noTriangle").text("Not a triange!");

  } else if (sideone === sidetwo && sidethree === sideone) {
    $("#results").text("It's and equilateral triangle!");

  } else if ((sideone != sidetwo && sidetwo === sidethree) || (sideone === sidethree && sideone != sidetwo) || (sideone === sidetwo && sideone != sidethree)) {
      $("#results").text("It's and isosceles triangle!");

  } else if ((sideone != sidetwo) && (sidethree != sideone)) {
      $("#results").text("It's and scalene triangle!");

    }

  event.preventDefault();
  });
});
