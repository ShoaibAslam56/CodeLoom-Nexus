import React from "react";
import { NavLink } from "react-router-dom";
import BannerContactForm from "../Components/BannerContactForm";
import LetDiscuss from "../Components/LetDiscuss";
import Freelancing from "../Components/Freelancing";
import Faq from "../Components/Faq";

// Import images
import store from "../assets/images/store.png";
import marketplace from "../assets/images/marketplace.png";

const ReactDevelopment = () => {
  const faqData = [
    {
      question: "What is React and why should I use it?",
      answer:
        "React is a popular JavaScript library for building fast, scalable user interfaces using reusable components.",
    },
    {
      question: "Do you build custom React applications?",
      answer:
        "Yes. We design and develop bespoke React applications tailored to your business needs and scalability goals.",
    },
    {
      question: "Can you migrate my app to React?",
      answer:
        "Absolutely. We handle legacy migrations to React with a focus on performance, accessibility, and SEO.",
    },
  ];

  return (
    <div>
      <section id="page_banner" class="page-main-banner homepage-banner section-spacing">
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
                <span class="medium-text">React Development</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="container">
          <div class="row align-items-center">
            <div class="page-main-banner-colm col-lg-7 col-md-7">
              <div class="page-main-banner-content">
                <div class="page-main-banner-content-list">
                  <h1 class="title">Professional React Development Services</h1>
                  <div class="large-text content">
                    <p class="text">
                      Build performant, scalable web applications with our expert React development team.
                    </p>
                    <p class="text">
                      From greenfield apps to complex migrations, we deliver robust component-driven UIs
                      with modern tooling and best practices.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <BannerContactForm />
          </div>
        </div>
      </section>

      <section class="section-spacing bg-light">
        <div class="container">
          <div class="section-head-part text-center">
            <h2 class="section-head-title">Our React Development Services</h2>
            <p class="section-head-content">
              We offer comprehensive React services using the same proven design language and icons as our Shopify pages for visual consistency.
            </p>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <div class="service-card">
                <div class="service-icon">
                  <img src={store} alt="React Web Apps" />
                </div>
                <h3>React Web Applications</h3>
                <p>High‑performance SPAs with reusable components and modern tooling.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="service-card">
                <div class="service-icon">
                  <img src={marketplace} alt="React eCommerce" />
                </div>
                <h3>E‑commerce Frontends</h3>
                <p>Headless storefronts and custom carts integrated with APIs.</p>
              </div>
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="service-card">
                <div class="service-icon">
                  <img src="./assets/images/integrations.png" alt="API Integrations" />
                </div>
                <h3>API Integrations</h3>
                <p>Secure integrations with payments, CRMs, analytics and more.</p>
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

export default ReactDevelopment;


