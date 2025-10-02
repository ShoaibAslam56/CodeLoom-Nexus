import React, { useState } from "react";
import { Link } from "react-router-dom";
import CountdownTimer from "../Components/CountdownTimer";
import DevelopmentProcess from "../Components/DevelopmentProcess";

// Import images
import blackleaves from "../assets/images/blackleaves.png";
import shopifyLogo from "../assets/images/shopify-logo.png";
import image13 from "../assets/images/image 13.png";
import image14 from "../assets/images/image 14.png";
import image23 from "../assets/images/image 23.png";
import jeClientSatisfactionIcon from "../assets/images/je-client-satisfaction-icon.png";
import jeDiverseTechnicalSkillsIcon from "../assets/images/je-diverse-technical-skills-icon.png";
import jeSustainableDevelopmentPract from "../assets/images/je-sustainable-development-pract.png";
import jeOnDeliveryTimeIcon from "../assets/images/je-on-delivery-time-icon.png";
import jePortfolioDiversityIcon from "../assets/images/je-portfolio-diversity-icon.png";
import jeCrossPlatformCompatibility from "../assets/images/je-cross-platform-compatibility.png";
import jeScalabilityIcon from "../assets/images/je-scalability-icon.png";
import jeSecurityComplianceIcon from "../assets/images/je-security-compliance-icon.png";
import jeSeoPerformanceIcon from "../assets/images/je-seo-performance-icon.png";
import jePositiveAppStoreRatingsIc from "../assets/images/je-positive-app-store-ratings-ic.png";
import jeQualityAssuranceIcon from "../assets/images/je-quality-assurance-icon.png";
import jePostLaunchSupportIcon from "../assets/images/je-post-launch-support-icon.png";
const BuildStore = () => {
  const faqs = [
    {
      question: "Do I need any special accounts?",
      answer:
        "No, we will create your store on Shopify partner program and once the store is done then we will transfer the ownership of that store to you.",
    },
    {
      question: "What if I already have an online store?",
      answer:
        "If you have a store, we’ll access it through our partner program via collaborator access, optimize and revamp it to achieve a branded look, and ensure it’s fully ready for advertising.",
    },
    {
      question: "How many product listings will I get?",
      answer:
        "5-10 products. More products can be listed on your request with some additional charges.",
    },
    {
      question: "Are there any additional fees?",
      answer:
        "No there is no additional fee, you just have to pay for your store and we will build a complete ready-to-sell store for you.",
    },
    {
      question: "Do you advertise the store for me?",
      answer:
        "Yes, our performance marketing experts will handle advertising on your request once the store is ready.",
    },
    {
      question: "What if I don't have a store yet?",
      answer:
        "No problem! We’ll create a professional Shopify store for you under our partnership program. Once the store is ready, we’ll transfer ownership to you.",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const ICONS = [
    {
      src: jeClientSatisfactionIcon,
      alt: "Client Satisfaction",
      text: "Client Satisfaction",
    },
    {
      src: jeDiverseTechnicalSkillsIcon,
      alt: "Diverse Technical Skills",
      text: "Diverse Technical Skills",
    },
    {
      src: jeSustainableDevelopmentPract,
      alt: "Sustainable Development Practices",
      text: "Sustainable Development Practices",
    },
    {
      src: jeOnDeliveryTimeIcon,
      alt: "On-Time Delivery",
      text: "On-Time Delivery",
    },
    {
      src: jePortfolioDiversityIcon,
      alt: "Portfolio Diversity",
      text: "Portfolio Diversity",
    },
    {
      src: jeCrossPlatformCompatibility,
      alt: "Cross Platform Compatibility",
      text: "Cross Platform Compatibility",
    },
    {
      src: jeScalabilityIcon,
      alt: "Scalability",
      text: "Scalability",
    },
    {
      src: jeSecurityComplianceIcon,
      alt: "Security Compliance",
      text: "Security Compliance",
    },
    {
      src: jeSeoPerformanceIcon,
      alt: "SEO Performance",
      text: "SEO Performance",
    },
    {
      src: jePositiveAppStoreRatingsIc,
      alt: "Positive App Store Ratings",
      text: "Positive App Store Ratings",
    },
    {
      src: jeQualityAssuranceIcon,
      alt: "Quality Assurance",
      text: "Quality Assurance",
    },
    {
      src: jePostLaunchSupportIcon,
      alt: "Post Launch Support",
      text: "Post Launch Support",
    },
  ];

  const steps = [
    {
      number: 1,
      heading: "Initial Consultation",
      description:
        "We discuss your project requirements and goals which help us understand your requirements to align our approach accordingly.",
    },
    {
      number: 2,
      heading: "Project Scoping",
      description:
        "Next step is defining project scope, outlining features and functionalities which serve as a roadmap for the development process.",
    },
    {
      number: 3,
      heading: "Prototype Development",
      description:
        "We develop prototypes or wireframes before full scale development begins that gives a clear picture of the project's structure and functionality.",
    },
    {
      number: 4,
      heading: "Development",
      description:
        "Our frontend developers create responsive and interactive user interfaces while scalable server-side architectures are developed by our backend team.",
    },
    {
      number: 5,
      heading: "Integration",
      description:
        "Rigorous testing is conducted including integration testing and user acceptance testing to ensure a bug free, high performing product.",
    },
    {
      number: 6,
      heading: "Quality Assurance",
      description:
        "Our QA team reviews the project to identify any issues in usability, functionality and compatibility to deliver the final product.",
    },
    {
      number: 7,
      heading: "Deployment",
      description:
        "The final step involves smooth deployment of your project to the hosting environment, ensuring proper optimization for launch.",
    },
    {
      number: 8,
      heading: "Post Launch Support",
      description:
        "We provide ongoing support and maintenance post launch to ensure your website or app performs optimally and evolves constantly.",
    },
  ];
  return (
    <>
      <section
        id="page_banner"
        class="section-spacing eCommerce-marketplace-section page-main-banner homepage-banner"
        style={{ background: "none", paddingBottom: "20px" }}
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6 col-md-12 col-spacing-bottom-tablet">
              <div class="left-content">
                <div class="section-head-part">
                  <h2 class="section-head-title title">
                    <span>Launch Your</span> Dream Store
                  </h2>
                </div>
                <p>
                  We specialize in developing e-commerce websites for jewelry
                  businesses by combining an in-depth understanding of the
                  industry along with our technical expertise. Our websites are
                  designed to showcase the intricate details of your products
                  that help in customer engagement and brand building. Our
                  jewelry store development services also integrate e-commerce
                  functionality, secure payment gateways and inventory
                  management systems prioritizing user experience. Mobile
                  responsiveness and SEO optimization further helps in
                  establishing a strong digital presence that directly impacts
                  sales in this ever competitive space.
                </p>
                <div class="view-all-blog">
                  <Link
                    to="/lets-team-up"
                    style={{
                      fontSize: "34px !important",
                      borderRadius: "12px",
                    }}
                    class="button storePricing"
                    tabindex="0"
                  >
                   USD 800/month
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-lg-6 col-md-12">
              <div class="image">
                <img
                  loading="lazy"
                  src={blackleaves}
                  alt="Blackleaves"
                  width="770px"
                  height="599px"
                />
              </div>
              <CountdownTimer />
            </div>
          </div>
        </div>
      </section>
      <div class="container">
        <div className="row justify-content-center">

          <div class="hire-official-Shopify-experts-banner section-spacing">
            <div class="container">
              <div class="hire-official-Shopify-experts-banner-back">
                <h2 class="title">
                  <span>Get your own Stunning Shopify Store Done</span> Professionally Without Any Hidden Cost
                </h2>
                <p class="text">
                  Give us 48 hours – and your Personalized store will be Ready
                </p>
                <Link to="/lets-team-up" class="button">
                  Get Your Store
                </Link>
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
        </div>
      </div>
      <section
        id="icon_with_point"
        className="icon-with-points section-spacing"
      >
        <div className="container">
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

          <div className="row row-mb-minus">
            {ICONS.map((icon, index) => (
              <div
                key={index}
                className="col-xl-3 col-md-4 col-sm-6 col-spacing-bottom"
              >
                <div className="icon-with-point-single">
                  <div className="icon-part">
                    <div className="icon-part-inner">
                      <img
                        src={icon.src}
                        alt={icon.alt}
                        width="40"
                        height="40"
                      />
                    </div>
                  </div>
                  <div className="point-content">
                    <p className="point">{icon.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <DevelopmentProcess heading="How We Do That?" steps={steps} />

      <section class="accelerate-your-business-main section-spacing">
        <div class="container">
          <div class="section-head-part">
            <h4 class="section-head-title h2">
              Accelerate your business growth
            </h4>
            <p class="section-head-content">
              We turn your ideas into reality with our customized development
              services that sets you apart from competition
            </p>
          </div>
          <div class="accelerate-your-business-slider slick-initialized slick-slider slick-dotted">
            <div class="slick-list draggable">
              <div
                class="slick-track"
                style={{
                  opacity: 1,
                  width: "1110px",
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              >
                <div
                  class="industries-we-work-single slick-slide slick-current slick-active"
                  data-slick-index="0"
                  aria-hidden="false"
                  tabindex="0"
                  role="tabpanel"
                  id="slick-slide00"
                  aria-describedby="slick-slide-control00"
                  style={{ width: "370px" }}
                >
                  <div class="industries-we-work-inner">
                    <div class="industries-image">
                      <img
                        loading="lazy"
                        src={image13}
                        alt="Jewelry Website Development"
                        width="273px"
                        height="180px"
                      />
                    </div>
                    <div class="industries-name h6">
                      Jewelry Website Development
                    </div>
                  </div>
                </div>
                <div
                  class="industries-we-work-single slick-slide slick-active"
                  data-slick-index="1"
                  aria-hidden="false"
                  tabindex="0"
                  role="tabpanel"
                  id="slick-slide01"
                  aria-describedby="slick-slide-control01"
                  style={{ width: "370px" }}
                >
                  <div class="industries-we-work-inner">
                    <div class="industries-image">
                      <img
                        loading="lazy"
                        src={image14}
                        alt="Beauty &amp; Wellness Store Development"
                        width="273px"
                        height="180px"
                      />
                    </div>
                    <div class="industries-name h6">
                      Beauty &amp; Wellness Store Development
                    </div>
                  </div>
                </div>
                <div
                  class="industries-we-work-single slick-slide slick-active"
                  data-slick-index="2"
                  aria-hidden="false"
                  tabindex="0"
                  role="tabpanel"
                  id="slick-slide02"
                  aria-describedby="slick-slide-control02"
                  style={{ width: "370px" }}
                >
                  <div class="industries-we-work-inner">
                    <div class="industries-image">
                      <img
                        loading="lazy"
                        src={image23}
                        alt="Fashion &amp; Apparel Store Development"
                        width="273px"
                        height="180px"
                      />
                    </div>
                    <div class="industries-name h6">
                      Fashion &amp; Apparel Store Development
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="business-growth-number-main">
            <div class="row row-mb-minus">
              <div class="col-xl-3 col-sm-6 col-spacing-bottom">
                <div class="business-growth-number">
                  <p class="number h4">500+</p>
                  <p class="text">Global Clients</p>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 col-spacing-bottom">
                <div class="business-growth-number">
                  <p class="number h4">24/7</p>
                  <p class="text">Customer Support</p>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 col-spacing-bottom">
                <div class="business-growth-number">
                  <p class="number h4">4.9/5</p>
                  <p class="text">Average Ratings</p>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 col-spacing-bottom">
                <div class="business-growth-number">
                  <p class="button-text h5">Get Started Now</p>
                  <Link to="/contact-us" class="button">
                    Click Here
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link to="/portfolio" class="button mt-3 view-our-portfolio-btn">
            VIEW OUR PORTFOLIO
          </Link>
        </div>
      </section>

      <section id="faq_section" class="faq-section section-spacing">
        <div class="container">
          <div class="section-head-part">
            <h2 class="section-head-title">Frequently Asked Questions</h2>
          </div>

          <div class="accordion accordion-part-inner">
            {faqs.map((faq, index) => (
              <div className="single-accordion" key={index}>
                <div className="accordion-header">
                  <button
                    className={`accordion-title h5 ${openAccordion === index ? "active" : ""}`}
                    type="button"
                    onClick={() => handleAccordionClick(index)}
                  >
                    {faq.question}
                  </button>
                </div>
                <div
                  className={`accordion-collapse ${openAccordion === index ? "open" : ""}`}
                >
                  {openAccordion === index && (
                    <div className="accordion-content">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default BuildStore;
