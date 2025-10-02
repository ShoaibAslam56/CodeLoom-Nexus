import React from "react";
import Freelancing from "../Components/Freelancing";
import Faq from "../Components/Faq";
import LetDiscuss from "../Components/LetDiscuss";
import BannerContactForm from "../Components/BannerContactForm";
import { NavLink } from "react-router-dom";

// Import images
import shopifyExperts from "../assets/images/Shopify-experts.png";
import store from "../assets/images/store.png";

const HireUs = () => {
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
                <span class="medium-text">Hire Us</span>
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
                    Hire Us for Shopify Services &amp; Developers
                  </h1>
                  <div class="large-text content">
                    <p class="text">
                      If you're looking to hire Shopify development team for
                      highly scalable Shopify development services, You've
                      landed at the right place.
                    </p>
                    <p class="text">
                      For more than 8 years, CodeLoom Nexus has been a core
                      Shopify development agency that consistently thrives in
                      delivering top-class Shopify services to all scales of
                      businesses. Hire team of proficient Shopify developers
                      from us who are a stronghold in designing, developing,
                      deploying, and managing advanced Shopify services,
                      including Shopify Plus development.{" "}
                    </p>
                    <p class="text">
                      Grab the opportunity to hire Shopify resources from the
                      extensive range of skilled Shopify developers and
                      services. You just imagine the highest level of
                      creativity; we will make it a reality for you.
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

      <section id="icon_with_point" class="icon-with-points section-spacing">
        <div class="container">
          <div class="section-head-part">
            <h2 class="section-head-title">
              Why CodeLoom Nexus as Your Official Shopify Tech Partner?
            </h2>
          </div>

          <div class="row row-mb-minus">
            <div class="col-xl-3 col-md-4 col-sm-6 col-spacing-bottom">
              <div class="icon-with-point-single">
                <div class="icon-part">
                  <div class="icon-part-inner">
                    <svg
                      class="correct-icon"
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.26182 14.4968C8.83758 14.0726 8.14818 14.0726 7.72394 14.4968C7.2997 14.921 7.2997 15.6104 7.72394 16.0347L12.7353 21.046C12.9474 21.2581 13.2126 21.3642 13.5042 21.3642C13.5307 21.3642 13.5307 21.3642 13.5573 21.3642C13.8489 21.3377 14.1406 21.2051 14.3527 20.9665L26.8943 5.93243C27.2655 5.48167 27.2125 4.79228 26.7618 4.39456C26.311 4.02335 25.6216 4.07638 25.2239 4.52713L13.4247 18.6597L9.26182 14.4968Z"
                        fill="#E94FCA"
                      ></path>
                      <path
                        d="M23.739 2.35299C17.6405 -1.46518 9.8186 -0.563665 4.7277 4.52723C-1.2647 10.5196 -1.2647 20.3037 4.7277 26.2961C7.72391 29.2923 11.6747 30.8037 15.5989 30.8037C19.5231 30.8037 23.4739 29.2923 26.4701 26.2961C31.5875 21.1787 32.4625 13.3302 28.6178 7.23177C28.2996 6.72798 27.6367 6.56889 27.1329 6.88707C26.6292 7.20525 26.4701 7.86813 26.7882 8.37191C30.1026 13.6219 29.3337 20.3567 24.9322 24.7582C19.7883 29.9022 11.383 29.9022 6.23906 24.7582C1.09514 19.6143 1.09514 11.209 6.23906 6.0651C10.6406 1.69012 17.3489 0.921179 22.5989 4.18253C23.1026 4.50071 23.7655 4.34162 24.0837 3.83784C24.4019 3.33405 24.2428 2.67117 23.739 2.35299Z"
                        fill="#330C79"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="point-content">
                  <p class="point">Strictly Follows CRO Standard</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 col-spacing-bottom">
              <div class="icon-with-point-single">
                <div class="icon-part">
                  <div class="icon-part-inner">
                    <svg
                      class="correct-icon"
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.26182 14.4968C8.83758 14.0726 8.14818 14.0726 7.72394 14.4968C7.2997 14.921 7.2997 15.6104 7.72394 16.0347L12.7353 21.046C12.9474 21.2581 13.2126 21.3642 13.5042 21.3642C13.5307 21.3642 13.5307 21.3642 13.5573 21.3642C13.8489 21.3377 14.1406 21.2051 14.3527 20.9665L26.8943 5.93243C27.2655 5.48167 27.2125 4.79228 26.7618 4.39456C26.311 4.02335 25.6216 4.07638 25.2239 4.52713L13.4247 18.6597L9.26182 14.4968Z"
                        fill="#E94FCA"
                      ></path>
                      <path
                        d="M23.739 2.35299C17.6405 -1.46518 9.8186 -0.563665 4.7277 4.52723C-1.2647 10.5196 -1.2647 20.3037 4.7277 26.2961C7.72391 29.2923 11.6747 30.8037 15.5989 30.8037C19.5231 30.8037 23.4739 29.2923 26.4701 26.2961C31.5875 21.1787 32.4625 13.3302 28.6178 7.23177C28.2996 6.72798 27.6367 6.56889 27.1329 6.88707C26.6292 7.20525 26.4701 7.86813 26.7882 8.37191C30.1026 13.6219 29.3337 20.3567 24.9322 24.7582C19.7883 29.9022 11.383 29.9022 6.23906 24.7582C1.09514 19.6143 1.09514 11.209 6.23906 6.0651C10.6406 1.69012 17.3489 0.921179 22.5989 4.18253C23.1026 4.50071 23.7655 4.34162 24.0837 3.83784C24.4019 3.33405 24.2428 2.67117 23.739 2.35299Z"
                        fill="#330C79"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="point-content">
                  <p class="point">High Standard Optimized Coding</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 col-spacing-bottom">
              <div class="icon-with-point-single">
                <div class="icon-part">
                  <div class="icon-part-inner">
                    <svg
                      class="correct-icon"
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.26182 14.4968C8.83758 14.0726 8.14818 14.0726 7.72394 14.4968C7.2997 14.921 7.2997 15.6104 7.72394 16.0347L12.7353 21.046C12.9474 21.2581 13.2126 21.3642 13.5042 21.3642C13.5307 21.3642 13.5307 21.3642 13.5573 21.3642C13.8489 21.3377 14.1406 21.2051 14.3527 20.9665L26.8943 5.93243C27.2655 5.48167 27.2125 4.79228 26.7618 4.39456C26.311 4.02335 25.6216 4.07638 25.2239 4.52713L13.4247 18.6597L9.26182 14.4968Z"
                        fill="#E94FCA"
                      ></path>
                      <path
                        d="M23.739 2.35299C17.6405 -1.46518 9.8186 -0.563665 4.7277 4.52723C-1.2647 10.5196 -1.2647 20.3037 4.7277 26.2961C7.72391 29.2923 11.6747 30.8037 15.5989 30.8037C19.5231 30.8037 23.4739 29.2923 26.4701 26.2961C31.5875 21.1787 32.4625 13.3302 28.6178 7.23177C28.2996 6.72798 27.6367 6.56889 27.1329 6.88707C26.6292 7.20525 26.4701 7.86813 26.7882 8.37191C30.1026 13.6219 29.3337 20.3567 24.9322 24.7582C19.7883 29.9022 11.383 29.9022 6.23906 24.7582C1.09514 19.6143 1.09514 11.209 6.23906 6.0651C10.6406 1.69012 17.3489 0.921179 22.5989 4.18253C23.1026 4.50071 23.7655 4.34162 24.0837 3.83784C24.4019 3.33405 24.2428 2.67117 23.739 2.35299Z"
                        fill="#330C79"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="point-content">
                  <p class="point">Well-built SEO-friendly Structure</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 col-spacing-bottom">
              <div class="icon-with-point-single">
                <div class="icon-part">
                  <div class="icon-part-inner">
                    <svg
                      class="correct-icon"
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.26182 14.4968C8.83758 14.0726 8.14818 14.0726 7.72394 14.4968C7.2997 14.921 7.2997 15.6104 7.72394 16.0347L12.7353 21.046C12.9474 21.2581 13.2126 21.3642 13.5042 21.3642C13.5307 21.3642 13.5307 21.3642 13.5573 21.3642C13.8489 21.3377 14.1406 21.2051 14.3527 20.9665L26.8943 5.93243C27.2655 5.48167 27.2125 4.79228 26.7618 4.39456C26.311 4.02335 25.6216 4.07638 25.2239 4.52713L13.4247 18.6597L9.26182 14.4968Z"
                        fill="#E94FCA"
                      ></path>
                      <path
                        d="M23.739 2.35299C17.6405 -1.46518 9.8186 -0.563665 4.7277 4.52723C-1.2647 10.5196 -1.2647 20.3037 4.7277 26.2961C7.72391 29.2923 11.6747 30.8037 15.5989 30.8037C19.5231 30.8037 23.4739 29.2923 26.4701 26.2961C31.5875 21.1787 32.4625 13.3302 28.6178 7.23177C28.2996 6.72798 27.6367 6.56889 27.1329 6.88707C26.6292 7.20525 26.4701 7.86813 26.7882 8.37191C30.1026 13.6219 29.3337 20.3567 24.9322 24.7582C19.7883 29.9022 11.383 29.9022 6.23906 24.7582C1.09514 19.6143 1.09514 11.209 6.23906 6.0651C10.6406 1.69012 17.3489 0.921179 22.5989 4.18253C23.1026 4.50071 23.7655 4.34162 24.0837 3.83784C24.4019 3.33405 24.2428 2.67117 23.739 2.35299Z"
                        fill="#330C79"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="point-content">
                  <p class="point">Official Shopify Partners</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 col-spacing-bottom">
              <div class="icon-with-point-single">
                <div class="icon-part">
                  <div class="icon-part-inner">
                    <svg
                      class="correct-icon"
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.26182 14.4968C8.83758 14.0726 8.14818 14.0726 7.72394 14.4968C7.2997 14.921 7.2997 15.6104 7.72394 16.0347L12.7353 21.046C12.9474 21.2581 13.2126 21.3642 13.5042 21.3642C13.5307 21.3642 13.5307 21.3642 13.5573 21.3642C13.8489 21.3377 14.1406 21.2051 14.3527 20.9665L26.8943 5.93243C27.2655 5.48167 27.2125 4.79228 26.7618 4.39456C26.311 4.02335 25.6216 4.07638 25.2239 4.52713L13.4247 18.6597L9.26182 14.4968Z"
                        fill="#E94FCA"
                      ></path>
                      <path
                        d="M23.739 2.35299C17.6405 -1.46518 9.8186 -0.563665 4.7277 4.52723C-1.2647 10.5196 -1.2647 20.3037 4.7277 26.2961C7.72391 29.2923 11.6747 30.8037 15.5989 30.8037C19.5231 30.8037 23.4739 29.2923 26.4701 26.2961C31.5875 21.1787 32.4625 13.3302 28.6178 7.23177C28.2996 6.72798 27.6367 6.56889 27.1329 6.88707C26.6292 7.20525 26.4701 7.86813 26.7882 8.37191C30.1026 13.6219 29.3337 20.3567 24.9322 24.7582C19.7883 29.9022 11.383 29.9022 6.23906 24.7582C1.09514 19.6143 1.09514 11.209 6.23906 6.0651C10.6406 1.69012 17.3489 0.921179 22.5989 4.18253C23.1026 4.50071 23.7655 4.34162 24.0837 3.83784C24.4019 3.33405 24.2428 2.67117 23.739 2.35299Z"
                        fill="#330C79"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="point-content">
                  <p class="point">Latest Feature-packed Shopify Services</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 col-spacing-bottom">
              <div class="icon-with-point-single">
                <div class="icon-part">
                  <div class="icon-part-inner">
                    <svg
                      class="correct-icon"
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.26182 14.4968C8.83758 14.0726 8.14818 14.0726 7.72394 14.4968C7.2997 14.921 7.2997 15.6104 7.72394 16.0347L12.7353 21.046C12.9474 21.2581 13.2126 21.3642 13.5042 21.3642C13.5307 21.3642 13.5307 21.3642 13.5573 21.3642C13.8489 21.3377 14.1406 21.2051 14.3527 20.9665L26.8943 5.93243C27.2655 5.48167 27.2125 4.79228 26.7618 4.39456C26.311 4.02335 25.6216 4.07638 25.2239 4.52713L13.4247 18.6597L9.26182 14.4968Z"
                        fill="#E94FCA"
                      ></path>
                      <path
                        d="M23.739 2.35299C17.6405 -1.46518 9.8186 -0.563665 4.7277 4.52723C-1.2647 10.5196 -1.2647 20.3037 4.7277 26.2961C7.72391 29.2923 11.6747 30.8037 15.5989 30.8037C19.5231 30.8037 23.4739 29.2923 26.4701 26.2961C31.5875 21.1787 32.4625 13.3302 28.6178 7.23177C28.2996 6.72798 27.6367 6.56889 27.1329 6.88707C26.6292 7.20525 26.4701 7.86813 26.7882 8.37191C30.1026 13.6219 29.3337 20.3567 24.9322 24.7582C19.7883 29.9022 11.383 29.9022 6.23906 24.7582C1.09514 19.6143 1.09514 11.209 6.23906 6.0651C10.6406 1.69012 17.3489 0.921179 22.5989 4.18253C23.1026 4.50071 23.7655 4.34162 24.0837 3.83784C24.4019 3.33405 24.2428 2.67117 23.739 2.35299Z"
                        fill="#330C79"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="point-content">
                  <p class="point">
                    Completely Mobile Responsive Shopify Solutions
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 col-spacing-bottom">
              <div class="icon-with-point-single">
                <div class="icon-part">
                  <div class="icon-part-inner">
                    <svg
                      class="correct-icon"
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.26182 14.4968C8.83758 14.0726 8.14818 14.0726 7.72394 14.4968C7.2997 14.921 7.2997 15.6104 7.72394 16.0347L12.7353 21.046C12.9474 21.2581 13.2126 21.3642 13.5042 21.3642C13.5307 21.3642 13.5307 21.3642 13.5573 21.3642C13.8489 21.3377 14.1406 21.2051 14.3527 20.9665L26.8943 5.93243C27.2655 5.48167 27.2125 4.79228 26.7618 4.39456C26.311 4.02335 25.6216 4.07638 25.2239 4.52713L13.4247 18.6597L9.26182 14.4968Z"
                        fill="#E94FCA"
                      ></path>
                      <path
                        d="M23.739 2.35299C17.6405 -1.46518 9.8186 -0.563665 4.7277 4.52723C-1.2647 10.5196 -1.2647 20.3037 4.7277 26.2961C7.72391 29.2923 11.6747 30.8037 15.5989 30.8037C19.5231 30.8037 23.4739 29.2923 26.4701 26.2961C31.5875 21.1787 32.4625 13.3302 28.6178 7.23177C28.2996 6.72798 27.6367 6.56889 27.1329 6.88707C26.6292 7.20525 26.4701 7.86813 26.7882 8.37191C30.1026 13.6219 29.3337 20.3567 24.9322 24.7582C19.7883 29.9022 11.383 29.9022 6.23906 24.7582C1.09514 19.6143 1.09514 11.209 6.23906 6.0651C10.6406 1.69012 17.3489 0.921179 22.5989 4.18253C23.1026 4.50071 23.7655 4.34162 24.0837 3.83784C24.4019 3.33405 24.2428 2.67117 23.739 2.35299Z"
                        fill="#330C79"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="point-content">
                  <p class="point">MVP solutions</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 col-spacing-bottom">
              <div class="icon-with-point-single">
                <div class="icon-part">
                  <div class="icon-part-inner">
                    <svg
                      class="correct-icon"
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.26182 14.4968C8.83758 14.0726 8.14818 14.0726 7.72394 14.4968C7.2997 14.921 7.2997 15.6104 7.72394 16.0347L12.7353 21.046C12.9474 21.2581 13.2126 21.3642 13.5042 21.3642C13.5307 21.3642 13.5307 21.3642 13.5573 21.3642C13.8489 21.3377 14.1406 21.2051 14.3527 20.9665L26.8943 5.93243C27.2655 5.48167 27.2125 4.79228 26.7618 4.39456C26.311 4.02335 25.6216 4.07638 25.2239 4.52713L13.4247 18.6597L9.26182 14.4968Z"
                        fill="#E94FCA"
                      ></path>
                      <path
                        d="M23.739 2.35299C17.6405 -1.46518 9.8186 -0.563665 4.7277 4.52723C-1.2647 10.5196 -1.2647 20.3037 4.7277 26.2961C7.72391 29.2923 11.6747 30.8037 15.5989 30.8037C19.5231 30.8037 23.4739 29.2923 26.4701 26.2961C31.5875 21.1787 32.4625 13.3302 28.6178 7.23177C28.2996 6.72798 27.6367 6.56889 27.1329 6.88707C26.6292 7.20525 26.4701 7.86813 26.7882 8.37191C30.1026 13.6219 29.3337 20.3567 24.9322 24.7582C19.7883 29.9022 11.383 29.9022 6.23906 24.7582C1.09514 19.6143 1.09514 11.209 6.23906 6.0651C10.6406 1.69012 17.3489 0.921179 22.5989 4.18253C23.1026 4.50071 23.7655 4.34162 24.0837 3.83784C24.4019 3.33405 24.2428 2.67117 23.739 2.35299Z"
                        fill="#330C79"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="point-content">
                  <p class="point">Honor Deadlines</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 col-spacing-bottom">
              <div class="icon-with-point-single">
                <div class="icon-part">
                  <div class="icon-part-inner">
                    <svg
                      class="correct-icon"
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.26182 14.4968C8.83758 14.0726 8.14818 14.0726 7.72394 14.4968C7.2997 14.921 7.2997 15.6104 7.72394 16.0347L12.7353 21.046C12.9474 21.2581 13.2126 21.3642 13.5042 21.3642C13.5307 21.3642 13.5307 21.3642 13.5573 21.3642C13.8489 21.3377 14.1406 21.2051 14.3527 20.9665L26.8943 5.93243C27.2655 5.48167 27.2125 4.79228 26.7618 4.39456C26.311 4.02335 25.6216 4.07638 25.2239 4.52713L13.4247 18.6597L9.26182 14.4968Z"
                        fill="#E94FCA"
                      ></path>
                      <path
                        d="M23.739 2.35299C17.6405 -1.46518 9.8186 -0.563665 4.7277 4.52723C-1.2647 10.5196 -1.2647 20.3037 4.7277 26.2961C7.72391 29.2923 11.6747 30.8037 15.5989 30.8037C19.5231 30.8037 23.4739 29.2923 26.4701 26.2961C31.5875 21.1787 32.4625 13.3302 28.6178 7.23177C28.2996 6.72798 27.6367 6.56889 27.1329 6.88707C26.6292 7.20525 26.4701 7.86813 26.7882 8.37191C30.1026 13.6219 29.3337 20.3567 24.9322 24.7582C19.7883 29.9022 11.383 29.9022 6.23906 24.7582C1.09514 19.6143 1.09514 11.209 6.23906 6.0651C10.6406 1.69012 17.3489 0.921179 22.5989 4.18253C23.1026 4.50071 23.7655 4.34162 24.0837 3.83784C24.4019 3.33405 24.2428 2.67117 23.739 2.35299Z"
                        fill="#330C79"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="point-content">
                  <p class="point">Unparalleled Quality Final Products</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 col-spacing-bottom">
              <div class="icon-with-point-single">
                <div class="icon-part">
                  <div class="icon-part-inner">
                    <svg
                      class="correct-icon"
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.26182 14.4968C8.83758 14.0726 8.14818 14.0726 7.72394 14.4968C7.2997 14.921 7.2997 15.6104 7.72394 16.0347L12.7353 21.046C12.9474 21.2581 13.2126 21.3642 13.5042 21.3642C13.5307 21.3642 13.5307 21.3642 13.5573 21.3642C13.8489 21.3377 14.1406 21.2051 14.3527 20.9665L26.8943 5.93243C27.2655 5.48167 27.2125 4.79228 26.7618 4.39456C26.311 4.02335 25.6216 4.07638 25.2239 4.52713L13.4247 18.6597L9.26182 14.4968Z"
                        fill="#E94FCA"
                      ></path>
                      <path
                        d="M23.739 2.35299C17.6405 -1.46518 9.8186 -0.563665 4.7277 4.52723C-1.2647 10.5196 -1.2647 20.3037 4.7277 26.2961C7.72391 29.2923 11.6747 30.8037 15.5989 30.8037C19.5231 30.8037 23.4739 29.2923 26.4701 26.2961C31.5875 21.1787 32.4625 13.3302 28.6178 7.23177C28.2996 6.72798 27.6367 6.56889 27.1329 6.88707C26.6292 7.20525 26.4701 7.86813 26.7882 8.37191C30.1026 13.6219 29.3337 20.3567 24.9322 24.7582C19.7883 29.9022 11.383 29.9022 6.23906 24.7582C1.09514 19.6143 1.09514 11.209 6.23906 6.0651C10.6406 1.69012 17.3489 0.921179 22.5989 4.18253C23.1026 4.50071 23.7655 4.34162 24.0837 3.83784C24.4019 3.33405 24.2428 2.67117 23.739 2.35299Z"
                        fill="#330C79"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="point-content">
                  <p class="point">
                    Great Command Over Advanced Development tools
                  </p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 col-spacing-bottom">
              <div class="icon-with-point-single">
                <div class="icon-part">
                  <div class="icon-part-inner">
                    <svg
                      class="correct-icon"
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.26182 14.4968C8.83758 14.0726 8.14818 14.0726 7.72394 14.4968C7.2997 14.921 7.2997 15.6104 7.72394 16.0347L12.7353 21.046C12.9474 21.2581 13.2126 21.3642 13.5042 21.3642C13.5307 21.3642 13.5307 21.3642 13.5573 21.3642C13.8489 21.3377 14.1406 21.2051 14.3527 20.9665L26.8943 5.93243C27.2655 5.48167 27.2125 4.79228 26.7618 4.39456C26.311 4.02335 25.6216 4.07638 25.2239 4.52713L13.4247 18.6597L9.26182 14.4968Z"
                        fill="#E94FCA"
                      ></path>
                      <path
                        d="M23.739 2.35299C17.6405 -1.46518 9.8186 -0.563665 4.7277 4.52723C-1.2647 10.5196 -1.2647 20.3037 4.7277 26.2961C7.72391 29.2923 11.6747 30.8037 15.5989 30.8037C19.5231 30.8037 23.4739 29.2923 26.4701 26.2961C31.5875 21.1787 32.4625 13.3302 28.6178 7.23177C28.2996 6.72798 27.6367 6.56889 27.1329 6.88707C26.6292 7.20525 26.4701 7.86813 26.7882 8.37191C30.1026 13.6219 29.3337 20.3567 24.9322 24.7582C19.7883 29.9022 11.383 29.9022 6.23906 24.7582C1.09514 19.6143 1.09514 11.209 6.23906 6.0651C10.6406 1.69012 17.3489 0.921179 22.5989 4.18253C23.1026 4.50071 23.7655 4.34162 24.0837 3.83784C24.4019 3.33405 24.2428 2.67117 23.739 2.35299Z"
                        fill="#330C79"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="point-content">
                  <p class="point">Maintain Complete Transparency</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 col-spacing-bottom">
              <div class="icon-with-point-single">
                <div class="icon-part">
                  <div class="icon-part-inner">
                    <svg
                      class="correct-icon"
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.26182 14.4968C8.83758 14.0726 8.14818 14.0726 7.72394 14.4968C7.2997 14.921 7.2997 15.6104 7.72394 16.0347L12.7353 21.046C12.9474 21.2581 13.2126 21.3642 13.5042 21.3642C13.5307 21.3642 13.5307 21.3642 13.5573 21.3642C13.8489 21.3377 14.1406 21.2051 14.3527 20.9665L26.8943 5.93243C27.2655 5.48167 27.2125 4.79228 26.7618 4.39456C26.311 4.02335 25.6216 4.07638 25.2239 4.52713L13.4247 18.6597L9.26182 14.4968Z"
                        fill="#E94FCA"
                      ></path>
                      <path
                        d="M23.739 2.35299C17.6405 -1.46518 9.8186 -0.563665 4.7277 4.52723C-1.2647 10.5196 -1.2647 20.3037 4.7277 26.2961C7.72391 29.2923 11.6747 30.8037 15.5989 30.8037C19.5231 30.8037 23.4739 29.2923 26.4701 26.2961C31.5875 21.1787 32.4625 13.3302 28.6178 7.23177C28.2996 6.72798 27.6367 6.56889 27.1329 6.88707C26.6292 7.20525 26.4701 7.86813 26.7882 8.37191C30.1026 13.6219 29.3337 20.3567 24.9322 24.7582C19.7883 29.9022 11.383 29.9022 6.23906 24.7582C1.09514 19.6143 1.09514 11.209 6.23906 6.0651C10.6406 1.69012 17.3489 0.921179 22.5989 4.18253C23.1026 4.50071 23.7655 4.34162 24.0837 3.83784C24.4019 3.33405 24.2428 2.67117 23.739 2.35299Z"
                        fill="#330C79"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="point-content">
                  <p class="point">24X7 Client Support &amp; Maintenance</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 col-spacing-bottom">
              <div class="icon-with-point-single">
                <div class="icon-part">
                  <div class="icon-part-inner">
                    <svg
                      class="correct-icon"
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.26182 14.4968C8.83758 14.0726 8.14818 14.0726 7.72394 14.4968C7.2997 14.921 7.2997 15.6104 7.72394 16.0347L12.7353 21.046C12.9474 21.2581 13.2126 21.3642 13.5042 21.3642C13.5307 21.3642 13.5307 21.3642 13.5573 21.3642C13.8489 21.3377 14.1406 21.2051 14.3527 20.9665L26.8943 5.93243C27.2655 5.48167 27.2125 4.79228 26.7618 4.39456C26.311 4.02335 25.6216 4.07638 25.2239 4.52713L13.4247 18.6597L9.26182 14.4968Z"
                        fill="#E94FCA"
                      ></path>
                      <path
                        d="M23.739 2.35299C17.6405 -1.46518 9.8186 -0.563665 4.7277 4.52723C-1.2647 10.5196 -1.2647 20.3037 4.7277 26.2961C7.72391 29.2923 11.6747 30.8037 15.5989 30.8037C19.5231 30.8037 23.4739 29.2923 26.4701 26.2961C31.5875 21.1787 32.4625 13.3302 28.6178 7.23177C28.2996 6.72798 27.6367 6.56889 27.1329 6.88707C26.6292 7.20525 26.4701 7.86813 26.7882 8.37191C30.1026 13.6219 29.3337 20.3567 24.9322 24.7582C19.7883 29.9022 11.383 29.9022 6.23906 24.7582C1.09514 19.6143 1.09514 11.209 6.23906 6.0651C10.6406 1.69012 17.3489 0.921179 22.5989 4.18253C23.1026 4.50071 23.7655 4.34162 24.0837 3.83784C24.4019 3.33405 24.2428 2.67117 23.739 2.35299Z"
                        fill="#330C79"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="point-content">
                  <p class="point">Industry-competitive Market Rates</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 col-spacing-bottom">
              <div class="icon-with-point-single">
                <div class="icon-part">
                  <div class="icon-part-inner">
                    <svg
                      class="correct-icon"
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.26182 14.4968C8.83758 14.0726 8.14818 14.0726 7.72394 14.4968C7.2997 14.921 7.2997 15.6104 7.72394 16.0347L12.7353 21.046C12.9474 21.2581 13.2126 21.3642 13.5042 21.3642C13.5307 21.3642 13.5307 21.3642 13.5573 21.3642C13.8489 21.3377 14.1406 21.2051 14.3527 20.9665L26.8943 5.93243C27.2655 5.48167 27.2125 4.79228 26.7618 4.39456C26.311 4.02335 25.6216 4.07638 25.2239 4.52713L13.4247 18.6597L9.26182 14.4968Z"
                        fill="#E94FCA"
                      ></path>
                      <path
                        d="M23.739 2.35299C17.6405 -1.46518 9.8186 -0.563665 4.7277 4.52723C-1.2647 10.5196 -1.2647 20.3037 4.7277 26.2961C7.72391 29.2923 11.6747 30.8037 15.5989 30.8037C19.5231 30.8037 23.4739 29.2923 26.4701 26.2961C31.5875 21.1787 32.4625 13.3302 28.6178 7.23177C28.2996 6.72798 27.6367 6.56889 27.1329 6.88707C26.6292 7.20525 26.4701 7.86813 26.7882 8.37191C30.1026 13.6219 29.3337 20.3567 24.9322 24.7582C19.7883 29.9022 11.383 29.9022 6.23906 24.7582C1.09514 19.6143 1.09514 11.209 6.23906 6.0651C10.6406 1.69012 17.3489 0.921179 22.5989 4.18253C23.1026 4.50071 23.7655 4.34162 24.0837 3.83784C24.4019 3.33405 24.2428 2.67117 23.739 2.35299Z"
                        fill="#330C79"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="point-content">
                  <p class="point">Always Ready to Take Calculative Risk</p>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-md-4 col-sm-6 col-spacing-bottom">
              <div class="icon-with-point-single">
                <div class="icon-part">
                  <div class="icon-part-inner">
                    <svg
                      class="correct-icon"
                      width="31"
                      height="31"
                      viewBox="0 0 31 31"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.26182 14.4968C8.83758 14.0726 8.14818 14.0726 7.72394 14.4968C7.2997 14.921 7.2997 15.6104 7.72394 16.0347L12.7353 21.046C12.9474 21.2581 13.2126 21.3642 13.5042 21.3642C13.5307 21.3642 13.5307 21.3642 13.5573 21.3642C13.8489 21.3377 14.1406 21.2051 14.3527 20.9665L26.8943 5.93243C27.2655 5.48167 27.2125 4.79228 26.7618 4.39456C26.311 4.02335 25.6216 4.07638 25.2239 4.52713L13.4247 18.6597L9.26182 14.4968Z"
                        fill="#E94FCA"
                      ></path>
                      <path
                        d="M23.739 2.35299C17.6405 -1.46518 9.8186 -0.563665 4.7277 4.52723C-1.2647 10.5196 -1.2647 20.3037 4.7277 26.2961C7.72391 29.2923 11.6747 30.8037 15.5989 30.8037C19.5231 30.8037 23.4739 29.2923 26.4701 26.2961C31.5875 21.1787 32.4625 13.3302 28.6178 7.23177C28.2996 6.72798 27.6367 6.56889 27.1329 6.88707C26.6292 7.20525 26.4701 7.86813 26.7882 8.37191C30.1026 13.6219 29.3337 20.3567 24.9322 24.7582C19.7883 29.9022 11.383 29.9022 6.23906 24.7582C1.09514 19.6143 1.09514 11.209 6.23906 6.0651C10.6406 1.69012 17.3489 0.921179 22.5989 4.18253C23.1026 4.50071 23.7655 4.34162 24.0837 3.83784C24.4019 3.33405 24.2428 2.67117 23.739 2.35299Z"
                        fill="#330C79"
                      ></path>
                    </svg>
                  </div>
                </div>
                <div class="point-content">
                  <p class="point">Well-versed in Shopify Insights</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="services-list-section section-spacing">
        <div class="container">
          <div class="section-head-part">
            <h2 class="section-head-title">
              Hire Us for a Dynamic Range of Shopify Services
            </h2>
          </div>

          <div class="row services-main-wrap services-list row-mb-minus justify-content-center">
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon normal-image"
                    src={store}
                    width="84px"
                    height="84px"
                    alt="Shopify store development"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    src="./assets/images/store-hover.png"
                    width="84px"
                    height="84px"
                    alt="Shopify store development"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Shopify Store Development</h3>
                  <p class="text">
                    Hire Shopify Scrum Team from CodeLoom Nexus to transform
                    your brick-and-mortar store into a feature-packed Shopify
                    store.
                  </p>
                </div>
                <a
                  href="shopify-store-setup.php"
                  class="link-with-icon large-link"
                >
                  Explore Service
                  <svg
                    class="link-icon"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.67661 0.175647C6.44221 -0.058549 6.06273 -0.058549 5.82893 0.175647C5.59452 0.409849 5.59452 0.788739 5.82893 1.02234L9.68969 4.8852C9.87853 5.07388 9.74485 5.40083 9.47807 5.40083H0.609686C0.278764 5.40083 0 5.66465 0 5.99528V5.99762C0 6.32826 0.278764 6.5988 0.609686 6.5988H9.47807C9.74485 6.5988 9.87853 6.91697 9.68969 7.10565L5.81034 10.9799C5.57594 11.2135 5.57594 11.5913 5.81034 11.8255C6.04414 12.0591 6.42362 12.0585 6.65803 11.8243L11.6488 6.83787C12.1171 6.37007 12.1171 5.61111 11.6488 5.14331C11.5403 5.03549 6.5681 0.0672371 6.67661 0.175647Z"
                      fill="#330C79"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon normal-image"
                    src={store}
                    width="84px"
                    height="84px"
                    alt="Shopfiy Plus Store Development"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    src="./assets/images/store-hover.png"
                    width="84px"
                    height="84px"
                    alt="Shopfiy Plus Store Development"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Shopify Plus Development</h3>
                  <p class="text">
                    Hire Shopify Plus development team to witness the advanced
                    development and endto-end Shopify Plus store development to
                    build a high-volume business.
                  </p>
                </div>
                <a
                  href="shopify-plus-store-development.php"
                  class="link-with-icon large-link"
                >
                  Explore Service
                  <svg
                    class="link-icon"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.67661 0.175647C6.44221 -0.058549 6.06273 -0.058549 5.82893 0.175647C5.59452 0.409849 5.59452 0.788739 5.82893 1.02234L9.68969 4.8852C9.87853 5.07388 9.74485 5.40083 9.47807 5.40083H0.609686C0.278764 5.40083 0 5.66465 0 5.99528V5.99762C0 6.32826 0.278764 6.5988 0.609686 6.5988H9.47807C9.74485 6.5988 9.87853 6.91697 9.68969 7.10565L5.81034 10.9799C5.57594 11.2135 5.57594 11.5913 5.81034 11.8255C6.04414 12.0591 6.42362 12.0585 6.65803 11.8243L11.6488 6.83787C12.1171 6.37007 12.1171 5.61111 11.6488 5.14331C11.5403 5.03549 6.5681 0.0672371 6.67661 0.175647Z"
                      fill="#330C79"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon normal-image"
                    src="./assets/images/shopify-app.png"
                    width="85px"
                    height="68px"
                    alt="Shopify App development"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    src="./assets/images/shopify-app-hover.png"
                    width="85px"
                    height="68px"
                    alt="Shopify App development"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Shopify App Development</h3>
                  <p class="text">
                    Our team of proficient Shopify developers are experts using
                    documented Shopify APIs and developing Shopify app
                    configurations &amp; custom Shopify apps.
                  </p>
                </div>
                <a
                  href="shopify-app-development.php"
                  class="link-with-icon large-link"
                >
                  Explore Service
                  <svg
                    class="link-icon"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.67661 0.175647C6.44221 -0.058549 6.06273 -0.058549 5.82893 0.175647C5.59452 0.409849 5.59452 0.788739 5.82893 1.02234L9.68969 4.8852C9.87853 5.07388 9.74485 5.40083 9.47807 5.40083H0.609686C0.278764 5.40083 0 5.66465 0 5.99528V5.99762C0 6.32826 0.278764 6.5988 0.609686 6.5988H9.47807C9.74485 6.5988 9.87853 6.91697 9.68969 7.10565L5.81034 10.9799C5.57594 11.2135 5.57594 11.5913 5.81034 11.8255C6.04414 12.0591 6.42362 12.0585 6.65803 11.8243L11.6488 6.83787C12.1171 6.37007 12.1171 5.61111 11.6488 5.14331C11.5403 5.03549 6.5681 0.0672371 6.67661 0.175647Z"
                      fill="#330C79"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon normal-image"
                    src="./assets/images/shopify-mobile-app.png"
                    width="65px"
                    height="86px"
                    alt="Shopify mobile app development"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    src="./assets/images/shopify-mobile-app-hover.png"
                    width="65px"
                    height="86px"
                    alt="Shopify mobile app development"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Shopify Mobile App Development</h3>
                  <p class="text">
                    Hire Shopify development team to experience smooth data
                    synchronization between the store &amp; mobile app and get
                    feature-rich Shopify mobile apps.
                  </p>
                </div>
                <a
                  href="shopify-mobile-app-development.php"
                  class="link-with-icon large-link"
                >
                  Explore Service
                  <svg
                    class="link-icon"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.67661 0.175647C6.44221 -0.058549 6.06273 -0.058549 5.82893 0.175647C5.59452 0.409849 5.59452 0.788739 5.82893 1.02234L9.68969 4.8852C9.87853 5.07388 9.74485 5.40083 9.47807 5.40083H0.609686C0.278764 5.40083 0 5.66465 0 5.99528V5.99762C0 6.32826 0.278764 6.5988 0.609686 6.5988H9.47807C9.74485 6.5988 9.87853 6.91697 9.68969 7.10565L5.81034 10.9799C5.57594 11.2135 5.57594 11.5913 5.81034 11.8255C6.04414 12.0591 6.42362 12.0585 6.65803 11.8243L11.6488 6.83787C12.1171 6.37007 12.1171 5.61111 11.6488 5.14331C11.5403 5.03549 6.5681 0.0672371 6.67661 0.175647Z"
                      fill="#330C79"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon normal-image"
                    src="./assets/images/marketplace.png"
                    width="84px"
                    height="74px"
                    alt="Shopify marketplace"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    src="./assets/images/marketplace-hover.png"
                    width="84px"
                    height="74px"
                    alt="Shopify marketplace"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Shopify Marketplace</h3>
                  <p class="text">
                    We specialize in creating a fully functional Shopify
                    marketplace with tailored features using the latest tools,
                    strong market insight, and immense technical knowledge.
                  </p>
                </div>
                <a
                  href="shopify-marketplace.php"
                  class="link-with-icon large-link"
                >
                  Explore Service
                  <svg
                    class="link-icon"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.67661 0.175647C6.44221 -0.058549 6.06273 -0.058549 5.82893 0.175647C5.59452 0.409849 5.59452 0.788739 5.82893 1.02234L9.68969 4.8852C9.87853 5.07388 9.74485 5.40083 9.47807 5.40083H0.609686C0.278764 5.40083 0 5.66465 0 5.99528V5.99762C0 6.32826 0.278764 6.5988 0.609686 6.5988H9.47807C9.74485 6.5988 9.87853 6.91697 9.68969 7.10565L5.81034 10.9799C5.57594 11.2135 5.57594 11.5913 5.81034 11.8255C6.04414 12.0591 6.42362 12.0585 6.65803 11.8243L11.6488 6.83787C12.1171 6.37007 12.1171 5.61111 11.6488 5.14331C11.5403 5.03549 6.5681 0.0672371 6.67661 0.175647Z"
                      fill="#330C79"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon normal-image"
                    src="./assets/images/Shopify-Migrations.png"
                    width="79px"
                    height="86px"
                    alt="Shopify Migrations"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    src="./assets/images/Shopify-Migrations-hover.png"
                    width="79px"
                    height="86px"
                    alt="Shopify Migrations"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Shopify Migrations</h3>
                  <p class="text">
                    CodeLoom Nexus has helped multiple brands seamlessly
                    migrate their eCommerce store to Shopify with zero data loss
                    and zero downtime. Hire us to migrate your data smoothly and
                    securely
                  </p>
                </div>
                <a
                  href="shopify-migration.php"
                  class="link-with-icon large-link"
                >
                  Explore Service
                  <svg
                    class="link-icon"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.67661 0.175647C6.44221 -0.058549 6.06273 -0.058549 5.82893 0.175647C5.59452 0.409849 5.59452 0.788739 5.82893 1.02234L9.68969 4.8852C9.87853 5.07388 9.74485 5.40083 9.47807 5.40083H0.609686C0.278764 5.40083 0 5.66465 0 5.99528V5.99762C0 6.32826 0.278764 6.5988 0.609686 6.5988H9.47807C9.74485 6.5988 9.87853 6.91697 9.68969 7.10565L5.81034 10.9799C5.57594 11.2135 5.57594 11.5913 5.81034 11.8255C6.04414 12.0591 6.42362 12.0585 6.65803 11.8243L11.6488 6.83787C12.1171 6.37007 12.1171 5.61111 11.6488 5.14331C11.5403 5.03549 6.5681 0.0672371 6.67661 0.175647Z"
                      fill="#330C79"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon normal-image"
                    src="./assets/images/Shopify-Headless-Commerce.png"
                    width="84px"
                    height="84px"
                    alt="Shopify Headless Commerce(Hydrogen)"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    src="./assets/images/Shopify-Headless-Commerce-hover.png"
                    width="84px"
                    height="84px"
                    alt="Shopify Headless Commerce(Hydrogen)"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Shopify Headless Commerce(Hydrogen)</h3>
                  <p class="text">
                    Team of official Shopify experts from CodeLoom Nexus to
                    build robust Shopify Headless Commerce efficiently and
                    fast-track your online store with all the tooling you
                    require for the ready-to-sell storefront.
                  </p>
                </div>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon normal-image"
                    src="./assets/images/marketing.png"
                    width="84px"
                    height="84px"
                    alt="Digital Marketing"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    src="./assets/images/marketing-hover.png"
                    width="84px"
                    height="84px"
                    alt="Digital Marketing"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Digital Marketing</h3>
                  <p class="text">
                    As a leading digital marketing agency, CodeLoom Nexus is
                    an expert in promoting businesses to bring brand awareness
                    and convert it into a revenue-making machine through proven
                    tactics &amp; strategies.
                  </p>
                </div>
              </div>
            </div>
            <div class="services-list-wrap col-lg-4 col-md-6 col-sm-6 col-spacing-bottom">
              <div class="single-services-box">
                <div class="icon-main">
                  <img
                    loading="lazy"
                    class="icon normal-image"
                    src="./assets/images/integrations.png"
                    width="84px"
                    height="84px"
                    alt="Integrations"
                  />
                  <img
                    loading="lazy"
                    class="icon hover-image"
                    src="./assets/images/integrations-hover.png"
                    width="84px"
                    height="84px"
                    alt="Integrations"
                  />
                </div>
                <div class="services-content">
                  <h3 class="title h4">Shopify Integrations</h3>
                  <p class="text">
                    Our experienced Shopify experts are well-versed in
                    effortlessly integrating CRM, third-party APIs, dropshipping
                    apps, payments gateways, etc., into Shopify. Let us enhance
                    your productivity and boost ROI.
                  </p>
                </div>
                <a
                  href="shopify-integration.php"
                  class="link-with-icon large-link"
                >
                  Explore Service
                  <svg
                    class="link-icon"
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M6.67661 0.175647C6.44221 -0.058549 6.06273 -0.058549 5.82893 0.175647C5.59452 0.409849 5.59452 0.788739 5.82893 1.02234L9.68969 4.8852C9.87853 5.07388 9.74485 5.40083 9.47807 5.40083H0.609686C0.278764 5.40083 0 5.66465 0 5.99528V5.99762C0 6.32826 0.278764 6.5988 0.609686 6.5988H9.47807C9.74485 6.5988 9.87853 6.91697 9.68969 7.10565L5.81034 10.9799C5.57594 11.2135 5.57594 11.5913 5.81034 11.8255C6.04414 12.0591 6.42362 12.0585 6.65803 11.8243L11.6488 6.83787C12.1171 6.37007 12.1171 5.61111 11.6488 5.14331C11.5403 5.03549 6.5681 0.0672371 6.67661 0.175647Z"
                      fill="#330C79"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="big-empire-banner" class="big-empire-banner section-spacing">
        <div class="container">
          <div class="big-empire-banner-main">
            <div class="big-empire-banner-left">
              <h3 class="h3 big-empire-banner-title">
                A Shopify Agency for Business Leaders like YOU!
              </h3>
              <p class="big-empire-banner-sub-desc">
                Kickstart Your Shopify Project with Our Exclusive Technologies
              </p>

              <a href="#" class="button white-button">
                <div>Contact US</div>
              </a>
            </div>
            <div class="big-empire-banner-right">
              <img
                loading="lazy"
                src="./assets/images/new-project-photoroom.png"
                width="409px"
                height="328px"
                alt="contact image"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="icon_text_with_link"
        class="icon-text-with-link-part section-spacing"
      >
        <div class="container">
          <div class="row row-mb-minus">
            <div class="col-md-6 col-spacing-bottom">
              <div class="icon-text-with-link-single d-flex  flex-wrap-wrap">
                <div class="icon">
                  <img
                    loading="lazy"
                    src="./assets/images/coding-blue.png"
                    width="50px"
                    height="50px"
                    alt="Hire Shopify developer"
                  />
                </div>
                <div class="content">
                  <h3 class="h6 heading">Hire Shopify developer</h3>
                  <p class="medium-text">
                    To develop a sales-oriented Shopify store with creative
                    UI/UX design at a costeffective white-label price point.
                  </p>
                </div>
                <a
                  href="hire-shopify-developer.php"
                  aria-label="Hire Shopify developer"
                  class="link-button-arrow"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 11L11 1M11 1H2M11 1V10"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="col-md-6 col-spacing-bottom">
              <div class="icon-text-with-link-single d-flex  flex-wrap-wrap">
                <div class="icon">
                  <img
                    loading="lazy"
                    src="./assets/images/coding-blue.png"
                    width="50px"
                    height="50px"
                    alt="Hire Shopify plus developer"
                  />
                </div>
                <div class="content">
                  <h3 class="h6 heading">Hire Shopify plus developer</h3>
                  <p class="medium-text">
                    To leverage the powerful blended version of Shopify Plus and
                    cater to both B2B &amp; D2C orders.
                  </p>
                </div>
                <a
                  href="hire-shopify-plus-developers.php"
                  aria-label="Hire Shopify plus developer"
                  class="link-button-arrow"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 11L11 1M11 1H2M11 1V10"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="col-md-6 col-spacing-bottom">
              <div class="icon-text-with-link-single d-flex  flex-wrap-wrap">
                <div class="icon">
                  <img
                    loading="lazy"
                    src="./assets/images/shopify-hire-page-icon2.png"
                    width="50px"
                    height="50px"
                    alt="Hire Shopify Headless Commerce Developer"
                  />
                </div>
                <div class="content">
                  <h3 class="h6 heading">
                    Hire Shopify Headless Commerce Developer
                  </h3>
                  <p class="medium-text">
                    To get complete control over users' &amp; developers'
                    experience and sell on numerous sales channels while
                    managing standard Backend.
                  </p>
                </div>
                <a
                  href="#"
                  class="link-button-arrow"
                  aria-label="Hire Shopify Headless Commerce Developer"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 11L11 1M11 1H2M11 1V10"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="col-md-6 col-spacing-bottom">
              <div class="icon-text-with-link-single d-flex  flex-wrap-wrap">
                <div class="icon">
                  <img
                    loading="lazy"
                    src="./assets/images/shopify-hire-page-icon3.png"
                    width="50px"
                    height="50px"
                    alt="Hire Shopify App Developer"
                  />
                </div>
                <div class="content">
                  <h3 class="h6 heading">Hire Shopify App Developer</h3>
                  <p class="medium-text">
                    To develop feature-rich Shopify apps. Whether it is
                    Custom(Private) Shopify apps or Public Shopify apps, we
                    offer exclusive development.
                  </p>
                </div>
                <a
                  href="hire-shopify-app-developer.php"
                  class="link-button-arrow"
                  aria-label="Hire Shopify App Developer"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 11L11 1M11 1H2M11 1V10"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
            <div class="col-md-6 col-spacing-bottom">
              <div class="icon-text-with-link-single d-flex  flex-wrap-wrap">
                <div class="icon">
                  <img
                    loading="lazy"
                    src="./assets/images/shopify-hire-page-icon4.png"
                    width="50px"
                    height="50px"
                    alt="Hire Shopify Mobile App Developer"
                  />
                </div>
                <div class="content">
                  <h3 class="h6 heading">Hire Shopify Mobile App Developer</h3>
                  <p class="medium-text">
                    To experience the smoothest data synchronization and enhance
                    brand reach with a user-friendly mobile version of your
                    Shopify store.
                  </p>
                </div>
                <a
                  href="#"
                  class="link-button-arrow"
                  aria-label="Hire Shopify Mobile App Developer"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 11L11 1M11 1H2M11 1V10"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="col-md-6 col-spacing-bottom">
              <div class="icon-text-with-link-single d-flex  flex-wrap-wrap">
                <div class="icon">
                  <img
                    loading="lazy"
                    src="./assets/images/shopify-hire-page-icon5.png"
                    width="50px"
                    height="50px"
                    alt="Hire Shopify Consultant"
                  />
                </div>
                <div class="content">
                  <h3 class="h6 heading">Hire Shopify Consultant</h3>
                  <p class="medium-text">
                    To develop your online store with absolutely tailored
                    requirements, optimize performance, and accelerate global
                    growth.
                  </p>
                </div>
                <a
                  href="#"
                  class="link-button-arrow"
                  aria-label="Hire Shopify Consultant"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 11L11 1M11 1H2M11 1V10"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="col-md-6 col-spacing-bottom">
              <div class="icon-text-with-link-single d-flex  flex-wrap-wrap">
                <div class="icon">
                  <img
                    loading="lazy"
                    src="./assets/images/shopify-hire-page-icon6.png"
                    width="50px"
                    height="50px"
                    alt="Hire Shopify Designer"
                  />
                </div>
                <div class="content">
                  <h3 class="h6 heading">Hire Shopify Designer</h3>
                  <p class="medium-text">
                    To stand out strongly from the world's fast-growing brands.
                    Make buyers purchase from your Shopify store with
                    eye-catching &amp; intuitive UI/UX design.
                  </p>
                </div>
                <a
                  href="hire-dedicated-shopify-designer.php"
                  class="link-button-arrow"
                  aria-label="Hire Shopify Designer"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 11L11 1M11 1H2M11 1V10"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="col-md-6 col-spacing-bottom">
              <div class="icon-text-with-link-single d-flex  flex-wrap-wrap">
                <div class="icon">
                  <img
                    loading="lazy"
                    src="./assets/images/shopify-hire-page-icon7.png"
                    width="50px"
                    height="50px"
                    alt="Hire Shopify SEO Expert"
                  />
                </div>
                <div class="content">
                  <h3 class="h6 heading">Hire Shopify SEO Expert</h3>
                  <p class="medium-text">
                    To boost your Shopify store's ranking to the top and bring
                    massive traffic to your Shopify website. Extend reach and
                    gain sales growth.
                  </p>
                </div>
                <a
                  href="hire-shopify-seo-expert.php"
                  class="link-button-arrow"
                  aria-label="Hire Shopify SEO Expert"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 11L11 1M11 1H2M11 1V10"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
            <div class="col-md-6 col-spacing-bottom">
              <div class="icon-text-with-link-single d-flex  flex-wrap-wrap">
                <div class="icon">
                  <img
                    loading="lazy"
                    src="./assets/images/shopify-hire-page-icon8.png"
                    width="50px"
                    height="50px"
                    alt="Hire Shopify CRO Expert"
                  />
                </div>
                <div class="content">
                  <h3 class="h6 heading">Hire Shopify CRO Expert</h3>
                  <p class="medium-text">
                    To convert viewers into ideal customers and build a huge
                    loyal customer base. Generate great revenue using our
                    efficient strategies like 3C checkout.
                  </p>
                </div>
                <a
                  href="#"
                  class="link-button-arrow"
                  aria-label="Hire Shopify CRO Expert"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 11L11 1M11 1H2M11 1V10"
                      stroke="black"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="content-image-with-list"
        class="content-image-with-list section-spacing"
      >
        <div class="content-image-main">
          <div class="container">
            <div class="section-head-part">
              <h2 class="content-image-title section-head-title">
                In-house Experts for Dynamic Requirements
              </h2>
              <p class="content-image-sub-desc section-head-content">
                Since the very beginning, we have always strived to meet the
                dynamic requirements of our global clients. As time passes, the
                dynamic requirements are increasing at lightning speed in this
                digital era. But you don't worry about the complexity or
                uniqueness because, at CodeLoom Nexus, we have a large pool
                of in-house experts for all your dynamic and complex
                requirements.
              </p>
            </div>
            <div class="row">
              <div class="col-lg-6 col-md-12">
                <div class="content-image-left-part">
                  <div class="content-image-desc">
                    <p class="content-image-sub-desc">
                      The teams of experts at CodeLoom Nexus have years of
                      extensive experience, strong market insights, and
                      specialize in using advanced development tools related to
                      their domains. They have consistently maintained a record
                      of delivering premium quality digital products to numerous
                      clients across diverse industries. Hire our passionate
                      Shopify development team and get what you demand.
                    </p>
                  </div>
                  <div class="content-bottom-image-part">
                    <img
                      loading="lazy"
                      src="./assets/images/in-house-experts-dynamic-requirements.png"
                      width="430px"
                      height="394px"
                      alt="in house experts dynamic requirements"
                    />
                  </div>
                </div>
              </div>
              <div class="col-lg-6 col-md-12">
                <div class="content-image-list-items">
                  <ul class="correct-icon-with-list-small mb-0">
                    <li>Chief Technology Officer</li>
                    <li>Proactive Business Development Manager</li>
                    <li>Creative UI/UX Designers</li>
                    <li>Certified Shopify Developers</li>
                    <li>QA Specialist</li>
                    <li>Dedicated Project Manager</li>
                    <li>Scrum Team</li>
                    <li>Offshore Developers</li>
                    <li>Remote Developer</li>
                    <li>Dev Ops</li>
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
                      src="./assets/images/programming-languages-icon.png"
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
                      src="./assets/images/database-skills.png"
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
                      src="./assets/images/advanced-tools-icon.png"
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
                      src="./assets/images/concepts-icon.png"
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
                      src="./assets/images/development-skills-icon.png"
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
                      src="./assets/images/operating-systems-icon.png"
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

      <section
        id="workflow_section"
        class="workflow-section section-spacing section-inner-spacing"
      >
        <div class="container">
          <div class="section-head-part">
            <h2 class="section-head-title">
              Our Strategic Workflow for Shopify Store Maintenance
            </h2>
            <p class="section-head-content">
              We have powered all sizes of businesses to keep their online
              Shopify store in topnotch condition with our comprehensive
              maintenance services.
            </p>
          </div>

          <div class="workflow-step">
            <div class="workflow-step-wrap row row-mb-minus justify-content-center">
              <div class="workflow-single col-md-4 col-sm-6 col-spacing-bottom">
                <div class="workflow-single-back">
                  <div class="image">
                    <img
                      class="icon"
                      width="85px"
                      height="85px"
                      src="./assets/images/discover 1.png"
                      alt="Discuss Project Requirements"
                      loading="lazy"
                    />
                  </div>
                  <span class="workflow-count">01</span>
                  <h3 class="h5 title">Discovery &amp; Planning</h3>
                  <ul class="medium-text workflow-content">
                    <li>
                      Our Shopify developers interact with clients to understand
                      what exactly they are expecting.
                    </li>
                    <li>
                      After understanding clients' specific requirements, we
                      prepare strategic planning for an uninterrupted
                      development process.
                    </li>
                    <li>
                      It helps to deliver final results as per customer
                      requirements in no time.
                    </li>
                  </ul>
                </div>
              </div>

              <div class="workflow-single col-md-4 col-sm-6 col-spacing-bottom">
                <div class="workflow-single-back">
                  <div class="image">
                    <img
                      class="icon"
                      width="85px"
                      height="85px"
                      src="./assets/images/maintenance 1.png"
                      alt="Store Maintenance &amp; QA"
                      loading="lazy"
                    />
                  </div>
                  <span class="workflow-count">02</span>
                  <h3 class="h5 title">Store Maintenance &amp; QA</h3>
                  <ul class="medium-text workflow-content">
                    <li>
                      After analyzing clients' specific requirements, our
                      Shopify experts follow strategic planning and their strong
                      technical expertise to provide complete endto-end
                      solutions as per client requirements.
                    </li>
                    <li>
                      Before delivering a final outcome for UAT, our QA
                      professional confirms the quality of the store by
                      performing rigid quality testing.
                    </li>
                  </ul>
                </div>
              </div>

              <div class="workflow-single col-md-4 col-sm-6 col-spacing-bottom">
                <div class="workflow-single-back">
                  <div class="image">
                    <img
                      class="icon"
                      width="85px"
                      height="85px"
                      src="./assets/images/startup 2.png"
                      alt="UAT &amp; Deploy"
                      loading="lazy"
                    />
                  </div>
                  <span class="workflow-count">03</span>
                  <h3 class="h5 title">UAT &amp; Deploy</h3>
                  <ul class="medium-text workflow-content">
                    <li>
                      After successful QA testing, we deliver the product for
                      UAT to verify end-to-end functionality from a client or
                      end-user side.
                    </li>
                    <li>
                      After getting approval from the client, the Shopify store
                      is ready to launch.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="prices-section" class="price-section section-spacing">
        <div class="section-head-part">
          <h2 class="section-head-title">
            Hire Dedicated Developers at Affordable Prices
          </h2>
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
                      src="./assets/images/approved.png"
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
                      src="./assets/images/part-time.png"
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
                      src="./assets/images/24-hours.png"
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
                      src="./assets/images/hired.png"
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
                      src="./assets/images/candidate-profile-icon.png"
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
                      src="./assets/images/interview-icon.png"
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
                      src="./assets/images/hire-icon.png"
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

      <Freelancing />

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

export default HireUs;
