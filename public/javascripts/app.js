$(document).ready(function() {
  var textVal = $('.postReview form textarea');
  var textLength;

$('.textlength').on("click", function() {
    textLength = textVal.val().length;
    $(this).html(textLength);
});

});
