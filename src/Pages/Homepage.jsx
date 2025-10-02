import React from "react";
import Slider from "react-slick";
import BrandsLogoSlider from "../Components/BrandsLogoSlider";
import LetDiscuss from "../Components/LetDiscuss";
import Faq from "../Components/Faq";
// import CaseStudySlider from "../Components/CaseStudySlider";
import BannerContactForm from "../Components/BannerContactForm";
import CategorySlider from "../Components/CategorySlider";
import { Link } from "react-router-dom";

// Import all homepage images
import shopifyExperts from "../assets/images/Shopify-experts.png";
import onTime from "../assets/images/on-time.png";
import coding from "../assets/images/coding.png";
import contact from "../assets/images/contact.png";
import settings from "../assets/images/settings.png";
import maintenance from "../assets/images/maintenance.png";
import customersDescriptionsBlue from "../assets/images/customers-descriptions-blue.png";
import orderAttributesBlue from "../assets/images/order-attributes-blue.png";
import whatDataMigrate6 from "../assets/images/what-data-migrate-6.png";
import productAttributesBlue from "../assets/images/product-attributes-blue.png";
import cmsPageBlue from "../assets/images/cms-page-blue.png";
import store from "../assets/images/store.png";
import storeHover from "../assets/images/store-hover.png";
import shopifyApp from "../assets/images/shopify-app.png";
import shopifyAppHover from "../assets/images/shopify-app-hover.png";
import shopifyMobileApp from "../assets/images/shopify-mobile-app.png";
import shopifyMobileAppHover from "../assets/images/shopify-mobile-app-hover.png";
import marketplace from "../assets/images/marketplace.png";
import marketplaceHover from "../assets/images/marketplace-hover.png";
import shopifyMigrations from "../assets/images/Shopify-Migrations.png";
import shopifyMigrationsHover from "../assets/images/Shopify-Migrations-hover.png";
import marketing from "../assets/images/marketing.png";
import marketingHover from "../assets/images/marketing-hover.png";
import integrations from "../assets/images/integrations.png";
import integrationsHover from "../assets/images/integrations-hover.png";
import backgroundLine from "../assets/images/background-line.png";
import image1 from "../assets/images/1.jpg";
import umar from "../assets/umar.jpg";
import videoPlayButton from "../assets/images/video_Play_Button.png";
import ecommerceMarketplaceKing from "../assets/images/eCommerce-marketplace-king.png";
import shopifyLogo from "../assets/images/shopify-logo.png";
import discover1 from "../assets/images/discover 1.png";
import maintenance1 from "../assets/images/maintenance 1.png";
import startup2 from "../assets/images/startup 2.png";
import conversation from "../assets/images/conversation.png";
import planing from "../assets/images/planing.png";
import webDesign1 from "../assets/images/web-design 1.png";
import test from "../assets/images/test.png";
import whatDataMigrate7 from "../assets/images/what-data-migrate-7.png";
import ccvideoThumbnail from "../assets/images/ccvideo_thumbnail.png";

