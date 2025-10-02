import React from "react";
import BannerContactForm from "../Components/BannerContactForm";
import { NavLink } from "react-router-dom";
import Shopifyplans from "../Components/Shopifyplans";

const ShopifyCustomThemeSetup = () => {
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
                <NavLink to="/services" class="medium-text">
                  Services
                </NavLink>
              </li>
              <li>
                <span class="medium-text">Shopify Custom Theme Setup</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="container">
          <div class="row align-items-center">
            <div class="page-main-banner-colm col-lg-7 col-md-7">
              <div class="page-main-banner-content">
                <div class="page-main-banner-content-list">
                  <h1 class="title">
                    Top-rated Shopify Store Setup with Premium Theme Company
                  </h1>
                  <div class="large-text content">
                    <p class="text">
                      CodeLoom Nexus is a proficient agency for Shopify store
                      development with custom theme. We are experts in
                      developing tailor-made Shopify stores with high-quality
                      custom images and standard coding that reflects your brand
                      style. Skilled UI/UX designers from CodeLoom Nexus
                      create aesthetically attractive designs that enable
                      businesses to deliver custom-built online user
                      experiences.
                    </p>
                  </div>
                </div>
              </div>
              <div class="page-main-banner-company-count d-flex">
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
                    src="./assets/images/Shopify-experts.png"
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

      <section
        id="content_section"
        class="image-with-full-size-content-part section-spacing"
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="section-head-part">
                <h2 class="section-head-title">
                  Why Should You Choose CodeLoom Nexus for Shopify Store
                  Setup with Premium Theme Services?{" "}
                </h2>
                <p class="section-head-content">
                  As a top Shopify store setup with premium theme company, we
                  have been serving the global eCommerce industry for more than
                  8 years. Our Shopify developers are well-versed in customizing
                  premium Shopify themes to develop feature-rich and
                  sales-driven Shopify stores. Here are the sufficient reasons
                  you must choose CodeLoom Nexus for a Shopify store setup
                  with premium theme services.
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="image-part">
                <img
                  loading="lazy"
                  src="./assets/images/store-setup-with-premium-theme.png"
                  width="501px"
                  height="415px"
                  class="image"
                  alt="Why Should You Choose CodeLoom Nexus for Shopify Store Setup with Premium Theme Services"
                />
              </div>
            </div>
          </div>
          <div class="image-with-full-size-content-inner">
            <ul class="correct-icon-with-border-list">
              <li>
                <h3 class="h5 title">Quick to Market</h3>
                <p>
                  Our dedicated Shopify developers use their extensive expertise
                  and strong technical knowledge to deliver Shopify store setup
                  with custom theme services in the minimum possible time.
                </p>
              </li>
              <li>
                <h3 class="h5 title">
                  Allow Customization During Development Process
                </h3>
                <p>
                  As the best Shopify store setup with custom theme agency, we
                  follow an agile development process. We allow customizations
                  anytime if you need changes, even after starting the
                  development process.
                </p>
              </li>
              <li>
                <h3 class="h5 title">Standard and Optimized Coding </h3>
                <p>
                  As the best Shopify store setup with custom theme agency, our
                  passionate Shopify developers are trained to do standard and
                  optimized coding. It ensures the Shopify store runs smoother,
                  acquires less memory, and boosts customer engagement.
                </p>
              </li>
              <li>
                <h3 class="h5 title">Reduce Feature Bloat</h3>
                <p>
                  Our dedicated team of Shopify experts understands your custom
                  requirement and discovers which features are actually required
                  for your business and which are not. We assure our clients of
                  minimum feature bloat.
                </p>
              </li>
              <li>
                <h3 class="h5 title">Convenient &amp; Affordable Cost</h3>
                <p>
                  Understanding your store development requirements, our
                  official Shopify experts pick the right tools and strategies
                  for convenient and budget-friendly yet efficient Shopify store
                  development with premium theme.
                </p>
              </li>
              <li>
                <h3 class="h5 title">Customer Support</h3>
                <p>
                  As a leading Shopify store setup with premium theme company,
                  extend 24X7 post-launch customer support to address errors and
                  ensure a glitch-free Shopify store runs smoothly and performs
                  well.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <Shopifyplans />
    </div>
  );
};

export default ShopifyCustomThemeSetup;
