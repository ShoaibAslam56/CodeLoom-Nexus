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

const UiUxDesign = () => {
  const faqData = [
    {
      question: "What is UI/UX design and why is it important for my product?",
      answer: "UI/UX design focuses on creating user-friendly, intuitive interfaces that provide excellent user experiences. It's crucial for ensuring your digital products are easy to use, engaging, and meet user needs effectively, ultimately driving user satisfaction and business success.",
    },
    {
      question: "How long does it take to complete a UI/UX design project?",
      answer: "The timeline varies based on complexity. A simple website might take 3-4 weeks, while a complex application could take 8-12 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you provide user research and testing services?",
      answer: "Yes! We conduct comprehensive user research, create user personas, perform usability testing, and gather feedback to ensure our designs meet user needs and business goals effectively.",
    },
    {
      question: "Can you create interactive prototypes?",
      answer: "Absolutely! We create high-fidelity interactive prototypes that allow you to test user flows, interactions, and functionality before development begins, saving time and resources.",
    },
    {
      question: "What makes CodeLoom Nexus different from other UI/UX agencies?",
      answer: "With 8+ years of experience and 200+ successful projects, we combine user-centered design with business strategy. Our team specializes in creating intuitive, engaging user experiences that drive user satisfaction and business growth.",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);
  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const industriesData = [
    { name: "SaaS", image: "./assets/images/saas-industry.png" },
    { name: "E-commerce", image: "./assets/images/ecommerce-industry.png" },
    { name: "Fintech", image: "./assets/images/fintech-industry.png" },
    { name: "Healthcare", image: "./assets/images/healthcare-industry.png" },
    { name: "Education", image: "./assets/images/education-industry.png" },
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
                <span class="medium-text">UI/UX Design</span>
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
                    Professional UI/UX Design Services
                  </h1>
                  <div class="large-text content">
                    <p class="text">
                      Create intuitive, engaging user experiences that delight your users and drive business results.
                    </p>
                    <p class="text">
                      CodeLoom Nexus is a leading UI/UX design agency with 8+ years of experience in creating user-centered digital experiences. We specialize in designing interfaces that are not only visually appealing but also intuitive, accessible, and optimized for user engagement and conversion.
                    </p>
                  </div>
                </div>
              </div>
              <div class="page-main-banner-company-count d-flex">
                <div class="page-main-banner-company-count-list">
                  <span class="h1 count">200+</span>
                  <span class="text count-label">
                    UI/UX Projects Completed
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
                  Why Choose Professional UI/UX Design?
                </h2>
                <p class="explore-amazing-heading-sub-desc section-head-content">
                  Great UI/UX design is the difference between a product that users love and one they abandon. Professional UI/UX design ensures your digital products are intuitive, engaging, and optimized for user success.
                </p>
                <p class="explore-amazing-heading-sub-desc section-head-content">
                  Here are the key benefits of choosing professional UI/UX design.
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
                        <circle cx="30" cy="25" r="8" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M25 25l2 2 4-4" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M30 20l0 10" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M25 30l10 0" stroke="#fff" stroke-width="2" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      User Satisfaction
                    </h3>
                    <p class="explore-amazing-desc">
                      Create intuitive interfaces that users love to interact with, leading to higher engagement, retention, and positive brand perception.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <div class="white-outlined-icon">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="60" height="60" rx="12" fill="#6f42c1" stroke="#fff" stroke-width="2"/>
                        <path d="M15 45l10-10 10 10 10-10" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M20 35l0 10" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M30 25l0 20" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M40 15l0 30" stroke="#fff" stroke-width="2" fill="none"/>
                        <circle cx="30" cy="45" r="3" stroke="#fff" stroke-width="2" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">Conversion Optimization</h3>
                    <p class="explore-amazing-desc">
                      Optimize user flows and interfaces to guide users toward desired actions, increasing conversion rates and achieving business goals.
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
                        <circle cx="45" cy="25" r="3" stroke="#fff" stroke-width="2" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      Cost Effectiveness
                    </h3>
                    <p class="explore-amazing-desc">
                      Identify and fix usability issues early in the design process, saving significant development costs and reducing the need for post-launch fixes.
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
              <h2 class="section-head-title">Our UI/UX Design Services</h2>
            </div>
            <p class="section-head-content">
              We offer comprehensive UI/UX design services to help you create exceptional user experiences.
            </p>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6 mb-4">
              <div class="service-card">
                <div class="service-icon">
                  <div class="black-icon">
                    <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="60" height="60" rx="12" fill="#f8f9fa" stroke="#e9ecef" stroke-width="2"/>
                      <circle cx="30" cy="25" r="8" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M25 25l2 2 4-4" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M30 20l0 10" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M25 30l10 0" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M20 40l20 0" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M20 45l20 0" stroke="#000" stroke-width="2" fill="none"/>
                    </svg>
                  </div>
                </div>
                <h3>User Research & Analysis</h3>
                <p>Comprehensive user research including personas, user journeys, and usability testing to inform design decisions.</p>
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
                <h3>Wireframing & Prototyping</h3>
                <p>Interactive wireframes and prototypes that allow you to test user flows and interactions before development.</p>
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
                      <circle cx="45" cy="25" r="3" stroke="#000" stroke-width="2" fill="none"/>
                    </svg>
                  </div>
                </div>
                <h3>UI Design & Visual Design</h3>
                <p>Beautiful, functional interface designs that create engaging user experiences and align with your brand.</p>
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

export default UiUxDesign;
