import React, { useState } from "react";
import Freequote from "./Freequote";

// Import images
import priceShapBg from "../assets/images/price-shap-bg.svg";

const HireDevelopers = () => {
  const [modalshow, setModalShow] = useState(false);

  const modalhide = () => {
    setModalShow(false);
  };
  return (
    <>
      <section
        id="hire-price-section"
        class="hire-price-section section-spacing section-inner-spacing"
      >
        <div class="container">
          <div class="section-head-part">
            <h2 class="section-head-title">
              Flexible Hiring Models to Hire Shopify Developers
            </h2>
            <p class="section-head-content">
              Hire a Shopify developer for your eCommerce store at an affordable
              cost. You can hire our dedicated Shopify expert and experienced
              team to develop an excellent Shopify website!
            </p>
          </div>
          <div class="row row-mb-minus justify-content-center">
            <div class="col-lg-4 col-sm-6 col-spacing-bottom">
              <div class="hire-price-card">
                <div class="price-top-heading-main">
                  <h3 class="h4 price-card-title">Fixed Cost</h3>
                </div>
                <div class="price-content">
                  <img
                    loading="lazy"
                    class="price-curve-img"
                    src={priceShapBg}
                    width="373px"
                    height="40px"
                    alt="price curve"
                  />
                  <div class="price-content-box">
                    <p class="price-desc medium-text">
                      The fixed-cost plan to hire Shopify developers is only
                      suitable for big projects with standard requirements. We
                      will offer you a fixed estimation of your requirements
                      which include the benefits mentioned below:
                    </p>
                    <ul class="price-list">
                      <li>
                        <span class="list">No Hidden Costs</span>
                      </li>
                      <li>
                        <span class="list">Dedicated Account Manager</span>
                      </li>
                      <li>
                        <span class="list">Certified Developers</span>
                      </li>
                      <li class="two-line-height">
                        <span class="list">Flexible Pricing Model</span>
                      </li>
                      <li class="two-line-height">
                        <span class="list">Best for Full Store Setup</span>
                      </li>
                      <li>
                        <span class="list">24*7 Support</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="inquire-now-btn-main"
                  onClick={() => setModalShow(true)}
                >
                  <a
                    class="inquire-now-btn h18 form-model-button"
                    data-toggle="modal"
                    data-target="#form"
                  >
                    Inquire Now
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-spacing-bottom">
              <div class="hire-price-card">
                <div class="price-top-heading-main">
                  <h3 class="h4 price-card-title">Hourly</h3>
                </div>
                <div class="price-content">
                  <img
                    loading="lazy"
                    class="price-curve-img"
                    src={priceShapBg}
                    width="373px"
                    height="40px"
                    alt="price curve"
                  />
                  <div class="price-content-box">
                    <p class="price-desc medium-text">
                      The hourly basis cost plan to hire Shopify developers is
                      suitable for bug fixing, plugin integration, theme
                      customization, liquid coding, etc. We will offer you an
                      estimation on of your requirements which include the
                      benefits mentioned below:
                    </p>
                    <ul class="price-list">
                      <li>
                        <span class="list">No Hidden Costs</span>
                      </li>
                      <li>
                        <span class="list">Dedicated Account Manager</span>
                      </li>
                      <li>
                        <span class="list">Certified Developers</span>
                      </li>
                      <li class="two-line-height">
                        <span class="list">
                          Less Time Consuming &amp; High-Quality Work
                        </span>
                      </li>
                      <li class="two-line-height">
                        <span class="list">
                          Best for Small Task or Part Time Assistance
                        </span>
                      </li>
                      <li>
                        <span class="list">24*7 Support</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="inquire-now-btn-main"
                  onClick={() => setModalShow(true)}
                >
                  <a
                    class="inquire-now-btn h18 form-model-button"
                    data-toggle="modal"
                    data-target="#form"
                  >
                    Inquire Now
                  </a>
                </div>
              </div>
            </div>
            <div class="col-lg-4 col-sm-6 col-spacing-bottom">
              <div class="hire-price-card">
                <div class="price-top-heading-main">
                  <h3 class="h4 price-card-title">Retainer</h3>
                </div>
                <div class="price-content">
                  <img
                    loading="lazy"
                    class="price-curve-img"
                    src={priceShapBg}
                    width="373px"
                    height="40px"
                    alt="price curve"
                  />
                  <div class="price-content-box">
                    <p class="price-desc medium-text">
                      The retainer cost plan to hire Shopify developers suits
                      businesses requiring constant eCommerce care, and billing
                      is done periodically. We will offer you an estimation
                      accordingly for your requirements which include the
                      benefits mentioned below:
                    </p>
                    <ul class="price-list">
                      <li>
                        <span class="list">No Hidden Costs</span>
                      </li>
                      <li>
                        <span class="list">Dedicated Account Manager</span>
                      </li>
                      <li>
                        <span class="list">Certified Developers</span>
                      </li>
                      <li class="two-line-height">
                        <span class="list">Transparent pricing policy</span>
                      </li>
                      <li class="two-line-height">
                        <span class="list">
                          Best for Data Migration or Product Import
                        </span>
                      </li>
                      <li>
                        <span class="list">24*7 Support</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div
                  class="inquire-now-btn-main"
                  onClick={() => setModalShow(true)}
                >
                  <a
                    class="inquire-now-btn h18 form-model-button"
                    data-toggle="modal"
                    data-target="#form"
                  >
                    Inquire Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {modalshow && <Freequote closeModal={modalhide} />}
    </>
  );
};

export default HireDevelopers;
