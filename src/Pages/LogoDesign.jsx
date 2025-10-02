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

const LogoDesign = () => {
  const faqData = [
    {
      question: "What is logo design and why is it important for my business?",
      answer: "Logo design is the process of creating a unique visual symbol that represents your brand identity. A well-designed logo helps establish brand recognition, builds trust, and communicates your company's values and personality to your audience.",
    },
    {
      question: "How long does it take to design a logo?",
      answer: "The timeline varies based on complexity and revisions. A simple logo might take 1-2 weeks, while a complex brand identity could take 3-4 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "How many logo concepts do you provide?",
      answer: "We typically provide 3-5 initial logo concepts based on your brief. From there, we refine the chosen direction through multiple revision rounds until you're completely satisfied with the final design.",
    },
    {
      question: "Do you provide logo files in different formats?",
      answer: "Yes! We deliver your logo in multiple formats including vector files (AI, EPS, SVG), high-resolution raster files (PNG, JPG), and web-optimized formats for various applications and platforms.",
    },
    {
      question: "What makes CodeLoom Nexus different from other logo design agencies?",
      answer: "With 8+ years of experience and 200+ successful projects, we combine creative design with strategic thinking. Our team specializes in creating memorable logos that not only look great but also effectively communicate your brand message.",
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
    { name: "Food & Beverage", image: "./assets/images/food-industry.png" },
    { name: "Fashion", image: "./assets/images/fashion-industry.png" },
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
                <span class="medium-text">Logo Design</span>
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
                    Professional Logo Design Services
                  </h1>
                  <div class="large-text content">
                    <p class="text">
                      Create memorable, impactful logos that perfectly represent your brand identity.
                    </p>
                    <p class="text">
                      CodeLoom Nexus is a leading logo design agency with 8+ years of experience in creating distinctive brand identities. We specialize in designing logos that not only look visually appealing but also effectively communicate your brand's values, personality, and message to your target audience.
                    </p>
                  </div>
                </div>
              </div>
              <div class="page-main-banner-company-count d-flex">
                <div class="page-main-banner-company-count-list">
                  <span class="h1 count">200+</span>
                  <span class="text count-label">
                    Logo Designs Created
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
                  Why Choose Professional Logo Design?
                </h2>
                <p class="explore-amazing-heading-sub-desc section-head-content">
                  Your logo is often the first impression customers have of your brand. A professionally designed logo can make the difference between being remembered or forgotten in today's competitive market.
                </p>
                <p class="explore-amazing-heading-sub-desc section-head-content">
                  Here are the key benefits of choosing professional logo design.
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
                        <circle cx="30" cy="30" r="8" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M26 30l2 2 4-4" stroke="#fff" stroke-width="2" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      Brand Recognition
                    </h3>
                    <p class="explore-amazing-desc">
                      A well-designed logo helps customers instantly recognize and remember your brand, building trust and loyalty over time.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <div class="white-outlined-icon">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="60" height="60" rx="12" fill="#6f42c1" stroke="#fff" stroke-width="2"/>
                        <path d="M15 15h30v30H15z" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M20 20l10 10 10-10" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M20 30l10 10 10-10" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M20 40l10 10 10-10" stroke="#fff" stroke-width="2" fill="none"/>
                        <circle cx="45" cy="25" r="3" stroke="#fff" stroke-width="2" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">Professional Appearance</h3>
                    <p class="explore-amazing-desc">
                      A professional logo conveys credibility and competence, helping you stand out from competitors and attract quality customers.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <div class="white-outlined-icon">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="60" height="60" rx="12" fill="#6f42c1" stroke="#fff" stroke-width="2"/>
                        <path d="M15 15h30v30H15z" stroke="#fff" stroke-width="2" fill="none"/>
                        <rect x="18" y="18" width="8" height="8" stroke="#fff" stroke-width="2" fill="none"/>
                        <rect x="28" y="18" width="8" height="8" stroke="#fff" stroke-width="2" fill="none"/>
                        <rect x="18" y="28" width="8" height="8" stroke="#fff" stroke-width="2" fill="none"/>
                        <rect x="28" y="28" width="8" height="8" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M22 22l2 2 2-2" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M32 22l2 2 2-2" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M22 32l2 2 2-2" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M32 32l2 2 2-2" stroke="#fff" stroke-width="2" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      Versatility
                    </h3>
                    <p class="explore-amazing-desc">
                      Professional logos are designed to work across all platforms and mediums, from business cards to billboards, ensuring consistent brand representation.
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
              <h2 class="section-head-title">Our Logo Design Services</h2>
            </div>
            <p class="section-head-content">
              We offer comprehensive logo design services to help you create memorable, impactful brand identities.
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
                <h3>Custom Logo Design</h3>
                <p>Unique, professional logos designed specifically for your brand, ensuring it stands out in your industry.</p>
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
                <h3>Logo Refresh & Redesign</h3>
                <p>Modernize existing logos while maintaining brand recognition and improving visual appeal.</p>
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
                <h3>Logo Variations</h3>
                <p>Multiple logo variations for different applications including horizontal, vertical, and icon-only versions.</p>
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

export default LogoDesign;
