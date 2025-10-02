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

const CustomWebDevelopment = () => {
  const faqData = [
    {
      question: "What is custom web development and when should I choose it?",
      answer: "Custom web development involves creating websites and web applications from scratch, tailored to your specific business needs. It's ideal when you need unique functionality, specific integrations, or complete control over your website's features and design.",
    },
    {
      question: "How long does it take to develop a custom website?",
      answer: "The timeline depends on complexity. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Can you integrate third-party services and APIs?",
      answer: "Absolutely! Our custom development team can integrate any third-party services, APIs, payment gateways, CRM systems, and other tools to create a seamless user experience.",
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer: "Yes! We offer comprehensive maintenance and support packages including updates, security monitoring, performance optimization, and feature additions to keep your custom website running optimally.",
    },
    {
      question: "What makes CodeLoom Nexus different from other custom development agencies?",
      answer: "With 8+ years of experience and 200+ successful projects, we combine technical expertise with creative problem-solving. Our team specializes in creating scalable, maintainable custom solutions that drive business growth.",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);
  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const industriesData = [
    { name: "Enterprise", image: coding },
    { name: "SaaS", image: coding },
    { name: "Fintech", image: coding },
    { name: "Healthcare", image: coding },
    { name: "Education", image: coding },
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
                <span class="medium-text">Custom Web Development</span>
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
                    Professional Custom Web Development Services
                  </h1>
                  <div class="large-text content">
                    <p class="text">
                      Build unique, scalable web solutions tailored to your specific business requirements.
                    </p>
                    <p class="text">
                      CodeLoom Nexus is a leading custom web development agency with 8+ years of experience in creating bespoke web solutions. We specialize in building custom websites, web applications, and digital platforms that perfectly align with your business goals and provide competitive advantages.
                    </p>
                  </div>
                </div>
              </div>
              <div class="page-main-banner-company-count d-flex">
                <div class="page-main-banner-company-count-list">
                  <span class="h1 count">200+</span>
                  <span class="text count-label">
                    Custom Projects Empowered
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
                  Why Choose Custom Web Development?
                </h2>
                <p class="explore-amazing-heading-sub-desc section-head-content">
                  Custom web development offers unparalleled flexibility and control over your digital presence. Unlike off-the-shelf solutions, custom development allows you to create exactly what you need, when you need it.
                </p>
                <p class="explore-amazing-heading-sub-desc section-head-content">
                  Here are the key benefits of choosing custom web development.
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
                        <path d="M16 16l8 8" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M16 20l8 8" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M16 24l8 8" stroke="white" stroke-width="2" fill="none"/>
                        <text x="20" y="35" text-anchor="middle" fill="white" font-size="6" font-family="Arial">Tailor Solu</text>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      Tailored Solutions
                    </h3>
                    <p class="explore-amazing-desc">
                      Every aspect of your website is designed and developed specifically for your business needs, ensuring perfect alignment with your goals and requirements.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <div class="white-outlined-icon">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="8" fill="#330c79"/>
                        <path d="M12 12h16v16H12z" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M16 16l8 8" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M16 20l8 8" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M16 24l8 8" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M40 20l-5 5 5 5" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M40 30l-5 5 5 5" stroke="white" stroke-width="2" fill="none"/>
                        <text x="20" y="35" text-anchor="middle" fill="white" font-size="6" font-family="Arial">Scalal</text>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">Scalability</h3>
                    <p class="explore-amazing-desc">
                      Custom solutions are built to grow with your business. We design architectures that can handle increased traffic, users, and functionality as your business expands.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <div class="white-outlined-icon">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="8" fill="#330c79"/>
                        <path d="M12 12h16v16H12z" stroke="white" stroke-width="2" fill="none"/>
                        <circle cx="20" cy="20" r="6" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M16 16l8 8" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M24 16l-8 8" stroke="white" stroke-width="2" fill="none"/>
                        <text x="20" y="35" text-anchor="middle" fill="white" font-size="6" font-family="Arial">Uniqu Funct</text>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      Unique Functionality
                    </h3>
                    <p class="explore-amazing-desc">
                      Create features and functionality that set you apart from competitors. Custom development allows you to implement innovative solutions that give you a competitive edge.
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
              <h2 class="section-head-title">Our Custom Web Development Services</h2>
              <p class="section-head-content">
                We offer comprehensive custom web development services to help you create unique, scalable web solutions.
              </p>
            </div>
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
                    </svg>
                  </div>
                </div>
                <h3>Custom Websites</h3>
                <p>Bespoke websites designed and developed from scratch to perfectly match your brand and business requirements.</p>
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
                      <rect x="16" y="16" width="6" height="6" stroke="#000" stroke-width="2" fill="none"/>
                      <rect x="24" y="16" width="6" height="6" stroke="#000" stroke-width="2" fill="none"/>
                      <rect x="16" y="24" width="6" height="6" stroke="#000" stroke-width="2" fill="none"/>
                      <rect x="24" y="24" width="6" height="6" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M23 23l2 2 2-2" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M31 23l2 2 2-2" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M23 31l2 2 2-2" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M31 31l2 2 2-2" stroke="#000" stroke-width="2" fill="none"/>
                    </svg>
                  </div>
                </div>
                <h3>Web Applications</h3>
                <p>Complex web applications with advanced functionality, user management, and business process automation.</p>
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
                      <rect x="18" y="18" width="6" height="6" stroke="#000" stroke-width="2" fill="none"/>
                      <rect x="26" y="18" width="6" height="6" stroke="#000" stroke-width="2" fill="none"/>
                      <rect x="18" y="26" width="6" height="6" stroke="#000" stroke-width="2" fill="none"/>
                      <rect x="26" y="26" width="6" height="6" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M21 21l2 2 2-2" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M29 21l2 2 2-2" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M21 29l2 2 2-2" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M29 29l2 2 2-2" stroke="#000" stroke-width="2" fill="none"/>
                    </svg>
                  </div>
                </div>
                <h3>API Development</h3>
                <p>Custom APIs and integrations to connect your systems, third-party services, and create seamless workflows.</p>
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
                      <circle cx="30" cy="25" r="3" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M25 35l3 3 7-7" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M25 40l3 3 7-7" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M35 35l3 3 7-7" stroke="#000" stroke-width="2" fill="none"/>
                    </svg>
                  </div>
                </div>
                <h3>E-commerce Solutions</h3>
                <p>Custom e-commerce platforms with advanced features, payment processing, and inventory management systems.</p>
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
                      <ellipse cx="30" cy="25" rx="8" ry="4" stroke="#000" stroke-width="2" fill="none"/>
                      <ellipse cx="30" cy="35" rx="8" ry="4" stroke="#000" stroke-width="2" fill="none"/>
                      <ellipse cx="30" cy="45" rx="8" ry="4" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M22 25l16 0" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M22 35l16 0" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M22 45l16 0" stroke="#000" stroke-width="2" fill="none"/>
                    </svg>
                  </div>
                </div>
                <h3>Database Design</h3>
                <p>Custom database architecture and design to efficiently store, manage, and retrieve your business data.</p>
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
                <h3>Maintenance & Support</h3>
                <p>Ongoing maintenance, updates, and technical support to ensure your custom web solutions continue to perform optimally.</p>
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

export default CustomWebDevelopment;
