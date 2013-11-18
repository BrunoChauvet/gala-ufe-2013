$(document).ready(function() {
  $("#link-home").bind("click", function(event) {
    $("#home-content").show();
    $("#program-content").hide();
    $("#charity-content").hide();
    $("#sponsors-content").hide();
    $("#contact-content").hide();
  });
  $("#link-program").bind("click", function(event) {
    $("#home-content").hide();
    $("#program-content").show();
    $("#charity-content").hide();
    $("#sponsors-content").hide();
    $("#contact-content").hide();
  });
  $("#link-charity").bind("click", function(event) {
    $("#home-content").hide();
    $("#program-content").hide();
    $("#charity-content").show();
    $("#sponsors-content").hide();
    $("#contact-content").hide();
  });
  $("#link-sponsors").bind("click", function(event) {
    $("#home-content").hide();
    $("#program-content").hide();
    $("#charity-content").hide();
    $("#sponsors-content").show();
    $("#contact-content").hide();
  });
  $("#link-contact").bind("click", function(event) {
    $("#home-content").hide();
    $("#program-content").hide();
    $("#charity-content").hide();
    $("#sponsors-content").hide();
    $("#contact-content").show();
  });

  $("#program-content").hide();
  $("#charity-content").hide();
  $("#sponsors-content").hide();
  $("#contact-content").hide();
});