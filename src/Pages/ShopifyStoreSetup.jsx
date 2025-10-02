import React from "react";
import Slider from "react-slick";
import { useState } from "react";
import LetDiscuss from "../Components/LetDiscuss";
import Freelancing from "../Components/Freelancing";
import Faq from "../Components/Faq";
import BannerContactForm from "../Components/BannerContactForm";
import { NavLink } from "react-router-dom";

// Import all images
import shopifyExperts from "../assets/images/hire-certified-shopify-expert.png";
import ecommerceMarketplaceKing from "../assets/images/eCommerce-marketplace-king.png";
import securityCompliance from "../assets/images/je-security-compliance-icon.png";
import easyInstallation from "../assets/images/easy-installation.png";
import advancedTools from "../assets/images/advanced-tools-icon.png";
import crossPlatform from "../assets/images/je-cross-platform-compatibility.png";
import customerServiceWhite from "../assets/images/customer-service-white.png";
import coding from "../assets/images/coding.png";
import experience from "../assets/images/experience.png";
import affordablePrice from "../assets/images/affordable-price.png";
import enhanceBusiness from "../assets/images/enhance-the-business-growth.png";
import customerService from "../assets/images/customer-service.png";
import onTimeDelivery from "../assets/images/je-on-delivery-time-icon.png";
import businessToBusiness from "../assets/images/business-to-business.png";
import businessToConsumer from "../assets/images/business-to-consumer.png";
import directCompany from "../assets/images/direct-company.png";
import contactBanner from "../assets/images/contact-thard-banner-img.png";
import conversation from "../assets/images/conversation.png";
import planning from "../assets/images/planing.png";
import webDesign from "../assets/images/web-design 1.png";
import test from "../assets/images/test.png";
import startup from "../assets/images/startup 2.png";
import blendedShopify from "../assets/images/Blended-Shopify-store.png";
import seoPerformance from "../assets/images/je-seo-performance-icon.png";
import integrations from "../assets/images/integrations.png";
import kclotPortfolio from "../assets/images/kclot-portfolio.png";
import gofigPortfolio from "../assets/images/gofig-portfolio.png";
import approved from "../assets/images/approved.png";
import partTime from "../assets/images/part-time.png";
import hours24 from "../assets/images/24-hours.png";
import hired from "../assets/images/hired.png";
import image13 from "../assets/images/image 13.png";
import image14 from "../assets/images/image 14.png";
import image23 from "../assets/images/image 23.png";
const ShopifyStoreSetup = () => {
  const faqData = [
    {
      question:
        "What are the different ways to customize Shopify Plus checkout?",
      answer:
        "You can customize the Shopify checkout look and feel using the checkout editor, Shopify Plus scripts, and checkout extensibility. Reach out to us for personalized checkout that matches your brand identity.",
    },
    {
      question:
        "What are the significant benefits of Shopify Plus checkout customization?",
      answer:
        "Customizing Shopify Plus checkout offers numerous benefits like a personalized checkout experience, tracking conversions, displaying products based on customers' location, loyal customer engagement, and improved conversions.",
    },
    {
      question: "Can you create Shopify Plus payment scripts?",
      answer:
        "Shopify Plus developers at CodeLoom Nexus are well-versed in creating all 3 types of scripts, including 1. line item Scripts, 2. Shipping Scripts, and 3. Payment scripts.",
    },
    {
      question:
        "Can you customize customers' account pages and order statuses?",
      answer:
        "Yes, our team of Shopify Plus experts can help you customize order status and customer account pages using checkout extensibility.",
    },
    {
      question: "Can you customize Shopify Plus checkout?",
      answer:
        "Absolutely, yes; with 8+ years of extensive expertise in core Shopify development, we can customize Shopify Plus checkout that exceeds your requirements and matches your brand identity.",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const industriesData = [
    { name: "Fashion", image: image13 },
    { name: "Cosmetic", image: image14 },
    { name: "Jewellery", image: image23 },
    { name: "Jewellery", image: image23 },
    { name: "Jewellery", image: image23 },
    // ... add more industries as needed
  ];

  const slideSettings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 2000,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
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
                <NavLink to="/shopify-store-setup" class="medium-text">
                  Services
                </NavLink>
              </li>
              <li>
                <span class="medium-text">Shopify Integration</span>
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
                    Leading Shopify Store Development Company
                  </h1>
                  <div class="large-text content">
                    <p class="text">
                      Are you looking to hire the top Shopify development
                      services to leverage the potential of online business?
                    </p>
                    <p class="text">
                      Hire official Shopify developers from CodeLoom Nexus to
                      create a powerful, intuitive, and sales-oriented Shopify
                      store. As the best Shopify development company, we have
                      powered multiple businesses by successfully converting
                      their brick-mortar stores into future-ready Shopify stores
                      in the minimum possible time.
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
                
                </a>
              </div>
            </div>
            <BannerContactForm />
          </div>
        </div>
      </section>

      <section id="explore-amazing" class="explore-amazing section-spacing">
        <div class="container">
          <div class="row">
            <div class="col-md-6 align-items-center">
              <div class="explore-amazing-left section-head-part">
                <h2 class="h2 explore-amazing-heading section-head-title">
                  Top Benefits of Choosing Shopify for Online Store Development
                </h2>
                <p class="explore-amazing-heading-sub-desc section-head-content">
                  Creating an online store from scratch is a challenging task;
                  however, Shopify's eCommerce development platform can help you
                  make it easy. More than 4.12 million websites are leveraging
                  the benefits of the Shopify platform all over the world. Hence
                  Shopify is the best for small and medium sizes of businesses
                  who are looking to scale their business with minimum efforts
                  and limited budget.{" "}
                </p>
                <p class="explore-amazing-heading-sub-desc section-head-content">
                  Here are the most significant benefits of choosing Shopify for
                  store development.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="explore-amazing-right">
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <img
                      loading="lazy"
                      src={ecommerceMarketplaceKing}
                      width="40px"
                      height="40px"
                      alt="Large Pool of Top Features"
                    />
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      Large Pool of Top Features
                    </h3>
                    <p class="explore-amazing-desc">
                      Shopify enables you to leverage unmatched features like
                      Shopify POS, Out of box SEO tools, Shopify Dropshipping,
                      Shopify Analytics, Abandoned Cart Reminders, Shopify Theme
                      Store, Payment Gateway Integrations, and many more.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <img
                      loading="lazy"
                      src={ecommerceMarketplaceKing}
                      width="40px"
                      height="40px"
                      alt="Robust Security"
                    />
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">Robust Security</h3>
                    <p class="explore-amazing-desc">
                      Shopify is most popular among business owners because of
                      the robust security it offers. Shopify is extremely good
                      for both protecting customers' sensitive data at the same
                      time easily accessible all the time.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <img
                      loading="lazy"
                      src={easyInstallation}
                      width="40px"
                      height="40px"
                      alt="Easy to Setup and Use"
                    />
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      Easy to Setup and Use
                    </h3>
                    <p class="explore-amazing-desc">
                      Another significant benefit o  src={easyInstallation}f Shopify is it very easy to
                      set up and manage. You don’t need any kind of coding
                      knowledge to customize it. Additionally, Shopify is
                      selfhosted, so as a business owner, you don't need to
                      worry about website performance and data security.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <img
                      loading="lazy"
                      src={advancedTools}
                      width="40px"
                      height="40px"
                      alt="Useful Marketing Tools"
                    />
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      Useful Marketing Tools
                    </h3>
                    <p class="explore-amazing-desc">
                      Even the basic plan of the Shopify eCommerce platform
                      offers effective and readyto-use marketing tools like
                      Shopify emails, Shopify forms, Automations, etc. As a
                      Shopify store owner, Shopify allows you to use a rapidly
                      growing collection of templates for running marketing
                      campaign that boosts sales.{" "}
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <img
                      loading="lazy"
                      src={easyInstallation}
                      width="40px"
                      height="40px"
                      alt="Mobile Responsive"
                    />
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">Mobile Responsive</h3>
                    <p class="explore-amazing-desc">
                      Number of mobile users is skyrocketing day by day. So, a
                      Mobile responsive Shopify store is a must to increase
                      customer engagement and accelerate sales. Shopify themes
                      are fully responsive, which means it enables you to build
                      a mobile-friendly Shopify store. Resulting in more
                      customers attracted to your store and increased customer
                      conversion rates.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <img
                      loading="lazy"
                      src={customerServiceWhite}
                      width="40px"
                      height="40px"
                      alt="24X7 Customer Support"
                    />
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      24X7 Customer Support
                    </h3>
                    <p class="explore-amazing-desc">
                      Shopify team of experts is always available to address
                      your queries or concern. It allows you easy access to
                      technical support through various mediums like live chat,
                      email, calls, etc. Also, joining the Shopify community on
                      social media platforms can help you get help or support
                      from the best Shopify experts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="why-you-choose-us-section section-inner-spacing section-spacing">
        <div class="container">
          <div class="section-head-part">
            <h2 class="section-head-title">
              Why Should You Choose CodeLoom Nexus for Shopify Store
              Development?
            </h2>
            <p class="section-head-content">
              Being a top-notch Shopify store development company, we have
              successfully delivered 200+ Shopify projects, including 20+
              Shopify apps globally. We guarantee robust Shopify store
              development solutions, whether it is about developing a Shopify
              store from scratch or redesigning the existing Shopify store.{" "}
            </p>
          </div>

          <div class="row row-mb-minus justify-content-center">
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={coding}
                    width="70px"
                    height="70px"
                    alt="Variety of Shopify Developers"
                  />
                </div>
                <h3 class="h6 title">Variety of Shopify Developers</h3>
                <p class="medium-text text">
                  We have a large pool of official Shopify experts, including
                  offshore developers, offshore teams, remote developers, and
                  Scrum teams who use their strong technical background,
                  training skills, and market insight for robust Shopify store
                  development.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={experience}
                    width="70px"
                    height="70px"
                    alt="8+ years of Extensive Expertise"
                  />
                </div>
                <h3 class="h6 title">8+ years of Extensive Expertise</h3>
                <p class="medium-text text">
                  As the best Shopify store development company, we have been
                  serving all sizes and types of businesses for more than 8
                  years. We have delivered masterpiece Shopify stores using
                  technical proficiency as well as an understanding of the
                  latest eCommerce market insight.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={affordablePrice}
                    width="70px"
                    height="70px"
                    alt="Affordable Price"
                  />
                </div>
                <h3 class="h6 title">Affordable Price</h3>
                <p class="medium-text text">
                  We offer best-in-market and flexible engagement plans that
                  include full-time, parttime, hourly, and project-based. You
                  can choose any hiring model according to your project
                  requirements. It will save your upfront cost by eliminating
                  excess expenses like hiring more additional Shopify
                  developers.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={enhanceBusiness}
                    width="70px"
                    height="70px"
                    alt="Deliver Success-driven eCommerce Store"
                  />
                </div>
                <h3 class="h6 title">Deliver Success-driven eCommerce Store</h3>
                <p class="medium-text text">
                  We at CodeLoom Nexus are committed to delivering an online
                  store that becomes a driving force for your sales growth. Our
                  certified Shopify developers utilize all the latest features
                  of Shopify and their creativity to create an aesthetically
                  appealing and fully functional Shopify store.
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
                    alt="Full-time Customer Assistance"
                  />
                </div>
                <h3 class="h6 title">Full-time Customer Assistance</h3>
                <p class="medium-text text">
                  As the best Shopify store development agency, we have
                  impressed our global as well as national clients by providing
                  round-the-clock assistance according to their time zone. We
                  ensure post-launch customer support and maintenance with
                  effective follow-ups and backup processes.{" "}
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={onTimeDelivery}
                    width="70px"
                    height="70px"
                    alt="Numerous Shopify development services"
                  />
                </div>
                <h3 class="h6 title">Numerous Shopify development services</h3>
                <p class="medium-text text">
                  We offer all Shopify development services that include Shopify
                  store development with a custom theme, Shopify store
                  development with custom design, redesigning, customization,
                  maintenance, speed optimization, integration, etc. All you
                  need to do is just share your specific requirement and relax;
                  we promise world-class Shopify development services.
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
              Different Types of eCommerce Websites We Develop
            </h2>
          </div>
          <div class="row row-mb-minus justify-content-center">
            <div class="col-xl-3 col-md-4 col-sm-6 col-spacing-bottom">
              <div class="icon-and-text-grid-back">
                <div class="icon-part">
                  <img
                    loading="lazy"
                    src={businessToBusiness}
                    width="70px"
                    height="70px"
                    alt="Business to Business"
                  />
                </div>
                <h3 class="h6 title">Business to Business</h3>
                <p class="medium-text">
                  If you want to sell your product or services directly to
                  businesses, our Shopify developers excel in developing B2B
                  Shopify eCommerce websites.
                </p>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 col-spacing-bottom">
              <div class="icon-and-text-grid-back">
                <div class="icon-part">
                  <img
                    loading="lazy"
                    src={businessToConsumer}
                    width="70px"
                    height="70px"
                    alt="Business to Consumer"
                  />
                </div>
                <h3 class="h6 title">Business to Consumer</h3>
                <p class="medium-text">
                  As a business owner, if you are looking to target a niche
                  audience to sell your products or services, our
                  business-to-consumer Shopify eCommerce websites are the best.
                </p>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 col-spacing-bottom">
              <div class="icon-and-text-grid-back">
                <div class="icon-part">
                  <img
                    loading="lazy"
                    src={directCompany}
                    width="70px"
                    height="70px"
                    alt="Direct to Company"
                  />
                </div>
                <h3 class="h6 title">Direct to Company</h3>
                <p class="medium-text">
                  As a manufacturer, if you want to sell your product or
                  services directly to consumers, CodeLoom Nexus can help
                  you. Our official Shopify experts specialize in developing D2C
                  Shopify eCommerce websites.
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
              Our Strategic Workflow to Serve Your Convenience
            </h2>
            <p class="section-head-content">
              As the best Shopify store development company, our highly skilled
              Shopify developers are well-versed in all trending insights of the
              Shopify eCommerce market. It ensures rapid, effective, bug-free,
              and efficient Shopify store development.
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
                      Our certified Shopify experts discuss with clients to
                      understand what are the exact project requirements.
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
                      src={planning}
                      width="50px"
                      height="50px"
                      alt="Planning"
                    />
                  </div>
                  <span class="workflow-count">02</span>
                  <h3 class="h6 title">Planning</h3>
                  <ul class="small-text workflow-content">
                    <li>
                      After knowing clients' specific requirements, we prepare
                      strategic planning for an uninterrupted online store
                      development process. It helps us to rapidly deliver the
                      final product that meets customers' unique requirements.
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
                      src={webDesign}
                      width="50px"
                      height="50px"
                      alt="Designing &amp; Development"
                    />
                  </div>
                  <span class="workflow-count">03</span>
                  <h3 class="h6 title">Designing &amp; Development</h3>
                  <ul class="small-text workflow-content">
                    <li>
                      Our passionate Shopify developers use years of experience,
                      technical background and modern tools &amp; technology to
                      deliver a future-ready Shopify store.
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
                      Before releasing a final product for UAT, our QA team
                      ensure the quality of the website by performing rigid
                      quality testing.
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
                      src={startup}
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
                      After getting approval from the end user, the Shopify
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
              Top-notch Shopify Store Development Services
            </h2>
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
                    src={blendedShopify}
                    alt="Shopify Store Setup with Dawn Theme"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    width="84px"
                    height="84px"
                    src={blendedShopify}
                    alt="Shopify Store Setup with Dawn Theme"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Shopify Store Setup with Dawn Theme</h3>
                  <p class="text">
                    As a top Shopify store development company, we offer
                    feature-rich Shopify store setup with a dawn theme. Our
                    official Shopify experts have enabled many brands to
                    leverage significant benefits of dawn themes like
                    storytelling visuals, access to the latest features, minimum
                    steps for store setup, and quick launch.{" "}
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
                    width="84px"
                    height="84px"
                    src={blendedShopify}
                    alt="Shopify Store Setup with Premium Theme"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    width="84px"
                    height="84px"
                    src={blendedShopify}
                    alt="Shopify Store Setup with Premium Theme"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">
                    Shopify Store Setup with Premium Theme
                  </h3>
                  <p class="text">
                    Professional UI/UX designers from CodeLoom Nexus makes an
                    aesthetically pleasing design that helps businesses to
                    deliver an interactive user experience to their niche
                    audience. Using these highly custom Shopify themes, our
                    Shopify developers create best-in-class feature-rich Shopify
                    stores with custom themes as per the client's requirement.
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
                    width="84px"
                    height="84px"
                    src={blendedShopify}
                    alt="Shopify Store Setup with Custom Design"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    width="84px"
                    height="84px"
                    src={blendedShopify}
                    alt="Shopify Store Setup with Custom Design"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">
                    Shopify Store Setup with Custom Design
                  </h3>
                  <p class="text">
                    A team of Shopify experts understands your specific
                    requirement in detail and follows proven strategies, and
                    uses their strong technical background to build robust
                    Shopify stores with custom design. Being the best Shopify
                    store development agency, we promise outstanding Shopify
                    store setups with a custom design.{" "}
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
                    width="84px"
                    height="84px"
                    src={blendedShopify}
                    alt="Shopify Store Redesign"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    width="84px"
                    height="84px"
                    src={blendedShopify}
                    alt="Shopify Store Redesign"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Shopify Store Redesign</h3>
                  <p class="text">
                    We at CodeLoom Nexus have helped multiple clients across
                    the globe to level up their design standards and accelerate
                    customer conversions rate. Our Shopify developers are
                    experts in redesigning existing online stores into fully
                    responsive Shopify stores that help you bring more sales,
                    get more traffic, and improve brand identity.
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
                    width="84px"
                    height="84px"
                    src={customerService}
                    alt="Shopify store Support &amp; Maintenance"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    width="84px"
                    height="84px"
                    src={customerService}
                    alt="Shopify store Support &amp; Maintenance"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">
                    Shopify store Support &amp; Maintenance
                  </h3>
                  <p class="text">
                    CodeLoom Nexus is the best Shopify store development
                    company for providing 24X7 postlaunch customer support. Our
                    Shopify developers are always ready to address errors to
                    ensure your store runs smoothly and performs well. We offer
                    an annual maintenance plan for managing and upgrading your
                    store whenever you need it.
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
                    width="84px"
                    height="84px"
                    src={seoPerformance}
                    alt="Shopify Store Site Speed Optimizations"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    width="84px"
                    height="84px"
                    src={seoPerformance}
                    alt="Shopify Store Site Speed Optimizations"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">
                    Shopify Store Site Speed Optimizations
                  </h3>
                  <p class="text">
                    As the best Shopify store development agency, our Shopify
                    developers have a great command over Shopify store site
                    speed optimizations. Our Shopify speed optimization services
                    will help you accelerate page loading speed, page
                    performance and enhance customer conversion rates. We
                    guarantee a minimum bounce rate and zero downtime.
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
                    width="84px"
                    height="84px"
                    src={integrations}
                    alt="Shopify Third-Party Apps Integrations"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    width="84px"
                    height="84px"
                    src={integrations}
                    alt="Shopify Third-Party Apps Integrations"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">
                    Shopify Third-Party Apps Integrations
                  </h3>
                  <p class="text">
                    Our team of Shopify experts specializes in Shopify
                    third-party apps integration that has helped numerous
                    clients to boost business growth. We excel in integrating
                    all types of third-party apps like Product Review, Wishlist,
                    Product Subscription, Multi Vendor Marketplace, Klaviyo,
                    product filter and search, and many more.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="our-portfolio" class="our-portfolio section-spacing">
        <div class="container">
          <div class="section-head-part">
            <h2 class="section-head-title">
              Some of Our Prominent Shopify Projects{" "}
            </h2>
            <p class="section-head-content">
              Find some of our successful Shopify store development projects
              that have powered multiple established brands to convert their
              brick-to-mortar stores to booming Shopify stores.
            </p>
          </div>
          <div class="our-portfolio-grid row row-mb-minus justify-content-center">
            <div class="our-portfolio-item col-lg-4 col-sm-6 col-spacing-bottom">
              <div class="our-portfolio-box">
                <img
                  loading="lazy"
                  src={kclotPortfolio}
                  width="373px"
                  height="500px"
                  alt="Aoklok"
                />
                <a href="https://www.aoklok.com/" target="_blank">
                  <div class="our-portfolio-content">
                    <div class="our-portfolio-details">
                      <h3 class="h3 our-portfolio-title">Aoklok</h3>
                      <p class="our-portfolio-sub-title">Web Store</p>
                      <div class="right-arrow">
                        <svg
                          width="25"
                          height="15"
                          viewBox="0 0 25 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.375 1L23.75 7.25L17.375 13.5"
                            stroke="#E94FCA"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M1 7.25H21.875"
                            stroke="#E94FCA"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div class="our-portfolio-item col-lg-4 col-sm-6 col-spacing-bottom">
              <div class="our-portfolio-box">
                <img
                  loading="lazy"
                  src={gofigPortfolio}
                  width="373px"
                  height="500px"
                  alt="Gofig"
                />
                <a href="https://gofig.in/" target="_blank">
                  <div class="our-portfolio-content">
                    <div class="our-portfolio-details">
                      <h3 class="h3 our-portfolio-title">Gofig</h3>
                      <p class="our-portfolio-sub-title">Web Store</p>
                      <div class="right-arrow">
                        <svg
                          width="25"
                          height="15"
                          viewBox="0 0 25 15"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.375 1L23.75 7.25L17.375 13.5"
                            stroke="#E94FCA"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                          <path
                            d="M1 7.25H21.875"
                            stroke="#E94FCA"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Freelancing />

      <section class="industries-we-work section-inner-spacing section-spacing mt-0">
        <div class="container">
          <div class="section-head-part">
            <h2 class="section-head-title">
              We Have Been incredibly Building for Diverse Sectors
            </h2>
          </div>

          <Slider {...slideSettings}>
            {industriesData.map((industry, index) => (
              <div key={index} className="industries-we-work-single">
                <div className="industries-we-work-inner">
                  <div className="industries-image">
                    <img
                      loading="lazy"
                      src={industry.image}
                      width="273px"
                      height="180px"
                      alt={industry.name}
                    />
                  </div>
                  <div className="industries-name h6">{industry.name}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

   

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

export default ShopifyStoreSetup;
