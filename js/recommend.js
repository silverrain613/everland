//스크롤 이벤트 
$(window).scroll( function(){
    
    $('.recommend_cotent').each( function(i){
        let bottom_of_element = $(this).offset().top + $(this).outerHeight();
        let bottom_of_window = $(window).scrollTop() + $(window).height();
        
        if( bottom_of_window > bottom_of_element ){
            $(this).animate({opacity : 1 },500);
        }
    }); 
    
});