$(document).ready(function () {
  $("#boozer-header").click(function () {
    $("#boozer-details").slideToggle();
    $("#boozer-header").toggleClass("active");
  });
});

$(document).ready(function () {
  $("#snippet-header").click(function () {
    $("#snippet-details").slideToggle();
    $("#snippet-header").toggleClass("active");
  });
});
