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

const FramerDevelopment = () => {
  const faqData = [
    {
      question: "What is Framer and why should I use it for my website?",
      answer: "Framer is a powerful design and prototyping tool that allows you to create interactive websites without coding. It's perfect for creating high-fidelity prototypes, landing pages, and even full websites with advanced animations and interactions.",
    },
    {
      question: "How long does it take to develop a Framer website?",
      answer: "The timeline depends on the complexity of your project. A simple landing page might take 1-2 weeks, while a complex interactive website could take 3-4 weeks. We'll provide you with a detailed timeline during our initial consultation.",
    },
    {
      question: "Can you convert my Framer design into code?",
      answer: "Yes! We can convert your Framer designs into production-ready code using React, Next.js, or other frameworks. This ensures your website is fully customizable and optimized for performance.",
    },
    {
      question: "Do you provide ongoing support after the website is launched?",
      answer: "Absolutely! We offer comprehensive support packages including maintenance, updates, and technical support to ensure your Framer website continues to perform optimally.",
    },
    {
      question: "What makes CodeLoom Nexus different from other Framer development agencies?",
      answer: "With 8+ years of experience and 200+ successful projects, we combine creative design with technical expertise. Our team specializes in creating engaging user experiences that drive conversions and enhance brand presence.",
    },
  ];

  const [openAccordion, setOpenAccordion] = useState(null);
  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const industriesData = [
    { name: "SaaS", image: "./assets/images/saas-industry.png" },
    { name: "E-commerce", image: "./assets/images/ecommerce-industry.png" },
    { name: "Startups", image: "./assets/images/startup-industry.png" },
    { name: "Agencies", image: "./assets/images/agency-industry.png" },
    { name: "Tech", image: "./assets/images/tech-industry.png" },
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
                <span class="medium-text">Framer Development</span>
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
                    Professional Framer Development Services
                  </h1>
                  <div class="large-text content">
                    <p class="text">
                      Transform your ideas into stunning, interactive websites with our expert Framer development services.
                    </p>
                    <p class="text">
                      CodeLoom Nexus is a leading Framer development agency with 8+ years of experience in creating engaging user experiences that drive conversions and enhance brand presence. We specialize in creating interactive prototypes, landing pages, and full websites that not only look great but also perform exceptionally well.
                    </p>
                  </div>
                </div>
              </div>
              <div class="page-main-banner-company-count d-flex">
                <div class="page-main-banner-company-count-list">
                  <span class="h1 count">200+</span>
                  <span class="text count-label">
                    Framer Projects Empowered
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
                  Why Choose Framer for Your Website Development?
                </h2>
                <p class="explore-amazing-heading-sub-desc section-head-content">
                  Framer has revolutionized the way we create websites by combining powerful design tools with advanced prototyping capabilities. It's the perfect platform for creating interactive, engaging websites that captivate your audience and drive results.
                </p>
                <p class="explore-amazing-heading-sub-desc section-head-content">
                  Here are the key benefits of choosing Framer for your website development.
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
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      Interactive Prototyping
                    </h3>
                    <p class="explore-amazing-desc">
                      Create high-fidelity prototypes with advanced interactions, animations, and micro-interactions that bring your designs to life and provide a realistic preview of your final website.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <div class="white-outlined-icon">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="8" fill="#330c79"/>
                        <path d="M12 12h16v16H12z" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M16 16l4 4 4-4" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M16 20l4 4 4-4" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M16 24l4 4 4-4" stroke="white" stroke-width="2" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">No-Code Development</h3>
                    <p class="explore-amazing-desc">
                      Build complex websites without writing a single line of code. Framer's intuitive interface makes it easy to create professional websites that look and function exactly as you envision.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <div class="white-outlined-icon">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="8" fill="#330c79"/>
                        <path d="M12 12h16v16H12z" stroke="white" stroke-width="2" fill="none"/>
                        <circle cx="20" cy="20" r="3" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M20 14v12M14 20h12" stroke="white" stroke-width="2" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      Performance Optimization
                    </h3>
                    <p class="explore-amazing-desc">
                      Framer automatically optimizes your website for speed and performance, ensuring fast loading times and smooth user experiences across all devices and platforms.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <div class="white-outlined-icon">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="8" fill="#330c79"/>
                        <path d="M12 12h16v16H12z" stroke="white" stroke-width="2" fill="none"/>
                        <circle cx="20" cy="16" r="2" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M16 20l2 2 4-4" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M16 24l2 2 4-4" stroke="white" stroke-width="2" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">
                      Custom Design Control
                    </h3>
                    <p class="explore-amazing-desc">
                      Full control over every aspect of your design with advanced customization options, ensuring your website perfectly matches your brand identity and requirements.
                    </p>
                  </div>
                </div>
                <div class="explore-amazing-box">
                  <div class="explore-amazing-icon-main">
                    <div class="white-outlined-icon">
                      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="40" height="40" rx="8" fill="#330c79"/>
                        <path d="M12 12h16v16H12z" stroke="white" stroke-width="2" fill="none"/>
                        <rect x="14" y="14" width="6" height="8" stroke="white" stroke-width="2" fill="none"/>
                        <rect x="20" y="14" width="6" height="8" stroke="white" stroke-width="2" fill="none"/>
                        <path d="M16 18h2M22 18h2" stroke="white" stroke-width="2" fill="none"/>
                      </svg>
                    </div>
                  </div>
                  <div class="explore-amazing-content">
                    <h3 class="h5 explore-amazing-title">Responsive Design</h3>
                    <p class="explore-amazing-desc">
                      Create websites that look and function perfectly on all devices, from desktop computers to mobile phones, ensuring optimal user experience across all platforms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-spacing  service-section">
        <div class="container">
          <div class="section-head-part text-center">
            <div class="section-title-wrapper">
              <h2 class="section-head-title">Our Framer Development Services</h2>
              <p class="section-head-content">
              We offer comprehensive Framer development services to help you create stunning, interactive websites that drive results.
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
                <h3>Framer Website Design</h3>
                <p>Custom website designs created in Framer with stunning animations and interactions that engage your audience.</p>
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
                    </svg>
                  </div>
                </div>
                <h3>Interactive Prototyping</h3>
                <p>High-fidelity prototypes with advanced interactions and animations to showcase your product or service.</p>
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
                    </svg>
                  </div>
                </div>
                <h3>Framer to Code Conversion</h3>
                <p>Convert your Framer designs into production-ready code using React, Next.js, or other frameworks.</p>
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
                      <circle cx="30" cy="25" r="4" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M25 35l3 3 7-7" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M25 40l3 3 7-7" stroke="#000" stroke-width="2" fill="none"/>
                      <path d="M35 35l3 3 7-7" stroke="#000" stroke-width="2" fill="none"/>
                    </svg>
                  </div>
                </div>
                <h3>Custom Framer Themes</h3>
                <p>Bespoke Framer themes tailored to your brand identity and business requirements.</p>
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
                <h3>Advanced Animations</h3>
                <p>Complex animations and micro-interactions that create engaging user experiences and improve conversions.</p>
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
                <h3>Framer Maintenance</h3>
                <p>Ongoing support and maintenance to ensure your Framer website continues to perform optimally.</p>
                <div class="service-card-hover">
                  <span class="learn-more">Learn More →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section-spacing">
        <div class="container">
          <div class="section-head-part text-center">
            <h2 class="section-head-title">What Our Clients Say</h2>
            <p class="section-head-content">
              Don't just take our word for it. Here's what our clients have to say about our Framer development services.
            </p>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="testimonial-card">
                <div class="testimonial-content">
                 
                  <p class="testimonial-text">
                    "CodeLoom Nexus transformed our vision into a stunning Framer website that exceeded all expectations. The interactive prototypes and smooth animations have significantly improved our user engagement."
                  </p>
                  <div class="testimonial-author">
                    <h5>Sarah Johnson</h5>
                    <span>CEO, TechStart Inc.</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="testimonial-card">
                <div class="testimonial-content">
                  
                  <p class="testimonial-text">
                    "The team at CodeLoom Nexus delivered a beautiful Framer website with incredible attention to detail. The no-code development approach saved us time and money while delivering exceptional results."
                  </p>
                  <div class="testimonial-author">
                    <h5>Michael Chen</h5>
                    <span>Founder, DesignStudio</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="testimonial-card">
                <div class="testimonial-content">
                
                  <p class="testimonial-text">
                    "Working with CodeLoom Nexus was a game-changer for our business. Their Framer development expertise helped us create a website that perfectly represents our brand and drives conversions."
                  </p>
                  <div class="testimonial-author">
                    <h5>Emily Rodriguez</h5>
                    <span>Marketing Director, GrowthCo</span>
                  </div>
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

export default FramerDevelopment;
