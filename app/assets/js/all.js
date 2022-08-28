


// loading 動畫start
$(window).on('load',function(){
    $('.loading-overlay').addClass('active')
})
// loading 動畫end

$(document).ready(function(){


// scoll top
    $('.pagetop').click(function(){
        $('html,body').animate({scrollTop:0 },1000);
 });// scoll end

//  漢堡選單 start

    $('.btn-buger').click(function(e){
        $('.nav-content_main').toggleClass('open');
        $('.btn-buger').toggleClass('open');
    })//  漢堡選單 end

//點小圖換大圖 start
$('.sub-product img').click(function(e){
$('.main-product ').attr('src',$(this).attr('src'));
$(this).addClass('active');
$(this).parent().siblings().find('img').removeClass('active');
})


//faq

$('.faq-list_title').click(function(e){
    $(this).find('.btn-faq').toggleClass('open');
    $(this).siblings('.faq-list_p').slideToggle();
    $(this).toggleClass('text-title_color');
    $(this).parent().siblings().find('.faq-list_p').slideUp();
    $(this).parent().siblings().find('.faq-list_title').removeClass('text-title_color');
    $(this).parent().siblings().find('.btn-faq').removeClass('open');


})



//每一次縮放視窗的時候執行
$(window).resize(function(){
    gsapAnimate()
})


function gsapAnimate(){
        if( $(window).width() >= 768 ){
            $(window).scroll(function(){
                offsetTop = $(window).scrollTop()
                // console.log(offsetTop/10)
                //x:“偏移”,“時間：數字越大呈現時間越久"
                gsap.to(".about-text", { y:-offsetTop/5, duration: 1})
                
            })//scroll end
        }else{
            $(window).scroll(function(){
                offsetTop = $(window).scrollTop()
                // console.log(offsetTop/10)
                //x:“偏移”,“時間：數字越大呈現時間越久"
                gsap.to(".about-text", { y:-offsetTop/6, duration: 1})
            
        })//scroll end
    }
}

//要在外面才可以執行
gsapAnimate()




})// document ready end
