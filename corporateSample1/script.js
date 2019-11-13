$(function() {

    // modal
    $('.submit-show').click(function(){
      $('#submit-modal').fadeIn();
    });

    $('.close-modal').click(function(){
      $('#submit-modal').fadeOut();
    });

    // accordion
    $('.news-list-item').click(function() {
      var $newscontent = $(this).find('.news-content');
      if($newscontent.hasClass('open')) { 
        $newscontent.removeClass('open');
        $newscontent.slideUp();
  
        $(this).find('span').text('+');
        
      } else {
        $newscontent.addClass('open'); 
        $newscontent.slideDown();
        
        $(this).find('span').text('-');
        
      }
    });

    // scroll
    $('.top-btn').click(function(){
      $('html,body').animate({ 
        'scrollTop': 0 
      }, 500);
    });

    $('header, footer a').click(function(){
      var id = $(this).attr('href');
      var position = $(id).offset().top;
      $('html,body').animate({ 
        'scrollTop': position 
      }, 500);
    });

    $(window).scroll(function (){
      $('.fadein').each(function(){
        var elemPos = $(this).offset().top,
          scroll = $(window).scrollTop(),
          windowHeight = $(window).height();
        if (scroll > elemPos - windowHeight + 100){
          $(this).addClass('scrollin');
        }
      });
    });
});