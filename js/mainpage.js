//스크롤 이벤트 
$(window).scroll( function(){
    
    $('.scroll_area').each( function(i){
        var bottom_of_element = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        if( bottom_of_window > bottom_of_element ){
            $(this).animate({
                opacity : 1,
            },1000);
        }
    }); 
});

//이미지 슬라이드 
let imageindex;
let autoslider;
imageslide(0);
autoslide(imageindex);
$('.control_btn').click(function () {
    imageindex=$(this).index();
    imageslide(imageindex);
});
let slidersw=false;
$('.stop').click(function(){
    slidersw=!slidersw;
    if (slidersw) {
        $('.stop i').removeClass('fa-pause');
        $('.stop i').addClass('fa-play');
        $('.stop i').attr('title','자동 재생')
        clearInterval(autoslider)
    }else{
        $('.stop i').removeClass('fa-play');
        $('.stop i').addClass('fa-pause');
        $('.stop i').attr('title','자동 재생 멈추기')
        autoslide(imageindex);
    }
})
function imageslide(imageindex) {
    $('.ad_content').css('right',-1040).animate({'right': 0},'slow')
    $('.ad_content').attr('src','images/advertise_txt'+(imageindex+1)+'.png');
    $('.ad_bg').attr('src','images/advertise_bg'+(imageindex+1)+'.jpg');
    $('.control_btn').removeClass('on'); 
    $('.control_btn').eq(imageindex).addClass('on'); 
  
}
function autoslide(imageindex){
    autoslider = setInterval(function(imageindex){
        imageindex=$('.on').index();
        if (imageindex<=4) {
            imageindex++;
            imageslide(imageindex)
        }else if(imageindex==5){
            imageindex=0;
            imageslide(imageindex);
        }
    },3000)
}




// gold circle 이벤트 
let funButton = $('.fun .btnArea button');
let goldCircle = $('.goldcircle img');
let index;
let funcontent_name=['.attraction_content','.entertainment_content','.zootopia_content','.restaurant_content']
let oldindex=-1;
let fairy = $('.fairychoice');
let fairymove_top=[126,208,293,368];
let fairymove_left=[-10,113];
let old; 
let sw; 
$(funButton).click(function(){
    index = $(this).index();
        old=index;
        
        if (index != oldindex) {
            $(goldCircle).css('display','none');
            $(goldCircle[index-1]).css('display', 'block');
            $('.fun_contentArea').slideUp(1000);
            $(funcontent_name[index-1]).slideDown(1000);
            if (index==1|| index==3) {
                $(fairy).animate({
                top : fairymove_top[index-1],
                left : -10
                },500,'linear').removeClass('fairychoice_transform')
            }else{
                $(fairy).animate({
                top : fairymove_top[index-1],
                left : 113,
                },500,'linear').addClass('fairychoice_transform')
            }
            oldindex=index;
         } 
});
$(funButton).hover(function(){
    index = $(this).index();
    $(goldCircle[index-1]).css('display', 'block');
},function(){
    index = $(this).index();
        
        $(goldCircle[index-1]).css('display', 'none')
        $(goldCircle[old-1]).css('display', 'block')
});


