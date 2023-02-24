$(".image-container").mouseover(function () {
    $(this).attr('src', $(this).data("hover"));
  }).mouseout(function () {
    $(this).attr('src', $(this).data("src"));
  });

  $(".image-container2").mouseover(function () {
    $(this).attr('src', $(this).data("hover"));
  }).mouseout(function () {
    $(this).attr('src', $(this).data("src"));
  });

  $(".image-container3").mouseover(function () {
    $(this).attr('src', $(this).data("hover"));
  }).mouseout(function () {
    $(this).attr('src', $(this).data("src"));
  });


  $(window).on('load resize', function() {
    if ($(window).width() <= 768) {
      $('.main-buttons').addClass('flex-column');
      $('.img').css('width', '100%');
    } else {
      $('.main-buttons').removeClass('flex-column');
      $('.img').css('width', '33.33%');
    }
  });
  
