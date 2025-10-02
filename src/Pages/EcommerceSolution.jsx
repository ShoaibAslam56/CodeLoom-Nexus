import React from "react";
import Faq from "../Components/Faq";
import LetDiscuss from "../Components/LetDiscuss";
import Workportfolioslider from "../Components/Workportfolioslider";
import TestimonialSlider from "../Components/TestimonialSlider";

// Import images
import lpBannerImg from "../assets/images/lp-images/lp-banner-img.png";
import groupChat from "../assets/images/lp-images/group-chat.png";
import experience from "../assets/images/lp-images/experience.png";
import test from "../assets/images/lp-images/test.png";
import saveMoney from "../assets/images/lp-images/save-money.png";
import termsAndConditions from "../assets/images/lp-images/terms-and-conditions.png";
import priceTag from "../assets/images/lp-images/price-tag.png";
import script from "../assets/images/lp-images/script.png";
import bestPrice from "../assets/images/lp-images/best-price.png";
import lpBusiness from "../assets/images/lp-images/lp-business.png";
import paw from "../assets/images/lp-images/paw.png";
import wardrobe from "../assets/images/lp-images/wardrobe.png";
import artStudies from "../assets/images/lp-images/art-studies.png";
import devices from "../assets/images/lp-images/devices.png";
import fastFood from "../assets/images/lp-images/fast-food.png";
import speaker from "../assets/images/lp-images/speaker.png";
import puzzle from "../assets/images/lp-images/puzzle.png";
import travellingVehicles from "../assets/images/lp-images/travelling-vehicles-of-a-road.png";
import food from "../assets/images/lp-images/food.png";
import steak from "../assets/images/lp-images/steak.png";
import sport from "../assets/images/lp-images/sport.png";
import suitcase from "../assets/images/lp-images/suitcase.png";
import compass from "../assets/images/lp-images/compass.png";
import creative from "../assets/images/lp-images/creative.png";
import paw1 from "../assets/images/lp-images/paw1.png";
import maintenance from "../assets/images/lp-images/maintenance.png";
import support247 from "../assets/images/lp-images/24-7.png";
import shopifyIco from "../assets/images/lp-images/shopify-ico.png";
import androidIco from "../assets/images/lp-images/android-ico.png";
import iosIco from "../assets/images/lp-images/ios-ico.png";
import techStack1 from "../assets/images/lp-images/tech-stack-1.png";
import techStackAndroid from "../assets/images/lp-images/tech-stack-adnroid.png";
import techStackIos from "../assets/images/lp-images/tech-stack-ios.png";
import teamWork from "../assets/images/lp-images/team-work-bro-1.png";
import resize from "../assets/images/lp-images/resize.png";
import seller from "../assets/images/lp-images/seller.png";
import framework from "../assets/images/lp-images/framework.png";
import paymentMethod from "../assets/images/lp-images/payment-method.png";
import headsetSolid from "../assets/images/lp-images/headset-solid-2.png";
import badge from "../assets/images/lp-images/badge.png";
import verified from "../assets/images/lp-images/verified.png";
import returnOfInvestment from "../assets/images/lp-images/return-of-investment.png";
import qualityAssurance from "../assets/images/lp-images/quality-assurance.png";

