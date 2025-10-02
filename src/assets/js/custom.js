// Back to top arrow
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    var backToTopButton = document.querySelector(".back-to-top");
    if (window.scrollY > 100) {
      backToTopButton.classList.add("show");
    } else {
      backToTopButton.classList.remove("show");
    }
  });

  var backToTopButton = document.querySelector(".back-to-top");
  if (backToTopButton) {
    backToTopButton.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    var hamburgerIcon = document.querySelector(".navigation-hamburger-icon");
    var closeIcon = document.querySelector(".navigation-close-icon");

    if (hamburgerIcon && closeIcon) {
      hamburgerIcon.addEventListener("click", function () {
        document.body.classList.add("body-fixed");
      });

      closeIcon.addEventListener("click", function () {
        document.body.classList.remove("body-fixed");
      });
    }
  });

  function initSlider(selector, options) {
    var slider = document.querySelector(selector);
    if (slider) {
      new Glide(slider, options).mount();
    }
  }

  // Main banner slider
  initSlider(".page-main-banner-slider", {
    type: "carousel",
    startAt: 0,
    perView: 1,
    autoplay: 5000,
    breakpoints: {
      991: {
        perView: 1,
        adaptiveHeight: true,
      },
    },
  });

  // Brand slider
  initSlider(".brand-slider", {
    type: "carousel",
    startAt: 0,
    perView: 4,
    breakpoints: {
      991: { perView: 3 },
      600: { perView: 2 },
      480: { perView: 1 },
    },
  });

  // Case study slider
  initSlider(".case-study-slider", {
    type: "carousel",
    startAt: 0,
    perView: 1,
    autoplay: true,
    breakpoints: {},
  });

  // Our portfolio slider
  initSlider(".our-portfolio-slider", {
    type: "carousel",
    startAt: 0,
    perView: 3,
    breakpoints: {
      991: { perView: 2 },
      600: { perView: 2 },
      480: { perView: 1 },
    },
  });

  // Industries we work slider
  initSlider(".industries-we-work-slider", {
    type: "carousel",
    startAt: 0,
    perView: 4,
    breakpoints: {
      992: { perView: 3 },
      767: { perView: 2 },
      480: { perView: 1 },
    },
  });

  // Services list slider
  initSlider(".services-list-slider", {
    type: "carousel",
    startAt: 0,
    perView: 3,
    breakpoints: {
      991: { perView: 3 },
      767: { perView: 2 },
      480: { perView: 1 },
    },
  });

  // FAQ section
  var accordionTitles = document.querySelectorAll(".accordion-title");
  accordionTitles.forEach(function (title) {
    title.addEventListener("click", function () {
      if (title.classList.contains("active")) {
        title.closest(".single-accordion").classList.remove("active-tab");
        title.classList.remove("active");
      } else {
        document
          .querySelectorAll(".single-accordion")
          .forEach(function (accordion) {
            accordion.classList.remove("active-tab");
          });
        accordionTitles.forEach(function (accordionTitle) {
          accordionTitle.classList.remove("active");
        });
        title.closest(".single-accordion").classList.add("active-tab");
        title.classList.add("active");
      }
    });
  });

  // Mobile sidebar navigation
  var hamburgerIcon = document.querySelector(".navigation-hamburger-icon");
  var navigationInner = document.querySelector(".header-navigation-inner");
  var navigationOverlay = document.querySelector(".navigation-overlay");
  var closeIcon = document.querySelector(".navigation-close-icon");
  var navigationDropdownIcons = document.querySelectorAll(
    ".navigation-dropdown-icon-part",
  );
  var navigationBackButtons = document.querySelectorAll(".navigation-back");

  if (hamburgerIcon && navigationInner && navigationOverlay && closeIcon) {
    hamburgerIcon.addEventListener("click", function () {
      navigationInner.classList.add("active-sidebar-navigation");
      navigationOverlay.classList.add("active");
    });

    closeIcon.addEventListener("click", function () {
      navigationInner.classList.remove("active-sidebar-navigation");
      navigationOverlay.classList.remove("active");
      navigationDropdownIcons.forEach(function (icon) {
        icon.nextElementSibling.classList.remove("active-menu");
      });
    });
  }

  if (navigationDropdownIcons) {
    navigationDropdownIcons.forEach(function (icon) {
      icon.addEventListener("click", function () {
        icon.nextElementSibling.classList.add("active-menu");
      });
    });
  }

  if (navigationBackButtons) {
    navigationBackButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        button.parentElement.parentElement.classList.remove("active-menu");
      });
    });
  }

  // Video JS
  var videoPlayButtons = document.querySelectorAll(
    ".video-image-play-button[data-video]",
  );

  if (videoPlayButtons) {
    videoPlayButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        button.insertAdjacentHTML(
          "afterend",
          '<div class="videohtml newvdeo_' + button.dataset.video + '"></div>',
        );
        button.remove();
        document
          .querySelector(".newvdeo_" + button.dataset.video)
          .insertAdjacentHTML(
            "beforeend",
            '<video controls="" autoplay width="100%"><source src="' +
              button.dataset.videomp +
              '" type="video/mp4">Your browser does not support the video tag.</video>',
          );
      });
    });
  }

  // Form modal JS
  var formModelButtons = document.querySelectorAll(".form-model-button");
  var contactModals = document.querySelectorAll(".contact-modal");
  var modelCloseIcons = document.querySelectorAll(".model-close-icon");
  var modalOverlaps = document.querySelectorAll(".modal-overlap");

  if (formModelButtons) {
    formModelButtons.forEach(function (button) {
      button.addEventListener("click", function (e) {
        e.preventDefault();
        contactModals.forEach(function (modal) {
          modal.classList.add("active-model");
        });
      });
    });
  }

  if (modelCloseIcons) {
    modelCloseIcons.forEach(function (icon) {
      icon.addEventListener("click", function () {
        icon.closest(".contact-modal").classList.remove("active-model");
      });
    });
  }

  if (modalOverlaps) {
    modalOverlaps.forEach(function (overlap) {
      overlap.addEventListener("click", function (e) {
        overlap.parentElement.classList.remove("active-model");
      });
    });
  }

  // Case study tab
  var tabNames = document.querySelectorAll(".clickme .tab-name");
  var caseStudyTabContents = document.querySelectorAll(
    ".case-study-tab-content",
  );

  if (tabNames) {
    tabNames.forEach(function (tabName) {
      tabName.addEventListener("click", function () {
        tabNames.forEach(function (t) {
          t.classList.remove("activelink");
        });
        tabName.classList.add("activelink");
        var tagId = tabName.dataset.tag;
        caseStudyTabContents.forEach(function (content) {
          content.classList.remove("active");
          content.classList.add("hide");
        });
        document.getElementById(tagId).classList.add("active");
        document.getElementById(tagId).classList.remove("hide");
      });
    });
  }

  // Table tab JS
  var toggleButtons = document.querySelectorAll(
    ".shopify-development-plan .toggle-button",
  );

  if (toggleButtons) {
    toggleButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        var parentClass = button.closest(".shopify-development-plan table");
        parentClass
          .querySelector(".shopify-development-plan tbody")
          .classList.toggle("active");
        parentClass
          .querySelector(".shopify-development-plan thead")
          .classList.toggle("active");
      });
    });
  }

  // Tabbed content
  var tabContents = document.querySelectorAll(".tab_content");
  var tabLinks = document.querySelectorAll("ul.tabs li");

  if (tabLinks) {
    tabLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        var activeTab = link.getAttribute("rel");
        tabContents.forEach(function (content) {
          content.style.display = "none";
        });
        document.getElementById(activeTab).style.display = "block";

        tabLinks.forEach(function (tabLink) {
          tabLink.classList.remove("active");
        });
        link.classList.add("active");

        var tabDrawerHeading = document.querySelector(".tab_drawer_heading");
        tabDrawerHeading.classList.remove("d_active");
        document
          .querySelector(".tab_drawer_heading[rel^='" + activeTab + "']")
          .classList.add("d_active");
      });
    });

    tabLinks[tabLinks.length - 1].classList.add("tab_last");
  }

  // Testimonial slider
  new Glide(".lp-testim-slider", {
    type: "carousel",
    startAt: 0,
    perView: 1,
    autoplay: 2000,
    breakpoints: {},
  }).mount();

  // Case study client review slider
  new Glide(".cs-client-review-slider", {
    type: "carousel",
    startAt: 0,
    perView: 1,
    autoplay: true,
    breakpoints: {},
  }).mount();
});
