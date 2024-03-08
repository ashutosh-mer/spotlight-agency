// Header Fixed
var headerwrap = jQuery(".header-wrap");
jQuery(window).on("scroll load ready", function () {
  if (jQuery(this).scrollTop() > 0) {
    headerwrap.addClass("sticky");
  } else {
    headerwrap.removeClass("sticky");
  }



  jQuery('.project-listing-grid').isotope({
    itemSelector: '.project-item',
    percentPosition: true,
    masonry: {
      columnWidth: 50,
      gutter: 36,
    }
  })
});

jQuery(".ham-menu").on("click", function () {
  jQuery(this).toggleClass("open");
  jQuery(".header-wrap .links").toggleClass("open");
  jQuery(".full-menu").toggleClass("show");
  jQuery("body").toggleClass("menu-open pause");

});

jQuery(document).ready(function () {
  var headerwrap = jQuery(".header-wrap");
  // Background image
  jQuery(".bg_img").each(function (i, elem) {
    var img = $(elem);
    jQuery(this).hide();
    jQuery(this)
      .parent()
      .css({
        background: "url(" + img.attr("src") + ") no-repeat no-repeat center center",
      });
  });

  // Mobile Submenu
  jQuery(".menu-arrow").on("click", function () {
    jQuery(this).parents("li").siblings().find(".sub-menu").slideUp();
    jQuery(this).parents("li").find(".sub-menu").slideToggle();
  });
  jQuery(document).bind("click touchstart", function (e) {
    if ((jQuery(e.target).parents(".menu").length = 0)) jQuery(".sub-menu").slideUp();
  });

  // Scroll Offset
  var headerheight = headerwrap.height();
  jQuery(".offset-top").on("click", function (e) {
    e.preventDefault();
    var target = jQuery(this).data("id");
    jQuery("html, body")
      .stop()
      .animate(
        {
          scrollTop: jQuery("#" + target).offset().top - (headerheight + 15),
        },
        1000,
        "swing",
        function () { }
      );
  });

  // SVG Create
  jQuery(function () {
    jQuery("img.svg").each(function () {
      var $img = jQuery(this);
      var imgID = $img.attr("id");
      var imgClass = $img.attr("class");
      var imgURL = $img.attr("src");
      jQuery.get(
        imgURL,
        function (data) {
          var $svg = jQuery(data).find("svg");
          if (typeof imgID !== "undefined") {
            $svg = $svg.attr("id", imgID);
          }
          if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " replaced-svg");
          }
          $svg = $svg.removeAttr("xmlns:a");
          if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
            $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"));
          }
          $img.replaceWith($svg);
        },
        "xml"
      );
    });
  });

  // Banner Slider
  jQuery(".banner-slider").slick({
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: ".banner-next",
    prevArrow: ".banner-prev",
    //arrows: false,
    //fade: true,
    dots: false,
    adaptiveHeight: true,
  });

  // Client Logo Slider
  jQuery(".logo-slider ul").slick({
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  /* Header Hamburger */
  jQuery(".header-hamburger").click(function () {
    jQuery(this).toggleClass("active");
    jQuery(".header-right").toggleClass("active");
    jQuery("body").toggleClass("pause");
  });

  // Scroll To Section
  var target = window.location.hash;
  setTimeout(function () {
    if (target != "") {
      var $target = jQuery(target);
      jQuery("html, body").animate(
        {
          scrollTop: jQuery(target).offset().top - 85,
        },
        1000
      );
    }
  });

  var swiper = new Swiper(".info-slider", {
    spaceBetween: 36,
    slidesPerView: "auto",
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },

    breakpoints: {
      320: {
        spaceBetween: 12,
      },
      768: {
        spaceBetween: 16,
      },
      992: {
        spaceBetween: 20,
      },
    },
  });


});


// const scroll = new LocomotiveScroll({
//   el: document.querySelector('[data-scroll-container]'),
//   smooth: true
// });


//Page transition  
function pagetransition() {
  var tl = gsap.timeline();
  tl.to("#trans", { duration: .5, scaleY: 1, transformOrigin: 'bottom', ease: Power3.easeInOut });
  tl.to(".lefttrans", { x: -200, y: 0, duration: 1, ease: Power3.easeInOut, opacity: 0 });
  tl.to("#trans", { duration: .5, scaleY: 0, transformOrigin: 'top', ease: Power3.easeInOut, delay: 0 })

}

//Function to Delay
function delay(n) {
  n = n || 2000;
  return new Promise(done => {
    setTimeout(() => {
      done();
    }, n)
  })


}

//Initial Content ANimation
function contentAnimation() {
  var tl = gsap.timeline();
  tl.from(".lefttrans", { x: -200, y: 0, duration: 1, ease: Power3.easeInOut, opacity: 0 });
}

//Here where magic Happens
barba.init({
  //we need sync
  sync: true,
  //the transitions array
  transitions: [{
    //When the user leaves the page
    async leave(data) {
      const done = this.async();
      //call page transition function
      pagetransition();
      //give a small delay
      await delay(500);
      done();
    }
  }],
});
//windows loads, call content animation
window.onload = () => {
  contentAnimation();
}
