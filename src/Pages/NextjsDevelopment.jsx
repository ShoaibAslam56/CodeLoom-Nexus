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

const NextjsDevelopment = () => {
  const faqData = [
    {
      question: "What is Next.js and why should I choose it for my website?",
      answer: "Next.js is a powerful React framework that provides server-side rendering, static site generation, and automatic code splitting. It's perfect for building fast, SEO-friendly websites and web applications.",
    },
    {
      question: "How long does it take to develop a Next.js application?",
      answer: "The development timeline varies based on complexity. A simple website might take 3-4 weeks, while a complex application could take 8-12 weeks. We'll provide a detailed timeline during our consultation.",
    },
    {
      question: "Can you create custom Next.js applications with API routes?",
      answer: "Absolutely! Our Next.js experts can create full-stack applications with custom API routes, database integration, and server-side functionality to meet your specific business needs.",
    },
    {
      question: "Do you provide SEO optimization for Next.js websites?",
      answer: "Yes! Next.js is built for SEO with server-side rendering and static generation. We optimize your website for search engines to improve visibility and drive organic traffic.",
    },
    {
      question: "What makes CodeLoom Nexus different from other Next.js agencies?",
      answer: "With 8+ years of experience and 200+ successful projects, we combine technical expertise with creative problem-solving. Our team specializes in creating high-performance, SEO-optimized Next.js applications.",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);
  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const industriesData = [
    { name: "E-commerce", image: "./assets/images/ecommerce-industry.png" },
    { name: "SaaS", image: "./assets/images/saas-industry.png" },
    { name: "Blogs", image: "./assets/images/blog-industry.png" },
    { name: "Portfolios", image: "./assets/images/portfolio-industry.png" },
    { name: "Corporate", image: "./assets/images/corporate-industry.png" },
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
                <span class="medium-text">Next.js Development</span>
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
                    Professional Next.js Development Services
                  </h1>
                  <div class="large-text content">
                    <p class="text">
                      Build fast, SEO-friendly websites and applications with our expert Next.js development services.
                    </p>
                    <p class="text">
                      CodeLoom Nexus is a leading Next.js development agency with 8+ years of experience in creating high-performance web applications. We specialize in leveraging Next.js's powerful features like server-side rendering and static generation to create websites that rank well in search engines and provide exceptional user experiences.
                    </p>
                  </div>
                </div>
              </div>
              <div class="page-main-banner-company-count d-flex">
                <div class="page-main-banner-company-count-list">
                  <span class="h1 count">200+</span>
                  <span class="text count-label">
                    Next.js Projects Empowered
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
                  Why Choose Next.js for Your Website Development?
                </h2>
                <p class="explore-amazing-heading-sub-desc section-head-content">
                  Next.js has revolutionized web development by providing a powerful React framework that combines the best of both worlds: the flexibility of React with the performance benefits of server-side rendering.
                </p>
                <p class="explore-amazing-heading-sub-desc section-head-content">
                  Here are the key benefits of choosing Next.js for your website development.
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
                        <path d="M20 12v16" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M16 16h8" stroke="white" stroke-width="2" fill="none"/>
                        <circle cx="16" cy="16" r="2" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M16 20h8" stroke="white" stroke-width="2" fill="none"/>
                        <circle cx="16" cy="20" r="2" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M16 24h8" stroke="white" stroke-width="2" fill="none"/>
                        <circle cx="16" cy="24" r="2" stroke="white" stroke-width="2" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      Server-Side Rendering
                    </h3>
                    <p class="explore-amazing-desc">
                      Improve SEO and initial page load performance with server-side rendering. Next.js pre-renders pages on the server, making them faster and more search engine friendly.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <div class="white-outlined-icon">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="8" fill="#330c79"/>
                        <path d="M16 16l8 8" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M24 16l-8 8" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M18 18l4 4" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M18 22l4 4" stroke="white" stroke-width="2" fill="none"/>
                        <text x="20" y="32" text-anchor="middle" fill="white" font-size="6" font-family="Arial">EASY TO INSTALL</text>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">Static Site Generation</h3>
                    <p class="explore-amazing-desc">
                      Generate static websites at build time for maximum performance and scalability. Perfect for blogs, portfolios, and content-heavy websites.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <div class="white-outlined-icon">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="8" fill="#330c79"/>
                        <path d="M20 12l8 6v8l-8 6-8-6v-8z" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M16 20l4 4 4-4" stroke="white" stroke-width="2" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      API Routes
                    </h3>
                    <p class="explore-amazing-desc">
                      Build full-stack applications with built-in API routes. Create serverless functions and backend APIs without needing a separate server.
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
              <h2 class="section-head-title">Our Next.js Development Services</h2>
              <p class="section-head-content">
                We offer comprehensive Next.js development services to help you create fast, SEO-friendly websites and applications.
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
                <h3>Next.js Web Applications</h3>
                <p>High-performance web applications built with Next.js, featuring server-side rendering and optimal SEO.</p>
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
                <h3>E-commerce Platforms</h3>
                <p>Fast, SEO-optimized e-commerce websites with Next.js, perfect for online stores and marketplaces.</p>
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
                      <path d="M20 20l10 10 10-10" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M20 30l10 10 10-10" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M20 40l10 10 10-10" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M40 20l-5 5 5 5" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M40 30l-5 5 5 5" stroke="#000" stroke-width="2" fill="none"/>
                    </svg>
                  </div>
                </div>
                <h3>Blog & Content Sites</h3>
                <p>Static-generated blogs and content websites that load instantly and rank well in search engines.</p>
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
                      <path d="M20 45l10 5 10-5" stroke="#000" stroke-width="2" fill="none"/>
                    </svg>
                  </div>
                </div>
                <h3>API Development</h3>
                <p>Custom API routes and serverless functions built with Next.js for full-stack applications.</p>
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
                      <rect x="14" y="14" width="6" height="8" stroke="#000" stroke-width="2" fill="none"/>
                      <rect x="20" y="14" width="6" height="8" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M16 18h2M22 18h2" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M16 22h2M22 22h2" stroke="#000" stroke-width="2" fill="none"/>
                    </svg>
                  </div>
                </div>
                <h3>Performance Optimization</h3>
                <p>Next.js performance optimization including image optimization, code splitting, and bundle analysis.</p>
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
                      <path d="M20 20l10 10 10-10" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M20 30l10 10 10-10" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M20 40l10 10 10-10" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M40 20l-5 5 5 5" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M40 30l-5 5 5 5" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M40 40l-5 5 5 5" stroke="#000" stroke-width="2" fill="none"/>
                    </svg>
                  </div>
                </div>
                <h3>Next.js Maintenance</h3>
                <p>Ongoing support and maintenance to ensure your Next.js application continues to perform optimally.</p>
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

export default NextjsDevelopment;
