$(document).ready(function () {
  $("#boozer-header").click(function () {
    $("#boozer-details").slideToggle();
    $("#boozer-header").toggleClass("active");
  });
});
