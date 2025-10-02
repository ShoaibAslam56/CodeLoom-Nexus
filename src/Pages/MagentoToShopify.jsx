import React from "react";
import BannerContactForm from "../Components/BannerContactForm";
import { NavLink } from "react-router-dom";
import Freelancing from "../Components/Freelancing";
import CaseStudySlider from "../Components/CaseStudySlider";
import Faq from "../Components/Faq";
import LetDiscuss from "../Components/LetDiscuss";

// Import images
import shopifyExperts from "../assets/images/Shopify-experts.png";
import magentoToShopifyMigrationChecklist from "../assets/images/magento-to-shopify-migration-checklist.png";
import agileMigrationProcessFlow from "../assets/images/agile-migration-process-flow.png";
import uninterruptedSalesforceServicesDuringMigration from "../assets/images/uninterrupted-salesforce-services-during-migration.png";
import coding from "../assets/images/coding.png";
import customerService from "../assets/images/customer-service.png";
import fourConvenientHiringPackages from "../assets/images/4-convenient-hiring-packages.png";
import orderAttributesBlue from "../assets/images/order-attributes-blue.png";
import customersDescriptionsBlue from "../assets/images/customers-descriptions-blue.png";
import whatDataMigrate7 from "../assets/images/what-data-migrate-7.png";
import whatDataMigrate6 from "../assets/images/what-data-migrate-6.png";
import cmsPageBlue from "../assets/images/cms-page-blue.png";
import conversation from "../assets/images/conversation.png";
import planing from "../assets/images/planing.png";
import webDesign1 from "../assets/images/web-design 1.png";
import test from "../assets/images/test.png";
import startup2 from "../assets/images/startup 2.png";
import approved from "../assets/images/approved.png";
import partTime from "../assets/images/part-time.png";
import twentyFourHours from "../assets/images/24-hours.png";
import hired from "../assets/images/hired.png";

