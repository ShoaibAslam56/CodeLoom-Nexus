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

const WordPressDevelopment = () => {
  const faqData = [
    {
      question: "What is WordPress and why should I choose it for my website?",
      answer: "WordPress is the world's most popular content management system, powering over 40% of all websites. It's perfect for creating blogs, business websites, e-commerce stores, and portfolios with easy content management.",
    },
    {
      question: "How long does it take to develop a WordPress website?",
      answer: "The development timeline varies based on complexity. A simple website might take 1-2 weeks, while a complex e-commerce site could take 3-4 weeks. We'll provide a detailed timeline during our consultation.",
    },
    {
      question: "Can you create custom WordPress themes and plugins?",
      answer: "Absolutely! Our WordPress experts can create custom themes and plugins tailored to your specific business needs. We ensure your website stands out with unique design and functionality.",
    },
    {
      question: "Do you provide WordPress maintenance and support?",
      answer: "Yes! We offer comprehensive WordPress maintenance services including updates, security monitoring, backups, and technical support to keep your website running smoothly.",
    },
    {
      question: "What makes CodeLoom Nexus different from other WordPress agencies?",
      answer: "With 8+ years of experience and 200+ successful projects, we combine creative design with technical expertise. Our team specializes in creating engaging WordPress websites that drive conversions and enhance brand presence.",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);
  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const industriesData = [
    { name: "Blogs", image: "./assets/images/blog-industry.png" },
    { name: "Business", image: "./assets/images/business-industry.png" },
    { name: "E-commerce", image: "./assets/images/ecommerce-industry.png" },
    { name: "Portfolios", image: "./assets/images/portfolio-industry.png" },
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
                <span class="medium-text">WordPress Development</span>
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
                    Professional WordPress Development Services
                  </h1>
                  <div class="large-text content">
                    <p class="text">
                      Create powerful, user-friendly websites with our expert WordPress development services.
                    </p>
                    <p class="text">
                      CodeLoom Nexus is a leading WordPress development agency with 8+ years of experience in creating stunning, functional websites. We specialize in custom WordPress development, theme customization, and plugin development to create websites that perfectly match your brand and business goals.
                    </p>
                  </div>
                </div>
              </div>
              <div class="page-main-banner-company-count d-flex">
                <div class="page-main-banner-company-count-list">
                  <span class="h1 count">200+</span>
                  <span class="text count-label">
                    WordPress Projects Empowered
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
                  Why Choose WordPress for Your Website Development?
                </h2>
                <p class="explore-amazing-heading-sub-desc section-head-content">
                  WordPress has become the world's most popular content management system for good reason. It offers unparalleled flexibility, ease of use, and a vast ecosystem of themes and plugins.
                </p>
                <p class="explore-amazing-heading-sub-desc section-head-content">
                  Here are the key benefits of choosing WordPress for your website development.
                </p>
              </div>
            </div>
            <div class="col-md-6">
              <div class="explore-amazing-right">
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <div class="white-outlined-icon">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="8" fill="#330c79"/>
                        <path d="M12 12h16v16H12z" stroke="white" stroke-width="2" fill="none"/>
                        <text x="20" y="26" text-anchor="middle" fill="white" font-size="12" font-family="Arial" font-weight="bold">W</text>
                        <text x="20" y="35" text-anchor="middle" fill="white" font-size="6" font-family="Arial">Easy Conte Mana</text>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      Easy Content Management
                    </h3>
                    <p class="explore-amazing-desc">
                      WordPress's intuitive interface makes it easy for anyone to update content, add new pages, and manage their website without technical knowledge.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <div class="white-outlined-icon">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="8" fill="#330c79"/>
                        <circle cx="20" cy="20" r="8" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M16 16l8 8M24 16l-8 8" stroke="white" stroke-width="2" fill="none"/>
                        <circle cx="16" cy="16" r="1" stroke="white" stroke-width="2" fill="none"/>
                        <circle cx="24" cy="16" r="1" stroke="white" stroke-width="2" fill="none"/>
                        <circle cx="16" cy="24" r="1" stroke="white" stroke-width="2" fill="none"/>
                        <circle cx="24" cy="24" r="1" stroke="white" stroke-width="2" fill="none"/>
                        <text x="20" y="35" text-anchor="middle" fill="white" font-size="6" font-family="Arial">Vast Ecosy</text>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">Vast Ecosystem</h3>
                    <p class="explore-amazing-desc">
                      Access to thousands of themes and plugins to extend functionality. From e-commerce to SEO optimization, there's a plugin for almost everything.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <div class="white-outlined-icon">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="8" fill="#330c79"/>
                        <circle cx="20" cy="20" r="8" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M16 16l8 8" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M24 16l-8 8" stroke="white" stroke-width="2" fill="none"/>
                        <text x="20" y="35" text-anchor="middle" fill="white" font-size="6" font-family="Arial">SEO Frien</text>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      SEO Friendly
                    </h3>
                    <p class="explore-amazing-desc">
                      WordPress is built with SEO in mind, featuring clean code, fast loading times, and easy integration with SEO plugins to improve search engine rankings.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-spacing service-section">
        <div class="container">
          <div class="section-head-part text-center">
            <div class="section-title-wrapper">
              <h2 class="section-head-title">Our WordPress Development Services</h2>
              <p class="section-head-content">
                We offer comprehensive WordPress development services to help you create stunning, functional websites.
              </p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="service-card">
                <div class="service-icon">
                  <img src="../assets/images/store-custom-design.png" alt="Custom WordPress Themes" />
                </div>
                <h3>Custom WordPress Themes</h3>
                <p>Bespoke WordPress themes designed and developed to perfectly match your brand identity and business requirements.</p>
                <div class="service-card-hover">
                  <span class="learn-more">Learn More →</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="service-card">
                <div class="service-icon">
                  <img src="../assets/images/store-custom-design.png" alt="Custom Plugin Development" />
                </div>
                <h3>Custom Plugin Development</h3>
                <p>Tailored WordPress plugins that add specific functionality to your website and enhance user experience.</p>
                <div class="service-card-hover">
                  <span class="learn-more">Learn More →</span>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="service-card">
                <div class="service-icon">
                  <img src="../assets/images/store-custom-design.png" alt="WooCommerce Development" />
                </div>
                <h3>WooCommerce Development</h3>
                <p>Full-featured e-commerce websites built with WooCommerce, complete with payment processing and inventory management.</p>
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

export default WordPressDevelopment;
