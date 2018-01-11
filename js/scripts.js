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

    $("#noTriangle").show();

  } if (sideone === sidetwo && sidethree === sideone) {
    $("#equal").show();

  } if ((sideone != sidetwo && sidetwo === sidethree) || (sideone === sidethree && sideone != sidetwo) || (sideone === sidetwo && sideone != sidethree)) {
      $("#iso").show();

  } if ((sideone != sidetwo) && (sidethree != sideone)) {
      $("#scalene").show();

    }

  event.preventDefault();
  });
});