const MagentoToShopify = () => {
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
                <NavLink to="/shopify-migration" class="medium-text">
                  Migration
                </NavLink>
              </li>
              <li>
                <span class="medium-text">Magento to Shopify Migration</span>
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
                    Top Magento to Shopify Migration Company
                  </h1>
                  <div class="large-text content">
                    <p class="text">
                      Are you planning to migrate from Magento to Shopify for
                      more flexibility, reliability, and scalability?
                    </p>
                    <p class="text">
                      CodeLoom Nexus is a champion Magento to Shopify
                      migration company to move all your Magento store data to
                      Shopify securely. Our Magento to Shopify migration
                      services will allow you to sell your products more
                      effortlessly on the most powerful eCommerce platform
                      Shopify.
                    </p>
                    <p class="text">
                      We maintain 100% of the data and functionalities available
                      on the new Shopify store. Say goodbye to server hosting
                      fees and the overhead cost of hiring a developer for minor
                      changes by Magento to Shopify product migration.
                    </p>
                  </div>
                </div>
              </div>
              <div class="page-main-banner-company-count d-flex ">
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

      <section class="diffrance-content-section section-inner-spacing">
        <div class="container">
          <div class="section-head-part">
            <h2 class="section-head-title">
              Why Should You Consider Magento to Shopify Migration?
            </h2>
          </div>

          <div class="diffrance-content-inner">
            <div class="diffrance-content-table">
              <table cellspacing="0" cellpadding="0">
                <tbody>
                  <tr>
                    <th>
                      <h3 class="h5 title">Shopify</h3>
                    </th>
                    <th>
                      <h3 class="h5 title">Magento</h3>
                    </th>
                  </tr>
                  <tr>
                    <td>
                      <span class="icon-with-text">
                        <b>
                          Shopify is a drag-and-drop online store builder and
                          easy to use.
                        </b>
                      </span>
                    </td>
                    <td>
                      <span class="icon-with-text">
                        Magento is difficult to use compared to Shopify.
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="icon-with-text">
                        <b>
                          Shopify is easy to use and customize by just dragging
                          elements wherever you want to place them.
                        </b>
                      </span>
                    </td>
                    <td>
                      <span class="icon-with-text">
                        Magento is difficult to customize as it will be needed
                        coding.
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="icon-with-text">
                        <b>
                          Shopify offers impressive sales tools like Abandoned
                          cart recovery, Multi-channel selling, and
                          collaborations with many courier services.
                        </b>
                      </span>
                    </td>
                    <td>
                      <span class="icon-with-text">
                        Need expensive extensions in order to add attractive
                        sales tools in Magento.
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="icon-with-text">
                        <b>
                          Shopify offers numerous impressive themes, including
                          paid and free.
                        </b>
                      </span>
                    </td>
                    <td>
                      <span class="icon-with-text">
                        Magento (Adobe Commerce) offers limited themes, and
                        themes are less impressive and simplistic.
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="icon-with-text">
                        <b>
                          It offers powerful built-in marketing features and
                          incredibly supports third-party integration for better
                          reach.
                        </b>
                      </span>
                    </td>
                    <td>
                      <span class="icon-with-text">
                        Magento majorly relies on its marketplace for marketing
                        tools. You will have to install extensions to run
                        marketing campaigns.
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="icon-with-text">
                        <b>
                          Shopify app store offer 8000 Shopify apps to add the
                          latest features and functionalities.
                        </b>
                      </span>
                    </td>
                    <td>
                      <span class="icon-with-text">
                        Magento extension store offer 3072 extensions to add
                        trending features and functionalities.
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="icon-with-text">
                        <b>
                          Shopify theme store offers 12 free themes and 134 paid
                          themes.
                        </b>{" "}
                      </span>
                    </td>
                    <td>
                      <span class="icon-with-text">
                        The Magento theme store offers 8 themes.
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="icon-with-text">
                        <b>Shopify offers 14+ payment gateways.</b>
                      </span>
                    </td>
                    <td>
                      <span class="icon-with-text">
                        Magento offers 7+ payment gateways.
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="icon-with-text">
                        <b>24X7 through live chat support and phone.</b>
                      </span>
                    </td>
                    <td>
                      <span class="icon-with-text">
                        Magento doesn't offer any support through phone, live
                        chat, or email. It is backed by the community support.
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="icon-with-text">
                        <b>
                          It offers rock-solid data security with PCI-DSS
                          compliance and SSL certification.
                        </b>
                      </span>
                    </td>
                    <td>
                      <span class="icon-with-text">
                        Magento has no in-built security features but is
                        flexible to support manual security changes.
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="icon-with-text">
                        <b>
                          You do not need any coding expertise or developers to
                          make changes in your Shopify store.
                        </b>
                      </span>
                    </td>
                    <td>
                      <span class="icon-with-text">
                        Magento developers are required for the customization of
                        the Magento store.
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="icon-with-text">
                        <b>
                          Shopify allows easy store setup and enables quick time
                          to deploy.
                        </b>
                      </span>
                    </td>
                    <td>
                      <span class="icon-with-text">
                        Magento is tough to manage and takes more time for
                        online store development.
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="icon-with-text">
                        <b>
                          Shopify is budget friendly and suitable for small or
                          medium-scale businesses.
                        </b>
                      </span>
                    </td>
                    <td>
                      <span class="icon-with-text">
                        Magento is expensive as you will need to hire a team of
                        developers to manage. It is suitable for small-scale
                        businesses.
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <span class="icon-with-text">
                        <b>
                          Shopify's average server response speed is 609
                          milliseconds.
                        </b>
                      </span>
                    </td>
                    <td>
                      <span class="icon-with-text">
                        Magento's average server response speed is 967
                        milliseconds.
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p class="content">
              The bold points above indicate a better eCommerce platform than
              the Other one. So undoubtedly, Shopify is way better than Magento
              (Adobe Commerce) for online store development. As a leading
              Magento to Shopify migration agency, we highly recommend you
              migrate your Magento store to Shopify.
            </p>
          </div>
        </div>
      </section>

      <section class="why-you-choose-us-section section-inner-spacing section-spacing mt-0">
        <div class="container">
          <div class="section-head-part">
            <h2 class="section-head-title">
              Why Should You Consider CodeLoom Nexus for Magento to Shopify
              Migration Solutions?
            </h2>
            <p class="section-head-content">
              Being a top Magento to Shopify migration company, we lead the
              global eCommerce industry. Our dedicated Shopify developers are
              well-versed in the latest eCommerce insight, advanced tools, and
              resources. Our Magento to Shopify migration checklist helps us to
              migrate all data of Magento with zero data loss.
            </p>
            <p class="section-head-content">
              Our Shopify migration experts use their extensive expertise to
              move Magento store's all data, including CSV files, SKU
              variations, customer data, product categories, product attributes,
              listing titles, inventory details, and order data transfer. We
              ensure seamless, reliable, and secure Magento to Shopify data
              migration services using exceptional Shopify migration apps like
              Matrixify, LitExtension, and cart2cart.
            </p>
          </div>

          <div class="row row-mb-minus justify-content-center">
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={magentoToShopifyMigrationChecklist}
                    alt="Magento to Shopify Migration Checklist"
                    width="70px"
                    height="70px"
                  />
                </div>
                <h3 class="h6 title">Magento to Shopify Migration Checklist</h3>
                <p class="medium-text text">
                  Our Shopify migration developers discuss with the client
                  before migration what data or features they want to remove and
                  what new features they are looking to add after migration.
                  Experience the sales-oriented and high-performing Shopify
                  store by choosing us as your Magento to Shopify product
                  migration company.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={agileMigrationProcessFlow}
                    alt="Agile Migration Process Flow"
                    width="70px"
                    height="70px"
                  />
                </div>
                <h3 class="h6 title">Agile Migration Process Flow</h3>
                <p class="medium-text text">
                  Magento database backup -&gt; Build a new Shopify store to
                  import data from the existing Magento store -&gt; Set up
                  Source &amp; Target cart -&gt; Choose data to migrate from
                  Magento to Shopify -&gt; Run the complete migration -&gt;
                  Follow post-migration guidelines for future-ready Shopify
                  store.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={uninterruptedSalesforceServicesDuringMigration}
                    alt="Uninterrupted Salesforce Services During Migration"
                    width="70px"
                    height="70px"
                  />
                </div>
                <h3 class="h6 title">
                  Uninterrupted Salesforce Services During Migration
                </h3>
                <p class="medium-text text">
                  As a top-notch Magento to Shopify migration service provider,
                  we are experts in importing all data from the old Magento
                  store to Shopify without interfering with your running store
                  operations. We guarantee zero data loss and zero downtime
                  throughout the migration process.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={coding}
                    alt="Magento to Shopify Migration Expert"
                    width="70px"
                    height="70px"
                  />
                </div>
                <h3 class="h6 title">Magento to Shopify Migration Expert</h3>
                <p class="medium-text text">
                  With 8+ years of extensive experience Shopify development
                  industry, we have immense knowledge and skills in delivering
                  seamless Magento to Shopify migration solutions. We offer a
                  dedicated point of contact during the complete migration
                  process to maintain 100% transparency and keep you updated
                  about each migration stage.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={customerService}
                    alt="Post-launch Support"
                    width="70px"
                    height="70px"
                  />
                </div>
                <h3 class="h6 title">Post-launch Support</h3>
                <p class="medium-text text">
                  As an expert Magento to Shopify migration agency, we believe
                  our Shopify migration services should add more value to
                  clients' online businesses. So we provide post-migration
                  customer support to ensure better store performance and higher
                  conversion rates.
                </p>
              </div>
            </div>
            <div class="col-md-4 col-sm-6 col-spacing-bottom">
              <div class="why-you-choose-us-points">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon"
                    src={fourConvenientHiringPackages}
                    alt="4 Convenient Hiring Packages"
                    width="70px"
                    height="70px"
                  />
                </div>
                <h3 class="h6 title">4 Convenient Hiring Packages</h3>
                <p class="medium-text text">
                  We know overall cost is one of the major reasons for moving
                  towards Magento to Shopify migrations. CodeLoom Nexus
                  offers 4 convenient hiring packages keeping the development
                  cost concern in mind to provide you with affordable yet
                  efficient Magento to Shopify migration services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="icon-and-text-grid-section section-spacing">
        <div class="container">
          <div class="section-head-part">
            <h2 class="section-head-title">
              What Data Can CodeLoom Nexus Migrate from Magento to Shopify?
            </h2>
            <p class="section-head-content">
              CodeLoom Nexus offers effortless and secure data migration from
              Magento to Shopify with uninterrupted existing store operations
              and zero data loss. Our Shopify experts make it very easy to
              import all your Magento data to the Shopify eCommerce platform,
              ensuring rigid data security and zero downtime.
            </p>
          </div>
          <div class="row row-mb-minus justify-content-center">
            <div class="col-xl-4 col-lg-4 col-sm-6 col-spacing-bottom">
              <div class="icon-and-text-grid-back">
                <div class="icon-part">
                  <img
                    loading="lazy"
                    src={orderAttributesBlue}
                    width="70px"
                    height="70px"
                    alt="Order Attributes"
                  />
                </div>
                <h3 class="h6 title">Order Attributes</h3>
                <p class="medium-text">
                  Order details (date, order status, product details, history),
                  Shipping &amp; Billing Address, Customer details, etc.
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-sm-6 col-spacing-bottom">
              <div class="icon-and-text-grid-back">
                <div class="icon-part">
                  <img
                    loading="lazy"
                    src={customersDescriptionsBlue}
                    width="70px"
                    height="70px"
                    alt="Customers Descriptions"
                  />
                </div>
                <h3 class="h6 title">Customers Descriptions</h3>
                <p class="medium-text">
                  Customer's name, Sign-up details, Credit &amp; Debit card
                  details, Emails, Billing &amp; Shipping address, etc.
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-sm-6 col-spacing-bottom">
              <div class="icon-and-text-grid-back">
                <div class="icon-part">
                  <img
                    loading="lazy"
                    src={whatDataMigrate7}
                    width="70px"
                    height="70px"
                    alt="Content"
                  />
                </div>
                <h3 class="h6 title">Content</h3>
                <p class="medium-text">
                  Migrate blog posts, SEO URLs, and all descriptions.
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-sm-6 col-spacing-bottom">
              <div class="icon-and-text-grid-back">
                <div class="icon-part">
                  <img
                    loading="lazy"
                    src={whatDataMigrate6}
                    width="70px"
                    height="70px"
                    alt="Reviews and Coupons"
                  />
                </div>
                <h3 class="h6 title">Reviews and Coupons</h3>
                <p class="medium-text">
                  Coupons name, offer date, expiration date, coupon codes, and
                  many more.
                </p>
              </div>
            </div>
            <div class="col-xl-4 col-lg-4 col-sm-6 col-spacing-bottom">
              <div class="icon-and-text-grid-back">
                <div class="icon-part">
                  <img
                    loading="lazy"
                    src={cmsPageBlue}
                    width="70px"
                    height="70px"
                    alt="CMS Pages"
                  />
                </div>
                <h3 class="h6 title">CMS Pages</h3>
                <p class="medium-text">
                  Static pages like the About Us page, Home page, and Privacy
                  policy page.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="workflow_section_two"
        class="workflow-section section-spacing"
      >
        <div class="container">
          <div class="section-head-part">
            <h2 class="section-head-title">
              Our Strategic Migration Process to Serve Your Convenience
            </h2>
            <p class="section-head-content">
              As a top Magento to Shopify migration service provider, our
              skilled Shopify migration developers are committed to following a
              demonstrated and effective import process. It enables bug-free,
              streamlined, quick, and seamless Magento to Shopify migration
              services.
            </p>
          </div>

          <div class="workflow-step workflow-small">
            <div class="workflow-step-wrap row-mb-minus">
              <div class="workflow-single col-spacing-bottom">
                <div class="workflow-single-back">
                  <div class="image">
                    <img
                      loading="lazy"
                      class="icon"
                      width="50px"
                      height="50px"
                      alt="Discuss Project Requirements"
                      src={conversation}
                    />
                  </div>
                  <span class="workflow-count">01</span>
                  <h3 class="h6 title">Discuss Project Requirements</h3>
                  <ul class="small-text workflow-content">
                    <li>
                      Our Shopify migration experts discuss with clients to
                      discover what are the exact project requirements.
                    </li>
                  </ul>
                </div>
              </div>

              <div class="workflow-single col-spacing-bottom">
                <div class="workflow-single-back">
                  <div class="image">
                    <img
                      loading="lazy"
                      class="icon"
                      width="50px"
                      height="50px"
                      alt="Planning"
                      src={planing}
                    />
                  </div>
                  <span class="workflow-count">02</span>
                  <h3 class="h6 title">Planning</h3>
                  <ul class="small-text workflow-content">
                    <li>
                      After knowing clients' specific requirements, we design
                      strategic planning for an uninterrupted development
                      process. It enables us to deliver the final product that
                      meets customers' unique requirements quickly
                    </li>
                  </ul>
                </div>
              </div>

              <div class="workflow-single col-spacing-bottom">
                <div class="workflow-single-back">
                  <div class="image">
                    <img
                      loading="lazy"
                      class="icon"
                      width="50px"
                      height="50px"
                      alt="Designing &amp; Development"
                      src={webDesign1}
                    />
                  </div>
                  <span class="workflow-count">03</span>
                  <h3 class="h6 title">Designing &amp; Development</h3>
                  <ul class="small-text workflow-content">
                    <li>
                      Our Shopify developers use extensive expertise, strong
                      technical background and modern tools &amp; technology to
                      provide a dynamic user experience and sales-driven store.
                    </li>
                  </ul>
                </div>
              </div>

              <div class="workflow-single col-spacing-bottom">
                <div class="workflow-single-back">
                  <div class="image">
                    <img
                      loading="lazy"
                      class="icon"
                      width="50px"
                      height="50px"
                      alt="QA Testing"
                      src={test}
                    />
                  </div>
                  <span class="workflow-count">04</span>
                  <h3 class="h6 title">QA Testing</h3>
                  <ul class="small-text workflow-content">
                    <li>
                      Before releasing a final product for UAT, our QA
                      specialist ensure the quality of the website by performing
                      rigorous quality testing.
                    </li>
                  </ul>
                </div>
              </div>

              <div class="workflow-single col-spacing-bottom">
                <div class="workflow-single-back">
                  <div class="image">
                    <img
                      loading="lazy"
                      class="icon"
                      width="50px"
                      height="50px"
                      alt="UAT &amp; Deploy"
                      src={startup2}
                    />
                  </div>
                  <span class="workflow-count">05</span>
                  <h3 class="h6 title">UAT &amp; Deploy</h3>
                  <ul class="small-text workflow-content">
                    <li>
                      After successful QA testing, we go for UAT to validate
                      end-to-end functionality from a customer or end user side.
                      After getting approval from the end-user, the Shopify
                      store is ready to deploy.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Freelancing />

      <section id="prices-section" class="price-section section-spacing">
        <div class="section-head-part">
          <h2 class="section-head-title">Convenient Hiring Plans</h2>
        </div>
        <div class="container">
          <div class="row row-mb-minus">
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="price-box">
                <h3 class="h5 price-box-heading">Round-the-Clock</h3>
                <div class="price-content-main">
                  <div class="price-icon">
                    <img
                      loading="lazy"
                      src={approved}
                      width="45px"
                      height="45px"
                      alt="Round the Clock"
                    />
                  </div>
                  <div class="price-time-main">
                    <h4 class="h5 price-time-title">Time Duration</h4>
                    <p class="price-time-desc">1 Month (160 hrs)</p>
                  </div>
                  <div class="price-time-main">
                    <h4 class="h5 price-time-title">Billing</h4>
                    <p class="price-time-desc">Monthly</p>
                  </div>
                  <div class="price-time-main">
                    <h4 class="h5 price-time-title">Communication</h4>
                    <ul class="price-social-icon">
                      <li>
                        <a
                          href="mailto:contact@codeloomnexus.com"
                          aria-label="Mail"
                        >
                          <svg
                            width="19"
                            height="15"
                            viewBox="0 0 19 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.55774 1.94439L7.77927 6.96338C8.84967 7.82688 10.3214 7.82688 11.3918 6.96338L17.6133 1.94434"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M16.1111 1H2.88889C1.84568 1 1 1.84568 1 2.88889V12.3333C1 13.3765 1.84568 14.2222 2.88889 14.2222H16.1111C17.1543 14.2222 18 13.3765 18 12.3333V2.88889C18 1.84568 17.1543 1 16.1111 1Z"
                              stroke="white"
                              stroke-linecap="round"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shivlab.slack.com"
                          aria-label="Slack"
                          target="_blank"
                        >
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.31079 1C6.36022 1 5.58974 1.77221 5.58974 2.7245C5.58952 2.95074 5.63386 3.17481 5.72023 3.38391C5.80659 3.59302 5.9333 3.78306 6.09312 3.9432C6.25293 4.10333 6.44272 4.23042 6.65165 4.31721C6.86057 4.40399 7.08456 4.44878 7.31079 4.44901H9.03209V2.7245C9.03252 2.26757 8.85136 1.8292 8.52856 1.5058C8.20576 1.18239 7.76773 1.00046 7.31079 1ZM7.31079 5.59868H2.72105C1.77048 5.59868 1 6.37089 1 7.32347C1 8.27578 1.77048 9.04798 2.72105 9.04798H7.31108C8.26135 9.04798 9.03209 8.27578 9.03209 7.32347C9.03209 6.37089 8.26135 5.59868 7.31079 5.59868Z"
                              stroke="white"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M18.2117 7.32347C18.2117 6.37089 17.4409 5.59868 16.4904 5.59868C15.5398 5.59868 14.7693 6.37089 14.7693 7.32347V9.04798H16.4904C16.9473 9.04755 17.3853 8.86554 17.7081 8.54222C18.0309 8.21881 18.2121 7.7804 18.2117 7.32347ZM13.622 7.32347V2.7245C13.6223 2.26757 13.4412 1.8292 13.1184 1.5058C12.7956 1.18239 12.3575 1.00046 11.9006 1C10.95 1 10.1796 1.77221 10.1796 2.7245V7.32318C10.1796 8.27604 10.95 9.04824 11.9006 9.04824C12.3575 9.04781 12.7956 8.86588 13.1184 8.54247C13.4412 8.21907 13.6223 7.7804 13.622 7.32347Z"
                              stroke="white"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M11.9006 18.2457C12.3575 18.2453 12.7956 18.0634 13.1184 17.74C13.4412 17.4166 13.6223 16.9782 13.622 16.5212C13.6223 16.0643 13.4412 15.626 13.1184 15.3025C12.7956 14.9791 12.3575 14.7972 11.9006 14.7967H10.1796V16.5212C10.1796 17.4735 10.95 18.2457 11.9006 18.2457ZM11.9006 13.647H16.4906C17.4409 13.647 18.2117 12.8748 18.2117 11.9223C18.2121 11.4653 18.0309 11.0269 17.7081 10.7036C17.3853 10.3802 16.9473 10.1982 16.4904 10.1978H11.9006C10.95 10.1978 10.1796 10.97 10.1796 11.9223C10.1793 12.1485 10.2236 12.3726 10.31 12.5816C10.3964 12.7908 10.5231 12.9808 10.6829 13.1409C10.8427 13.3011 11.0325 13.4282 11.2414 13.5149C11.4504 13.6018 11.6744 13.6469 11.9006 13.647Z"
                              stroke="white"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M1 11.9223C0.999777 12.1485 1.04411 12.3726 1.13048 12.5816C1.21684 12.7908 1.34355 12.9808 1.50337 13.1409C1.66318 13.3011 1.85297 13.4282 2.0619 13.5149C2.27083 13.6018 2.49481 13.6465 2.72105 13.6468C3.17798 13.6463 3.61602 13.4643 3.93883 13.1409C4.26164 12.8176 4.44276 12.3792 4.44238 11.9223V10.1978H2.72105C1.77048 10.1978 1 10.97 1 11.9223ZM5.58975 11.9223V16.521C5.58975 17.4735 6.36022 18.2457 7.3108 18.2457C7.76773 18.2453 8.20576 18.0634 8.52856 17.74C8.85137 17.4166 9.03252 16.9782 9.03209 16.5212V11.9223C9.03234 11.696 8.98803 11.4719 8.90162 11.2628C8.81522 11.0537 8.68854 10.8636 8.52865 10.7035C8.36884 10.5434 8.17899 10.4163 7.97004 10.3295C7.76106 10.2427 7.53705 10.1979 7.3108 10.1978C6.36022 10.1978 5.58975 10.97 5.58975 11.9223Z"
                              stroke="white"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="tel:9016777787" aria-label="Phone">
                          <svg
                            width="19"
                            height="20"
                            viewBox="0 0 19 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18 15.697C18 16.021 17.9319 16.354 17.7872 16.678C17.6425 17.002 17.4552 17.308 17.2083 17.596C16.7912 18.082 16.3315 18.433 15.8122 18.658C15.3015 18.883 14.7481 19 14.1522 19C13.2839 19 12.356 18.784 11.3771 18.343C10.3981 17.902 9.41913 17.308 8.44867 16.561C7.4697 15.805 6.54181 14.968 5.65648 14.041C4.77967 13.105 3.98798 12.124 3.28142 11.098C2.58337 10.072 2.02153 9.046 1.61292 8.029C1.20431 7.003 1 6.022 1 5.086C1 4.474 1.10215 3.889 1.30646 3.349C1.51077 2.8 1.83425 2.296 2.28543 1.846C2.83025 1.279 3.42614 1 4.05608 1C4.29444 1 4.5328 1.054 4.74562 1.162C4.96695 1.27 5.16274 1.432 5.31597 1.666L7.29094 4.609C7.44417 4.834 7.55483 5.041 7.63145 5.239C7.70806 5.428 7.75063 5.617 7.75063 5.788C7.75063 6.004 7.69104 6.22 7.57186 6.427C7.46119 6.634 7.29945 6.85 7.09514 7.066L6.44817 7.777C6.35453 7.876 6.31197 7.993 6.31197 8.137C6.31197 8.209 6.32048 8.272 6.33751 8.344C6.36305 8.416 6.38858 8.47 6.40561 8.524C6.55884 8.821 6.82273 9.208 7.1973 9.676C7.58037 10.144 7.98898 10.621 8.43165 11.098C8.89134 11.575 9.334 12.016 9.78518 12.421C10.2278 12.817 10.5939 13.087 10.8833 13.249C10.9259 13.267 10.977 13.294 11.0366 13.321C11.1047 13.348 11.1728 13.357 11.2494 13.357C11.3941 13.357 11.5048 13.303 11.5984 13.204L12.2454 12.529C12.4582 12.304 12.6625 12.133 12.8583 12.025C13.0541 11.899 13.2499 11.836 13.4627 11.836C13.6244 11.836 13.7947 11.872 13.982 11.953C14.1693 12.034 14.365 12.151 14.5779 12.304L17.3956 14.419C17.6169 14.581 17.7702 14.77 17.8638 14.995C17.9489 15.22 18 15.445 18 15.697Z"
                              stroke="white"
                              stroke-miterlimit="10"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="skype:kishan-mehta?chat" aria-label="Skype">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.40361 1.57272L6.99986 2.06603C7.06932 2.12288 7.15 2.16442 7.23662 2.18792C7.32325 2.21143 7.41386 2.21639 7.50253 2.20246L7.40361 1.57272ZM1.57261 7.40371L2.20246 7.50253C2.21637 7.41387 2.21141 7.32328 2.1879 7.23668C2.16439 7.15008 2.12286 7.06941 2.06603 6.99996L1.57261 7.40371ZM9.59639 15.4273L10 14.934C9.93059 14.8771 9.84993 14.8356 9.76333 14.8121C9.67672 14.7886 9.58613 14.7836 9.49747 14.7975L9.59639 15.4273ZM15.4273 9.59639L14.7975 9.49747C14.7836 9.58613 14.7886 9.67672 14.8121 9.76333C14.8356 9.84993 14.8771 9.93059 14.934 10L15.4273 9.59639ZM7.80736 1.0794C6.95406 0.380068 5.88451 -0.00143633 4.78125 4.0638e-06V1.275C5.59016 1.27353 6.37444 1.55315 6.99996 2.06603L7.80736 1.0794ZM4.78125 4.0638e-06C2.14062 4.0638e-06 4.18418e-06 2.14062 4.18418e-06 4.78125H1.275C1.275 2.84485 2.84485 1.275 4.78125 1.275V4.0638e-06ZM4.18418e-06 4.78125C-0.00145735 5.88449 0.380008 6.95404 1.07929 7.80736L2.06603 6.99986C1.55317 6.37436 1.27355 5.59012 1.275 4.78125H4.18418e-06ZM2.125 8.5C2.125 8.16021 2.15146 7.82712 2.20246 7.50253L0.942972 7.30479C0.88098 7.70018 0.849897 8.09979 0.850004 8.5H2.125ZM8.5 14.875C4.9792 14.875 2.125 12.0208 2.125 8.5H0.850004C0.850004 12.7249 4.27508 16.15 8.5 16.15V14.875ZM9.49747 14.7975C9.17288 14.8484 8.83979 14.875 8.5 14.875V16.15C8.90619 16.15 9.30548 16.1182 9.69521 16.057L9.49747 14.7975ZM9.19264 15.9207C10.046 16.62 11.1155 17.0015 12.2187 17V15.725C11.4099 15.7264 10.6256 15.4468 10 14.934L9.19264 15.9207ZM12.2187 17C14.8594 17 17 14.8594 17 12.2187H15.725C15.725 14.1552 14.1552 15.725 12.2187 15.725V17ZM17 12.2187C17.0015 11.1155 16.62 10.046 15.9207 9.19264L14.934 10C15.4468 10.6256 15.7264 11.4099 15.725 12.2187H17ZM14.875 8.5C14.875 8.83979 14.8484 9.17288 14.7975 9.49747L16.057 9.69521C16.1182 9.30548 16.15 8.90619 16.15 8.5H14.875ZM8.5 2.125C12.0208 2.125 14.875 4.9792 14.875 8.5H16.15C16.15 4.27508 12.7249 0.850004 8.5 0.850004V2.125ZM7.50253 2.20246C7.83249 2.15071 8.166 2.12488 8.5 2.125V0.850004C8.09381 0.850004 7.69463 0.881772 7.30469 0.942972L7.50253 2.20246Z"
                              fill="white"
                            ></path>
                            <path
                              d="M10.5283 5.50112C10.5283 5.50112 9.71702 4.88721 8.49993 4.88721C7.6886 4.88721 6.26868 4.88721 6.26868 6.49275C6.26868 8.49971 10.7312 8.49971 10.7312 10.5068C10.7312 12.1122 9.31125 12.1122 8.49993 12.1122C7.28294 12.1122 6.47161 11.4983 6.47161 11.4983"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="price-box">
                <h3 class="h5 price-box-heading">Part-Time</h3>
                <div class="price-content-main">
                  <div class="price-icon">
                    <img
                      loading="lazy"
                      src={partTime}
                      width="45px"
                      height="45px"
                      alt="Part Time"
                    />
                  </div>
                  <div class="price-time-main">
                    <h4 class="h5 price-time-title">Time Duration</h4>
                    <p class="price-time-desc">4 hrs/Day</p>
                  </div>
                  <div class="price-time-main">
                    <h4 class="h5 price-time-title">Billing</h4>
                    <p class="price-time-desc">Weekly</p>
                  </div>
                  <div class="price-time-main">
                    <h4 class="h5 price-time-title">Communication</h4>
                    <ul class="price-social-icon">
                      <li>
                        <a
                          href="mailto:contact@codeloomnexus.com"
                          aria-label="Mail"
                        >
                          <svg
                            width="19"
                            height="15"
                            viewBox="0 0 19 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.55774 1.94439L7.77927 6.96338C8.84967 7.82688 10.3214 7.82688 11.3918 6.96338L17.6133 1.94434"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M16.1111 1H2.88889C1.84568 1 1 1.84568 1 2.88889V12.3333C1 13.3765 1.84568 14.2222 2.88889 14.2222H16.1111C17.1543 14.2222 18 13.3765 18 12.3333V2.88889C18 1.84568 17.1543 1 16.1111 1Z"
                              stroke="white"
                              stroke-linecap="round"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shivlab.slack.com"
                          aria-label="Slack"
                          target="_blank"
                        >
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.31079 1C6.36022 1 5.58974 1.77221 5.58974 2.7245C5.58952 2.95074 5.63386 3.17481 5.72023 3.38391C5.80659 3.59302 5.9333 3.78306 6.09312 3.9432C6.25293 4.10333 6.44272 4.23042 6.65165 4.31721C6.86057 4.40399 7.08456 4.44878 7.31079 4.44901H9.03209V2.7245C9.03252 2.26757 8.85136 1.8292 8.52856 1.5058C8.20576 1.18239 7.76773 1.00046 7.31079 1ZM7.31079 5.59868H2.72105C1.77048 5.59868 1 6.37089 1 7.32347C1 8.27578 1.77048 9.04798 2.72105 9.04798H7.31108C8.26135 9.04798 9.03209 8.27578 9.03209 7.32347C9.03209 6.37089 8.26135 5.59868 7.31079 5.59868Z"
                              stroke="white"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M18.2117 7.32347C18.2117 6.37089 17.4409 5.59868 16.4904 5.59868C15.5398 5.59868 14.7693 6.37089 14.7693 7.32347V9.04798H16.4904C16.9473 9.04755 17.3853 8.86554 17.7081 8.54222C18.0309 8.21881 18.2121 7.7804 18.2117 7.32347ZM13.622 7.32347V2.7245C13.6223 2.26757 13.4412 1.8292 13.1184 1.5058C12.7956 1.18239 12.3575 1.00046 11.9006 1C10.95 1 10.1796 1.77221 10.1796 2.7245V7.32318C10.1796 8.27604 10.95 9.04824 11.9006 9.04824C12.3575 9.04781 12.7956 8.86588 13.1184 8.54247C13.4412 8.21907 13.6223 7.7804 13.622 7.32347Z"
                              stroke="white"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M11.9006 18.2457C12.3575 18.2453 12.7956 18.0634 13.1184 17.74C13.4412 17.4166 13.6223 16.9782 13.622 16.5212C13.6223 16.0643 13.4412 15.626 13.1184 15.3025C12.7956 14.9791 12.3575 14.7972 11.9006 14.7967H10.1796V16.5212C10.1796 17.4735 10.95 18.2457 11.9006 18.2457ZM11.9006 13.647H16.4906C17.4409 13.647 18.2117 12.8748 18.2117 11.9223C18.2121 11.4653 18.0309 11.0269 17.7081 10.7036C17.3853 10.3802 16.9473 10.1982 16.4904 10.1978H11.9006C10.95 10.1978 10.1796 10.97 10.1796 11.9223C10.1793 12.1485 10.2236 12.3726 10.31 12.5816C10.3964 12.7908 10.5231 12.9808 10.6829 13.1409C10.8427 13.3011 11.0325 13.4282 11.2414 13.5149C11.4504 13.6018 11.6744 13.6469 11.9006 13.647Z"
                              stroke="white"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M1 11.9223C0.999777 12.1485 1.04411 12.3726 1.13048 12.5816C1.21684 12.7908 1.34355 12.9808 1.50337 13.1409C1.66318 13.3011 1.85297 13.4282 2.0619 13.5149C2.27083 13.6018 2.49481 13.6465 2.72105 13.6468C3.17798 13.6463 3.61602 13.4643 3.93883 13.1409C4.26164 12.8176 4.44276 12.3792 4.44238 11.9223V10.1978H2.72105C1.77048 10.1978 1 10.97 1 11.9223ZM5.58975 11.9223V16.521C5.58975 17.4735 6.36022 18.2457 7.3108 18.2457C7.76773 18.2453 8.20576 18.0634 8.52856 17.74C8.85137 17.4166 9.03252 16.9782 9.03209 16.5212V11.9223C9.03234 11.696 8.98803 11.4719 8.90162 11.2628C8.81522 11.0537 8.68854 10.8636 8.52865 10.7035C8.36884 10.5434 8.17899 10.4163 7.97004 10.3295C7.76106 10.2427 7.53705 10.1979 7.3108 10.1978C6.36022 10.1978 5.58975 10.97 5.58975 11.9223Z"
                              stroke="white"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="tel:9016777787" aria-label="Phone">
                          <svg
                            width="19"
                            height="20"
                            viewBox="0 0 19 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18 15.697C18 16.021 17.9319 16.354 17.7872 16.678C17.6425 17.002 17.4552 17.308 17.2083 17.596C16.7912 18.082 16.3315 18.433 15.8122 18.658C15.3015 18.883 14.7481 19 14.1522 19C13.2839 19 12.356 18.784 11.3771 18.343C10.3981 17.902 9.41913 17.308 8.44867 16.561C7.4697 15.805 6.54181 14.968 5.65648 14.041C4.77967 13.105 3.98798 12.124 3.28142 11.098C2.58337 10.072 2.02153 9.046 1.61292 8.029C1.20431 7.003 1 6.022 1 5.086C1 4.474 1.10215 3.889 1.30646 3.349C1.51077 2.8 1.83425 2.296 2.28543 1.846C2.83025 1.279 3.42614 1 4.05608 1C4.29444 1 4.5328 1.054 4.74562 1.162C4.96695 1.27 5.16274 1.432 5.31597 1.666L7.29094 4.609C7.44417 4.834 7.55483 5.041 7.63145 5.239C7.70806 5.428 7.75063 5.617 7.75063 5.788C7.75063 6.004 7.69104 6.22 7.57186 6.427C7.46119 6.634 7.29945 6.85 7.09514 7.066L6.44817 7.777C6.35453 7.876 6.31197 7.993 6.31197 8.137C6.31197 8.209 6.32048 8.272 6.33751 8.344C6.36305 8.416 6.38858 8.47 6.40561 8.524C6.55884 8.821 6.82273 9.208 7.1973 9.676C7.58037 10.144 7.98898 10.621 8.43165 11.098C8.89134 11.575 9.334 12.016 9.78518 12.421C10.2278 12.817 10.5939 13.087 10.8833 13.249C10.9259 13.267 10.977 13.294 11.0366 13.321C11.1047 13.348 11.1728 13.357 11.2494 13.357C11.3941 13.357 11.5048 13.303 11.5984 13.204L12.2454 12.529C12.4582 12.304 12.6625 12.133 12.8583 12.025C13.0541 11.899 13.2499 11.836 13.4627 11.836C13.6244 11.836 13.7947 11.872 13.982 11.953C14.1693 12.034 14.365 12.151 14.5779 12.304L17.3956 14.419C17.6169 14.581 17.7702 14.77 17.8638 14.995C17.9489 15.22 18 15.445 18 15.697Z"
                              stroke="white"
                              stroke-miterlimit="10"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="skype:kishan-mehta?chat" aria-label="Skype">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.40361 1.57272L6.99986 2.06603C7.06932 2.12288 7.15 2.16442 7.23662 2.18792C7.32325 2.21143 7.41386 2.21639 7.50253 2.20246L7.40361 1.57272ZM1.57261 7.40371L2.20246 7.50253C2.21637 7.41387 2.21141 7.32328 2.1879 7.23668C2.16439 7.15008 2.12286 7.06941 2.06603 6.99996L1.57261 7.40371ZM9.59639 15.4273L10 14.934C9.93059 14.8771 9.84993 14.8356 9.76333 14.8121C9.67672 14.7886 9.58613 14.7836 9.49747 14.7975L9.59639 15.4273ZM15.4273 9.59639L14.7975 9.49747C14.7836 9.58613 14.7886 9.67672 14.8121 9.76333C14.8356 9.84993 14.8771 9.93059 14.934 10L15.4273 9.59639ZM7.80736 1.0794C6.95406 0.380068 5.88451 -0.00143633 4.78125 4.0638e-06V1.275C5.59016 1.27353 6.37444 1.55315 6.99996 2.06603L7.80736 1.0794ZM4.78125 4.0638e-06C2.14062 4.0638e-06 4.18418e-06 2.14062 4.18418e-06 4.78125H1.275C1.275 2.84485 2.84485 1.275 4.78125 1.275V4.0638e-06ZM4.18418e-06 4.78125C-0.00145735 5.88449 0.380008 6.95404 1.07929 7.80736L2.06603 6.99986C1.55317 6.37436 1.27355 5.59012 1.275 4.78125H4.18418e-06ZM2.125 8.5C2.125 8.16021 2.15146 7.82712 2.20246 7.50253L0.942972 7.30479C0.88098 7.70018 0.849897 8.09979 0.850004 8.5H2.125ZM8.5 14.875C4.9792 14.875 2.125 12.0208 2.125 8.5H0.850004C0.850004 12.7249 4.27508 16.15 8.5 16.15V14.875ZM9.49747 14.7975C9.17288 14.8484 8.83979 14.875 8.5 14.875V16.15C8.90619 16.15 9.30548 16.1182 9.69521 16.057L9.49747 14.7975ZM9.19264 15.9207C10.046 16.62 11.1155 17.0015 12.2187 17V15.725C11.4099 15.7264 10.6256 15.4468 10 14.934L9.19264 15.9207ZM12.2187 17C14.8594 17 17 14.8594 17 12.2187H15.725C15.725 14.1552 14.1552 15.725 12.2187 15.725V17ZM17 12.2187C17.0015 11.1155 16.62 10.046 15.9207 9.19264L14.934 10C15.4468 10.6256 15.7264 11.4099 15.725 12.2187H17ZM14.875 8.5C14.875 8.83979 14.8484 9.17288 14.7975 9.49747L16.057 9.69521C16.1182 9.30548 16.15 8.90619 16.15 8.5H14.875ZM8.5 2.125C12.0208 2.125 14.875 4.9792 14.875 8.5H16.15C16.15 4.27508 12.7249 0.850004 8.5 0.850004V2.125ZM7.50253 2.20246C7.83249 2.15071 8.166 2.12488 8.5 2.125V0.850004C8.09381 0.850004 7.69463 0.881772 7.30469 0.942972L7.50253 2.20246Z"
                              fill="white"
                            ></path>
                            <path
                              d="M10.5283 5.50112C10.5283 5.50112 9.71702 4.88721 8.49993 4.88721C7.6886 4.88721 6.26868 4.88721 6.26868 6.49275C6.26868 8.49971 10.7312 8.49971 10.7312 10.5068C10.7312 12.1122 9.31125 12.1122 8.49993 12.1122C7.28294 12.1122 6.47161 11.4983 6.47161 11.4983"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="price-box">
                <h3 class="h5 price-box-heading">Hourly</h3>
                <div class="price-content-main">
                  <div class="price-icon">
                    <img
                      loading="lazy"
                      src={twentyFourHours}
                      width="45px"
                      height="45px"
                      alt="Hourly"
                    />
                  </div>
                  <div class="price-time-main">
                    <h4 class="h5 price-time-title">Time Duration</h4>
                    <p class="price-time-desc">Hourly</p>
                  </div>
                  <div class="price-time-main">
                    <h4 class="h5 price-time-title">Billing</h4>
                    <p class="price-time-desc">Hourly/Weekly</p>
                  </div>
                  <div class="price-time-main">
                    <h4 class="h5 price-time-title">Communication</h4>
                    <ul class="price-social-icon">
                      <li>
                        <a
                          href="mailto:contact@codeloomnexus.com"
                          aria-label="Mail"
                        >
                          <svg
                            width="19"
                            height="15"
                            viewBox="0 0 19 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.55774 1.94439L7.77927 6.96338C8.84967 7.82688 10.3214 7.82688 11.3918 6.96338L17.6133 1.94434"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M16.1111 1H2.88889C1.84568 1 1 1.84568 1 2.88889V12.3333C1 13.3765 1.84568 14.2222 2.88889 14.2222H16.1111C17.1543 14.2222 18 13.3765 18 12.3333V2.88889C18 1.84568 17.1543 1 16.1111 1Z"
                              stroke="white"
                              stroke-linecap="round"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shivlab.slack.com"
                          aria-label="Slack"
                          target="_blank"
                        >
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.31079 1C6.36022 1 5.58974 1.77221 5.58974 2.7245C5.58952 2.95074 5.63386 3.17481 5.72023 3.38391C5.80659 3.59302 5.9333 3.78306 6.09312 3.9432C6.25293 4.10333 6.44272 4.23042 6.65165 4.31721C6.86057 4.40399 7.08456 4.44878 7.31079 4.44901H9.03209V2.7245C9.03252 2.26757 8.85136 1.8292 8.52856 1.5058C8.20576 1.18239 7.76773 1.00046 7.31079 1ZM7.31079 5.59868H2.72105C1.77048 5.59868 1 6.37089 1 7.32347C1 8.27578 1.77048 9.04798 2.72105 9.04798H7.31108C8.26135 9.04798 9.03209 8.27578 9.03209 7.32347C9.03209 6.37089 8.26135 5.59868 7.31079 5.59868Z"
                              stroke="white"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M18.2117 7.32347C18.2117 6.37089 17.4409 5.59868 16.4904 5.59868C15.5398 5.59868 14.7693 6.37089 14.7693 7.32347V9.04798H16.4904C16.9473 9.04755 17.3853 8.86554 17.7081 8.54222C18.0309 8.21881 18.2121 7.7804 18.2117 7.32347ZM13.622 7.32347V2.7245C13.6223 2.26757 13.4412 1.8292 13.1184 1.5058C12.7956 1.18239 12.3575 1.00046 11.9006 1C10.95 1 10.1796 1.77221 10.1796 2.7245V7.32318C10.1796 8.27604 10.95 9.04824 11.9006 9.04824C12.3575 9.04781 12.7956 8.86588 13.1184 8.54247C13.4412 8.21907 13.6223 7.7804 13.622 7.32347Z"
                              stroke="white"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M11.9006 18.2457C12.3575 18.2453 12.7956 18.0634 13.1184 17.74C13.4412 17.4166 13.6223 16.9782 13.622 16.5212C13.6223 16.0643 13.4412 15.626 13.1184 15.3025C12.7956 14.9791 12.3575 14.7972 11.9006 14.7967H10.1796V16.5212C10.1796 17.4735 10.95 18.2457 11.9006 18.2457ZM11.9006 13.647H16.4906C17.4409 13.647 18.2117 12.8748 18.2117 11.9223C18.2121 11.4653 18.0309 11.0269 17.7081 10.7036C17.3853 10.3802 16.9473 10.1982 16.4904 10.1978H11.9006C10.95 10.1978 10.1796 10.97 10.1796 11.9223C10.1793 12.1485 10.2236 12.3726 10.31 12.5816C10.3964 12.7908 10.5231 12.9808 10.6829 13.1409C10.8427 13.3011 11.0325 13.4282 11.2414 13.5149C11.4504 13.6018 11.6744 13.6469 11.9006 13.647Z"
                              stroke="white"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M1 11.9223C0.999777 12.1485 1.04411 12.3726 1.13048 12.5816C1.21684 12.7908 1.34355 12.9808 1.50337 13.1409C1.66318 13.3011 1.85297 13.4282 2.0619 13.5149C2.27083 13.6018 2.49481 13.6465 2.72105 13.6468C3.17798 13.6463 3.61602 13.4643 3.93883 13.1409C4.26164 12.8176 4.44276 12.3792 4.44238 11.9223V10.1978H2.72105C1.77048 10.1978 1 10.97 1 11.9223ZM5.58975 11.9223V16.521C5.58975 17.4735 6.36022 18.2457 7.3108 18.2457C7.76773 18.2453 8.20576 18.0634 8.52856 17.74C8.85137 17.4166 9.03252 16.9782 9.03209 16.5212V11.9223C9.03234 11.696 8.98803 11.4719 8.90162 11.2628C8.81522 11.0537 8.68854 10.8636 8.52865 10.7035C8.36884 10.5434 8.17899 10.4163 7.97004 10.3295C7.76106 10.2427 7.53705 10.1979 7.3108 10.1978C6.36022 10.1978 5.58975 10.97 5.58975 11.9223Z"
                              stroke="white"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="tel:9016777787" aria-label="Phone">
                          <svg
                            width="19"
                            height="20"
                            viewBox="0 0 19 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18 15.697C18 16.021 17.9319 16.354 17.7872 16.678C17.6425 17.002 17.4552 17.308 17.2083 17.596C16.7912 18.082 16.3315 18.433 15.8122 18.658C15.3015 18.883 14.7481 19 14.1522 19C13.2839 19 12.356 18.784 11.3771 18.343C10.3981 17.902 9.41913 17.308 8.44867 16.561C7.4697 15.805 6.54181 14.968 5.65648 14.041C4.77967 13.105 3.98798 12.124 3.28142 11.098C2.58337 10.072 2.02153 9.046 1.61292 8.029C1.20431 7.003 1 6.022 1 5.086C1 4.474 1.10215 3.889 1.30646 3.349C1.51077 2.8 1.83425 2.296 2.28543 1.846C2.83025 1.279 3.42614 1 4.05608 1C4.29444 1 4.5328 1.054 4.74562 1.162C4.96695 1.27 5.16274 1.432 5.31597 1.666L7.29094 4.609C7.44417 4.834 7.55483 5.041 7.63145 5.239C7.70806 5.428 7.75063 5.617 7.75063 5.788C7.75063 6.004 7.69104 6.22 7.57186 6.427C7.46119 6.634 7.29945 6.85 7.09514 7.066L6.44817 7.777C6.35453 7.876 6.31197 7.993 6.31197 8.137C6.31197 8.209 6.32048 8.272 6.33751 8.344C6.36305 8.416 6.38858 8.47 6.40561 8.524C6.55884 8.821 6.82273 9.208 7.1973 9.676C7.58037 10.144 7.98898 10.621 8.43165 11.098C8.89134 11.575 9.334 12.016 9.78518 12.421C10.2278 12.817 10.5939 13.087 10.8833 13.249C10.9259 13.267 10.977 13.294 11.0366 13.321C11.1047 13.348 11.1728 13.357 11.2494 13.357C11.3941 13.357 11.5048 13.303 11.5984 13.204L12.2454 12.529C12.4582 12.304 12.6625 12.133 12.8583 12.025C13.0541 11.899 13.2499 11.836 13.4627 11.836C13.6244 11.836 13.7947 11.872 13.982 11.953C14.1693 12.034 14.365 12.151 14.5779 12.304L17.3956 14.419C17.6169 14.581 17.7702 14.77 17.8638 14.995C17.9489 15.22 18 15.445 18 15.697Z"
                              stroke="white"
                              stroke-miterlimit="10"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="skype:kishan-mehta?chat" aria-label="Skype">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.40361 1.57272L6.99986 2.06603C7.06932 2.12288 7.15 2.16442 7.23662 2.18792C7.32325 2.21143 7.41386 2.21639 7.50253 2.20246L7.40361 1.57272ZM1.57261 7.40371L2.20246 7.50253C2.21637 7.41387 2.21141 7.32328 2.1879 7.23668C2.16439 7.15008 2.12286 7.06941 2.06603 6.99996L1.57261 7.40371ZM9.59639 15.4273L10 14.934C9.93059 14.8771 9.84993 14.8356 9.76333 14.8121C9.67672 14.7886 9.58613 14.7836 9.49747 14.7975L9.59639 15.4273ZM15.4273 9.59639L14.7975 9.49747C14.7836 9.58613 14.7886 9.67672 14.8121 9.76333C14.8356 9.84993 14.8771 9.93059 14.934 10L15.4273 9.59639ZM7.80736 1.0794C6.95406 0.380068 5.88451 -0.00143633 4.78125 4.0638e-06V1.275C5.59016 1.27353 6.37444 1.55315 6.99996 2.06603L7.80736 1.0794ZM4.78125 4.0638e-06C2.14062 4.0638e-06 4.18418e-06 2.14062 4.18418e-06 4.78125H1.275C1.275 2.84485 2.84485 1.275 4.78125 1.275V4.0638e-06ZM4.18418e-06 4.78125C-0.00145735 5.88449 0.380008 6.95404 1.07929 7.80736L2.06603 6.99986C1.55317 6.37436 1.27355 5.59012 1.275 4.78125H4.18418e-06ZM2.125 8.5C2.125 8.16021 2.15146 7.82712 2.20246 7.50253L0.942972 7.30479C0.88098 7.70018 0.849897 8.09979 0.850004 8.5H2.125ZM8.5 14.875C4.9792 14.875 2.125 12.0208 2.125 8.5H0.850004C0.850004 12.7249 4.27508 16.15 8.5 16.15V14.875ZM9.49747 14.7975C9.17288 14.8484 8.83979 14.875 8.5 14.875V16.15C8.90619 16.15 9.30548 16.1182 9.69521 16.057L9.49747 14.7975ZM9.19264 15.9207C10.046 16.62 11.1155 17.0015 12.2187 17V15.725C11.4099 15.7264 10.6256 15.4468 10 14.934L9.19264 15.9207ZM12.2187 17C14.8594 17 17 14.8594 17 12.2187H15.725C15.725 14.1552 14.1552 15.725 12.2187 15.725V17ZM17 12.2187C17.0015 11.1155 16.62 10.046 15.9207 9.19264L14.934 10C15.4468 10.6256 15.7264 11.4099 15.725 12.2187H17ZM14.875 8.5C14.875 8.83979 14.8484 9.17288 14.7975 9.49747L16.057 9.69521C16.1182 9.30548 16.15 8.90619 16.15 8.5H14.875ZM8.5 2.125C12.0208 2.125 14.875 4.9792 14.875 8.5H16.15C16.15 4.27508 12.7249 0.850004 8.5 0.850004V2.125ZM7.50253 2.20246C7.83249 2.15071 8.166 2.12488 8.5 2.125V0.850004C8.09381 0.850004 7.69463 0.881772 7.30469 0.942972L7.50253 2.20246Z"
                              fill="white"
                            ></path>
                            <path
                              d="M10.5283 5.50112C10.5283 5.50112 9.71702 4.88721 8.49993 4.88721C7.6886 4.88721 6.26868 4.88721 6.26868 6.49275C6.26868 8.49971 10.7312 8.49971 10.7312 10.5068C10.7312 12.1122 9.31125 12.1122 8.49993 12.1122C7.28294 12.1122 6.47161 11.4983 6.47161 11.4983"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="price-box">
                <h3 class="h5 price-box-heading">Project Based</h3>
                <div class="price-content-main">
                  <div class="price-icon">
                    <img
                      loading="lazy"
                      src={hired}
                      width="45px"
                      height="45px"
                      alt="Project Based"
                    />
                  </div>
                  <div class="price-time-main">
                    <h4 class="h5 price-time-title">Time Duration</h4>
                    <p class="price-time-desc">Depend on the Project</p>
                  </div>
                  <div class="price-time-main">
                    <h4 class="h5 price-time-title">Billing</h4>
                    <p class="price-time-desc">Milestone Based</p>
                  </div>
                  <div class="price-time-main">
                    <h4 class="h5 price-time-title">Communication</h4>
                    <ul class="price-social-icon">
                      <li>
                        <a
                          href="mailto:contact@codeloomnexus.com"
                          aria-label="Mail"
                        >
                          <svg
                            width="19"
                            height="15"
                            viewBox="0 0 19 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M1.55774 1.94439L7.77927 6.96338C8.84967 7.82688 10.3214 7.82688 11.3918 6.96338L17.6133 1.94434"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M16.1111 1H2.88889C1.84568 1 1 1.84568 1 2.88889V12.3333C1 13.3765 1.84568 14.2222 2.88889 14.2222H16.1111C17.1543 14.2222 18 13.3765 18 12.3333V2.88889C18 1.84568 17.1543 1 16.1111 1Z"
                              stroke="white"
                              stroke-linecap="round"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://shivlab.slack.com"
                          aria-label="Slack"
                          target="_blank"
                        >
                          <svg
                            width="19"
                            height="19"
                            viewBox="0 0 19 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.31079 1C6.36022 1 5.58974 1.77221 5.58974 2.7245C5.58952 2.95074 5.63386 3.17481 5.72023 3.38391C5.80659 3.59302 5.9333 3.78306 6.09312 3.9432C6.25293 4.10333 6.44272 4.23042 6.65165 4.31721C6.86057 4.40399 7.08456 4.44878 7.31079 4.44901H9.03209V2.7245C9.03252 2.26757 8.85136 1.8292 8.52856 1.5058C8.20576 1.18239 7.76773 1.00046 7.31079 1ZM7.31079 5.59868H2.72105C1.77048 5.59868 1 6.37089 1 7.32347C1 8.27578 1.77048 9.04798 2.72105 9.04798H7.31108C8.26135 9.04798 9.03209 8.27578 9.03209 7.32347C9.03209 6.37089 8.26135 5.59868 7.31079 5.59868Z"
                              stroke="white"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M18.2117 7.32347C18.2117 6.37089 17.4409 5.59868 16.4904 5.59868C15.5398 5.59868 14.7693 6.37089 14.7693 7.32347V9.04798H16.4904C16.9473 9.04755 17.3853 8.86554 17.7081 8.54222C18.0309 8.21881 18.2121 7.7804 18.2117 7.32347ZM13.622 7.32347V2.7245C13.6223 2.26757 13.4412 1.8292 13.1184 1.5058C12.7956 1.18239 12.3575 1.00046 11.9006 1C10.95 1 10.1796 1.77221 10.1796 2.7245V7.32318C10.1796 8.27604 10.95 9.04824 11.9006 9.04824C12.3575 9.04781 12.7956 8.86588 13.1184 8.54247C13.4412 8.21907 13.6223 7.7804 13.622 7.32347Z"
                              stroke="white"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M11.9006 18.2457C12.3575 18.2453 12.7956 18.0634 13.1184 17.74C13.4412 17.4166 13.6223 16.9782 13.622 16.5212C13.6223 16.0643 13.4412 15.626 13.1184 15.3025C12.7956 14.9791 12.3575 14.7972 11.9006 14.7967H10.1796V16.5212C10.1796 17.4735 10.95 18.2457 11.9006 18.2457ZM11.9006 13.647H16.4906C17.4409 13.647 18.2117 12.8748 18.2117 11.9223C18.2121 11.4653 18.0309 11.0269 17.7081 10.7036C17.3853 10.3802 16.9473 10.1982 16.4904 10.1978H11.9006C10.95 10.1978 10.1796 10.97 10.1796 11.9223C10.1793 12.1485 10.2236 12.3726 10.31 12.5816C10.3964 12.7908 10.5231 12.9808 10.6829 13.1409C10.8427 13.3011 11.0325 13.4282 11.2414 13.5149C11.4504 13.6018 11.6744 13.6469 11.9006 13.647Z"
                              stroke="white"
                              stroke-linejoin="round"
                            ></path>
                            <path
                              d="M1 11.9223C0.999777 12.1485 1.04411 12.3726 1.13048 12.5816C1.21684 12.7908 1.34355 12.9808 1.50337 13.1409C1.66318 13.3011 1.85297 13.4282 2.0619 13.5149C2.27083 13.6018 2.49481 13.6465 2.72105 13.6468C3.17798 13.6463 3.61602 13.4643 3.93883 13.1409C4.26164 12.8176 4.44276 12.3792 4.44238 11.9223V10.1978H2.72105C1.77048 10.1978 1 10.97 1 11.9223ZM5.58975 11.9223V16.521C5.58975 17.4735 6.36022 18.2457 7.3108 18.2457C7.76773 18.2453 8.20576 18.0634 8.52856 17.74C8.85137 17.4166 9.03252 16.9782 9.03209 16.5212V11.9223C9.03234 11.696 8.98803 11.4719 8.90162 11.2628C8.81522 11.0537 8.68854 10.8636 8.52865 10.7035C8.36884 10.5434 8.17899 10.4163 7.97004 10.3295C7.76106 10.2427 7.53705 10.1979 7.3108 10.1978C6.36022 10.1978 5.58975 10.97 5.58975 11.9223Z"
                              stroke="white"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="tel:9016777787" aria-label="Phone">
                          <svg
                            width="19"
                            height="20"
                            viewBox="0 0 19 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M18 15.697C18 16.021 17.9319 16.354 17.7872 16.678C17.6425 17.002 17.4552 17.308 17.2083 17.596C16.7912 18.082 16.3315 18.433 15.8122 18.658C15.3015 18.883 14.7481 19 14.1522 19C13.2839 19 12.356 18.784 11.3771 18.343C10.3981 17.902 9.41913 17.308 8.44867 16.561C7.4697 15.805 6.54181 14.968 5.65648 14.041C4.77967 13.105 3.98798 12.124 3.28142 11.098C2.58337 10.072 2.02153 9.046 1.61292 8.029C1.20431 7.003 1 6.022 1 5.086C1 4.474 1.10215 3.889 1.30646 3.349C1.51077 2.8 1.83425 2.296 2.28543 1.846C2.83025 1.279 3.42614 1 4.05608 1C4.29444 1 4.5328 1.054 4.74562 1.162C4.96695 1.27 5.16274 1.432 5.31597 1.666L7.29094 4.609C7.44417 4.834 7.55483 5.041 7.63145 5.239C7.70806 5.428 7.75063 5.617 7.75063 5.788C7.75063 6.004 7.69104 6.22 7.57186 6.427C7.46119 6.634 7.29945 6.85 7.09514 7.066L6.44817 7.777C6.35453 7.876 6.31197 7.993 6.31197 8.137C6.31197 8.209 6.32048 8.272 6.33751 8.344C6.36305 8.416 6.38858 8.47 6.40561 8.524C6.55884 8.821 6.82273 9.208 7.1973 9.676C7.58037 10.144 7.98898 10.621 8.43165 11.098C8.89134 11.575 9.334 12.016 9.78518 12.421C10.2278 12.817 10.5939 13.087 10.8833 13.249C10.9259 13.267 10.977 13.294 11.0366 13.321C11.1047 13.348 11.1728 13.357 11.2494 13.357C11.3941 13.357 11.5048 13.303 11.5984 13.204L12.2454 12.529C12.4582 12.304 12.6625 12.133 12.8583 12.025C13.0541 11.899 13.2499 11.836 13.4627 11.836C13.6244 11.836 13.7947 11.872 13.982 11.953C14.1693 12.034 14.365 12.151 14.5779 12.304L17.3956 14.419C17.6169 14.581 17.7702 14.77 17.8638 14.995C17.9489 15.22 18 15.445 18 15.697Z"
                              stroke="white"
                              stroke-miterlimit="10"
                            ></path>
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href="skype:kishan-mehta?chat" aria-label="Skype">
                          <svg
                            width="17"
                            height="17"
                            viewBox="0 0 17 17"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M7.40361 1.57272L6.99986 2.06603C7.06932 2.12288 7.15 2.16442 7.23662 2.18792C7.32325 2.21143 7.41386 2.21639 7.50253 2.20246L7.40361 1.57272ZM1.57261 7.40371L2.20246 7.50253C2.21637 7.41387 2.21141 7.32328 2.1879 7.23668C2.16439 7.15008 2.12286 7.06941 2.06603 6.99996L1.57261 7.40371ZM9.59639 15.4273L10 14.934C9.93059 14.8771 9.84993 14.8356 9.76333 14.8121C9.67672 14.7886 9.58613 14.7836 9.49747 14.7975L9.59639 15.4273ZM15.4273 9.59639L14.7975 9.49747C14.7836 9.58613 14.7886 9.67672 14.8121 9.76333C14.8356 9.84993 14.8771 9.93059 14.934 10L15.4273 9.59639ZM7.80736 1.0794C6.95406 0.380068 5.88451 -0.00143633 4.78125 4.0638e-06V1.275C5.59016 1.27353 6.37444 1.55315 6.99996 2.06603L7.80736 1.0794ZM4.78125 4.0638e-06C2.14062 4.0638e-06 4.18418e-06 2.14062 4.18418e-06 4.78125H1.275C1.275 2.84485 2.84485 1.275 4.78125 1.275V4.0638e-06ZM4.18418e-06 4.78125C-0.00145735 5.88449 0.380008 6.95404 1.07929 7.80736L2.06603 6.99986C1.55317 6.37436 1.27355 5.59012 1.275 4.78125H4.18418e-06ZM2.125 8.5C2.125 8.16021 2.15146 7.82712 2.20246 7.50253L0.942972 7.30479C0.88098 7.70018 0.849897 8.09979 0.850004 8.5H2.125ZM8.5 14.875C4.9792 14.875 2.125 12.0208 2.125 8.5H0.850004C0.850004 12.7249 4.27508 16.15 8.5 16.15V14.875ZM9.49747 14.7975C9.17288 14.8484 8.83979 14.875 8.5 14.875V16.15C8.90619 16.15 9.30548 16.1182 9.69521 16.057L9.49747 14.7975ZM9.19264 15.9207C10.046 16.62 11.1155 17.0015 12.2187 17V15.725C11.4099 15.7264 10.6256 15.4468 10 14.934L9.19264 15.9207ZM12.2187 17C14.8594 17 17 14.8594 17 12.2187H15.725C15.725 14.1552 14.1552 15.725 12.2187 15.725V17ZM17 12.2187C17.0015 11.1155 16.62 10.046 15.9207 9.19264L14.934 10C15.4468 10.6256 15.7264 11.4099 15.725 12.2187H17ZM14.875 8.5C14.875 8.83979 14.8484 9.17288 14.7975 9.49747L16.057 9.69521C16.1182 9.30548 16.15 8.90619 16.15 8.5H14.875ZM8.5 2.125C12.0208 2.125 14.875 4.9792 14.875 8.5H16.15C16.15 4.27508 12.7249 0.850004 8.5 0.850004V2.125ZM7.50253 2.20246C7.83249 2.15071 8.166 2.12488 8.5 2.125V0.850004C8.09381 0.850004 7.69463 0.881772 7.30469 0.942972L7.50253 2.20246Z"
                              fill="white"
                            ></path>
                            <path
                              d="M10.5283 5.50112C10.5283 5.50112 9.71702 4.88721 8.49993 4.88721C7.6886 4.88721 6.26868 4.88721 6.26868 6.49275C6.26868 8.49971 10.7312 8.49971 10.7312 10.5068C10.7312 12.1122 9.31125 12.1122 8.49993 12.1122C7.28294 12.1122 6.47161 11.4983 6.47161 11.4983"
                              stroke="white"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default MagentoToShopify;
