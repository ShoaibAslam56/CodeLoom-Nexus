import React from "react";
import BannerContactForm from "../Components/BannerContactForm";
import CaseStudySlider from "../Components/CaseStudySlider";
import Freelancing from "../Components/Freelancing";
import Faq from "../Components/Faq";
import LetDiscuss from "../Components/LetDiscuss";
import { NavLink } from "react-router-dom";

// Import images
import shopifyExperts from "../assets/images/Shopify-experts.png";
import enhanceTheBusinessGrowth from "../assets/images/enhance-the-business-growth.png";

const Services = () => {
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
                <span class="medium-text">Services</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="container">
          <div class="row align-items-center">
            <div class="page-main-banner-colm col-lg-7 col-md-7">
              <div class="page-main-banner-content">
                <div class="page-main-banner-content-list">
                  <h1 class="title">Top-Notch Shopify Development Services</h1>
                  <div class="large-text content">
                    <p class="text">
                      Are you planning to convert your Shopify store into a
                      powerful selling tool?
                    </p>
                    <p class="text">
                    CodeLoom Nexus is a one-stop shop for all your dynamic
                      Shopify requirements, whether you are looking to move your
                      brick-and-mortar stores to online stores or redesign your
                      existing Shopify store. We offer fully-fledged{" "}
                      <b>Shopify website development services</b> to help
                      businesses drive crazy sales and gain maximum
                      profitability.
                    </p>
                    <p class="text">
                      Our Shopify developers invest their technical competency,
                      training skills, and the new age of technology to deliver
                      exceptional <b>Shopify development services.</b>
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

      <section class="why-you-choose-us-section section-inner-spacing section-spacing">
        <div class="container">
          <div class="section-head-part">
            <h2 class="section-head-title h3">
              Why Should You Consider Shopify Development Services?
            </h2>
            <p class="section-head-content">
              At present, more than 4.12 million people are leveraging Shopify
              development services In 175 countries. These number itself shows
              the popularity of Shopify. The reason behind this level of
              dominance is that Shopify is unparalleled in almost every aspect
              of an eCommerce store. Be it ease of usability, security,
              cost-effectiveness, market reach, or anything else, Shopify shines
              more strongly than other eCommerce development platforms.
            </p>
            <p class="section-head-content">
              Popular Shopify services enable you to embed numerous marketing
              tools on your eCommerce website and have built-in SEO features to
              sell your product on multiple sales channels. Let's get straight
              into the benefits of Shopify development services.
            </p>
          </div>

          <div class="row row-mb-minus justify-content-center">
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    width="70px"
                    height="70px"
                    src={enhanceTheBusinessGrowth}
                    alt="Enhance the Business Growth"
                  />
                </div>
                <h3 class="title h6">Enhance the Business Growth</h3>
                <p class="medium-text text">
                  Shopify migration services will enable you to scale your
                  online business as much as you imagine. It will help you
                  enhance the user experience site loading speed and accelerate
                  business growth.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    width="70px"
                    height="70px"
                    src="./assets/images/automate-business-processes.png"
                    alt="Automate Business Processes"
                  />
                </div>
                <h3 class="title h6">Automate Business Processes</h3>
                <p class="medium-text text">
                  Shopify allows you to integrate your online store with
                  multiple third-party apps, systems, and software. It enables
                  you to connect with ERP, CRM, or Shopify apps to automate your
                  business processes like order fulfillment, accounting, daily
                  operations, etc.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    width="70px"
                    height="70px"
                    src="./assets/images/minimum-efforts-maximum-effectiveness.png"
                    alt="Minimum Efforts &amp; Maximum Effectiveness"
                  />
                </div>
                <h3 class="title h6">
                  Minimum Efforts &amp; Maximum Effectiveness
                </h3>
                <p class="medium-text text">
                  Shopify store development services help businesses build
                  eCommerce websites with a minimum amount of effort and
                  configurations. It allows owners to sell any amount of
                  products or services by designing an initiative storefront to
                  connect with millions of customers globally.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    width="70px"
                    height="70px"
                    src="./assets/images/limitless-features-functionalities.png"
                    alt="Limitless Features &amp; Functionalities"
                  />
                </div>
                <h3 class="title h6">
                  Limitless Features &amp; Functionalities
                </h3>
                <p class="medium-text text">
                  You can make your Shopify store unique and more responsive
                  than competitors by adding personalized features through
                  Shopify app development. Third-party Shopify app development
                  enables you to provide a rich buying experience and scale
                  Shopify store functionalities.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    width="70px"
                    height="70px"
                    src="./assets/images/incomparable-product-management.png"
                    alt="Incomparable Product Management"
                  />
                </div>
                <h3 class="title h6">Incomparable Product Management</h3>
                <p class="medium-text text">
                  Shopify provides a built-in inventory management system to
                  help you simplify the management of a large number of
                  products. It allows you to trace the inventory, streamline
                  purchase processes, separate product customizations, etc.
                  Ultimately, this results in maximum flexibility of your online
                  store.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    width="70px"
                    height="70px"
                    src="./assets/images/enhanced-brand-identity.png"
                    alt="Enhanced Brand Identity"
                  />
                </div>
                <h3 class="title h6">Enhanced Brand Identity</h3>
                <p class="medium-text text">
                  Shopify store development offers a wide range of themes that
                  can help you showcase the nature of your business and brand
                  identity. Shopify theme customization allows you to create an
                  attractive product home page to introduce your products or
                  services aesthetically.
                </p>
              </div>
            </div>
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
                <h2 class="section-head-title h3">
                  Why Choose CodeLoom Nexus as your Shopify Development
                  Service Provider?
                </h2>
                <p class="section-head-content">
                CodeLoom Nexus is the final destination for business owners
                  who have been looking for a Shopify service provider for more
                  than 8 years. We excel in developing absolutely personalized
                  and creative eCommerce web services. We enabled our numerous
                  clients across diverse industries to drive crazy sales and
                  gain ROI with our exceptional custom Shopify development
                  services.
                </p>
                <p class="section-head-content">
                  You must bank on our team of dedicated Shopify developers to
                  leverage our mastery of Shopify eCommerce development
                  solutions. Here are some compelling reasons to choose
                  CodeLoom Nexus as your Shopify development services
                  provider.
                </p>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="image-part">
                <img
                  loading="lazy"
                  src="./assets/images/why-choose-cc.png"
                  class="image"
                  width="398px"
                  height="449px"
                  alt="Why Choose CodeLoom Nexus"
                />
              </div>
            </div>
          </div>
          <div class="image-with-full-size-content-inner">
            <ul class="correct-icon-with-border-list">
              <li>
                <h3 class="h5 title">Years of Shopify Competency</h3>
                <p>
                  Our versatile Shopify experts are well-versed with the latest
                  insights of the Shopify eCommerce development platform. We
                  bring years of core expertise in Shopify services to ensure
                  our clients stand out strongly in this crowded eCommerce
                  market.
                </p>
              </li>
              <li>
                <h3 class="h5 title">Efficient Outcomes</h3>
                <p>
                  Our adroit Shopify developers utilize the new edge of
                  technologies, advanced tools, and agile approaches to ensure
                  efficient outcomes 2X faster. It will help you increase
                  conversion rates and gain profitability.
                </p>
              </li>
              <li>
                <h3 class="h5 title">Worthwhile</h3>
                <p>
                  We have sufficient in-house resources that eliminate the
                  dependability of outsourcing developers and other tools to
                  avoid overhead expenses. Our Shopify services can save up to
                  75% of development costs.
                </p>
              </li>
              <li>
                <h3 class="h5 title">Follows Standard Coding</h3>
                <p>
                  Our Shopify experts are trained to follow W3C coding
                  standards, including code optimization techniques and code
                  coverage, to generate uniform code appearance. It helps us to
                  enhance productivity, minimize errors, reduce complexity, and
                  improve readability.
                </p>
              </li>
              <li>
                <h3 class="h5 title">Dedicated Point of Contact</h3>
                <p>
                  We offer a dedicated point of contact for your custom Shopify
                  projects to address your concerns related to the development.
                  You will be kept posted about the actual status at each stage
                  of development.
                </p>
              </li>
              <li>
                <h3 class="h5 title">Round-the-clock Customer Support</h3>
                <p>
                  As a leading Shopify development service provider, we
                  guarantee full-time assistance to our global clients according
                  to their convenience (time zone). You can connect with our
                  dedicated Shopify developers anytime for any questions you may
                  have.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section class="services-list-section section-spacing">
        <div class="container">
          <div class="section-head-part">
            <h2 class="section-head-title">
              Top-Notch Custom Shopify Development Solutions
            </h2>
            <p class="section-head-content">
              Being the best Shopify development company, we have powered
              numerous brands across diverse industries with our feature-rich,
              scalable and responsive Shopify services to stand out firmly from
              the competitors.
            </p>
          </div>

          <div class="row services-main-wrap services-list row-mb-minus justify-content-center">
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon normal-image"
                    width="83px"
                    height="84px"
                    src="./assets/images/store.png"
                    alt="Shopify Store Development"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    width="83px"
                    height="84px"
                    src="./assets/images/store-hover.png"
                    alt="Shopify Store Development"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Shopify Store Development</h3>
                  <p class="text">
                    Our official Shopify experts specialize in developing a
                    robust, intuitive, and future-ready Shopify store. Partner
                    with us to convert your brick-and-mortar stores into
                    sales-oriented Shopify stores hassle-free at the minimum
                    possible time.
                  </p>
                </div>
                <a
                  href="shopify-store-setup.php"
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
                </a>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon normal-image"
                    width="83px"
                    height="84px"
                    src="./assets/images/store.png"
                    alt="Shopify Plus Store Development"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    width="83px"
                    height="84px"
                    src="./assets/images/store-hover.png"
                    alt="Shopify Plus Store Development"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Shopify Plus Store Development</h3>
                  <p class="text">
                    As a top-notch Shopify development service provider, we
                    specialize in delivering sales-oriented Shopify Plus
                    development solutions. We can build and configure a Shopify
                    Plus store that can generate high-volume business.
                  </p>
                </div>
                <a
                  href="shopify-plus-store-development.php"
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
                </a>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon normal-image"
                    width="65px"
                    height="86px"
                    src="./assets/images/shopify-mobile-app.png"
                    alt="Shopify Mobile App Development"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    width="65px"
                    height="86px"
                    src="./assets/images/shopify-mobile-app-hover.png"
                    alt="Shopify Mobile App Development"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Shopify Mobile App Development</h3>
                  <p class="text">
                    As a proficient Shopify custom development services
                    provider, we excel in creating Shopify mobile apps that
                    enable easy data synchronization between Shopify store and
                    mobile apps. We can empower your online business with a
                    feature-rich Shopify mobile app.
                  </p>
                </div>
                <a
                  href="shopify-mobile-app-development.php"
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
                </a>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon normal-image"
                    width="83px"
                    height="84px"
                    src="./assets/images/shopify-intigration.png"
                    alt="Shopify Integration"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    width="83px"
                    height="84px"
                    src="./assets/images/shopify-intigration-hover.png"
                    alt="Shopify Integration"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Shopify Integration</h3>
                  <p class="text">
                  CodeLoom Nexus is an expert in seamlessly integrating ERP
                    systems, CRM, third-party apps, and social media platforms
                    into Shopify. Our Shopify experts are well-versed with
                    advanced tools &amp; technology to help you automate your
                    routine operations data flow and increase productivity.{" "}
                  </p>
                </div>
                <a
                  href="shopify-integration.php"
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
                    height="74px"
                    src="./assets/images/marketplace.png"
                    alt="Shopify Marketplace Development"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    width="84px"
                    height="74px"
                    src="./assets/images/marketplace-hover.png"
                    alt="Shopify Marketplace Development"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Shopify Marketplace Development</h3>
                  <p class="text">
                    We have maintained a proven record of converting Shopify
                    stores into a robust Shopify market effortlessly in no time.
                    Our developers have a great command over utilizing widgets,
                    ready-to-use templates, and themes for Smooth Shopify
                    operations.
                  </p>
                </div>
                <a
                  href="shopify-marketplace.php"
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
                </a>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon normal-image"
                    width="85px"
                    height="68px"
                    src="./assets/images/shopify-app.png"
                    alt="Shopify App Development"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    width="85px"
                    height="68px"
                    src="./assets/images/shopify-app-hover.png"
                    alt="Shopify App Development"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Shopify App Development</h3>
                  <p class="text">
                    We are experts in developing dynamic and feature-rich
                    Shopify app development services, including Private Shopify
                    App, Public Shopify App, and Custom Shopify App.
                    CodeLoom Nexus have empowered all sizes and types of
                    businesses with tailor-made Shopify apps.
                  </p>
                </div>
                <a
                  href="shopify-app-development.php"
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
                </a>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon normal-image"
                    width="79px"
                    height="86px"
                    src="./assets/images/Shopify-Migrations.png"
                    alt="Shopify Migration"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    width="79px"
                    height="86px"
                    src="./assets/images/Shopify-Migrations-hover.png"
                    alt="Shopify Migration"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Shopify Migration</h3>
                  <p class="text">
                    We guarantee effortless and secure Shopify migration service
                    with zero data loss and zero downtime. Our Shopify migration
                    experts specialize in migrating all data like product
                    categories, clients, orders, content, coupons, and CMS pages
                    to Shopify.
                  </p>
                </div>
                <a
                  href="shopify-migration.php"
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
                </a>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon normal-image"
                    width="83px"
                    height="84px"
                    src="./assets/images/Shopify-Headless-Commerce.png"
                    alt="Shopify Headless Commerce (Hydrogen)"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    width="83px"
                    height="84px"
                    src="./assets/images/Shopify-Headless-Commerce-hover.png"
                    alt="Shopify Headless Commerce (Hydrogen)"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Shopify Headless Commerce (Hydrogen)</h3>
                  <p class="text">
                    We are an experienced Shopify partner, empowering numerous
                    businesses by seamlessly transforming their digital devices
                    into a robust sales channel through Shopify headless
                    commerce with Hydrogen. Hire us and get more control over
                    developers &amp; customers.
                  </p>
                </div>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon normal-image"
                    width="83px"
                    height="84px"
                    src="./assets/images/marketing.png"
                    alt="Digital Marketing"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    width="83px"
                    height="84px"
                    src="./assets/images/marketing-hover.png"
                    alt="Digital Marketing"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Digital Marketing</h3>
                  <p class="text">
                    As an excellent digital marketing agency, we guarantee to
                    get your brand a grand reach. We offer numerous digital
                    marketing services, including On-Page SEO, Off-Page SEO,
                    Google Analytics Setup, Webmaster Setup, Page Speed
                    Optimization, and more.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CaseStudySlider />
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
    </>
  );
};

export default Services;
