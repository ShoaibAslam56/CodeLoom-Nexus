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

const WebDesign = () => {
  const faqData = [
    {
      question: "What is web design and why is it important for my business?",
      answer: "Web design encompasses the visual design, user experience, and functionality of your website. It's crucial for creating a professional online presence that attracts visitors, builds trust, and converts them into customers.",
    },
    {
      question: "How long does it take to design a website?",
      answer: "The timeline varies based on complexity. A simple website might take 2-3 weeks, while a complex e-commerce site could take 4-6 weeks. We'll provide a detailed timeline during our initial consultation.",
    },
    {
      question: "Do you create responsive designs for mobile devices?",
      answer: "Absolutely! All our websites are designed to be fully responsive, ensuring they look and function perfectly on all devices including smartphones, tablets, and desktop computers.",
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Yes! We specialize in website redesigns that modernize your online presence while maintaining your brand identity and improving user experience and conversion rates.",
    },
    {
      question: "What makes CodeLoom Nexus different from other web design agencies?",
      answer: "With 8+ years of experience and 200+ successful projects, we combine creative design with strategic thinking. Our team specializes in creating websites that not only look great but also drive business results.",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);
  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const industriesData = [
    { name: "E-commerce", image: "./assets/images/ecommerce-industry.png" },
    { name: "SaaS", image: "./assets/images/saas-industry.png" },
    { name: "Healthcare", image: "./assets/images/healthcare-industry.png" },
    { name: "Education", image: "./assets/images/education-industry.png" },
    { name: "Real Estate", image: "./assets/images/realestate-industry.png" },
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
                <span class="medium-text">Web Design</span>
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
                    Professional Web Design Services
                  </h1>
                  <div class="large-text content">
                    <p class="text">
                      Create stunning, functional websites that captivate your audience and drive business growth.
                    </p>
                    <p class="text">
                      CodeLoom Nexus is a leading web design agency with 8+ years of experience in creating beautiful, user-friendly websites. We specialize in designing websites that not only look visually appealing but also provide exceptional user experiences and drive conversions.
                    </p>
                  </div>
                </div>
              </div>
              <div class="page-main-banner-company-count d-flex">
                <div class="page-main-banner-company-count-list">
                  <span class="h1 count">200+</span>
                  <span class="text count-label">
                    Websites Designed
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
                  Why Choose Professional Web Design?
                </h2>
                <p class="explore-amazing-heading-sub-desc section-head-content">
                  Your website is often the first impression potential customers have of your business. Professional web design ensures you make a lasting impression that builds trust and drives action.
                </p>
                <p class="explore-amazing-heading-sub-desc section-head-content">
                  Here are the key benefits of choosing professional web design.
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
                        <path d="M15 15h30v30H15z" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M20 20l10 10 10-10" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M20 30l10 10 10-10" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M20 40l10 10 10-10" stroke="#fff" stroke-width="2" fill="none"/>
                        <circle cx="45" cy="25" r="3" stroke="#fff" stroke-width="2" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      Professional First Impression
                    </h3>
                    <p class="explore-amazing-desc">
                      Create a professional, polished website that immediately builds trust and credibility with your visitors, encouraging them to explore further.
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
                    <h3 class="h5 explore-amazing-title">Exceptional User Experience</h3>
                    <p class="explore-amazing-desc">
                      Design intuitive, easy-to-navigate websites that provide seamless user experiences, keeping visitors engaged and encouraging them to take action.
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
                      Conversion Optimization
                    </h3>
                    <p class="explore-amazing-desc">
                      Optimize your website design to guide visitors toward desired actions, whether it's making a purchase, filling out a form, or contacting you.
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
              <h2 class="section-head-title">Our Web Design Services</h2>
            </div>
            <p class="section-head-content">
              We offer comprehensive web design services to help you create stunning, functional websites.
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
                <h3>Custom Web Design</h3>
                <p>Bespoke website designs tailored to your brand, business goals, and target audience for maximum impact.</p>
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
                <h3>Responsive Design</h3>
                <p>Mobile-first, responsive designs that look and function perfectly on all devices and screen sizes.</p>
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
                <h3>Website Redesign</h3>
                <p>Modernize your existing website with fresh designs that improve user experience and drive better results.</p>
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

export default WebDesign;
