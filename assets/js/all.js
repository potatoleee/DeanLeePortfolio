"use strict";

AOS.init({
  // Global settings:
  disable: false,
  // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  //startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  startEvent: 'load',
  initClassName: 'aos-init',
  // class applied after initialization
  animatedClassName: 'aos-animate',
  // class applied on animation
  useClassNames: false,
  // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false,
  // disables automatic mutations' detections (advanced)
  debounceDelay: 50,
  // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99,
  // the delay on throttle used while scrolling the page (advanced)
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 110,
  // offset (in px) from the original trigger point
  delay: 0,
  // values from 0 to 3000, with step 50ms
  duration: 1000,
  // values from 0 to 3000, with step 50ms
  easing: 'ease',
  // default easing for AOS animations
  once: true,
  // whether animation should happen only once - while scrolling down
  mirror: false,
  // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

});
window.addEventListener('load', function () {
  AOS.refresh();
}); // loading 動畫start

$(window).on('load', function () {
  $('.loading-overlay').addClass('active');
}); // loading 動畫end

$(document).ready(function () {
  // toast show
  $(".ToastBtn").click(function () {
    $(".liveToast").toast("show");
  }); //toast show end
  //toast 出現秒數

  $(".liveToast").toast({
    delay: 2000
  }); ////toast 出現秒數 end
  // scoll top

  $('.pagetop').on('click', function () {
    $('html,body').animate({
      scrollTop: 0
    }, 100);
  }); // scoll end
  //  漢堡選單 start

  $('.btn-burger').click(function (e) {
    $('.nav__content__main').toggleClass('open');
    $('.nav__content__main a').toggleClass('open');
    $('.btn-burger').toggleClass('open');
  }); //  漢堡選單 end
  //點小圖換大圖 start

  $('.product__img__sub img').click(function (e) {
    $('.product__img__main ').attr('src', $(this).attr('src'));
    $(this).addClass('active');
    $(this).parent().siblings().find('img').removeClass('active');
  }); //點小圖換大圖 end
  //faq start

  $('.faq-list_title').click(function (e) {
    $(this).find('.btn-faq').toggleClass('open');
    $(this).siblings('.faq-list_p').slideToggle();
    $(this).toggleClass('text-title_color');
    $(this).parent().siblings().find('.faq-list_p').slideUp();
    $(this).parent().siblings().find('.faq-list_title').removeClass('text-title_color');
    $(this).parent().siblings().find('.btn-faq').removeClass('open');
  }); //faq end
  // 登入開換頭貼start

  $('#btn__login--base').on('click', function () {
    $('.login__success').addClass('open');
    $('.login__default').addClass('open');
  }); // 登入開換頭貼end
  //每一次縮放視窗的時候執行

  $(window).resize(function () {
    gsapAnimate();
  });

  function gsapAnimate() {
    if ($(window).width() >= 768) {
      $(window).on('scroll', function () {
        var offsetTop = $(window).scrollTop(); // console.log(offsetTop/10)
        //x:“偏移”,“時間：數字越大呈現時間越久"

        gsap.to(".scrolling", {
          y: -offsetTop / 6,
          duration: 1
        });
      }); //scroll end
    } else {
      $(window).on('scroll', function () {
        var offsetTop = $(window).scrollTop(); // console.log(offsetTop/10)
        //x:“偏移”,“時間：數字越大呈現時間越久"

        gsap.to(".scrolling", {
          y: -offsetTop / 6,
          duration: 1
        });
      }); //scroll end
    }
  }

  function gsapAnimate2() {
    if ($(window).width() >= 768) {
      $(window).on('scroll', function () {
        var offsetTop = $(window).scrollTop(); // console.log(offsetTop/10)
        //x:“偏移”,“時間：數字越大呈現時間越久"

        gsap.to(".scrolling2", {
          y: -offsetTop / 10,
          duration: 1
        });
      }); //scroll end
    } else {
      $(window).on('scroll', function () {
        var offsetTop = $(window).scrollTop(); // console.log(offsetTop/10)
        //x:“偏移”,“時間：數字越大呈現時間越久"

        gsap.to(".scrolling2", {
          y: -offsetTop / 10,
          duration: 1
        });
      }); //scroll end
    }
  } //要在外面才可以執行


  gsapAnimate();
  gsapAnimate2(); // 首頁兩張圖片切換

  Cocoen.parse(document.body);
}); // document ready end

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
    clickable: true
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
}); // datepicker

var elem = document.querySelector('input[name="foo"]');
var datepicker = new Datepicker(elem, {// ...options
});
//# sourceMappingURL=all.js.map
