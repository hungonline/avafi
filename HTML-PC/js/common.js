(function ($) {
    "use strict";
    var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    }

    //backToTop
    function backToTop() {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 200) {
                $('#to_top').fadeIn();
            } else {
                $('#to_top').fadeOut();
            }
        });

        $("#to_top").click(function () {
            $("html, body").animate({
                scrollTop: 0
            });
            return false;
        });
        $(window).scroll(function () {
            if ($(window).scrollTop() >= 60) {
                $('.topnav ').addClass('sticky');
            } else {
                $('.topnav ').removeClass('sticky');
            }
        });
    }
    //onCLick
    function onCLick() {
        $('#vibeji-ham').off('click').on('click', function () {
            $(this).toggleClass('open');
            $('.main-menu').toggleClass('open');
            $('.overlay-bg').toggleClass('open');
            // $('body').css('overflow', $(this).hasClass('open') ? 'hidden' : '')
        });
        
        $('.overlay-bg').off('click').on('click', function() {
            $(this).toggleClass('open');
            $('#vibeji-ham,.main-menu').toggleClass('open');
            // $('body').css('overflow', $(this).hasClass('open') ? 'visible' : '')
        });
        $('.main-menu .nav>li>a').click(function () {
            $('.overlay-bg').removeClass('open');
            $('#vibeji-ham,.main-menu').removeClass('open');
        });
    }
    //Hover

    //only scroll
    function onlyscroll() {
        var lastId,
        topMenu = $(".main-menu"),
        topMenuHeight = topMenu.outerHeight() + 100,
        menuItems = topMenu.find("a"),
        scrollItems = menuItems.map(function () {
            var item = $($(this).attr("href"));
            if (item.length) {
                return item;
            }
        });
        menuItems.click(function (e) {
            var href = $(this).attr("href"),
                offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
            $('html, body').stop().animate({
                scrollTop: offsetTop
            }, 300);
            e.preventDefault();
        });

        // Bind to scroll
        $(window).scroll(function () {
            var fromTop = $(this).scrollTop() + topMenuHeight;
            var cur = scrollItems.map(function () {
                if ($(this).offset().top < fromTop) return this;
            });
            cur = cur[cur.length - 1];
            var id = cur && cur.length ? cur[0].id :
                "";
            if (lastId !== id) {
                lastId = id;
                menuItems.parent().removeClass("active")
                    .end().filter("[href='#" + id + "' ]").parent().addClass("active");
            }
        });
    }  

    function swiper() {
        var swiper1 = new Swiper('.slide1 .swiper-container', {
            slidesPerView:'auto',
            spaceBetween: 0,
            loop: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            speed:10000,
        });
        $('.slide1 .swiper-container').on('mouseenter', function(e){
            swiper1.autoplay.stop();
        })
        $('.slide1 .swiper-container').on('mouseleave', function(e){
            swiper1.autoplay.start();
        })
        var swiper2 = new Swiper('.slide2 .swiper-container', {
            slidesPerView:'auto',
            spaceBetween: 0,
            loop: true,
            autoplay: {
                delay: 0,
                disableOnInteraction: false,
            },
            speed:8000,
        });
        $('.slide2 .swiper-container').on('mouseenter', function(e){
            swiper2.autoplay.stop();
        })
        $('.slide2 .swiper-container').on('mouseleave', function(e){
            swiper2.autoplay.start();
        })
    }

    $(function () {
        AOS.init({ disable: 'mobile' });
        backToTop();
        onCLick();
        onlyscroll();
        swiper();
    });
})(jQuery);