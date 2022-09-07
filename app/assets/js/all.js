
// new WOW().init();

 AOS.init();


// loading 動畫start
$(window).on('load',function(){
    $('.loading-overlay').addClass('active')
})
// loading 動畫end

$(document).ready(function(){


// scoll top
    $('.pagetop').on('click',function(){
        $('html,body').animate({scrollTop:0 });
 });// scoll end

//  漢堡選單 start

    $('.btn-burger').click(function(e){
        $('.nav__content__main').toggleClass('open');
        $('.nav__content__main a').toggleClass('open');
        $('.btn-burger').toggleClass('open');
    })//  漢堡選單 end

//點小圖換大圖 start
$('.product__img__sub img').click(function(e){
$('.product__img__main ').attr('src',$(this).attr('src'));
$(this).addClass('active');
$(this).parent().siblings().find('img').removeClass('active');
})//點小圖換大圖 end


//faq start
$('.faq-list_title').click(function(e){
    $(this).find('.btn-faq').toggleClass('open');
    $(this).siblings('.faq-list_p').slideToggle();
    $(this).toggleClass('text-title_color');
    $(this).parent().siblings().find('.faq-list_p').slideUp();
    $(this).parent().siblings().find('.faq-list_title').removeClass('text-title_color');
    $(this).parent().siblings().find('.btn-faq').removeClass('open');


})//faq end

// 登入開換頭貼start
$('#btn__login--base').on('click',function(){
    $('.login__success').addClass('open');
    $('.login__default').addClass('open');


})// 登入開換頭貼end

//每一次縮放視窗的時候執行
$(window).resize(function(){
  gsapAnimate()
})


function gsapAnimate(){
     if( $(window).width() >= 768 ){
         $(window).on('scroll',function(){
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

var swiper = new Swiper(".commentSwiper", {
 
    slidesPerView: 1,
    // 倒底會回第一張
    loop: true,
     // 有fade效果才不會整張切換
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
