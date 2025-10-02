import React from "react";
import BrandsLogoSlider from "../Components/BrandsLogoSlider";
import Freelancing from "../Components/Freelancing";
import Faq from "../Components/Faq";
import LetDiscuss from "../Components/LetDiscuss";
import BannerContactForm from "../Components/BannerContactForm";
import { NavLink } from "react-router-dom";

// Import images
import shopifyExperts from "../assets/images/Shopify-experts.png";
import experience from "../assets/images/experience.png";
import contact from "../assets/images/contact.png";
import blendedShopifyStore from "../assets/images/Blended-Shopify-store.png";
import team from "../assets/images/team.png";
import speedTest from "../assets/images/speed-test.png";
import flexibleHiringModels from "../assets/images/Flexible-hiring-models.png";
import fastestTimeLaunch from "../assets/images/Fastest-time-launch.png";
import customerService from "../assets/images/customer-service.png";
import conversation from "../assets/images/conversation.png";
import planing from "../assets/images/planing.png";
import webDesign1 from "../assets/images/web-design 1.png";
import test from "../assets/images/test.png";
import startup2 from "../assets/images/startup 2.png";
import store from "../assets/images/store.png";
import storeHover from "../assets/images/store-hover.png";
import supportMaintenance from "../assets/images/Support-Maintenance.png";
import supportMaintenanceHover from "../assets/images/Support-Maintenance-hover.png";
import storeCustomizations from "../assets/images/store-customizations.png";
import storeCustomizationsHover from "../assets/images/store-customizations-hover.png";
import script from "../assets/images/script.png";
import scriptHover from "../assets/images/script-hover.png";
import checkoutCustomize from "../assets/images/checkout-customize.png";
import checkoutHover from "../assets/images/checkout-hover.png";
import b2b from "../assets/images/b2b.png";
import b2bHover from "../assets/images/b2b-hover.png";
import erp from "../assets/images/erp.png";
import erpHover from "../assets/images/erp-hover.png";
import warehouse from "../assets/images/warehouse.png";
import warehouseHover from "../assets/images/warehouse-hover.png";
import limitlessStaffAccounts from "../assets/images/Limitless-staff-accounts.png";
import dedicatedLaunchEngineer from "../assets/images/Dedicated-launch-engineer.png";
import exclusiveShopifyApps from "../assets/images/Exclusive-Shopify-apps.png";
import customizableCheckoutNew from "../assets/images/Customizable-checkout-new.png";
import supportApi from "../assets/images/support-api.png";
import discount from "../assets/images/discount.png";
import numerousThemesForYourAccount from "../assets/images/Numerous-themes-for-your-account.png";
import wholesale from "../assets/images/wholesale.png";

