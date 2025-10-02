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

const SocialMediaMarketing = () => {
  const faqData = [
    {
      question: "What is social media marketing and why is it important for my business?",
      answer: "Social media marketing involves creating and sharing content on social media platforms to achieve your marketing and branding goals. It's crucial for building brand awareness, engaging with your audience, driving website traffic, and generating leads in today's digital landscape.",
    },
    {
      question: "Which social media platforms should my business be on?",
      answer: "The best platforms depend on your target audience and business type. We help you identify the most effective platforms for your business, whether it's Facebook, Instagram, LinkedIn, Twitter, TikTok, or others based on your audience demographics and industry.",
    },
    {
      question: "How long does it take to see results from social media marketing?",
      answer: "Results vary based on your goals and strategy. Some businesses see increased engagement within weeks, while building a strong following and driving conversions typically takes 3-6 months of consistent effort. We provide regular reporting to track progress.",
    },
    {
      question: "Do you provide content creation and management services?",
      answer: "Yes! We offer comprehensive social media services including content creation, posting schedules, community management, paid advertising, and performance analytics to ensure your social media presence drives real business results.",
    },
    {
      question: "What makes CodeLoom Nexus different from other social media marketing agencies?",
      answer: "With 8+ years of experience and 200+ successful campaigns, we combine creative content with strategic marketing. Our team specializes in creating engaging social media strategies that not only build brand awareness but also drive conversions and ROI.",
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
                <span class="medium-text">Social Media Marketing</span>
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
                    Professional Social Media Marketing Services
                  </h1>
                  <div class="large-text content">
                    <p class="text">
                      Build your brand presence and drive engagement with our expert social media marketing services.
                    </p>
                    <p class="text">
                      CodeLoom Nexus is a leading social media marketing agency with 8+ years of experience in creating impactful social media strategies. We specialize in developing comprehensive social media campaigns that build brand awareness, engage audiences, and drive measurable business results across all major platforms.
                    </p>
                  </div>
                </div>
              </div>
              <div class="page-main-banner-company-count d-flex">
                <div class="page-main-banner-company-count-list">
                  <span class="h1 count">200+</span>
                  <span class="text count-label">
                    Social Media Campaigns
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
                  Why Choose Professional Social Media Marketing?
                </h2>
                <p class="explore-amazing-heading-sub-desc section-head-content">
                  Social media has become the primary way people discover, engage with, and trust brands. Professional social media marketing helps you build meaningful connections with your audience and drive real business results.
                </p>
                <p class="explore-amazing-heading-sub-desc section-head-content">
                  Here are the key benefits of choosing professional social media marketing.
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
                        <path d="M30 26l0 8" stroke="#fff" stroke-width="2" fill="none"/>
                        <path d="M26 26l8 0" stroke="#fff" stroke-width="2" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      Brand Awareness
                    </h3>
                    <p class="explore-amazing-desc">
                      Increase your brand's visibility and recognition among your target audience through strategic content and consistent messaging across social media platforms.
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
                    <h3 class="h5 explore-amazing-title">Audience Engagement</h3>
                    <p class="explore-amazing-desc">
                      Build meaningful relationships with your audience through interactive content, community management, and authentic engagement strategies.
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
                      Lead Generation
                    </h3>
                    <p class="explore-amazing-desc">
                      Convert social media followers into qualified leads through targeted content, paid advertising, and strategic call-to-action campaigns.
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
              <h2 class="section-head-title">Our Social Media Marketing Services</h2>
            </div>
            <p class="section-head-content">
              We offer comprehensive social media marketing services to help you build a strong online presence and drive business growth.
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
                <h3>Content Creation & Strategy</h3>
                <p>Engaging, platform-specific content that resonates with your audience and aligns with your brand voice and marketing goals.</p>
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
                      <path d="M20 20h20v20H20z" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M25 25l5 5 5-5" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M25 30l5 5 5-5" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M25 35l5 5 5-5" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M35 25l5 5 5-5" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M35 30l5 5 5-5" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M35 35l5 5 5-5" stroke="#000" stroke-width="2" fill="none"/>
                    </svg>
                  </div>
                </div>
                <h3>Paid Social Advertising</h3>
                <p>Targeted paid campaigns across Facebook, Instagram, LinkedIn, and other platforms to reach your ideal audience and drive conversions.</p>
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
                <h3>Community Management</h3>
                <p>Active community management including responding to comments, messages, and fostering meaningful conversations with your audience.</p>
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

export default SocialMediaMarketing;
