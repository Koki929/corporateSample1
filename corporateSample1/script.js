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

});