$(document).ready(function() {
  var $textarea = $('.postReview form textarea');
  var textLength;

$textarea.on('keyup', function() {
    textLength = $(this).val().length;
    $('.charCount').html(textLength);
});

});