const ShopifyPlus = () => {
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
                <span class="medium-text">Shopify Plus Store Development</span>
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
                    Top-rated Shopify Plus Development Company
                  </h1>
                  <div class="large-text content">
                    <p class="text">
                      Are you planning to hire a{" "}
                      <strong>Shopify Plus store development company</strong>?
                    </p>
                    <p class="text">
                      We are a{" "}
                      <strong>leading Shopify Plus development agency</strong>{" "}
                      across the world with{" "}
                      <strong>best-in-class Shopify Plus developers.</strong>{" "}
                      Our passionate <strong>Shopify Plus experts</strong>{" "}
                      specialize in delivering conversion-focused online Shopify
                      stores that can generate high-volume eCommerce business
                      for you.
                    </p>
                    <p class="text">
                      CodeLoom Nexus have impressed the world with our
                      exceptional end-to-end Shopify Plus store development
                      services. If you're looking to develop a Shopify Plus
                      store, we have the skills and expertise to deliver
                      outstanding results.
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
        id="brand_carousel"
        className="brand-carousel-section"
      >
        <div className="container">
          <BrandsLogoSlider />
        </div>
      </section>

      <section class="why-you-choose-us-section section-inner-spacing section-spacing">
        <div class="container">
          <div class="section-head-part">
            <h2 class="section-head-title">
              Reasons to Choose CodeLoom Nexus for Shopify Plus Store
              Development
            </h2>
            <p class="section-head-content">
              CodeLoom Nexus have enabled 200+ top brands to unleash the
              potential of online retail capabilities. We thrive in providing
              all Shopify Plus development services, including Shopify Plus app
              development for startups, medium-scale, and largest bedding
              brands.
            </p>
          </div>

          <div class="row row-mb-minus justify-content-center">
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={experience}
                    width="70px"
                    height="70px"
                    alt="On Time Delivery icon"
                  />
                </div>
                <h3 class="h6 title">8+ Years of Unparalleled Experience</h3>
                <p class="medium-text text">
                  CodeLoom Nexus have been catering to all sizes of
                  businesses across diverse industries to deliver revolutionary
                  Shopify Plus development solutions for more than 8 years.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={contact}
                    width="70px"
                    height="70px"
                    alt="Range of Shopify Developers icon"
                  />
                </div>
                <h3 class="h6 title">
                  Tech-sassy &amp; Passionate Shopify Plus Developers
                </h3>
                <p class="medium-text text">
                  Our certified Shopify Plus developers bring years of extensive
                  expertise and a keen eye for designing, developing, deploying,
                  and managing Shopify Plus eCommerce stores.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={blendedShopifyStore}
                    width="70px"
                    height="70px"
                    alt="Tech-Savy Experts icon"
                  />
                </div>
                <h3 class="h6 title">Blended Shopify Store</h3>
                <p class="medium-text text">
                  As a leading Shopify Plus development services provider, we
                  are well-versed in delivering proficient blended versions of
                  Shopify Plus stores that allow you to target both B2B and DTC
                  audiences.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={team}
                    width="70px"
                    height="70px"
                    alt="Latest Tools &amp; Techniques icon"
                  />
                </div>
                <h3 class="h6 title">An Array of Shopify Plus Developers</h3>
                <p class="medium-text text">
                  We have a large pool of dedicated Shopify Plus developers
                  in-house, including designers, developers, account managers,
                  etc. They follow the streamlined workflow and ensure an
                  exceptional Shopify Plus development.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={speedTest}
                    width="70px"
                    height="70px"
                    alt="Support and Maintenance icon"
                  />
                </div>
                <h3 class="h6 title">High-performing Shopify Plus Store</h3>
                <p class="medium-text text">
                  We are committed to delivering a high-performing
                  mobile-oriented Shopify Plus store with approx 99% of uptime,
                  detail reporting, 10K+ checkouts a min., and robust in-built
                  security.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={flexibleHiringModels}
                    width="70px"
                    height="70px"
                    alt="Support and Maintenance icon"
                  />
                </div>
                <h3 class="h6 title">Flexible Hiring Models</h3>
                <p class="medium-text text">
                  We offer flexible hiring models to cater to your diverse
                  requirements and make Shopify Plus development cost
                  convenient. Our flexible hiring models include 1.
                  Round-the-clock 2. Part-time 3. Hourly 4. Project Based
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={fastestTimeLaunch}
                    width="70px"
                    height="70px"
                    alt="Support and Maintenance icon"
                  />
                </div>
                <h3 class="h6 title">Fastest Time to Launch</h3>
                <p class="medium-text text">
                  Our client-centric Shopify Plus experts are bound to follow a
                  well-designed development process, trending tools, and
                  technology to help clients reach the market quickly and
                  efficiently.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={customerService}
                    width="70px"
                    height="70px"
                    alt="Support and Maintenance icon"
                  />
                </div>
                <h3 class="h6 title">Post-delivery Customer Support</h3>
                <p class="medium-text text">
                  As a responsible Shopify Plus development partner, we are
                  committed to providing the best support, maintenance, and
                  store management service even after deploying the product.
                </p>
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
              Our Agile Development Workflow to Serve Your Convenience
            </h2>
            <p class="section-head-content">
              As a leading eCommerce development company, our top Shopify Plus
              developers are committed to following a comprehensive yet
              effective development process. It ensures bug-free, efficient, yet
              quick Shopify development.
            </p>
          </div>

          <div class="workflow-step workflow-small">
            <div class="workflow-step-wrap row-mb-minus">
              <div class="workflow-single col-spacing-bottom">
                <div class="workflow-single-back">
                  <div class="image">
                    <img
                      loading="lazy"
                      class="icon"
                      src={conversation}
                      width="50px"
                      height="50px"
                      alt="Discuss Project Requirements"
                    />
                  </div>
                  <span class="workflow-count">01</span>
                  <h3 class="h6 title">Discuss Project Requirements</h3>
                  <ul class="small-text workflow-content">
                    <li>
                      Our Shopify Plus experts discuss with clients to discover
                      what are the exact project requirements.
                    </li>
                  </ul>
                </div>
              </div>

              <div class="workflow-single col-spacing-bottom">
                <div class="workflow-single-back">
                  <div class="image">
                    <img
                      loading="lazy"
                      class="icon"
                      src={planing}
                      width="50px"
                      height="50px"
                      alt="Planning"
                    />
                  </div>
                  <span class="workflow-count">02</span>
                  <h3 class="h6 title">Planning</h3>
                  <ul class="small-text workflow-content">
                    <li>
                      After knowing clients' specific requirements, we design
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
                      loading="lazy"
                      class="icon"
                      src={webDesign1}
                      width="50px"
                      height="50px"
                      alt="Designing &amp; Development"
                    />
                  </div>
                  <span class="workflow-count">03</span>
                  <h3 class="h6 title">Designing &amp; Development</h3>
                  <ul class="small-text workflow-content">
                    <li>
                      Our Shopify developers use extensive expertise, strong
                      technical background and modern tools &amp; technology to
                      provide a dynamic user experience and sales-driven store.
                    </li>
                  </ul>
                </div>
              </div>

              <div class="workflow-single col-spacing-bottom">
                <div class="workflow-single-back">
                  <div class="image">
                    <img
                      loading="lazy"
                      class="icon"
                      src={test}
                      width="50px"
                      height="50px"
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
                      loading="lazy"
                      class="icon"
                      src={startup2}
                      width="50px"
                      height="50px"
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

      <section class="services-list-section section-spacing">
        <div class="container">
          <div class="section-head-part">
            <h2 class="section-head-title">
              Robust Shopify Plus Development Services We Offer
            </h2>
            <p class="section-head-content">
              We thrive in delivering all types of Shopify Plus development
              services for diverse industries. Let's take a lighter look at the
              services we offer.
            </p>
          </div>

          <div class="row services-main-wrap services-list row-mb-minus justify-content-center">
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon normal-image"
                    width="84px"
                    height="84px"
                    src={store}
                    alt="Shopify store development"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    width="84px"
                    height="84px"
                    src={storeHover}
                    alt="Shopify store development"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">
                    Shopify Plus Store Setup With Custom Theme
                  </h3>
                  <p class="text">
                    We specialize in designing, developing, deploying, and
                    managing the Shopify Plus store with custom themes and
                    personalized online user experiences that reflect your brand
                    identity.
                  </p>
                </div>
                <a href="#" class="link-with-icon large-link">
                  Read More
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
                </a>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon normal-image"
                    width="84px"
                    height="84px"
                    src={store}
                    alt="Shopfiy Plus Store Development"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    width="84px"
                    height="84px"
                    src={storeHover}
                    alt="Shopfiy Plus Store Development"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">
                    Shopify Plus Store Setup With Custom Design
                  </h3>
                  <p class="text">
                    Our top Shopify Plus developers excel In developing Shopify
                    Plus store setups with custom designs to provide a
                    customized user experience that boosts client conversion
                    ratio and sales.
                  </p>
                </div>
                <a href="#" class="link-with-icon large-link">
                  Read More
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
                </a>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon normal-image"
                    width="84px"
                    height="84px"
                    src={supportMaintenance}
                    alt="Shopify Plus store Support &amp; Maintenance"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    width="84px"
                    height="84px"
                    src={supportMaintenanceHover}
                    alt="Shopify Plus store Support &amp; Maintenance"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">
                    Shopify Plus Store Support &amp; Maintenance
                  </h3>
                  <p class="text">
                    As a top-notch Shopify Plus development company, we are
                    committed to performing maintenance and support plans
                    regularly to ensure clients' Shopify Plus store works
                    smoothly and efficiently.
                  </p>
                </div>
                <a href="#" class="link-with-icon large-link">
                  Read More
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
                </a>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon normal-image"
                    width="84px"
                    height="84px"
                    src={storeCustomizations}
                    alt="Shopify Plus store customizations"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    width="84px"
                    height="84px"
                    src={storeCustomizationsHover}
                    alt="Shopify Plus store customizations"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Shopify Plus Store Customizations</h3>
                  <p class="text">
                    CodeLoom Nexus' team of Shopify Plus developers goes
                    beyond the scope of client expectations to deliver robust
                    features and functionality without restricting clients to
                    expect simple changes and updates.
                  </p>
                </div>
                <a href="#" class="link-with-icon large-link">
                  Read More
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
                </a>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon normal-image"
                    width="84px"
                    height="84px"
                    src={script}
                    alt="Shopify Plus scripts"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    width="84px"
                    height="84px"
                    src={scriptHover}
                    alt="Shopify Plus scripts"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Shopify Plus Scripts</h3>
                  <p class="text">
                    Our official Shopify Plus experts use their extensive
                    expertise, the best training, and skills to customize the
                    Shopify Plus script. We have successfully delivered Shopify
                    Plus scripts like BOGO, Free Gifts, Bulk Discounts, Modify
                    Shipping Rate Price, Cart Coupons, etc., to multiple
                    well-known brands.
                  </p>
                </div>
                <a href="#" class="link-with-icon large-link">
                  Read More
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
                </a>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon normal-image"
                    width="84px"
                    height="84px"
                    src={checkoutCustomize}
                    alt="Shopify Plus checkout customizations"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    width="84px"
                    height="84px"
                    src={checkoutHover}
                    alt="Shopify Plus checkout customizations"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Shopify Plus Checkout Customizations</h3>
                  <p class="text">
                    Our exceptional Shopify Plus checkout customization service
                    will help you reduce cart abandonment, improve customer
                    experience &amp; conversion rates and build a strong market
                    presence.
                  </p>
                </div>
                <a href="#" class="link-with-icon large-link">
                  Read More
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
                </a>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon normal-image"
                    width="84px"
                    height="84px"
                    src={b2b}
                    alt="D2C &amp; B2B Blended Solutions"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    width="84px"
                    height="84px"
                    src={b2bHover}
                    alt="D2C &amp; B2B Blended Solutions"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">
                    Shopify Plus D2C &amp; B2B Blended Solutions
                  </h3>
                  <p class="text">
                    As a top Shopify Plus development agency, we maintain a
                    proven record of delivering powerful blended versions of
                    Shopify Plus stores that allow clients to target B2B and DTC
                    audiences.
                  </p>
                </div>
                <a href="#" class="link-with-icon large-link">
                  Read More
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
                </a>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon normal-image"
                    width="84px"
                    height="84px"
                    src={erp}
                    alt="Shopify Plus with ERP integrations"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    width="84px"
                    height="84px"
                    src={erpHover}
                    alt="Shopify Plus with ERP integrations"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Shopify Plus With ERP Integrations</h3>
                  <p class="text">
                    We offer potential integration of ERP with Shopify Plus that
                    enables you to improve order processing efficiency and
                    manage inventory which can save time and lower operational
                    costs.
                  </p>
                </div>
                <a href="#" class="link-with-icon large-link">
                  Read More
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
                </a>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon normal-image"
                    width="84px"
                    height="84px"
                    src={warehouse}
                    alt="Shopify Plus with warehouse integrations"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    width="84px"
                    height="84px"
                    src={warehouseHover}
                    alt="Shopify Plus with warehouse integrations"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">
                    Shopify Plus With Warehouse Integrations
                  </h3>
                  <p class="text">
                    Being the best Shopify Plus development company, we offer a
                    seamless integration of warehouses with Shopify Plus that
                    helps to accurately maintain the inventory level and
                    limitless reporting capabilities.{" "}
                  </p>
                </div>
                <a href="#" class="link-with-icon large-link">
                  Read More
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
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="explore-amazing" class="explore-amazing section-spacing">
        <div class="container">
          <div class="row">
            <div class="col-md-6 align-items-center">
              <div class="explore-amazing-left section-head-part">
                <h2 class="h2 explore-amazing-heading section-head-title">
                  Explore the Most Significant Benefits of Shopify Plus
                  eCommerce Development
                </h2>
                <p class="explore-amazing-heading-sub-desc section-head-content">
                  Shopify Plus website development allows high-volume businesses
                  to scale effortlessly and fulfill the skyrocketing demands of
                  different client bases. It enables unlimited possibilities of
                  flexibility for customization. Here are the top benefits of
                  Shopify Plus store development.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="explore-amazing-right">
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <img
                      loading="lazy"
                      src={limitlessStaffAccounts}
                      width="40px"
                      height="40px"
                      alt="Limitless staff accounts"
                    />
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      Limitless Staff Accounts
                    </h3>
                    <p class="explore-amazing-desc">
                      Shopify Plus eCommerce development platform allows
                      business owners to create limitless staff accounts so that
                      they can access to manage inventory, updates, product
                      pricing, and many more.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <img
                      loading="lazy"
                      src={dedicatedLaunchEngineer}
                      width="40px"
                      height="40px"
                      alt="Dedicated launch engineer"
                    />
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      Dedicated Launch Engineer
                    </h3>
                    <p class="explore-amazing-desc">
                      Shopify Plus offers a dedicated launch engineer for each
                      store to support clients through the entire store setup or
                      migration process. Also, a dedicated account manager can
                      be a helping hand for third-party integrations.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <img
                      loading="lazy"
                      src={exclusiveShopifyApps}
                      width="40px"
                      height="40px"
                      alt="Exclusive Shopify apps"
                    />
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      Exclusive Shopify Apps
                    </h3>
                    <p class="explore-amazing-desc">
                      As an eCommerce Shopify Plus store owner, you can leverage
                      numerous advanced Shopify apps that will help you automate
                      client-oriented tasks and office-related processes within
                      the store only.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <img
                      loading="lazy"
                      src={customizableCheckoutNew}
                      width="40px"
                      height="40px"
                      alt="Customizable checkout"
                    />
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      Customizable Checkout
                    </h3>
                    <p class="explore-amazing-desc">
                      Shopify Plus checkout customization will allow business
                      owners to internationally sell products or services
                      easily, with greater flexibility over pricing and
                      custom-built user experience.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <img
                      loading="lazy"
                      src={supportApi}
                      width="40px"
                      height="40px"
                      alt="Supports additional API"
                    />
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      Supports Additional API
                    </h3>
                    <p class="explore-amazing-desc">
                      Shopify Plus allows additional API resources that help
                      user to integrate with custom Shopify apps. Shopify Plus
                      vendors can leverage the benefits of API resources like
                      GiftCard, Multipass, GraphQL, etc.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <img
                      loading="lazy"
                      src={discount}
                      width="40px"
                      height="40px"
                      alt="Enhanced discounts flexibility"
                    />
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      Enhanced Discounts Flexibility
                    </h3>
                    <p class="explore-amazing-desc">
                      Shopify Plus platform's scripting feature allows more
                      flexibility over discounts. Its discount API allows
                      vendors to manage discount coupons, including creating,
                      enabling, or disabling them.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <img
                      loading="lazy"
                      src={numerousThemesForYourAccount}
                      width="40px"
                      height="40px"
                      alt="Numerous themes for your account"
                    />
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      Numerous Themes for Your Account
                    </h3>
                    <p class="explore-amazing-desc">
                      Shopify Plus allows you to try out more than 100 new
                      customizable themes for your account. This feature will
                      help you run specific codes without any third-party tools.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <img
                      loading="lazy"
                      src={wholesale}
                      alt="Wholesale"
                      width="40px"
                      height="40px"
                    />
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">Wholesale Channels</h3>
                    <p class="explore-amazing-desc">
                      Shopify Plus' wholesale channel helps vendors to build a
                      particular storefront with password security. That means
                      you can sell products at a customized or premium price for
                      DTC and B2B businesses from a single platform only.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Freelancing />

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
                <span class="number h1">70 +</span>
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

export default ShopifyPlus;
