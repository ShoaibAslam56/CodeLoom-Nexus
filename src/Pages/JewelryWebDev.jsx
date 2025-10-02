import React from "react";
import BannerContactForm from "../Components/BannerContactForm";
import { Link, NavLink } from "react-router-dom";
import DevelopmentProcess from "../Components/DevelopmentProcess";
import Faq from "../Components/Faq";
import LetDiscuss from "../Components/LetDiscuss";
import WhyChooseUs from "../Components/WhyChooseUs";

// Import images
import shopifyExperts from "../assets/images/Shopify-experts.png";
import jewelryStore from "../assets/images/jewelry-store.png";
import productSearchFiltering from "../assets/images/product-search-filtering.png";
import virtualTryOn from "../assets/images/virtual-try-on.png";
import productComparison from "../assets/images/product-comparison.png";
import wishlist from "../assets/images/wishlist.png";
import liveChat from "../assets/images/live-chat.png";
import paymentGateway from "../assets/images/payment-gateway.png";
import image13 from "../assets/images/image 13.png";
import image14 from "../assets/images/image 14.png";
import image23 from "../assets/images/image 23.png";
const JewelryWebDev = () => {
  const steps = [
    {
      number: 1,
      heading: "Initial Consultation",
      description:
        "We discuss your project requirements and goals which help us understand your requirements to align our approach accordingly.",
    },
    {
      number: 2,
      heading: "Project Scoping",
      description:
        "Next step is defining project scope, outlining features and functionalities which serve as a roadmap for the development process.",
    },
    {
      number: 3,
      heading: "Prototype Development",
      description:
        "We develop prototypes or wireframes before full scale development begins that gives a clear picture of the project's structure and functionality.",
    },
    {
      number: 4,
      heading: "Development",
      description:
        "Our frontend developers create responsive and interactive user interfaces while scalable server-side architectures are developed by our backend team.",
    },
    {
      number: 5,
      heading: "Integration",
      description:
        "Rigorous testing is conducted including integration testing and user acceptance testing to ensure a bug free, high performing product.",
    },
    {
      number: 6,
      heading: "Quality Assurance",
      description:
        "Our QA team reviews the project to identify any issues in usability, functionality and compatibility to deliver the final product.",
    },
    {
      number: 7,
      heading: "Deployment",
      description:
        "The final step involves smooth deployment of your project to the hosting environment, ensuring proper optimization for launch.",
    },
    {
      number: 8,
      heading: "Post Launch Support",
      description:
        "We provide ongoing support and maintenance post launch to ensure your website or app performs optimally and evolves constantly.",
    },
  ];
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
              {/* <li><a href="#" class="medium-text">Category</a></li> */}
              <li>
                <span class="medium-text">
                  Jewelry e-Commerce Website Development
                </span>
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
                    Jewelry eCommerce Website Development Company
                  </h1>
                  <div class="large-text content">
                    <p class="text">
                      We offer customized jewelry eCommerce store development
                      services to showcase your exquisite pieces. Our e-commerce
                      expertise ensures that your digital storefront captures
                      the elegance and allure of your jewelry collection
                      perfectly. From responsive layouts to secure payment
                      gateways, our jewelry website development company crafts
                      websites that help in enhancing shopping experience, build
                      brand trust and drive sales in the competitive online
                      jewelry landscape.
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
                  <span class="h1 count">9+</span>
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
      <section
        id="eCommerce_marketplace"
        class="section-spacing eCommerce-marketplace-section"
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-7 col-md-12 col-spacing-bottom-tablet">
              <div class="left-content">
                <div class="section-head-part">
                  <h2 class="section-head-title title">
                    <span>Jewelry Store</span> Design Services
                  </h2>
                </div>
                <p>
                  We{" "}
                  <strong>
                    specialize in developing e-commerce websites for jewelry
                    businesses
                  </strong>{" "}
                  by combining an in-depth understanding of the industry along
                  with our technical expertise. Our websites are designed to
                  showcase the intricate details of your products that help in
                  customer engagement and brand building. Our jewelry store
                  development services also integrate e-commerce functionality,
                  secure payment gateways and inventory management systems
                  prioritizing user experience. Mobile responsiveness and SEO
                  optimization further helps in establishing a strong digital
                  presence that directly impacts sales in this ever competitive
                  space.
                </p>
                <div class="view-all-blog">
                  <Link to="/contact-us" class="button" tabindex="0">
                    Consult a Specialist
                  </Link>
                </div>
              </div>
            </div>

            <div class="col-lg-5 col-md-12">
              <div class="image">
                <img
                  width="474px"
                  height="402px"
                  src={jewelryStore}
                  loading="lazy"
                  alt="Jewelry Store"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="horizontal-image-with-text-two-grid section-spacing section-inner-spacing">
        <div class="container">
          <div class="section-head-part">
            <h2 class="section-head-title">Key Features</h2>
          </div>

          <div class="row row-mb-minus">
            <div class="col-md-6 col-spacing-bottom">
              <div class="horizontal-image-with-text-inner">
                <div class="image">
                  <img
                    loading="lazy"
                    src={productSearchFiltering}
                    width="170px"
                    height="165px"
                    alt="Product Search &amp; Filtering"
                  />
                </div>
                <div class="content">
                  <h3 class="h5 title">Product Search &amp; Filtering</h3>
                  <p>
                    The website includes visual search feature and filter that
                    helps in finding similar items based on images. With the
                    advanced search feature customers can search for specific
                    metal type, style, price range etc.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-spacing-bottom">
              <div class="horizontal-image-with-text-inner">
                <div class="image">
                  <img
                    loading="lazy"
                    src={virtualTryOn}
                    width="340px"
                    height="320px"
                    alt="Virtual Try-On"
                  />
                </div>
                <div class="content">
                  <h3 class="h5 title">Virtual Try-On</h3>
                  <p>
                    Our websites are integrated with augmented reality (AR)
                    feature that helps in boosting customers buying decision as
                    they are able to experience the look and feel of the jewelry
                    before they buy.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-spacing-bottom">
              <div class="horizontal-image-with-text-inner">
                <div class="image">
                  <img
                    loading="lazy"
                    src={productComparison}
                    width="340px"
                    height="320px"
                    alt="Product Comparison"
                  />
                </div>
                <div class="content">
                  <h3 class="h5 title">Product Comparison</h3>
                  <p>
                    Customers can compare multiple pieces with contrasting
                    specifications, visual aspects and prices that helps them
                    choose the right product.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-spacing-bottom">
              <div class="horizontal-image-with-text-inner">
                <div class="image">
                  <img
                    loading="lazy"
                    src={wishlist}
                    width="340px"
                    height="320px"
                    alt="Wishlist"
                  />
                </div>
                <div class="content">
                  <h3 class="h5 title">Wishlist</h3>
                  <p>
                    The website includes wishlist and save for later feature
                    which helps in creating wishlists for future purchases. This
                    encourages return visits, facilitating sales.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-spacing-bottom">
              <div class="horizontal-image-with-text-inner">
                <div class="image">
                  <img
                    loading="lazy"
                    src={liveChat}
                    width="340px"
                    height="320px"
                    alt="Live Chat"
                  />
                </div>
                <div class="content">
                  <h3 class="h5 title">Live Chat</h3>
                  <p>
                    This feature offers real-time support via live chat for
                    virtual consultations with jewelry experts. This enhances
                    personal touch by replicating in-store experience.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-spacing-bottom">
              <div class="horizontal-image-with-text-inner">
                <div class="image">
                  <img
                    loading="lazy"
                    src={paymentGateway}
                    width="340px"
                    height="320px"
                    alt="Payment Gateway"
                  />
                </div>
                <div class="content">
                  <h3 class="h5 title">Payment Gateway</h3>
                  <p>
                    We integrate a robust, multi-layered secured payment gateway
                    for transactions. Multiple payment modes like credit card,
                    UPI payment, Net banking etc. are available to cater diverse
                    customer preferences.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="accelerate-your-business-main section-spacing">
        <div class="container">
          <div class="section-head-part">
            <h4 class="section-head-title h2">
              Accelerate your business growth
            </h4>
            <p class="section-head-content">
              We turn your ideas into reality with our customized development
              services that sets you apart from competition
            </p>
          </div>
          <div class="accelerate-your-business-slider slick-initialized slick-slider slick-dotted">
            <div class="slick-list draggable">
              <div
                class="slick-track"
                style={{
                  opacity: 1,
                  width: "1110px",
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              >
                <div
                  class="industries-we-work-single slick-slide slick-current slick-active"
                  data-slick-index="0"
                  aria-hidden="false"
                  tabindex="0"
                  role="tabpanel"
                  id="slick-slide00"
                  aria-describedby="slick-slide-control00"
                  style={{ width: "370px" }}
                >
                  <div class="industries-we-work-inner">
                    <div class="industries-image">
                      <img
                        loading="lazy"
                        src={image13}
                        alt="Jewelry Website Development"
                        width="273px"
                        height="180px"
                      />
                    </div>
                    <div class="industries-name h6">
                      Jewelry Website Development
                    </div>
                  </div>
                </div>
                <div
                  class="industries-we-work-single slick-slide slick-active"
                  data-slick-index="1"
                  aria-hidden="false"
                  tabindex="0"
                  role="tabpanel"
                  id="slick-slide01"
                  aria-describedby="slick-slide-control01"
                  style={{ width: "370px" }}
                >
                  <div class="industries-we-work-inner">
                    <div class="industries-image">
                      <img
                        loading="lazy"
                        src={image14}
                        alt="Beauty &amp; Wellness Store Development"
                        width="273px"
                        height="180px"
                      />
                    </div>
                    <div class="industries-name h6">
                      Beauty &amp; Wellness Store Development
                    </div>
                  </div>
                </div>
                <div
                  class="industries-we-work-single slick-slide slick-active"
                  data-slick-index="2"
                  aria-hidden="false"
                  tabindex="0"
                  role="tabpanel"
                  id="slick-slide02"
                  aria-describedby="slick-slide-control02"
                  style={{ width: "370px" }}
                >
                  <div class="industries-we-work-inner">
                    <div class="industries-image">
                      <img
                        loading="lazy"
                        src={image23}
                        alt="Fashion &amp; Apparel Store Development"
                        width="273px"
                        height="180px"
                      />
                    </div>
                    <div class="industries-name h6">
                      Fashion &amp; Apparel Store Development
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="business-growth-number-main">
            <div class="row row-mb-minus">
              <div class="col-xl-3 col-sm-6 col-spacing-bottom">
                <div class="business-growth-number">
                  <p class="number h4">500+</p>
                  <p class="text">Global Clients</p>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 col-spacing-bottom">
                <div class="business-growth-number">
                  <p class="number h4">24/7</p>
                  <p class="text">Customer Support</p>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 col-spacing-bottom">
                <div class="business-growth-number">
                  <p class="number h4">4.9/5</p>
                  <p class="text">Average Ratings</p>
                </div>
              </div>
              <div class="col-xl-3 col-sm-6 col-spacing-bottom">
                <div class="business-growth-number">
                  <p class="button-text h5">Get Started Now</p>
                  <Link to="/contact-us" class="button">
                    Click Here
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Link to="/portfolio" class="button mt-3 view-our-portfolio-btn">
            VIEW OUR PORTFOLIO
          </Link>
        </div>
      </section>

      <DevelopmentProcess heading="Our Development Process" steps={steps} />
      <WhyChooseUs />
      <Faq />
      <LetDiscuss />
    </>
  );
};

export default JewelryWebDev;
