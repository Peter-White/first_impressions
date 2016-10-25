$(document).ready(function() {
  var $textarea = $('.postReview form textarea');
  var textLength;

$textarea.on('keydown', function() {
    textLength = $(this).val().length;
    $(".textlength").html(textLength);
});

});
