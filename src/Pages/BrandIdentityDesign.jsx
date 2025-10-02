import React from "react";
import Slider from "react-slick";
import { useState } from "react";
import LetDiscuss from "../Components/LetDiscuss";
import Freelancing from "../Components/Freelancing";
import Faq from "../Components/Faq";
import BannerContactForm from "../Components/BannerContactForm";
import { NavLink } from "react-router-dom";

// Import images
import coding from "../assets/images/coding.png";
import customerService from "../assets/images/customer-service.png";
import onTime from "../assets/images/on-time.png";
import seo from "../assets/images/seo.png";

// Import images - Note: These files don't exist, using placeholder

const BrandIdentityDesign = () => {
  const faqData = [
    {
      question: "What is brand identity design and why is it important?",
      answer: "Brand identity design encompasses all visual elements that represent your brand, including logos, colors, typography, and design guidelines. It's crucial for creating a consistent, memorable brand that builds trust and recognition with your audience.",
    },
    {
      question: "How long does it take to create a complete brand identity?",
      answer: "The timeline varies based on complexity. A basic brand identity might take 2-3 weeks, while a comprehensive brand system could take 4-6 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "What elements are included in a brand identity package?",
      answer: "Our brand identity packages include logo design, color palette, typography selection, brand guidelines, business cards, letterheads, and digital assets. We can also include additional materials based on your specific needs.",
    },
    {
      question: "Do you provide brand strategy along with design?",
      answer: "Yes! We believe great design starts with solid strategy. We help you define your brand positioning, target audience, and brand personality before creating the visual elements that bring your brand to life.",
    },
    {
      question: "What makes CodeLoom Nexus different from other brand identity agencies?",
      answer: "With 8+ years of experience and 200+ successful projects, we combine strategic thinking with creative design. Our team specializes in creating brand identities that not only look great but also effectively communicate your brand's values and message.",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);
  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const industriesData = [
    { name: "Startups", image: "./assets/images/startup-industry.png" },
    { name: "Technology", image: "./assets/images/tech-industry.png" },
    { name: "Healthcare", image: "./assets/images/healthcare-industry.png" },
    { name: "Education", image: "./assets/images/education-industry.png" },
    { name: "Non-profit", image: "./assets/images/nonprofit-industry.png" },
  ];

  const slideSettings = {
    dots: true,
    infinite: true,
    arrows: false,
    autoplay: true,
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
                <NavLink to="/services" class="medium-text">
                  Services
                </NavLink>
              </li>
              <li>
                <span class="medium-text">Brand Identity Design</span>
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
                    Professional Brand Identity Design Services
                  </h1>
                  <div class="large-text content">
                    <p class="text">
                      Create a powerful, cohesive brand identity that sets you apart from the competition.
                    </p>
                    <p class="text">
                      CodeLoom Nexus is a leading brand identity design agency with 8+ years of experience in creating memorable brand experiences. We specialize in developing comprehensive brand identities that not only look visually stunning but also effectively communicate your brand's values, personality, and message to your target audience.
                    </p>
                  </div>
                </div>
              </div>
              <div class="page-main-banner-company-count d-flex">
                <div class="page-main-banner-company-count-list">
                  <span class="h1 count">200+</span>
                  <span class="text count-label">
                    Brand Identities Created
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
                  Why Choose Professional Brand Identity Design?
                </h2>
                <p class="explore-amazing-heading-sub-desc section-head-content">
                  Your brand identity is the foundation of how customers perceive and interact with your business. A professionally designed brand identity creates consistency, builds trust, and helps you stand out in a crowded marketplace.
                </p>
                <p class="explore-amazing-heading-sub-desc section-head-content">
                  Here are the key benefits of choosing professional brand identity design.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="explore-amazing-right">
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <div class="white-outlined-icon">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="60" height="60" rx="12" fill="#6f42c1" stroke="#fff" stroke-width="2"/>
                        <path d="M20 20h20v20H20z" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M25 25l5 5 5-5" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M25 30l5 5 5-5" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M25 35l5 5 5-5" stroke="#fff" stroke-width="2" fill="none"/>
                        <circle cx="45" cy="25" r="3" stroke="#fff" stroke-width="2" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      Brand Consistency
                    </h3>
                    <p class="explore-amazing-desc">
                      Create a cohesive visual language across all touchpoints, ensuring your brand is instantly recognizable and memorable to your audience.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <div class="white-outlined-icon">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="60" height="60" rx="12" fill="#6f42c1" stroke="#fff" stroke-width="2"/>
                        <path d="M15 15h30v30H15z" stroke="#fff" stroke-width="2" fill="none"/>
                        <circle cx="30" cy="30" r="8" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M26 30l2 2 4-4" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M30 26l2 2 4-4" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M34 30l2 2 4-4" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M30 34l2 2 4-4" stroke="#fff" stroke-width="2" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">Competitive Advantage</h3>
                    <p class="explore-amazing-desc">
                      Stand out from competitors with a unique, professional brand identity that reflects your values and resonates with your target audience.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <div class="white-outlined-icon">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="60" height="60" rx="12" fill="#6f42c1" stroke="#fff" stroke-width="2"/>
                        <path d="M20 20h20v20H20z" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M25 25l5 5 5-5" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M25 30l5 5 5-5" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M25 35l5 5 5-5" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M35 25l5 5 5-5" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M35 30l5 5 5-5" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M35 35l5 5 5-5" stroke="#fff" stroke-width="2" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      Brand Trust
                    </h3>
                    <p class="explore-amazing-desc">
                      Build credibility and trust with your audience through a professional, well-designed brand identity that communicates quality and reliability.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-spacing bg-light service-section">
        <div class="container">
          <div class="section-head-part text-center">
            <div class="section-title-wrapper">
              <h2 class="section-head-title">Our Brand Identity Design Services</h2>
            </div>
            <p class="section-head-content">
              We offer comprehensive brand identity design services to help you create a powerful, memorable brand presence.
            </p>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="service-card">
                <div class="service-icon">
                  <div class="black-icon">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="60" height="60" rx="12" fill="#f8f9fa" stroke="#e9ecef" stroke-width="2"/>
                      <path d="M15 15h30v30H15z" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M20 20l10 10 10-10" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M20 30l10 10 10-10" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M20 40l10 10 10-10" stroke="#000" stroke-width="2" fill="none"/>
                      <circle cx="45" cy="25" r="3" stroke="#000" stroke-width="2" fill="none"/>
                    </svg>
                  </div>
                </div>
                <h3>Logo Design</h3>
                <p>Unique, memorable logos that perfectly represent your brand and work across all applications and platforms.</p>
                <div class="service-card-hover">
                  <span class="learn-more">Learn More →</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="service-card">
                <div class="service-icon">
                  <div class="black-icon">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="60" height="60" rx="12" fill="#f8f9fa" stroke="#e9ecef" stroke-width="2"/>
                      <path d="M15 15h30v30H15z" stroke="#000" stroke-width="2" fill="none"/>
                      <rect x="18" y="18" width="8" height="8" stroke="#000" stroke-width="2" fill="none"/>
                      <rect x="28" y="18" width="8" height="8" stroke="#000" stroke-width="2" fill="none"/>
                      <rect x="18" y="28" width="8" height="8" stroke="#000" stroke-width="2" fill="none"/>
                      <rect x="28" y="28" width="8" height="8" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M22 22l2 2 2-2" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M32 22l2 2 2-2" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M22 32l2 2 2-2" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M32 32l2 2 2-2" stroke="#000" stroke-width="2" fill="none"/>
                    </svg>
                  </div>
                </div>
                <h3>Brand Guidelines</h3>
                <p>Comprehensive brand guidelines that ensure consistent application of your brand across all touchpoints.</p>
                <div class="service-card-hover">
                  <span class="learn-more">Learn More →</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="service-card">
                <div class="service-icon">
                  <div class="black-icon">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="60" height="60" rx="12" fill="#f8f9fa" stroke="#e9ecef" stroke-width="2"/>
                      <path d="M15 15h30v30H15z" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M20 20l8 8" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M28 20l-8 8" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M18 18l2 2 2-2" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M18 22l2 2 2-2" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M18 26l2 2 2-2" stroke="#000" stroke-width="2" fill="none"/>
                    </svg>
                  </div>
                </div>
                <h3>Brand Collateral</h3>
                <p>Business cards, letterheads, and other essential brand materials that maintain your brand's professional appearance.</p>
                <div class="service-card-hover">
                  <span class="learn-more">Learn More →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq faqData={faqData} />
      <LetDiscuss />
      <Freelancing />
    </div>
  );
};

export default BrandIdentityDesign;
