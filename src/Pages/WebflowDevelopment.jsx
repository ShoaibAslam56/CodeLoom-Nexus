import React from "react";
import Slider from "react-slick";
import { useState } from "react";
import LetDiscuss from "../Components/LetDiscuss";
import Freelancing from "../Components/Freelancing";
import Faq from "../Components/Faq";
import BannerContactForm from "../Components/BannerContactForm";
import { NavLink } from "react-router-dom";

// Import images
import store from "../assets/images/store.png";
import shopifyHeadlessCommerce from "../assets/images/Shopify-Headless-Commerce.png";
import marketplace from "../assets/images/marketplace.png";
import coding from "../assets/images/coding.png";

const WebflowDevelopment = () => {
  const faqData = [
    {
      question: "What is Webflow and why should I choose it for my website?",
      answer: "Webflow is a powerful visual web design platform that allows you to create professional websites without coding. It combines the flexibility of custom development with the ease of a visual editor, making it perfect for creating stunning, responsive websites.",
    },
    {
      question: "How long does it take to develop a Webflow website?",
      answer: "The development timeline varies based on complexity. A simple website might take 2-3 weeks, while a complex e-commerce site could take 4-6 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Can you create custom animations and interactions in Webflow?",
      answer: "Absolutely! Our Webflow experts can create custom animations, micro-interactions, and complex user experiences using Webflow's powerful animation tools and interactions panel.",
    },
    {
      question: "Do you provide Webflow CMS setup and training?",
      answer: "Yes! We set up custom CMS collections, create editable content areas, and provide comprehensive training to help you manage your website content easily.",
    },
    {
      question: "What makes CodeLoom Nexus different from other Webflow agencies?",
      answer: "With 8+ years of experience and 200+ successful projects, we combine creative design with technical expertise. Our team specializes in creating engaging user experiences that drive conversions and enhance brand presence.",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);
  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const industriesData = [
    { name: "Agencies", image: coding },
    { name: "SaaS", image: coding },
    { name: "E-commerce", image: coding },
    { name: "Startups", image: coding },
    { name: "Portfolios", image: coding },
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
                <span class="medium-text">Webflow Development</span>
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
                    Professional Webflow Development Services
                  </h1>
                  <div class="large-text content">
                    <p class="text">
                      Create stunning, responsive websites with our expert Webflow development services.
                    </p>
                    <p class="text">
                      CodeLoom Nexus is a leading Webflow development agency with 8+ years of experience in creating beautiful, functional websites that drive results. We specialize in leveraging Webflow's powerful visual design tools to create custom websites that perfectly match your brand and business goals.
                    </p>
                  </div>
                </div>
              </div>
              <div class="page-main-banner-company-count d-flex">
                <div class="page-main-banner-company-count-list">
                  <span class="h1 count">200+</span>
                  <span class="text count-label">
                    Webflow Projects Empowered
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
                  Why Choose Webflow for Your Website Development?
                </h2>
                <p class="explore-amazing-heading-sub-desc section-head-content">
                  Webflow has transformed the way we create websites by providing a visual design platform that combines the power of custom development with the simplicity of a drag-and-drop interface.
                </p>
                <p class="explore-amazing-heading-sub-desc section-head-content">
                  Here are the key benefits of choosing Webflow for your website development.
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
                        <path d="M16 16l4 4 4-4" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M16 20l4 4 4-4" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M16 24l4 4 4-4" stroke="white" stroke-width="2" fill="none"/>
                        <circle cx="14" cy="18" r="1" stroke="white" stroke-width="2" fill="none"/>
                        <circle cx="14" cy="22" r="1" stroke="white" stroke-width="2" fill="none"/>
                        <circle cx="14" cy="26" r="1" stroke="white" stroke-width="2" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      Visual Design Platform
                    </h3>
                    <p class="explore-amazing-desc">
                      Design your website visually with pixel-perfect precision. Webflow's visual editor allows you to see exactly what you're building in real-time, eliminating the need for coding knowledge.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <div class="white-outlined-icon">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="8" fill="#330c79"/>
                        <path d="M12 12h16v16H12z" stroke="white" stroke-width="2" fill="none"/>
                        <rect x="16" y="16" width="6" height="6" stroke="white" stroke-width="2" fill="none"/>
                        <rect x="24" y="16" width="6" height="6" stroke="white" stroke-width="2" fill="none"/>
                        <rect x="16" y="24" width="6" height="6" stroke="white" stroke-width="2" fill="none"/>
                        <rect x="24" y="24" width="6" height="6" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M19 19l2 2 2-2" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M27 19l2 2 2-2" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M19 27l2 2 2-2" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M27 27l2 2 2-2" stroke="white" stroke-width="2" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">Custom CMS</h3>
                    <p class="explore-amazing-desc">
                      Create custom content management systems tailored to your specific needs. Webflow CMS allows you to manage dynamic content easily without technical knowledge.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <div class="white-outlined-icon">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="8" fill="#330c79"/>
                        <path d="M20 12l8 8-8 8-8-8z" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M16 20l4 4 4-4" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M16 24l4 4 4-4" stroke="white" stroke-width="2" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      Hosting & Security
                    </h3>
                    <p class="explore-amazing-desc">
                      Webflow provides enterprise-grade hosting with automatic backups, SSL certificates, and CDN optimization, ensuring your website is fast, secure, and always available.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-spacing bg-light">
        <div class="container">
          <div class="section-head-part text-center">
            <h2 class="section-head-title">Our Webflow Development Services</h2>
            <p class="section-head-content">
              We offer comprehensive Webflow development services to help you create stunning, responsive websites that drive results.
            </p>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="service-card">
                <div class="service-icon">
                  <img src={store} alt="Webflow Design" />
                </div>
                <h3>Custom Webflow Design</h3>
                <p>Pixel-perfect website designs created in Webflow with custom animations and interactions that engage your audience.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="service-card">
                <div class="service-icon">
                  <img src={shopifyHeadlessCommerce} alt="Webflow CMS" />
                </div>
                <h3>Custom CMS Setup</h3>
                <p>Custom content management systems that make it easy for you to update and manage your website content.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="service-card">
                <div class="service-icon">
                  <img src={marketplace} alt="Webflow E-commerce" />
                </div>
                <h3>E-commerce Development</h3>
                <p>Full-featured online stores built with Webflow's e-commerce platform, complete with payment processing and inventory management.</p>
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

export default WebflowDevelopment;
