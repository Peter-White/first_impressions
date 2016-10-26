$(document).ready(function() {
  var $textarea = $('.postReview form textarea');
  // var $input = $('.postReview form input');
  var textLength;

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

});
