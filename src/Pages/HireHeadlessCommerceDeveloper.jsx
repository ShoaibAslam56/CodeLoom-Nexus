import React from "react";
import LetDiscuss from "../Components/LetDiscuss";
import BrandsLogoSlider from "../Components/BrandsLogoSlider";
import { NavLink } from "react-router-dom";
import Freelancing from "../Components/Freelancing";
import Faq from "../Components/Faq";
import BannerContactForm from "../Components/BannerContactForm";
import HireDevelopers from "../Components/HireDevelopers";

// Import images
import shopifyExperts from "../assets/images/Shopify-experts.png";
import hireCertifiedShopifyExpert from "../assets/images/hire-certified-shopify-expert.png";
import programmingLanguagesIcon from "../assets/images/programming-languages-icon.png";
import databaseSkills from "../assets/images/database-skills.png";
import advancedToolsIcon from "../assets/images/advanced-tools-icon.png";
import conceptsIcon from "../assets/images/concepts-icon.png";
import developmentSkillsIcon from "../assets/images/development-skills-icon.png";
import operatingSystemsIcon from "../assets/images/operating-systems-icon.png";
import newProjectPhotorooms from "../assets/images/new-project-photoroom.png";
import candidateProfileIcon from "../assets/images/candidate-profile-icon.png";
import interviewIcon from "../assets/images/interview-icon.png";
import hireIcon from "../assets/images/hire-icon.png";
import backgroundLine from "../assets/images/background-line.png";

