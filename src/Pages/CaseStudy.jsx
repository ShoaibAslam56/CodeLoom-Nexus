import React from "react";
import LetDiscuss from "../Components/LetDiscuss";
import { Link, NavLink } from "react-router-dom";
import BannerContactForm from "../Components/BannerContactForm";

// Import images
import shopifyExperts from "../assets/images/Shopify-experts.png";
import lineBackVerticalContact from "../assets/images/line-back-vertical-contact.png";
import asif from "../assets/images/asif.jpeg";
import umar from "../assets/umar.jpg";

// Portfolio project images - EXACT same as Portfolio.jsx
import project1 from "../assets/Project/1.avif";
import project2 from "../assets/Project/2.avif";
import project3 from "../assets/Project/3.avif";
import project4 from "../assets/Project/4.avif";
import project5 from "../assets/Project/5.avif";
import project6 from "../assets/Project/6.avif";
import project7 from "../assets/Project/7.avif";
import project8 from "../assets/Project/8.avif";

// App project images
import caseStudyAa from "../assets/images/case-study-aa.png";
import dropshippingApp from "../assets/images/dropshipping-app.png";

const CaseStudy = () => {
  return (
    <div>
      <section
        id="page_banner"
        class="page-main-banner homepage-banner section-spacing"
      >
        <div class="breadcrumb-container">
          <div class="container">
            <ul class="breadcrumb">
              <li>
                <NavLink to="/" class="medium-text">
                  Home
                </NavLink>
              </li>
              <li>
                <span class="medium-text">Case Studies</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="container">
          <div class="row align-items-center">
            <div class="page-main-banner-colm col-lg-7 col-md-7">
              <div class="page-main-banner-content">
                <div class="page-main-banner-content-list">
                  <h1 class="title">Case Studies</h1>
                  <div class="large-text content">
                    <p class="text">
                      "It's time! When a project tells a story" True stories of
                      Shopify Experts and for their admires!
                    </p>
                    <p class="text">
                      Check our ability for wonderful dedication for solving
                      Complex solutions in our Project Case Studies.
                    </p>
                  </div>
                </div>
              </div>
              <div class="page-main-banner-company-count d-flex ">
                <div class="page-main-banner-company-count-list">
                  <span class="h1 count">200+</span>
                  <span class="text count-label">
                    Shopify Projects Empowered
                  </span>
                </div>
                <div class="page-main-banner-company-count-list">
                  <span class="h1 count">38+</span>
                  <span class="text count-label">Global Ventures Served</span>
                </div>
                <div class="page-main-banner-company-count-list">
                  <span class="h1 count">8+</span>
                  <span class="text count-label">Years of Expertise</span>
                </div>
              </div>
              <div class="page-main-banner-certified-icon">
                <a
                  class="shopify-logo-white-banner"
                  title="Shopify Expert"
                  href="https://hireecommerceexperts.com/"
                  target="_blank"
                >
                  <img
                    loading="lazy"
                    src={shopifyExperts}
                    alt="we certified icon"
                    width="275px"
                    height="60px"
                  />
                </a>
              </div>
            </div>
            <BannerContactForm />
          </div>
        </div>
      </section>

      <div class="case-study-list-main">
        <div class="container">
          <div class="row row-mb-minus">
            <div class="col-lg-4 col-md-5 left-sidebar-tab-contact col-spacing-bottom">
              <div class="sidebar-stickey">
                <ul class="case-study-tabs">
                  <li class="clickme">
                    <a
                      href="javascript:void();"
                      class="activelink h6 tab-name"
                      data-tag="shopify_sotre"
                    >
                      Shopify Store
                    </a>
                  </li>
                  <li class="clickme">
                    <a
                      href="javascript:void();"
                      class="h6 tab-name"
                      data-tag="shopify_app"
                    >
                      Shopify App
                    </a>
                  </li>
                </ul>

                <div class="vertical-contact-exp-banner">
                  <div class="vertical-contact-exp-banner-inner">
                    <img
                      loading="lazy"
                      src={lineBackVerticalContact}
                      class="vertical-contact-exp-line-background"
                      alt="line back"
                      width="400"
                      height="150px"
                    />
                    <h3 class="h6 vertical-contact-exp-title">
                      Are you looking to hire a{" "}
                      <span>Shopify development company</span> or Shopify
                      developers for your{" "}
                      <span>Shopify development project?</span>{" "}
                    </h3>
                    <div class="vertical-contact-exp-profile">
                      <div class="image">
                        <img
                          loading="lazy"
                          src={umar}
                          alt="profile image"
                          width="85px"
                          height="85px"
                        />
                      </div>
                      <div class="expert-name-content">
                        <h4 class="h6 name">
                          <span>Umar</span> Draz
                        </h4>
                        <span class="designation medium-text">
                          (Co-founder & Chief Technology Officer)
                        </span>
                        <p class="content">
                          Whether you are looking for Shopify store development
                          or to hire Shopify app developers, CodeLoom Nexus
                          is the one-stop organization for all. Get in touch
                          with our technical expert for any concerns or queries
                          related to your new project requirements.
                        </p>
                        <Link to="/contact-us" class="button white-button">
                          Schedule a Call Now!
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-8 col-md-7 case-study-list-inner col-spacing-bottom">
              <div class="case-study-tab-content" id="shopify_sotre">
                <div class="case-study-background">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                      <div class="case-study-image">
                        <img
                          loading="lazy"
                          width="370px"
                          height="247px"
                          src={project1}
                          alt="MLS UAE"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="case-study-content-info">
                        <div class="case-study-name">
                          <h5 class="title">MLS UAE</h5>
                        </div>
                        <p class="content">
                          Partnered with MLS UAE to build a Shopify store with multilingual support, fast 3-hour Dubai delivery, and seamless browsing for premium global meat selections.
                        </p>
                        <a href="https://mlsuae.ae/" target="_blank" class="button">View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="case-study-background">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                      <div class="case-study-image">
                        <img
                          loading="lazy"
                          width="370px"
                          height="247px"
                          src={project2}
                          alt="Mizodia"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="case-study-content-info">
                        <div class="case-study-name">
                          <h5 class="title">Mizodia</h5>
                        </div>
                        <p class="content">
                          We partnered with Mizodia to create a sleek Shopify store with multilingual support, Shopify Markets, and custom loyalty features scaling their fine-jewelry brand across Europe.
                        </p>
                        <a href="https://mizodia.com/" target="_blank" class="button">View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="case-study-background">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                      <div class="case-study-image">
                        <img
                          loading="lazy"
                          width="370px"
                          height="247px"
                          src={project3}
                          alt="Giovici"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="case-study-content-info">
                        <div class="case-study-name">
                          <h5 class="title">Giovici</h5>
                        </div>
                        <p class="content">
                          We partnered with Giovici, a premium UK men's underwear brand, to build their Shopify store enhancing UK shipping, clean product navigation, and seamless checkout for a luxe yet trusted online experience.
                        </p>
                        <a href="https://www.giovici.com/" target="_blank" class="button">View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="case-study-background">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                      <div class="case-study-image">
                        <img
                          loading="lazy"
                          width="370px"
                          height="247px"
                          src={project4}
                          alt="PhosandGaia"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="case-study-content-info">
                        <div class="case-study-name">
                          <h5 class="title">PhosandGaia</h5>
                        </div>
                        <p class="content">
                          We partnered with Phos & Gaia to craft a stunning Shopify store that reflects their artisanal, nature-inspired décor. From sleek design to seamless shopping, we brought their brand vision beautifully online.
                        </p>
                        <a href="https://phosandgaia.gr/" target="_blank" class="button">View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="case-study-background">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                      <div class="case-study-image">
                        <img
                          loading="lazy"
                          width="370px"
                          height="247px"
                          src={project5}
                          alt="Lake View Home"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="case-study-content-info">
                        <div class="case-study-name">
                          <h5 class="title">Lake View Home</h5>
                        </div>
                        <p class="content">
                          Partnered with Lakeview Home to create a sleek Shopify store for luxury décor & gifts blending curated collections with a seamless, elegant shopping experience.
                        </p>
                        <a href="https://lakeviewhome.com/" target="_blank" class="button">View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="case-study-background">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                      <div class="case-study-image">
                        <img
                          loading="lazy"
                          width="370px"
                          height="247px"
                          src={project6}
                          alt="Microscopecentral"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="case-study-content-info">
                        <div class="case-study-name">
                          <h5 class="title">Microscopecentral</h5>
                        </div>
                        <p class="content">
                          We partnered with Microscope Central to build a powerful Shopify store showcasing their premium microscopes & accessories. Our design and optimization deliver a seamless, expert-backed shopping experience.
                        </p>
                        <a href="https://microscopecentral.com/" target="_blank" class="button">View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="case-study-background">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                      <div class="case-study-image">
                        <img
                          loading="lazy"
                          width="370px"
                          height="247px"
                          src={project7}
                          alt="PhosandGaia"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="case-study-content-info">
                        <div class="case-study-name">
                          <h5 class="title">PhosandGaia</h5>
                        </div>
                        <p class="content">
                          We partnered with Phos & Gaia to craft a stunning Shopify store that reflects their artisanal, nature-inspired décor. From sleek design to seamless shopping, we brought their brand vision beautifully online.
                        </p>
                        <a href="https://phosandgaia.gr/" target="_blank" class="button">View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="case-study-background">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                      <div class="case-study-image">
                        <img
                          loading="lazy"
                          width="370px"
                          height="247px"
                          src={project8}
                          alt="Happily Chic"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="case-study-content-info">
                        <div class="case-study-name">
                          <h5 class="title">Happily Chic</h5>
                        </div>
                        <p class="content">
                          Experience the elegant bridal designs with Happily Chic Designs. Using the Shopify platform, we have created a fully customized development website with a Pixel-perfect design. Whereas the Happily Chic Designs is designed by Nathalie Fleitas & developed by CodeLoom Nexus.
                        </p>
                        <a href="https://happilychicdesigns.patternbyetsy.com/" target="_blank" class="button">View Details</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="case-study-tab-content hide" id="shopify_app">
                <div class="case-study-background">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                      <div class="case-study-image">
                        <img
                          loading="lazy"
                          width="370px"
                          height="247px"
                          src={caseStudyAa}
                          alt="Accessibility Assistant"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="case-study-content-info">
                        <div class="case-study-name">
                          <h5 class="title">Accessibility Assistant</h5>
                        </div>
                        <p class="content">
                          Get the ease of social responsibilities with
                          Accessibility Assistant!
                        </p>
                        <a
                          href="case-study-accessibility-assistant.php"
                          class="button"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="case-study-background">
                  <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                      <div class="case-study-image">
                        <img
                          loading="lazy"
                          width="370px"
                          height="247px"
                          src={dropshippingApp}
                          alt="dropshipping-app"
                        />
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                      <div class="case-study-content-info">
                        <div class="case-study-name">
                          <h5 class="title">Dropshipping App</h5>
                        </div>
                        <p class="content">
                          Through dropshipping, a store owner sells the product
                          and passes on the sales to a third-party supplier, who
                          then ships the order to the customer.
                        </p>
                        <a
                          href="case-study-dropshipping-app.php"
                          class="button"
                        >
                          View Details
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <LetDiscuss />
    </div>
  );
};

export default CaseStudy;