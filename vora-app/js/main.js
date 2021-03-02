$(document).ready(function () {
      /* ============== Navbar Srink ================ */
      $(window).on("scroll", function () {
            if ($(this).scrollTop() > 90) {
                  $(".navbar").addClass("navbar__shrink");
            }
            else {
                  $(".navbar").removeClass("navbar__shrink");
            }
      });
      /* ============== Video Popup ================ */
      const videoSrc = $(".iframe--1").attr("src");
      $(".hero__btn--2, .vid-popup").on("click", function () {
            if ($(".vid-popup").hasClass("vid-popup__open")) {
                  $(".vid-popup").removeClass("vid-popup__open");
                  $(".iframe--1").attr("src", "");
            }

            else {
                  $(".vid-popup").addClass("vid-popup__open");
                  if ($(".iframe--1").attr("src") == '') {
                        $(".iframe--1").attr("src", videoSrc);
                  }
            }
      });

      /* ============== Features Carousel ================ */
      $('.features__carousel').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            responsiveClass: true,
            responsive: {
                  0: {
                        items: 1
                  },
                  600: {
                        items: 2
                  },
                  1000: {
                        items: 3
                  }
            }
      });

      /* ============== Apps Carousel ================ */
      $('.app__carousel').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            responsiveClass: true,
            responsive: {
                  0: {
                        items: 1
                  },
                  600: {
                        items: 2
                  },
                  1000: {
                        items: 4
                  }
            }
      });

      /* ============== Testimonials Carousel ================ */
      $('.review__carousel').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            responsiveClass: true,
            responsive: {
                  0: {
                        items: 1
                  },
                  600: {
                        items: 2
                  },
                  1000: {
                        items: 3
                  }
            }
      });

      /* ============== Team Carousel ================ */
      $('.team__carousel').owlCarousel({
            loop: true,
            margin: 0,
            autoplay: true,
            responsiveClass: true,
            responsive: {
                  0: {
                        items: 1
                  },
                  600: {
                        items: 2
                  },
                  1000: {
                        items: 3
                  }
            }
      });

      /* ============== Page Scrolling - scrollIt ================ */
      $.scrollIt({
            topOffset: -50
      });

      /* ============== Navbar Collapse ================ */
      $(".nav-link").on("click", function () {
            $(".navbar-collapse").collapse("hide");
      });

      /* ============== Preloader ================ */
      $(window).on("load", function () {

            $(".preloader").fadeOut("slow");
      })
});