const HireHeadlessCommerceDeveloper = () => {
  return (
    <>
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
                <NavLink to="/hire-us" class="medium-text">
                  Hire Us
                </NavLink>
              </li>
              <li>
                <span class="medium-text">Hire Shopify Commerce Developer</span>
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
                    Hire Shopify Headless Commerce Developer
                  </h1>
                  <div class="large-text content">
                    <p class="text">
                      Are you planning to hire Shopify Plus developer to scale
                      your Shopify business limitlessly with new-age features?
                    </p>
                    <p class="text">
                      Hire dedicated Shopify Plus developers from CodeLoom Nexus for your dynamic Shopify Plus development
                      requirements and stand out strongly from the world's
                      fasting growing brands. Our Shopify Plus design experts
                      are committed to honoring the bottom line and tremendous
                      sales growth for all scale businesses, including emerging
                      brands to large-scale enterprises.
                    </p>
                  </div>
                </div>
              </div>
              <div class="page-main-banner-company-count d-flex">
                <div class="page-main-banner-company-count-list">
                  <span class="h1 count">200+</span>
                  <span class="text count-label">
                    Shopify Projects Empowered
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
              <div class="page-main-banner-certified-icon">
                <a
                  class="shopify-logo-white-banner"
                  title="Shopify Expert"
                  href="https://hireecommerceexperts.com/"
                  target="_blank"
                >
                  <img
                    loading="lazy"
                    src={shopifyExperts}
                    alt="we certified icon"
                    width="275px"
                    height="60px"
                  />
                </a>
              </div>
            </div>
            <BannerContactForm />
          </div>
        </div>
      </section>

      <BrandsLogoSlider />

      <section
        id="content-image-with-list"
        class="content-image-with-list section-spacing"
      >
        <div class="content-image-main">
          <div class="container">
            <div class="section-head-part">
              <h2 class="content-image-title section-head-title h3">
                The Core Reasons to Hire Certified Shopify Plus Experts from
                CodeLoom Nexus
              </h2>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-12">
                <div class="content-image-left-part">
                  <div class="content-image-desc">
                    <p class="content-image-sub-desc">
                      For more than 8 years, CodeLoom Nexus has always been a
                      result-oriented Shopify Plus development company. Our team
                      of Shopify Plus experts continuously strives to maximize
                      clients' profit by delivering exceptional Shopify Plus
                      services with advanced features.
                    </p>
                    <p class="content-image-sub-desc">
                      Whether you demand a minor theme customization or Shopify
                      Plus theme development, move from Shopify to Shopify Plus,
                      or build a whole new Shopify Plus store from scratch,
                      redesigning your existing store to custom Shopify Plus app
                      development for all such dynamic requirements, we are
                      here!
                    </p>
                    <p class="content-image-sub-desc">
                      Our Shopify Plus consultant dives deep into your
                      particular business requirements to adorn your Shopify
                      Plus platform with advanced features and convert it into a
                      lucrative digital brand. The following are the key reasons
                      to hire dedicated Shopify developers from CodeLoom Nexus.
                    </p>
                  </div>
                  <div class="content-bottom-image-part">
                    <img
                      loading="lazy"
                      src={hireCertifiedShopifyExpert}
                      width="430px"
                      height="400px"
                      alt="Hire Dedicated Shopify Plus Experts"
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="content-image-list-items">
                  <ul class="correct-icon-with-list-small mb-0">
                    <li>Well-versed in Shopify Plus oddities</li>
                    <li>
                      Expert in developing blended versions of Shopify Plus that
                      enable owners to cater to both B2B and DTC orders.
                    </li>
                    <li>
                      Solid experience in using advanced tools like AR and 3D
                      videos to provide interactive user experience and boost
                      customer engagement
                    </li>
                    <li>
                      Our Shopify Plus designers are experts in developing
                      tempting themes to deliver custom-built user experience
                    </li>
                    <li>
                      Follows high-standard optimized coding (HTML5, CSS3,
                      JavaScript, and Liquid) for each and every line of code
                    </li>
                    <li>
                      {" "}
                      Specialize in image compression and implementing lazy
                      image loading according to business needs to ensure a
                      high-performing Shopify Plus store.
                    </li>
                    <li>
                      Expert in minimizing feature bloat and optimizing app
                      requirements
                    </li>
                    <li>
                      Our client-centric Shopify Plus developers honor deadlines
                      and help clients reach the market faster with
                      uncompromised quality.
                    </li>
                    <li>
                      Excellent command over advanced development, custom
                      solutions, managing enterprise level clients, and
                      performance optimizations.{" "}
                    </li>
                    <li>
                      Help clients to accelerate conversion ratio and generate
                      massive revenue through flawless mobile responsive Shopify
                      Plus websites.
                    </li>
                    <li>
                      Follows an agile yet radical development approach to
                      deliver on-demand requirements, keeping flexible time
                      zones in mind.
                    </li>
                    <li>
                      We offer thorough customer support to global clients
                      during development and post-launch
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="technical-points" class="text-with-iconup section-spacing">
        <div class="container">
          <div class="section-head-part">
            <h2 class="text-with-iconup-title section-head-title">
              Technical Competence
            </h2>
          </div>
          <div class="text-with-iconup-wrapper">
            <div class="row row-mb-minus justify-content-center">
              <div class="col-lg-3 col-md-4 col-sm-6 col-spacing-bottom">
                <div class="text-with-iconup-point">
                  <div class="icon-main">
                    <img
                      loading="lazy"
                      src={programmingLanguagesIcon}
                      width="55px"
                      height="55px"
                      alt="Programming Languages"
                    />
                    <div class="arrow-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="44"
                        viewBox="0 0 40 44"
                        fill="none"
                      >
                        <path
                          d="M22.5 43.5L0 0.5H40L22.5 43.5Z"
                          fill="url(#paint0_linear_1673_265)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1673_265"
                            x1="28.5"
                            y1="22"
                            x2="-6.66264e-07"
                            y2="-1.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#CB44BD"></stop>
                            <stop offset="1" stop-color="#330C79"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <h3 class="h5 title">Programming Languages</h3>
                  <p class="text">Laravel, Python, React, Liquid, PHP, Node</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6 col-spacing-bottom">
                <div class="text-with-iconup-point">
                  <div class="icon-main">
                    <img
                      loading="lazy"
                      src={databaseSkills}
                      width="55px"
                      height="55px"
                      alt="Database Skills"
                    />
                    <div class="arrow-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="44"
                        viewBox="0 0 40 44"
                        fill="none"
                      >
                        <path
                          d="M22.5 43.5L0 0.5H40L22.5 43.5Z"
                          fill="url(#paint0_linear_1673_265)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1673_265"
                            x1="28.5"
                            y1="22"
                            x2="-6.66264e-07"
                            y2="-1.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#CB44BD"></stop>
                            <stop offset="1" stop-color="#330C79"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <h3 class="h5 title">Database Skills</h3>
                  <p class="text">Prisma, Local Storage, MongoDB, SQLite</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6 col-spacing-bottom">
                <div class="text-with-iconup-point">
                  <div class="icon-main">
                    <img
                      loading="lazy"
                      src={advancedToolsIcon}
                      width="55px"
                      height="55px"
                      alt="Advanced Tools"
                    />
                    <div class="arrow-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="44"
                        viewBox="0 0 40 44"
                        fill="none"
                      >
                        <path
                          d="M22.5 43.5L0 0.5H40L22.5 43.5Z"
                          fill="url(#paint0_linear_1673_265)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1673_265"
                            x1="28.5"
                            y1="22"
                            x2="-6.66264e-07"
                            y2="-1.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#CB44BD"></stop>
                            <stop offset="1" stop-color="#330C79"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <h3 class="h5 title">Advanced Tools</h3>
                  <p class="text">
                    Azure, The Code Editor, Bitbucket, Git, Jira, SVN
                  </p>
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6 col-spacing-bottom">
                <div class="text-with-iconup-point">
                  <div class="icon-main">
                    <img
                      loading="lazy"
                      src={conceptsIcon}
                      width="55px"
                      height="55px"
                      alt="Concepts"
                    />
                    <div class="arrow-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="44"
                        viewBox="0 0 40 44"
                        fill="none"
                      >
                        <path
                          d="M22.5 43.5L0 0.5H40L22.5 43.5Z"
                          fill="url(#paint0_linear_1673_265)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1673_265"
                            x1="28.5"
                            y1="22"
                            x2="-6.66264e-07"
                            y2="-1.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#CB44BD"></stop>
                            <stop offset="1" stop-color="#330C79"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <h3 class="h5 title">Concepts</h3>
                  <p class="text">MVC, Waterfall, Agile Methodologies, OOPS</p>
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6 col-spacing-bottom">
                <div class="text-with-iconup-point">
                  <div class="icon-main">
                    <img
                      loading="lazy"
                      src={developmentSkillsIcon}
                      width="55px"
                      height="55px"
                      alt="Development Skills"
                    />
                    <div class="arrow-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="44"
                        viewBox="0 0 40 44"
                        fill="none"
                      >
                        <path
                          d="M22.5 43.5L0 0.5H40L22.5 43.5Z"
                          fill="url(#paint0_linear_1673_265)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1673_265"
                            x1="28.5"
                            y1="22"
                            x2="-6.66264e-07"
                            y2="-1.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#CB44BD"></stop>
                            <stop offset="1" stop-color="#330C79"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <h3 class="h5 title">Development Skills</h3>
                  <p class="text">
                    Well-versed with Shopify API, Authentication Flow, and
                    GraphQL Flow
                  </p>
                </div>
              </div>

              <div class="col-lg-3 col-md-4 col-sm-6 col-spacing-bottom">
                <div class="text-with-iconup-point">
                  <div class="icon-main">
                    <img
                      loading="lazy"
                      src={operatingSystemsIcon}
                      width="55px"
                      height="55px"
                      alt="Operating Systems"
                    />
                    <div class="arrow-icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="44"
                        viewBox="0 0 40 44"
                        fill="none"
                      >
                        <path
                          d="M22.5 43.5L0 0.5H40L22.5 43.5Z"
                          fill="url(#paint0_linear_1673_265)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1673_265"
                            x1="28.5"
                            y1="22"
                            x2="-6.66264e-07"
                            y2="-1.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#CB44BD"></stop>
                            <stop offset="1" stop-color="#330C79"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <h3 class="h5 title">Operating Systems</h3>
                  <p class="text">Windows, Ubuntu, MacOS, Linux</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="big-empire-banner" class="big-empire-banner section-spacing">
        <div class="container">
          <div class="big-empire-banner-main">
            <div class="big-empire-banner-left">
              <h3 class="h5 big-empire-banner-title">
                If you are planning to <strong>DESIGN, DEVELOP</strong>, and{" "}
                <strong>SCALE</strong> on Shopify the way you love,
              </h3>
              <p class="big-empire-banner-sub-desc">
                A <strong>team of Shopify Plus developers</strong> at CodeLoom Nexus has the solution
              </p>
              <p class="big-empire-banner-sub-desc">
                We <strong>offer</strong> The <strong>Design</strong> You
                Desire, <strong>Development</strong> You Deserve, and{" "}
                <strong>Price</strong> You Pick!!!
              </p>
              <NavLink to="/contact-us">
                <div class="button white-button">Contact Us</div>
              </NavLink>
            </div>
            <div class="big-empire-banner-right">
              <img
                loading="lazy"
                src={newProjectPhotorooms}
                alt="contact image"
                width="409px"
                height="328px"
              />
            </div>
          </div>
        </div>
      </section>

      <Freelancing />

      <section
        id="card-with-icon"
        class="card-with-icon section-spacing section-inner-spacing "
      >
        <div class="container">
          <div class="card-with-icon-main">
            <div class="section-head-part">
              <h2 class="section-head-title">
                Hire Certified Shopify Developers Effortlessly
              </h2>
            </div>
            <div class="row row-mb-minus justify-content-center">
              <div class="col-lg-4 col-sm-6 card-with-icon-item-main col-spacing-bottom">
                <div class="card-with-icon-item">
                  <p class="card-number">1</p>
                  <div class="card-icon">
                    <img
                      loading="lazy"
                      src={candidateProfileIcon}
                      width="40px"
                      height="40px"
                      alt="candidate profile"
                    />
                  </div>
                  <div class="card-with-icon-detail">
                    <h3 class="card-title h5">Candidate Profile</h3>
                    <ul class="card-content-list large-text">
                      <li>Submission</li>
                      <li>Profile Review</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 card-with-icon-item-main col-spacing-bottom">
                <div class="card-with-icon-item">
                  <p class="card-number">2</p>
                  <div class="card-icon">
                    <img
                      loading="lazy"
                      src={interviewIcon}
                      width="40px"
                      height="40px"
                      alt="interview"
                    />
                  </div>
                  <div class="card-with-icon-detail">
                    <h3 class="card-title h5">Candidate Interview</h3>
                    <ul class="card-content-list large-text">
                      <li>Screening</li>
                      <li>Technical</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-sm-6 card-with-icon-item-main col-spacing-bottom">
                <div class="card-with-icon-item">
                  <p class="card-number">3</p>
                  <div class="card-icon">
                    <img
                      loading="lazy"
                      src={hireIcon}
                      width="40px"
                      height="40px"
                      alt="hire"
                    />
                  </div>
                  <div class="card-with-icon-detail">
                    <h3 class="card-title h5">Hire Shopify Developer</h3>
                    <ul class="card-content-list large-text">
                      <li>Induction</li>
                      <li>Initialization &amp; Work Discussion</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HireDevelopers />

      <div class="contact-banner-secound-section section-spacing">
        <div class="container">
          <div class="contact-banner-secound-background">
            <div class="line-background">
              <img
                loading="lazy"
                src={backgroundLine}
                width="600px"
                height="240px"
                alt="Let Us Help You Dominate the Global eCommerce Market"
              />
            </div>
            <div class="contact-banner-secound-content">
              <h3 class="title">
                Collaborate with <span>our official Shopify expert</span> for
                exceptional Shopify solutions
              </h3>
              <p class="content">
                Witness the diverse set of skills with our Shopify developers
              </p>
              <a href="contact-us.php" class="button white-button">
                Hire Dedicated Shopify Experts
              </a>
            </div>
          </div>
        </div>
      </div>

      <section
        id="company_info_number"
        class="company-info-number section-spacing"
      >
        <div class="container">
          <div class="section-head-part">
            <h3 class="title h5">Numbers Speaks Everything</h3>
          </div>
          <div class="row">
            <div class="col-md-3 company-info-list-main">
              <div class="company-info-list">
                <span class="number h1">200 +</span>
                <span class="company-info-label large-text">
                  Shopify Projects Empowered
                </span>
              </div>
            </div>
            <div class="col-md-3 company-info-list-main">
              <div class="company-info-list">
                <span class="number h1">38 +</span>
                <span class="company-info-label large-text">
                  Global Ventures Served
                </span>
              </div>
            </div>
            <div class="col-md-3 company-info-list-main">
              <div class="company-info-list">
                <span class="number h1">8 +</span>
                <span class="company-info-label large-text">
                  Years of Expertise
                </span>
              </div>
            </div>
            <div class="col-md-3 company-info-list-main">
              <div class="company-info-list">
                <span class="number h1">70 +</span>
                <span class="company-info-label large-text">
                  Best Tech-sassy Professionals
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq />
      <LetDiscuss />
    </>
  );
};

export default HireHeadlessCommerceDeveloper;