const Homepage = () => {
  const sliderSettings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    arrows: false,
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    // Add more options as needed
  };

  return (
    <div>
      <section
        id="page_banner"
        class="page-main-banner homepage-banner section-spacing"
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="page-main-banner-colm col-lg-7 col-md-7">
              <div class="page-main-banner-content page-main-banner-slider">
                <Slider {...sliderSettings}>
                  <div class="page-main-banner-content-list">
                    <h1 class="title">Shopify App &amp; Store Development</h1>
                    <div class="large-text content">
                      <p class="text">
                        Build high‑performing Shopify stores and apps with
                        custom themes, secure integrations, and app‑store‑ready
                        solutions. From storefront design and theme
                        customization to payments, shipping, analytics, and
                        automation, we cover the full stack of Shopify
                        capabilities to launch and grow your business.
                      </p>
                      <p class="text">
                        Our Shopify experts ship robust storefronts and apps
                        that scale with your business, including private/public
                        app development, headless builds, checkout
                        customizations, and post‑launch optimization with A/B
                        testing and technical SEO.
                      </p>
                    </div>
                  </div>

                  <div class="page-main-banner-content-list">
                    <h1 class="title">Full‑Stack Web Development</h1>
                    <div class="large-text content">
                      <p class="text">
                        End‑to‑end web engineering across React, Next.js,
                        Node.js, and modern APIs with performance, reliability,
                        and security best practices. We architect thoughtful
                        backends, craft clean TypeScript code, and deliver
                        SSR/SSG builds optimized for speed and scalability.
                      </p>
                      <p class="text">
                        From MVP to enterprise, we implement CI/CD pipelines,
                        testing, observability, and seamless third‑party
                        integrations (REST/GraphQL), connecting databases,
                        payments, and external services without friction.
                      </p>
                    </div>
                  </div>

                  <div class="page-main-banner-content-list">
                    <h1 class="title">Framer Development</h1>
                    <div class="large-text content">
                      <p class="text">
                        Design‑driven marketing sites in Framer with delightful
                        interactions, clean structure, and CMS‑ready content.
                        We transform approved designs or create from scratch,
                        ensuring smooth animations and consistent component
                        systems.
                      </p>
                      <p class="text">
                        We craft pixel‑perfect, SEO‑friendly Framer sites that
                        are easy to update and optimized for conversions with
                        proper sitemap/meta setup, fast page speed, form and
                        CRM integrations, and localization when needed.
                      </p>
                    </div>
                  </div>

                  <div class="page-main-banner-content-list">
                    <h1 class="title">WordPress Development</h1>
                    <div class="large-text content">
                      <p class="text">
                        Custom WordPress themes, plugins, and headless setups
                        with performance, accessibility, and SEO at the core.
                        We build Gutenberg‑ready themes, extend WooCommerce,
                        and integrate CRMs, marketing tools, and external APIs.
                      </p>
                      <p class="text">
                        We deliver scalable CMS solutions that are simple to
                        manage and built for growth, backed by hardened
                        security, caching, backups, and clear editorial
                        workflows for non‑technical teams.
                      </p>
                    </div>
                  </div>

                  <div class="page-main-banner-content-list">
                    <h1 class="title">UI/UX Design</h1>
                    <div class="large-text content">
                      <p class="text">
                        Research‑led product and marketing design: discovery
                        workshops, user flows, information architecture,
                        wireframes, and interactive prototypes that reduce risk
                        before development begins.
                      </p>
                      <p class="text">
                        We create conversion‑focused experiences that look great
                        and feel effortless across devices, following WCAG
                        accessibility, heuristic best practices, and design
                        systems for consistent, scalable UI.
                      </p>
                    </div>
                  </div>
                </Slider>
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
                    src={shopifyExperts}
                    alt="we certified icon"
                    width="275px"
                    height="60px"
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
            <BannerContactForm />
          </div>
        </div>
      </section>

      <section
        id="brand_carousel"
        className="brand-carousel-section section-spacing"
      >
        <div className="container">
          <BrandsLogoSlider />
        </div>
      </section>

      <section class="why-you-choose-us-section section-inner-spacing section-spacing">
        <div class="container">
          <div class="section-head-part">
            <h1 class="section-head-title h2">
              Why Should You Choose CodeLoom Nexus as Your eCommerce
              Development Company?
            </h1>
            <p class="section-head-content">
              CodeLoom Nexus is one of the{" "}
              <strong>best Shopify development companies,</strong> offering
              prominent eCommerce development services for all types of
              industries. We hold extensive expertise in Shopify store
              development that possesses best-in-class features and
              functionalities. Here are some of the top reasons to choose CodeLoom Nexus for your eCommerce website development or Shopify
              store development services.
            </p>
          </div>

          <div class="row row-mb-minus justify-content-center">
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    class="icon"
                    loading="lazy"
                    width="70px"
                    height="70px"
                    src={onTime}
                    alt="On Time Delivery icon"
                  />
                </div>
                <h2 class="h6 title">On-Time Delivery</h2>
                <p class="medium-text text">
                  We understand all the specific requirements of the client and
                  use modern tools &amp; well-designed strategies. We delivered
                  projects/task on promised timelines.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    class="icon"
                    loading="lazy"
                    width="70px"
                    height="70px"
                    src={coding}
                    alt="Range of Shopify Developers icon"
                  />
                </div>
                <h2 class="h6 title">Range of Shopify Developers</h2>
                <p class="medium-text text">
                  We offer a range of Shopify developers like beginners, Shopify
                  developers, senior Shopify developers, Shopify plugin
                  developers, offshore developers, remote developers, and scrum
                  teams.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    class="icon"
                    loading="lazy"
                    width="70px"
                    height="70px"
                    src={contact}
                    alt="Tech-Savy Experts icon"
                  />
                </div>
                <h2 class="h6 title">Tech-Savy Experts</h2>
                <p class="medium-text text">
                  We have a team of certified Shopify experts who use their
                  years of expertise and core technical knowledge to build fully
                  responsive and optimized Shopify stores.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    class="icon"
                    loading="lazy"
                    width="70px"
                    height="70px"
                    src={settings}
                    alt="Latest Tools &amp; Techniques icon"
                  />
                </div>
                <h2 class="h6 title">Latest Tools &amp; Techniques</h2>
                <p class="medium-text text">
                  <strong>Our Shopify developers</strong> are committed to
                  following the best quality standards and modern testing tools
                  for lightening fast, bug-free Shopify development.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    class="icon"
                    loading="lazy"
                    width="70px"
                    height="70px"
                    src={maintenance}
                    alt="Support and Maintenance icon"
                  />
                </div>
                <h2 class="h6 title">Support and Maintenance</h2>
                <p class="medium-text text">
                  We are the most trusted Shopify development company among our
                  clients for providing excellent customer support, maintenance,
                  and upgrade service after launch.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="icon-and-text-grid-section section-spacing">
        <div class="container">
          <div class="section-head-part">
            <h2 class="section-head-title">
              What Data Can CodeLoom Nexus Migrate from Wix to Shopify?
            </h2>
            <p class="section-head-content">
              We offer seamless and secure data migration from Wix to Shopify
              without interfering existing store's salesforce services and zero
              data loss. Our Shopify migration developers make it effortless to
              migrate Wix to Shopify eCommerce platform, ensuring solid data
              security and zero downtime.
            </p>
          </div>
          <div class="row row-mb-minus justify-content-center">
            <div class="col-xl-4 col-lg-4 col-sm-6 col-spacing-bottom">
              <div class="icon-and-text-grid-back">
                <div class="icon-part">
                  <img
                    loading="lazy"
                    src={customersDescriptionsBlue}
                    width="70px"
                    height="70px"
                    alt="Customers Descriptions"
                  />
                </div>
                <h3 class="h6 title">Customers Descriptions</h3>
                <p class="medium-text">
                  Customer's name, Sign-up details, Credit &amp; Debit card
                  details, emails, billing &amp; shipping address, etc.
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-sm-6 col-spacing-bottom">
              <div class="icon-and-text-grid-back">
                <div class="icon-part">
                  <img
                    loading="lazy"
                    src={orderAttributesBlue}
                    width="70px"
                    height="70px"
                    alt="Order Attributes"
                  />
                </div>
                <h3 class="h6 title">Order Attributes</h3>
                <p class="medium-text">
                  Shipping &amp; Billing address, Order details (date, order
                  status, product details, history), customer details, etc.
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-sm-6 col-spacing-bottom">
              <div class="icon-and-text-grid-back">
                <div class="icon-part">
                  <img
                    loading="lazy"
                    src={whatDataMigrate7}
                    width="70px"
                    height="70px"
                    alt="Content"
                  />
                </div>
                <h3 class="h6 title">Content</h3>
                <p class="medium-text">
                  SEO URLs, migrate blog posts and all descriptions.
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-sm-6 col-spacing-bottom">
              <div class="icon-and-text-grid-back">
                <div class="icon-part">
                  <img
                    loading="lazy"
                    src={whatDataMigrate6}
                    width="70px"
                    height="70px"
                    alt="Reviews and Coupons"
                  />
                </div>
                <h3 class="h6 title">Reviews and Coupons</h3>
                <p class="medium-text">
                  Offer date, expiration date, coupons name, coupon codes, and
                  many more.
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-sm-6 col-spacing-bottom">
              <div class="icon-and-text-grid-back">
                <div class="icon-part">
                  <img
                    loading="lazy"
                    src={productAttributesBlue}
                    width="70px"
                    height="70px"
                    alt="Product Attributes"
                  />
                </div>
                <h3 class="h6 title">Product Attributes</h3>
                <p class="medium-text">
                  Product weight, product images, product names, product
                  details, cost, etc.
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-sm-6 col-spacing-bottom">
              <div class="icon-and-text-grid-back">
                <div class="icon-part">
                  <img
                    loading="lazy"
                    src={cmsPageBlue}
                    width="70px"
                    height="70px"
                    alt="CMS Pages"
                  />
                </div>
                <h3 class="h6 title">CMS Pages</h3>
                <p class="medium-text">
                  Home page, Static pages like the About Us page, and Privacy
                  policy page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="services-list-section section-spacing">
        <div class="container">
          <div class="section-head-part">
            <h2 class="section-head-title">Core Services We Offer</h2>
            <p class="section-head-content">
              Partner with us for a comprehensive suite of development and
              design services delivered with flexible, transparent pricing.
            </p>
          </div>

          <div class="row services-main-wrap services-list row-mb-minus justify-content-center">
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    class="icon normal-image"
                    loading="lazy"
                    width="84px"
                    height="84px"
                    src={store}
                    alt="Shopify app and store development"
                  />
                  <img
                    class="icon hover-image"
                    loading="lazy"
                    width="84px"
                    height="84px"
                    src={storeHover}
                    alt="Shopify app and store development"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Shopify App &amp; Store Development</h3>
                  <p class="text">
                    Custom Shopify themes, apps, and secure integrations to
                    launch and scale a high‑converting eCommerce storefront.
                  </p>
                </div>
                <Link
                  to="/shopify-store-setup"
                  class="link-with-icon large-link"
                >
                  Explore Service
                  <svg
                    class="link-icon"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.67661 0.175647C6.44221 -0.058549 6.06273 -0.058549 5.82893 0.175647C5.59452 0.409849 5.59452 0.788739 5.82893 1.02234L9.68969 4.8852C9.87853 5.07388 9.74485 5.40083 9.47807 5.40083H0.609686C0.278764 5.40083 0 5.66465 0 5.99528V5.99762C0 6.32826 0.278764 6.5988 0.609686 6.5988H9.47807C9.74485 6.5988 9.87853 6.91697 9.68969 7.10565L5.81034 10.9799C5.57594 11.2135 5.57594 11.5913 5.81034 11.8255C6.04414 12.0591 6.42362 12.0585 6.65803 11.8243L11.6488 6.83787C12.1171 6.37007 12.1171 5.61111 11.6488 5.14331C11.5403 5.03549 6.5681 0.0672371 6.67661 0.175647Z"
                      fill="#330C79"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    class="icon normal-image"
                    loading="lazy"
                    width="84px"
                    height="84px"
                    src={store}
                    alt="Full-Stack Web Development"
                  />
                  <img
                    class="icon hover-image"
                    loading="lazy"
                    width="84px"
                    height="84px"
                    src={storeHover}
                    alt="Full-Stack Web Development"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Full‑Stack Web Development</h3>
                  <p class="text">
                    React, Next.js, Node.js, and modern APIs—clean
                    architecture, testing, and CI/CD for scalable, reliable web
                    products.
                  </p>
                </div>
                <Link to="/custom-web-development" class="link-with-icon large-link">
                  Explore Service
                  <svg
                    class="link-icon"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.67661 0.175647C6.44221 -0.058549 6.06273 -0.058549 5.82893 0.175647C5.59452 0.409849 5.59452 0.788739 5.82893 1.02234L9.68969 4.8852C9.87853 5.07388 9.74485 5.40083 9.47807 5.40083H0.609686C0.278764 5.40083 0 5.66465 0 5.99528V5.99762C0 6.32826 0.278764 6.5988 0.609686 6.5988H9.47807C9.74485 6.5988 9.87853 6.91697 9.68969 7.10565L5.81034 10.9799C5.57594 11.2135 5.57594 11.5913 5.81034 11.8255C6.04414 12.0591 6.42362 12.0585 6.65803 11.8243L11.6488 6.83787C12.1171 6.37007 12.1171 5.61111 11.6488 5.14331C11.5403 5.03549 6.5681 0.0672371 6.67661 0.175647Z"
                      fill="#330C79"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    class="icon normal-image"
                    loading="lazy"
                    width="85px"
                    height="68px"
                    src={shopifyApp}
                    alt="Framer Development"
                  />
                  <img
                    class="icon hover-image"
                    loading="lazy"
                    width="85px"
                    height="68px"
                    src={shopifyAppHover}
                    alt="Framer Development"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Framer Development</h3>
                  <p class="text">
                    Design‑driven Framer sites with smooth interactions,
                    CMS‑ready content, and SEO foundations to accelerate
                    marketing.
                  </p>
                </div>
                <Link to="/framer-development" class="link-with-icon large-link">
                  Explore Service
                  <svg
                    class="link-icon"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.67661 0.175647C6.44221 -0.058549 6.06273 -0.058549 5.82893 0.175647C5.59452 0.409849 5.59452 0.788739 5.82893 1.02234L9.68969 4.8852C9.87853 5.07388 9.74485 5.40083 9.47807 5.40083H0.609686C0.278764 5.40083 0 5.66465 0 5.99528V5.99762C0 6.32826 0.278764 6.5988 0.609686 6.5988H9.47807C9.74485 6.5988 9.87853 6.91697 9.68969 7.10565L5.81034 10.9799C5.57594 11.2135 5.57594 11.5913 5.81034 11.8255C6.04414 12.0591 6.42362 12.0585 6.65803 11.8243L11.6488 6.83787C12.1171 6.37007 12.1171 5.61111 11.6488 5.14331C11.5403 5.03549 6.5681 0.0672371 6.67661 0.175647Z"
                      fill="#330C79"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    class="icon normal-image"
                    loading="lazy"
                    width="65px"
                    height="86px"
                    src={shopifyMobileApp}
                    alt="Webflow Development"
                  />
                  <img
                    class="icon hover-image"
                    loading="lazy"
                    width="65px"
                    height="86px"
                    src={shopifyMobileAppHover}
                    alt="Webflow Development"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Webflow Development</h3>
                  <p class="text">
                    Custom Webflow builds, CMS setups, and component libraries
                    for fast, maintainable, conversion‑ready websites.
                  </p>
                </div>
                <Link to="/webflow-development" class="link-with-icon large-link">
                  Explore Service
                  <svg
                    class="link-icon"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.67661 0.175647C6.44221 -0.058549 6.06273 -0.058549 5.82893 0.175647C5.59452 0.409849 5.59452 0.788739 5.82893 1.02234L9.68969 4.8852C9.87853 5.07388 9.74485 5.40083 9.47807 5.40083H0.609686C0.278764 5.40083 0 5.66465 0 5.99528V5.99762C0 6.32826 0.278764 6.5988 0.609686 6.5988H9.47807C9.74485 6.5988 9.87853 6.91697 9.68969 7.10565L5.81034 10.9799C5.57594 11.2135 5.57594 11.5913 5.81034 11.8255C6.04414 12.0591 6.42362 12.0585 6.65803 11.8243L11.6488 6.83787C12.1171 6.37007 12.1171 5.61111 11.6488 5.14331C11.5403 5.03549 6.5681 0.0672371 6.67661 0.175647Z"
                      fill="#330C79"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    class="icon normal-image"
                    loading="lazy"
                    width="84px"
                    height="74px"
                    src={marketplace}
                    alt="WordPress Development"
                  />
                  <img
                    class="icon hover-image"
                    loading="lazy"
                    width="84px"
                    height="74px"
                    src={marketplaceHover}
                    alt="WordPress Development"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">WordPress Development</h3>
                  <p class="text">
                    Themes, plugins, and WooCommerce with SEO, accessibility,
                    and performance best practices for a scalable CMS.
                  </p>
                </div>
                <Link to="/wordpress-development" class="link-with-icon large-link">
                  Explore Service
                  <svg
                    class="link-icon"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.67661 0.175647C6.44221 -0.058549 6.06273 -0.058549 5.82893 0.175647C5.59452 0.409849 5.59452 0.788739 5.82893 1.02234L9.68969 4.8852C9.87853 5.07388 9.74485 5.40083 9.47807 5.40083H0.609686C0.278764 5.40083 0 5.66465 0 5.99528V5.99762C0 6.32826 0.278764 6.5988 0.609686 6.5988H9.47807C9.74485 6.5988 9.87853 6.91697 9.68969 7.10565L5.81034 10.9799C5.57594 11.2135 5.57594 11.5913 5.81034 11.8255C6.04414 12.0591 6.42362 12.0585 6.65803 11.8243L11.6488 6.83787C12.1171 6.37007 12.1171 5.61111 11.6488 5.14331C11.5403 5.03549 6.5681 0.0672371 6.67661 0.175647Z"
                      fill="#330C79"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    class="icon normal-image"
                    loading="lazy"
                    width="79px"
                    height="86px"
                    src={shopifyMigrations}
                    alt="UI/UX Design"
                  />
                  <img
                    class="icon hover-image"
                    loading="lazy"
                    width="79px"
                    height="86px"
                    src={shopifyMigrationsHover}
                    alt="UI/UX Design"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">UI/UX Design</h3>
                  <p class="text">
                    Research‑led product and marketing design—user flows,
                    wireframes, interactive prototypes, and polished interfaces
                    that convert.
                  </p>
                </div>
                <Link to="/ui-ux-design" class="link-with-icon large-link">
                  Explore Service
                  <svg
                    class="link-icon"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.67661 0.175647C6.44221 -0.058549 6.06273 -0.058549 5.82893 0.175647C5.59452 0.409849 5.59452 0.788739 5.82893 1.02234L9.68969 4.8852C9.87853 5.07388 9.74485 5.40083 9.47807 5.40083H0.609686C0.278764 5.40083 0 5.66465 0 5.99528V5.99762C0 6.32826 0.278764 6.5988 0.609686 6.5988H9.47807C9.74485 6.5988 9.87853 6.91697 9.68969 7.10565L5.81034 10.9799C5.57594 11.2135 5.57594 11.5913 5.81034 11.8255C6.04414 12.0591 6.42362 12.0585 6.65803 11.8243L11.6488 6.83787C12.1171 6.37007 12.1171 5.61111 11.6488 5.14331C11.5403 5.03549 6.5681 0.0672371 6.67661 0.175647Z"
                      fill="#330C79"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    class="icon normal-image"
                    loading="lazy"
                    width="84px"
                    height="84px"
                    src={marketing}
                    alt="Digital Marketing"
                  />
                  <img
                    class="icon hover-image"
                    loading="lazy"
                    width="84px"
                    height="84px"
                    src={marketingHover}
                    alt="Digital Marketing"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Digital Marketing</h3>
                  <p class="text">
                    Performance SEO, content, and paid growth to increase
                    qualified traffic and turn visitors into customers.
                  </p>
                </div>
                <Link to="/shopify-seo" class="link-with-icon large-link">
                  Explore Service
                  <svg
                    class="link-icon"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.67661 0.175647C6.44221 -0.058549 6.06273 -0.058549 5.82893 0.175647C5.59452 0.409849 5.59452 0.788739 5.82893 1.02234L9.68969 4.8852C9.87853 5.07388 9.74485 5.40083 9.47807 5.40083H0.609686C0.278764 5.40083 0 5.66465 0 5.99528V5.99762C0 6.32826 0.278764 6.5988 0.609686 6.5988H9.47807C9.74485 6.5988 9.87853 6.91697 9.68969 7.10565L5.81034 10.9799C5.57594 11.2135 5.57594 11.5913 5.81034 11.8255C6.04414 12.0591 6.42362 12.0585 6.65803 11.8243L11.6488 6.83787C12.1171 6.37007 12.1171 5.61111 11.6488 5.14331C11.5403 5.03549 6.5681 0.0672371 6.67661 0.175647Z"
                      fill="#330C79"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    class="icon normal-image"
                    loading="lazy"
                    width="84px"
                    height="84px"
                    src={marketing}
                    alt="Digital Marketing"
                  />
                  <img
                    class="icon hover-image"
                    loading="lazy"
                    width="84px"
                    height="84px"
                    src={marketingHover}
                    alt="Digital Marketing"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Digital Marketing</h3>
                  <p class="text">
                    We have helped many businesses to transform their online
                    Shopify store into a potential Shopify marketplace. We have
                    successfully empowered numerous business owners to boost
                    their profit by trunking multiple Shopify stores with their
                    Shopify marketplace.
                  </p>
                </div>
                <Link to="/shopify-seo" class="link-with-icon large-link">
                  Explore Service
                  <svg
                    class="link-icon"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.67661 0.175647C6.44221 -0.058549 6.06273 -0.058549 5.82893 0.175647C5.59452 0.409849 5.59452 0.788739 5.82893 1.02234L9.68969 4.8852C9.87853 5.07388 9.74485 5.40083 9.47807 5.40083H0.609686C0.278764 5.40083 0 5.66465 0 5.99528V5.99762C0 6.32826 0.278764 6.5988 0.609686 6.5988H9.47807C9.74485 6.5988 9.87853 6.91697 9.68969 7.10565L5.81034 10.9799C5.57594 11.2135 5.57594 11.5913 5.81034 11.8255C6.04414 12.0591 6.42362 12.0585 6.65803 11.8243L11.6488 6.83787C12.1171 6.37007 12.1171 5.61111 11.6488 5.14331C11.5403 5.03549 6.5681 0.0672371 6.67661 0.175647Z"
                      fill="#330C79"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    class="icon normal-image"
                    loading="lazy"
                    width="84px"
                    height="84px"
                    src={integrations}
                    alt="Digital Marketing"
                  />
                  <img
                    class="icon hover-image"
                    loading="lazy"
                    width="84px"
                    height="84px"
                    src={integrationsHover}
                    alt="Digital Marketing"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Integrations</h3>
                  <p class="text">
                    CodeLoom Nexus specializes in integration services like
                    CRM integration, payment gateway integration, third-party
                    API integration, dropshipping app integration, and many
                    more. Our certified Shopify experts guarantee operational
                    cost reduction and accelerated ROI.
                  </p>
                </div>
                <Link
                  to="/shopify-integration"
                  class="link-with-icon large-link"
                >
                  Explore Service
                  <svg
                    class="link-icon"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.67661 0.175647C6.44221 -0.058549 6.06273 -0.058549 5.82893 0.175647C5.59452 0.409849 5.59452 0.788739 5.82893 1.02234L9.68969 4.8852C9.87853 5.07388 9.74485 5.40083 9.47807 5.40083H0.609686C0.278764 5.40083 0 5.66465 0 5.99528V5.99762C0 6.32826 0.278764 6.5988 0.609686 6.5988H9.47807C9.74485 6.5988 9.87853 6.91697 9.68969 7.10565L5.81034 10.9799C5.57594 11.2135 5.57594 11.5913 5.81034 11.8255C6.04414 12.0591 6.42362 12.0585 6.65803 11.8243L11.6488 6.83787C12.1171 6.37007 12.1171 5.61111 11.6488 5.14331C11.5403 5.03549 6.5681 0.0672371 6.67661 0.175647Z"
                      fill="#330C79"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="talk-to-exp-section section-spacing">
        <div class="container">
          <div class="talk-to-exp-background">
            <div class="line-background">
              <img
                src={backgroundLine}
                alt="banner line"
                width="708px"
                height="283px"
                loading="lazy"
              />
            </div>
            <div class="talk-to-exp-content d-flex align-items-center">
              <div class="talk-to-exp-title">
                <h3 class="title">
                  Searching for <span>High-quality Web Developers?</span> We
                  Got You Covered!
                </h3>
              </div>
              <div class="talk-to-exp-profile d-flex align-items-center">
                <div class="talk-to-exp-image">
                  <img
                    width="132px"
                    height="132px"
                    loading="lazy"
                    src={umar}
                    alt="profile pic"
                  />
                </div>
                <div class="talk-to-exp-info">
                  <div class="expert-name">
                    <h4 class="title">
                      <span>Umar</span> Draz
                    </h4>
                    <span class="designation medium-text">
                      (Co-founder & Chief Technology Officer)
                    </span>
                  </div>
                  <p>
                    You can reach out to our certified experts for your
                    project-related queries like development process, costing,
                    and project completion timeline. Get Started Now and Save
                    75% of your development cost with our dedicated scrum team.
                  </p>

                  <Link to="/contact-us" class="button white-button">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section
        id="choose_shopify_experts"
        class="section-spacing choose-shopify-experts-and-video"
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-12 col-spacing-bottom-tablet">
              <div class="section-head-part">
                <h2 class="section-head-title">
                  Why Should You Choose Our Shopify Experts for Your Project?
                </h2>
                <p class="section-head-content">
                  Successfully developed more than 200+ Shopify and Shopify Plus
                  projects and more than 20+ Shopify apps along with excellent
                  support services.
                </p>
              </div>

              <div class="video-part">
                <div class="video-wrapper">
                  <div
                    class="video-image-play-button"
                    data-video="1"
                    style={{
                      backgroundImage:
                        `url(${ccvideoThumbnail})`,
                      backgroundRepeat: "no-repeat;",
                    }}
                  >
                    <span class="playbutton">
                      <img
                        width="525px"
                        height="295px"
                        loading="lazy"
                        src={videoPlayButton}
                        alt="video play"
                      />
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-12">
              <div class="right-content">
                <h3 class="title">
                  Our dedicated Shopify developers specialize in developing
                  robust, feature-rich online Shopify stores.
                </h3>
                <p>
                  Our official Shopify experts are familiar with all the
                  trending ins and outs of Shopify, which helps them to have a
                  keen eye for delivering a dynamic user experience. Our Shopify
                  developers are highly skilled &amp; trusted and use a radical
                  approach to understand all your specific requirements.
                  Afterward, they implement trending tools and the best
                  strategies to bring your idea to life quickly and efficiently.
                </p>
                <p>
                  Here are the top reasons to choose our Shopify experts to
                  avail world-class Shopify development solutions.
                </p>
                <ul class="list-point-with-border">
                  <li>
                    Our certified Shopify experts analyze your business
                    requirements carefully to build a robust Shopify store
                    beyond your expectations.
                  </li>
                  <li>
                    You can leverage numerous benefits like extensive expertise,
                    top strategies, strong technical background, and the latest
                    tools just by choosing our Shopify developers.
                  </li>
                  <li>
                    Maintain complete transparency throughout the development
                    process.
                  </li>
                  <li>
                    Constantly delivers high-quality SEO-rich Shopify stores.
                  </li>
                  <li>
                    Great command over third-party integrations that can help
                    your online business expansion and sales growth.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="eCommerce_marketplace"
        class="section-spacing eCommerce-marketplace-section"
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7 col-md-12 col-spacing-bottom-tablet">
              <div class="left-content">
                <div class="section-head-part">
                  <h2 class="section-head-title title">
                    Feel Like an <span>eCommerce Marketplace King</span>
                    and Rule The Industry with Our Custom Shopify Services!
                  </h2>
                </div>
                <ul class="custom-list">
                  <li>
                    <span>Fast loading</span>{" "}
                    <strong class="equel-icon">Enhanced brand identity</strong>
                  </li>
                  <li>
                    <span>Interactive UI/UX</span>{" "}
                    <strong class="equel-icon">More customer engagement</strong>
                  </li>
                  <li>
                    <span>Unique features</span>{" "}
                    <strong class="equel-icon">
                      More customer conversion rate
                    </strong>
                  </li>
                </ul>
                <p>
                  Enhanced brand identity + More customer engagement + More
                  customer conversion rate =
                  <strong>Skyrocketing sales growth.</strong> Our custom Shopify
                  development services are the only way to avail the benefits
                  mentioned above at a time.
                </p>
                <ul class="list-point-with-border">
                  <li>Shopify Plus Checkout Customization</li>
                  <li>Technical Execution Of eCommerce Optimizations</li>
                  <li>Shopify Plus development services</li>
                  <li>CRM / ERP With Shopify Website Integration</li>
                  <li>Shopify Shopping Cart Customization</li>
                  <li>Proactive Maintenance Plans</li>
                </ul>
              </div>
            </div>

            <div class="col-lg-5 col-md-12">
              <div class="image">
                <img
                  width="474px"
                  height="402px"
                  src={ecommerceMarketplaceKing}
                  loading="lazy"
                  alt="eCommerce marketplace"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="hire-official-Shopify-experts-banner section-spacing">
        <div class="container">
          <div class="hire-official-Shopify-experts-banner-back">
            <h2 class="title">
              <span>Tailor-Made Shopify</span> Development Services
            </h2>
            <p class="text">
              Harness the Power of Digital Transformation to Convert Your Idea
              into a Driving Business Force
            </p>
            <a href="contact-us.html" class="button">
              Hire Official Shopify Experts
            </a>
            <img
              src={shopifyLogo}
              alt="Shopify logo"
              width="159px"
              height="159px"
              class="shopify-logo-banner"
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <section
        id="workflow_section"
        class="workflow-section section-spacing section-inner-spacing"
      >
        <div class="container">
          <div class="section-head-part">
            <h2 class="section-head-title">
              Our Strategic Workflow for Shopify Store Maintenance
            </h2>
            <p class="section-head-content">
              We have powered all sizes of businesses to keep their online
              Shopify store in topnotch condition with our comprehensive
              maintenance services.
            </p>
          </div>

          <div class="workflow-step">
            <div class="workflow-step-wrap row row-mb-minus justify-content-center">
              <div class="workflow-single col-md-4 col-sm-6 col-spacing-bottom">
                <div class="workflow-single-back">
                  <div class="image">
                    <img
                      class="icon"
                      width="85px"
                      height="85px"
                      src={discover1}
                      alt="Discuss Project Requirements"
                      loading="lazy"
                    />
                  </div>
                  <span class="workflow-count">01</span>
                  <h3 class="h5 title">Discovery &amp; Planning</h3>
                  <ul class="medium-text workflow-content">
                    <li>
                      Our Shopify developers interact with clients to understand
                      what exactly they are expecting.
                    </li>
                    <li>
                      After understanding clients' specific requirements, we
                      prepare strategic planning for an uninterrupted
                      development process.
                    </li>
                    <li>
                      It helps to deliver final results as per customer
                      requirements in no time.
                    </li>
                  </ul>
                </div>
              </div>

              <div class="workflow-single col-md-4 col-sm-6 col-spacing-bottom">
                <div class="workflow-single-back">
                  <div class="image">
                    <img
                      class="icon"
                      width="85px"
                      height="85px"
                      src={maintenance1}
                      alt="Store Maintenance &amp; QA"
                      loading="lazy"
                    />
                  </div>
                  <span class="workflow-count">02</span>
                  <h3 class="h5 title">Store Maintenance &amp; QA</h3>
                  <ul class="medium-text workflow-content">
                    <li>
                      After analyzing clients' specific requirements, our
                      Shopify experts follow strategic planning and their strong
                      technical expertise to provide complete endto-end
                      solutions as per client requirements.
                    </li>
                    <li>
                      Before delivering a final outcome for UAT, our QA
                      professional confirms the quality of the store by
                      performing rigid quality testing.
                    </li>
                  </ul>
                </div>
              </div>

              <div class="workflow-single col-md-4 col-sm-6 col-spacing-bottom">
                <div class="workflow-single-back">
                  <div class="image">
                    <img
                      class="icon"
                      width="85px"
                      height="85px"
                      src={startup2}
                      alt="UAT &amp; Deploy"
                      loading="lazy"
                    />
                  </div>
                  <span class="workflow-count">03</span>
                  <h3 class="h5 title">UAT &amp; Deploy</h3>
                  <ul class="medium-text workflow-content">
                    <li>
                      After successful QA testing, we deliver the product for
                      UAT to verify end-to-end functionality from a client or
                      end-user side.
                    </li>
                    <li>
                      After getting approval from the client, the Shopify store
                      is ready to launch.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="workflow_section_two"
        class="workflow-section section-spacing"
      >
        <div class="container">
          <div class="section-head-part">
            <h2 class="section-head-title">
              Our Agile Development Workflow to Cater Your Convenience
            </h2>
            <p class="section-head-content">
              As a leading eCommerce development company, our Shopify developers
              are committed to follow a comprehensive yet effective development
              process. It ensures bug-free, efficient, yet quick Shopify
              development.
            </p>
          </div>

          <div class="workflow-step workflow-small">
            <div class="workflow-step-wrap row-mb-minus">
              <div class="workflow-single col-spacing-bottom">
                <div class="workflow-single-back">
                  <div class="image">
                    <img
                      class="icon"
                      loading="lazy"
                      width="70px"
                      height="70px"
                      src={conversation}
                      alt="Discuss Project Requirements"
                    />
                  </div>
                  <span class="workflow-count">01</span>
                  <h3 class="h6 title">Discuss Project Requirements</h3>
                  <ul class="small-text workflow-content">
                    <li>
                      Our Shopify experts discuss with clients to discover what
                      are the exact project requirements.
                    </li>
                  </ul>
                </div>
              </div>

              <div class="workflow-single col-spacing-bottom">
                <div class="workflow-single-back">
                  <div class="image">
                    <img
                      class="icon"
                      loading="lazy"
                      width="70px"
                      height="70px"
                      src={planing}
                      alt="Planning"
                    />
                  </div>
                  <span class="workflow-count">02</span>
                  <h3 class="h6 title">Planning</h3>
                  <ul class="small-text workflow-content">
                    <li>
                      After knowing clients' detailed requirements, we design
                      strategic planning for an uninterrupted development
                      process. It enables us to deliver the final product that
                      meets customers' unique requirements quickly.
                    </li>
                  </ul>
                </div>
              </div>

              <div class="workflow-single col-spacing-bottom">
                <div class="workflow-single-back">
                  <div class="image">
                    <img
                      class="icon"
                      loading="lazy"
                      width="70px"
                      height="70px"
                      src={webDesign1}
                      alt="Designing &amp; Development"
                    />
                  </div>
                  <span class="workflow-count">03</span>
                  <h3 class="h6 title">Designing &amp; Development</h3>
                  <ul class="small-text workflow-content">
                    <li>
                      Our Shopify developers use extensive expertise background
                      and modern tools &amp; technology to provide a dynamic
                      user experience and sales-driven store.
                    </li>
                  </ul>
                </div>
              </div>

              <div class="workflow-single col-spacing-bottom">
                <div class="workflow-single-back">
                  <div class="image">
                    <img
                      class="icon"
                      loading="lazy"
                      width="70px"
                      height="70px"
                      src={test}
                      alt="QA Testing"
                    />
                  </div>
                  <span class="workflow-count">04</span>
                  <h3 class="h6 title">QA Testing</h3>
                  <ul class="small-text workflow-content">
                    <li>
                      Before releasing a final product for UAT, our QA
                      specialist ensure the quality of the website by performing
                      rigorous quality testing.
                    </li>
                  </ul>
                </div>
              </div>

              <div class="workflow-single col-spacing-bottom">
                <div class="workflow-single-back">
                  <div class="image">
                    <img
                      class="icon"
                      loading="lazy"
                      width="70px"
                      height="70px"
                      src={startup2}
                      alt="UAT &amp; Deploy"
                    />
                  </div>
                  <span class="workflow-count">05</span>
                  <h3 class="h6 title">UAT &amp; Deploy</h3>
                  <ul class="small-text workflow-content">
                    <li>
                      After successful QA testing, we go for UAT to validate
                      end-to-end functionality from a customer or end-user side.
                      After getting approval from the end-user, the Shopify
                      store is ready to deploy.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CaseStudy removed from homepage as requested */}

    

      <CategorySlider />

      <section
        id="company_info_number"
        class="company-info-number section-spacing"
      >
        <div class="container">
          <div class="section-head-part">
            <h3 class="title h5">Numbers Speaks Everything</h3>
          </div>
          <div class="row">
            <div class="col-md-3 company-info-list-main">
              <div class="company-info-list">
                <span class="number h1">200 +</span>
                <span class="company-info-label large-text">
                  Shopify Projects Empowered
                </span>
              </div>
            </div>
            <div class="col-md-3 company-info-list-main">
              <div class="company-info-list">
                <span class="number h1">38 +</span>
                <span class="company-info-label large-text">
                  Global Ventures Served
                </span>
              </div>
            </div>
            <div class="col-md-3 company-info-list-main">
              <div class="company-info-list">
                <span class="number h1">8 +</span>
                <span class="company-info-label large-text">
                  Years of Expertise
                </span>
              </div>
            </div>
            <div class="col-md-3 company-info-list-main">
              <div class="company-info-list">
                <span class="number h1">1K +</span>
                <span class="company-info-label large-text">
                  Best Tech-sassy Professionals
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq />

      <LetDiscuss />
    </div>
  );
};

export default Homepage;
