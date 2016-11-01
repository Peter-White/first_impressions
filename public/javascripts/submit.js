$(document).ready(function() {
  var $charCount = $('#charCount');
  var $toggle = $('.toggle');
  var $postReview = $('.postReview');
  var $input = $('.postReview input');
  var $box = $('.postReview textarea');
  var $status = $('#status');
  var $reviews = $('.reviews');

  var thumbCheck = function() {
    var $good = $("#good");
    var $bad = $("#bad");
    var $average = $("#average");

    if ($good.is(':checked')) {
      return $good.val();
    }
    else if ($bad.is(':checked')) {
      return $bad.val();
    }
    else if ($average.is(':checked')) {
      return $average.val();
    }
    else {
      console.log(error);
    }
  };

  $postReview.hide();

  $toggle.click(function() {
    $postReview.slideToggle( "slow" );
  });

  $('.postReview form').submit(function(event) {
    var check = $charCount.hasClass( 'overLimit' );
    event.preventDefault();

    if(check === false && $input.val().length > 0 && $box.val().length > 0) {
      $status.removeClass('error');
      $status.addClass('success');
      $status.html("Success!");
      $.post('/reviews', {title: $input.val(), content: $box.val(), rating: thumbCheck()}, function(data) {
        console.log(data);
      });
    } else {
      $status.removeClass('success');
      $status.addClass('error');
      var errorHTML = "<ul>";
      if (check !== false) {
        errorHTML +=  "<li>Maximum Character Length Exceded</li>";
      }
      if ($input.val().length === 0) {
        errorHTML += "<li>No Title Given</li>";
      }
      if ($box.val().length === 0) {
        errorHTML += "<li>Review Is Empty</li>";
      }
      errorHTML += "</ul>";
      $status.html(errorHTML);
    }
  });
});
