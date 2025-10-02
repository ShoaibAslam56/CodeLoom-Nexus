import React from "react";
import BannerContactForm from "../Components/BannerContactForm";
import { NavLink } from "react-router-dom";
import CaseStudySlider from "../Components/CaseStudySlider";
import LetDiscuss from "../Components/LetDiscuss";

// Import images
import shopifyExperts from "../assets/images/Shopify-experts.png";
import shopifygoogleanalyticssetupMin from "../assets/images/shopifygoogleanalyticssetup-min.png";
const Analytics = () => {
  return (
    <>
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
                <NavLink to="services" class="medium-text">
                  Services
                </NavLink>
              </li>
              <li>
                <span class="medium-text"> Digital Marketing</span>
              </li>
              <li>
                <span class="medium-text">Shopify Google Analytics Setup</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="container">
          <div class="row align-items-center">
            <div class="page-main-banner-colm col-lg-7 col-md-7">
              <div class="page-main-banner-content">
                <div class="page-main-banner-content-list">
                  <h1 class="title">Shopify Google Analytics Setup</h1>
                  <div class="large-text content">
                    <p class="text">
                      With the help of our Google Analytics experts, be assured
                      and take a rest, you will get the right customers for your
                      Shopify store with your Google Analytics set up on your
                      store.
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

      <section
        id="content_section"
        class="image-with-full-size-content-part section-spacing"
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <div class="section-head-part">
                <h2 class="section-head-title">
                  Take Better Decisions Based on Shopify Google Analytics Setup
                </h2>
                <p class="section-head-content">
                  {" "}
                  Shopify platform is a booming name in the E-Commerce market,
                  and is handling billions of transactions via stores hosted on
                  it currently. Just by looking at the volume and size of the
                  huge E-Commerce market, it becomes quite evident for business
                  owners to know where and how their money is spent and measure
                  the roi (return of investment).
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="image-part">
                <img
                  loading="lazy"
                  src={shopifygoogleanalyticssetupMin}
                  width="570px"
                  height="380px"
                  class="image"
                  alt="shopifyseo-min"
                />
              </div>
            </div>
          </div>
          <div class="image-with-full-size-content-inner">
            <h3 class="title">
              And for this, you require services like web analytics for Shopify
              stores, <br /> and what better than Google analytics for the same!
              Some of the Advantages of Using Google Analytics for E-Commerce
              Shopify Stores Are
            </h3>
            <br />
            <ul class="correct-icon-with-border-list">
              <li>
                <h4 class="h5 title">Tracking products with most views</h4>
                <p>
                  such that it can be used as part of recommendations under
                  ‘customers also viewed’ or ‘you might be interested in’
                  sections.
                </p>
              </li>
              <li>
                <h4 class="h5 title">
                  Better graphical representation of website’s sales trends.
                </h4>
                <p>
                  Once you add google analytics to Shopify, you get to use all
                  of shopify’s intuitively designed dashboard which offers
                  useful in-and-out insights of your website’s sales data for
                  better management.
                </p>
              </li>
              <li>
                <h4 class="h5 title">
                  Tracking products in cart for targeted sales strategy,
                </h4>
                <p>
                  for you to analyze where exactly in the checkout funnel,
                  customers are not getting encouraged to buy products.
                </p>
              </li>
              <li>
                <h4 class="h5 title">
                  Tracking and displaying optimized search results based on
                  demographics,
                </h4>
                <p>
                  as it helps in analyzing user’s interests and helps you
                  implement location/language/gender-specific sales campaigns.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CaseStudySlider />

      <section class="section-spacing">
        <div class="container">
          <div class="image-with-full-size-content-inner">
            <h3 class="title h4">
              If you are still finding it hard to set up Shopify Google
              analytics conversion tracking mechanisms across your{" "}
              <a
                target="_blank"
                class="keyword_text"
                href="https://CodeLoom Nexus.com/shopify-store-setup.php"
              >
                Shopify store
              </a>
              , then  CodeLoom Nexus can help you for the same with their
              comprehensive and all-in-one Shopify Google analytics setup and
              maintenance services. Some of the salient features of it are
            </h3>
            <br />
            <ul class="correct-icon-with-border-list">
              <li>
                <h4 class="h5 title">Setting up Google Analytics:</h4>
                <p>
                  Includes setting up of basic dashboards of page visits, page
                  performances, setting up ‘enhanced E-Commerce’ option, setting
                  up Google tag manager with Google analytics, and setting up
                  other funnels and goals reports.
                </p>
              </li>
              <li>
                <h4 class="h5 title">Setting up Google Conversion Tracking:</h4>
                <p>
                  Shopify Google analytics conversion tracking mechanism helps
                  you with dashboards to analyze and measure the problems and
                  leaks associated with your workflows and marketing campaigns,
                  so that you can improve upon them.
                </p>
              </li>
              <li>
                <h4 class="h5 title">Setting up Spam Protection:</h4>
                <p>
                  The most common problem faced by business owners is the
                  referral spam, where your competitors might force you to
                  gather false data by engaging bots. There are various ways to
                  deal with such issues, and CodeLoom Nexus is determined to
                  handle all your spam-related worries.
                </p>
              </li>
              <li>
                <h4 class="h5 title">Setting up Search Tracking Mechanism:</h4>
                <p>
                  Many of the visitors navigate your store through the search
                  options provided within your website in order to find their
                  intended products. With this mechanism, you can get an idea of
                  what keywords drive the whole search operations, and how to
                  link it with other keywords for better visibility.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <LetDiscuss />
    </>
  );
};

export default Analytics;
