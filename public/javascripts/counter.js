$(document).ready(function() {
  var $textarea = $('.postReview form textarea');
  var $input = $('.postReview form input');
  var textLength;
  var titleLength;

  $textarea.on('keyup', function() {
      textLength = $(this).val().length;
      $('#charCount').html(textLength);
      if (textLength <= 300) {
        $('#charCount').removeClass('overLimit');
      }
      else {
        $('#charCount').addClass('overLimit');
      }
  });
  $input.on('keyup', function() {
      titleLength = $(this).val().length;
      $('#titleCount').html(titleLength);
      if (titleLength <= 100) {
        $('#titleCount').removeClass('overLimit');
      }
      else {
        $('#titleCount').addClass('overLimit');
      }
  });
});
