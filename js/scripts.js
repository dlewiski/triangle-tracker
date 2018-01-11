$(document).ready(function() {
  $("#main-form").submit(function(event) {
  var sideone = parseInt($("#side1").val());
  var sidetwo = parseInt($("#side2").val());
  var sidethree = parseInt($("#side3").val());

  alert(sideone + ", " + sidetwo + ", " + sidethree);

  event.preventDefault();
  });
});
