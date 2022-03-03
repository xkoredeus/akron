$(() => {
  $(window).on('load', function () {
    $('.preloader__wrp').fadeOut();
  });
});

$(() => {
  $('.js-tel').mask("+7 (999) 999-99-99");

  $(window)
    .scroll(function windowScroll() {
      if ($(this).scrollTop() > 4) {
        $('body').addClass('sticky');
      }
      else {
        $('body').removeClass('sticky');
      }
    });

  $('.tabs-content-item:not(:first-child)').hide();
  $('.js-tab--main').on('click', function() {
    if (!($(this).hasClass('active'))) {
      $('.js-tab--main').removeClass('active');
      $(this).addClass('active');
      $('.js-tabs-content-main').hide();$(this).parents('.tabs').find('.js-tabs-content-main[data-main="'+$(this).attr('data-main')+'"]').fadeIn().addClass('active');
    }
  });
  $('.js-tab--add').on('click', function() {
    if (!($(this).hasClass('active'))) {
      $('.js-tab--add').removeClass('active');
      $(this).addClass('active');
      $('.js-tabs-content-add').hide();
      $(this).parents('.tabs').find('.js-tabs-content-add[data-add="' + $(this).attr('data-add') + '"]').fadeIn().addClass('active');
    }
  });
  if ( $(window).width() > 1200 ) {
    $('.categories-item:first-child').addClass('active');
    const firstBg = $('.categories-item:first-child').attr('data-bg');
    $('.categories').css('background-image', `url(${firstBg})`);

    $('.categories-item').hover(function () {
      if (!($(this).hasClass('active')) && !($(this).parents('.categories').hasClass('changing'))) {
        $('.categories-item').removeClass('active');
        $(this).addClass('active');

        $('.categories').addClass('changing');

        setTimeout(() => {
          const thisBg = $(this).attr('data-bg');
          $('.categories')
              .addClass('changing')
              .css('background-image', `url(${thisBg})`);
        }, 600)
        setTimeout(() => {
          $('.categories').removeClass('changing');
        }, 800)
      }
    });
  };

  $('.js-toggle-menu').on('click', function () {
    if (!($(this).hasClass('active'))) {
      $(this).addClass('active');
      $('body').addClass('menu-open fixed');
    } else {
      $(this).removeClass('active');
      $('.js-toggle-search').removeClass('active');
      $('.header-search').fadeOut();
      $('body').removeClass('menu-open fixed');
    }
  });

  $('.js-toggle-search').on('click', function () {
    if (!($(this).hasClass('active'))) {
      if (!($('body').hasClass('menu-open fixed'))) {
        $('.js-toggle-menu').addClass('active');
        $('body').addClass('menu-open fixed');
      }

      $(this).addClass('active');
      $('.header-search').fadeIn();

      setTimeout(() => {
        $('.header-search__input').focus();
      }, 600);
    } else {
      $(this).removeClass('active');
      $('.header-search').fadeOut();
    }

  });

  $('.js-toggle-dropdown').on('click', function () {
    $(this)
        .parents('.header-nav__link-wrapper')
        .toggleClass('active')
        .find('.header-nav__dropdown').slideToggle();
  });
  $('.js-toggle-subdropdown').on('click', function () {
    $(this)
        .toggleClass('active')
        .next('.header-nav__subdropdown').slideToggle();
  })

  $(document).on('click', function (e) {
    const container = $('.header');
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      $('.burger').removeClass('active');
      $('body').removeClass('menu-open fixed');
      $('.js-toggle-search').removeClass('active');
      $('.header-search').fadeOut();
    }
  });
  $('.js-to-top').on('click', function () {
    $('html, body').animate({scrollTop:0},700);
  });

  $('.accordion-content').hide();
  $('.js-toggle-accordion').on('click', function () {
    $(this).parents('.accordion').toggleClass('active').find('.accordion-content').slideToggle();
  });

  $('.question-content').hide();
  $('.js-toggle-question').on('click', function () {
    $(this).parents('.question').toggleClass('active').find('.question-content').slideToggle();
  });

  $('[data-fancybox]').fancybox({
    animationDuration: 600,
    animationEffect: 'slide-in-in',
    touch: false,
  });
});

$(() => {
  const swiper = new Swiper(".js-news-page-slider-bottom", {
    spaceBetween: 20,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  const swiper2 = new Swiper(".js-news-page-slider-top", {
    spaceBetween: 10,
    navigation: {
      nextEl: ".js-news-page-next",
      prevEl: ".js-news-page-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
})
$(() => {
  const swiper3 = new Swiper(".js-license-slider", {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: true,
    initialSlide: 2,
    navigation: {
      nextEl: ".js-license-next",
      prevEl: ".js-license-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 5,
        spaceBetween: 50,
      },
    },
  });
});