const EcommerceSolution = () => {
  return (
    <>
      <section class="lp-banner">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-md-6">
              <div class="page-main-banner-content-list">
                <h1 class="h1">
                  Complete e-commerce solutions that covers every niche Success
                </h1>
              </div>
            </div>
            <div class="col-12 col-md-6">
              <figure class="lp-banner-img">
                <img
                  loading="lazy"
                  src={lpBannerImg}
                  alt="lp-banner-img"
                  width="575px"
                  height="557px"
                />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section class="why-you-choose-us-section section-inner-spacing">
        <div class="container">
          <div class="section-head-part">
            <h2 class="section-head-title">
              Start your eCommerce business at just $2999
            </h2>
            <p class="section-head-content">
              Fixed Pricing at an unbelievable cost
            </p>
          </div>

          <div class="row row-mb-minus justify-content-center">
            <div class="col-md-3 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={groupChat}
                    width="70px"
                    height="70px"
                    alt="group-chat"
                  />
                </div>
                <h3 class="h6 title">Team of Specialists</h3>
                <p class="medium-text text">
                  Well experienced team of experts who know their job to the
                  core
                </p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={experience}
                    width="70px"
                    height="70px"
                    alt="experience"
                  />
                </div>
                <h3 class="h6 title">Proven Expertise</h3>
                <p class="medium-text text">
                  Efficient back-end team working diligently to keep projects on
                  track
                </p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={test}
                    width="70px"
                    height="70px"
                    alt="test"
                  />
                </div>
                <h3 class="h6 title">In-House Design &amp; Testing Experts</h3>
                <p class="medium-text text">
                  Creative team of designers and testing professionals who know
                  their work well
                </p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={saveMoney}
                    width="70px"
                    height="70px"
                    alt="save-money"
                  />
                </div>
                <h3 class="h6 title">No More Extra Cost</h3>
                <p class="medium-text text">
                  No hidden charges or any additional costs other than $2999
                </p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={termsAndConditions}
                    width="70px"
                    height="70px"
                    alt="terms-and-conditions"
                  />
                </div>
                <h3 class="h6 title">No Terms &amp; Conditions</h3>
                <p class="medium-text text">
                  No stringent rules or conditions applicable as everything is
                  transparent
                </p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={priceTag}
                    width="70px"
                    height="70px"
                    alt="price-tag"
                  />
                </div>
                <h3 class="h6 title">100% Fixed Price</h3>
                <p class="medium-text text">
                  You pay only the predetermined price, and it will be hosted on
                  your server and domain
                </p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={script}
                    width="70px"
                    height="70px"
                    alt="script"
                  />
                </div>
                <h3 class="h6 title">Efficient App Script</h3>
                <p class="medium-text text">
                  The built-in app script is designed to automate processes
                  seamlessly
                </p>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={bestPrice}
                    width="70px"
                    height="70px"
                    alt="best-price"
                  />
                </div>
                <h3 class="h6 title">Reasonable Pricing</h3>
                <p class="medium-text text">
                  Best services at prices that are extremely affordable and
                  attractive
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="lp-business section-spacing">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-12 responsive-order">
              <div class="lp-business-details">
                <div class="section-head-part">
                  <h2 class="section-head-title">
                    Business Solutions for Each Category
                  </h2>
                  <p class="section-head-content">
                    For new business owners, our one price for all offer{" "}
                    <strong>@$2999</strong> is irresistible, as it includes a{" "}
                    <strong>Shopify Website + Android App + iPhone App</strong>{" "}
                    worth{" "}
                    <em>
                      <strong>$10000</strong>
                    </em>
                    . We provide all-in-one business solutions, support and
                    services tailored according to your specific business needs
                    and requirements. For every business that demands
                    performance, profitability and scalability to remain
                    competitive, we have a solution as we offer a vast range of
                    services that helps establish a strong digital presence for
                    your business.
                  </p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-12">
              <div class="lp-business-img">
                <img
                  loading="lazy"
                  src={lpBusiness}
                  alt="Business Solutions"
                  width="575px"
                  height="374px"
                />
              </div>
            </div>
          </div>
          <div class="row margin-t">
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
              <div class="lp-business-category">
                <img
                  loading="lazy"
                  src={paw}
                  alt="paw"
                  width="50px"
                  height="50px"
                />
                <p class="lp-business-category-name">
                  Animals &amp; Pet Supplies
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
              <div class="lp-business-category">
                <img
                  loading="lazy"
                  src={wardrobe}
                  alt="wardrobe"
                  width="50px"
                  height="50px"
                />
                <p class="lp-business-category-name">
                  Apparel &amp; Accessories
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
              <div class="lp-business-category">
                <img
                  loading="lazy"
                  src={artStudies}
                  alt="art-studies"
                  width="50px"
                  height="50px"
                />
                <p class="lp-business-category-name">
                  Arts &amp; Entertainment
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
              <div class="lp-business-category">
                <img
                  loading="lazy"
                  src={devices}
                  alt="devices"
                  width="50px"
                  height="50px"
                />
                <p class="lp-business-category-name">Electronics</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
              <div class="lp-business-category">
                <img
                  loading="lazy"
                  src={fastFood}
                  alt="fast-food"
                  width="50px"
                  height="50px"
                />
                <p class="lp-business-category-name">
                  Food, Beverages &amp; Tobacco
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
              <div class="lp-business-category">
                <img
                  loading="lazy"
                  src={speaker}
                  alt="speaker"
                  width="50px"
                  height="50px"
                />
                <p class="lp-business-category-name">
                  Furniture &amp; Hardware
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
              <div class="lp-business-category">
                <img
                  loading="lazy"
                  src={puzzle}
                  alt="puzzle"
                  width="50px"
                  height="50px"
                />
                <p class="lp-business-category-name">Toys &amp; Games</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
              <div class="lp-business-category">
                <img
                  loading="lazy"
                  src={travellingVehicles}
                  width="50px"
                  height="50px"
                  alt="travelling-vehicles-of-a-road"
                />
                <p class="lp-business-category-name">Vehicles &amp; Parts</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
              <div class="lp-business-category">
                <img
                  loading="lazy"
                  src={food}
                  alt="food"
                  width="50px"
                  height="50px"
                />
                <p class="lp-business-category-name">
                  Grocery &amp; Vegetables
                </p>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
              <div class="lp-business-category">
                <img
                  loading="lazy"
                  src={steak}
                  alt="steak"
                  width="50px"
                  height="50px"
                />
                <p class="lp-business-category-name">Meat Store</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
              <div class="lp-business-category">
                <img
                  loading="lazy"
                  src={sport}
                  alt="sport"
                  width="50px"
                  height="50px"
                />
                <p class="lp-business-category-name">Sporting Goods</p>
              </div>
            </div>
            <div class="col-lg-3 col-md-4 col-sm-6 col-12">
              <div class="lp-business-category">
                <img
                  loading="lazy"
                  src={suitcase}
                  alt="suitcase"
                  width="50px"
                  height="50px"
                />
                <p class="lp-business-category-name">Luggage &amp; Bags</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="why-you-choose-us-section section-inner-spacing section-spacing">
        <div class="container">
          <div class="section-head-part">
            <h2 class="section-head-title">
              How we make successful eCommerce business?
            </h2>
          </div>
          <div class="row row-mb-minus justify-content-center">
            <div class="col-md-3 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={compass}
                    width="70px"
                    height="70px"
                    alt="compass"
                  />
                </div>
                <h3 class="h6 title">Discovery</h3>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={creative}
                    width="70px"
                    height="70px"
                    alt="creative"
                  />
                </div>
                <h3 class="h6 title">Initiation</h3>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={paw1}
                    width="70px"
                    height="70px"
                    alt="paw1"
                  />
                </div>
                <h3 class="h6 title">Delivery</h3>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={maintenance}
                    width="70px"
                    height="70px"
                    alt="maintenance"
                  />
                </div>
                <h3 class="h6 title">Maintenance</h3>
              </div>
            </div>
            <div class="col-md-3 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={support247}
                    width="70px"
                    height="70px"
                    alt="24-7"
                  />
                </div>
                <h3 class="h6 title">24*7 Support</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="lp-tech-stack section-spacing">
        <div class="container">
          <div class="section-head-part">
            <h2 class="section-head-title">Technology Stack</h2>
            <p class="section-head-content">
              We cover everything that goes into making your <br />
              digital business successful
            </p>
          </div>
          <div class="responsive-tab-sec">
            <div class="row">
              <ul class="tabs col-12 col-lg-2">
                <li class="active" rel="tab1">
                  <figure class="tab-icons">
                    <img
                      loading="lazy"
                      src={shopifyIco}
                      alt="shopify-ico"
                    />
                  </figure>
                  Shopify
                </li>
                <li rel="tab2">
                  <figure class="tab-icons">
                    <img
                      loading="lazy"
                      src={androidIco}
                      alt="android-ico"
                    />
                  </figure>
                  Android
                </li>
                <li rel="tab3" class="tab_last">
                  <figure class="tab-icons">
                    <img
                      loading="lazy"
                      src={iosIco}
                      alt="ios-ico"
                    />
                  </figure>
                  iOS
                </li>
              </ul>
              <div class="tab_container col-12 col-lg-10">
                <h3 class="d_active tab_drawer_heading" rel="tab1">
                  <span class="tab-icons">
                    <img
                      loading="lazy"
                      src={shopifyIco}
                      width="25px"
                      height="25px"
                      alt="shopify-ico"
                    />
                  </span>
                  Shopify
                </h3>
                <div id="tab1" class="tab_content">
                  <div class="tab_content-inner">
                    <figure class="tech-stack-img">
                      <img
                        loading="lazy"
                        src={techStack1}
                        width="215px"
                        height="249px"
                        alt="tech-stack-1"
                      />
                    </figure>
                    <div class="tech-stack-detail">
                      <h4 class="h5">Shopify Store</h4>
                      <p>
                        Start a successful eCommerce store with Shopify today
                        with us as we are trusted as Shopify partners and can
                        build a robust, scalable, sales-driven, and highly
                        secure Shopify store including Android-iOS Apps just at
                        $2999.
                      </p>
                      <ul>
                        <li>Cross-channel selling</li>
                        <li>Sell Anywhere</li>
                        <li>Security and Reliability</li>
                        <li>No tech worries</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3 class="tab_drawer_heading" rel="tab2">
                  <span class="tab-icons">
                    <img
                      loading="lazy"
                      src={androidIco}
                      width="25px"
                      height="25px"
                      alt="android-ico"
                    />
                  </span>
                  Android
                </h3>
                <div id="tab2" class="tab_content" style={{ display: "none" }}>
                  <div class="tab_content-inner">
                    <figure class="tech-stack-img">
                      <img
                        loading="lazy"
                        src={techStackAndroid}
                        width="215px"
                        height="249px"
                        alt="tech-stack-adnroid"
                      />
                    </figure>
                    <div class="tech-stack-detail">
                      <h4 class="h5">Android App</h4>
                      <p>
                        From designing to development to testing and support,
                        our team of android app developers employs the latest
                        technologies to create best-in-class apps for the Google
                        play store.
                      </p>
                      <ul>
                        <li>Multi-platform Development</li>
                        <li>Post-launch Maintenance</li>
                        <li>Meaningful Data, Anytime - Anywhere</li>
                        <li>Quality Assurance</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <h3 class="tab_drawer_heading" rel="tab3">
                  <span class="tab-icons">
                    <img
                      loading="lazy"
                      src={iosIco}
                      width="25px"
                      height="25px"
                      alt="ios-ico"
                    />
                  </span>
                  iOS
                </h3>
                <div id="tab3" class="tab_content" style={{ display: "none" }}>
                  <div class="tab_content-inner">
                    <figure class="tech-stack-img">
                      <img
                        loading="lazy"
                        src={techStackIos}
                        width="215px"
                        height="249px"
                        alt="tech-stack-ios"
                      />
                    </figure>
                    <div class="tech-stack-detail">
                      <h4 class="h5">iOS App</h4>
                      <p>
                        Want to go for an immensely functional and glitch-free
                        iOS app development to meet your business needs? CodeLoom Nexus
                       can be the one-stop solution for you to
                        develop and launch your next-gen iPhone/iOS eCommerce
                        app.
                      </p>
                      <ul>
                        <li>Strong Brand Value</li>
                        <li>Security of Enterprise Data</li>
                        <li>Higher Return on Investment</li>
                        <li>Tech-Ready Filtered Audience</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="lp-tech-part">
        <div class="container">
          <div class="row flex">
            <div class="col-md-4">
              <div class="section-head-part">
                <h2 class="section-head-title">Your all in one Tech Partner</h2>
                <p class="section-head-content">
                  We develop your eCommerce business projects. Treat yourself to
                  expert advice.
                </p>
              </div>
              <div class="lp-image-part">
                <img
                  loading="lazy"
                  src={teamWork}
                  width="342px"
                  height="342px"
                  alt="Your all in one Tech Partner"
                />
              </div>
              <div class="lp-bottom-part">
                <h6 class="lp-sub-heading">
                  Want us to develop a Successful app for your Industury
                </h6>
                <div class="lp-free-quote-button">
                  <a
                    class="button form-model-button"
                    data-toggle="modal"
                    data-target="#form"
                  >
                    Get Free Quote
                  </a>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="row">
                <div class="lp-icon-text-single-part col-lg-4 col-md-6 col-sm-6 col-6">
                  <div class="lp-icon-with-text-back">
                    <img
                      loading="lazy"
                      src={resize}
                      class="resize"
                      width="75px"
                      height="75px"
                    />
                    <p class="lp-icon-text">Scalability</p>
                  </div>
                </div>

                <div class="lp-icon-text-single-part col-lg-4 col-md-6 col-sm-6 col-6">
                  <div class="lp-icon-with-text-back">
                    <img
                      loading="lazy"
                      src={seller}
                      class="seller"
                      width="75px"
                      height="75px"
                    />
                    <p class="lp-icon-text">Multivendor Options</p>
                  </div>
                </div>

                <div class="lp-icon-text-single-part col-lg-4 col-md-6 col-sm-6 col-6">
                  <div class="lp-icon-with-text-back">
                    <img
                      loading="lazy"
                      src={framework}
                      class="framework"
                      width="75px"
                      height="75px"
                    />
                    <p class="lp-icon-text">App Integrations</p>
                  </div>
                </div>

                <div class="lp-icon-text-single-part col-lg-4 col-md-6 col-sm-6 col-6">
                  <div class="lp-icon-with-text-back">
                    <img
                      loading="lazy"
                      src={paymentMethod}
                      class="payment-method"
                      width="75px"
                      height="75px"
                    />
                    <p class="lp-icon-text">Payment Options</p>
                  </div>
                </div>

                <div class="lp-icon-text-single-part col-lg-4 col-md-6 col-sm-6 col-6">
                  <div class="lp-icon-with-text-back">
                    <img
                      loading="lazy"
                      src={headsetSolid}
                      class="headset-solid-2"
                      width="75px"
                      height="75px"
                    />
                    <p class="lp-icon-text">Support</p>
                  </div>
                </div>

                <div class="lp-icon-text-single-part col-lg-4 col-md-6 col-sm-6 col-6">
                  <div class="lp-icon-with-text-back">
                    <img
                      loading="lazy"
                      src={badge}
                      class="badge"
                      width="75px"
                      height="75px"
                    />
                    <p class="lp-icon-text">Strong Brand Value</p>
                  </div>
                </div>

                <div class="lp-icon-text-single-part col-lg-4 col-md-6 col-sm-6 col-6">
                  <div class="lp-icon-with-text-back">
                    <img
                      loading="lazy"
                      src={verified}
                      class="verified"
                      width="75px"
                      height="75px"
                    />
                    <p class="lp-icon-text">Security of Enterprise Data</p>
                  </div>
                </div>

                <div class="lp-icon-text-single-part col-lg-4 col-md-6 col-sm-6 col-6">
                  <div class="lp-icon-with-text-back">
                    <img
                      loading="lazy"
                      src={returnOfInvestment}
                      class="return-of-investment"
                      width="75px"
                      height="75px"
                    />
                    <p class="lp-icon-text">Higher Return on Investment</p>
                  </div>
                </div>

                <div class="lp-icon-text-single-part col-lg-4 col-md-6 col-sm-6 col-6">
                  <div class="lp-icon-with-text-back">
                    <img
                      loading="lazy"
                      src={qualityAssurance}
                      class="quality-assurance"
                      width="75px"
                      height="75px"
                    />
                    <p class="lp-icon-text">High-Quality Standards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Workportfolioslider /> */}
      {/* <TestimonialSlider /> */}
      <Faq />

      <LetDiscuss />
    </>
  );
};

export default EcommerceSolution;
