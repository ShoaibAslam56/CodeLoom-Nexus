import React from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import cnWhiteLogo from "../assets/CN-white-logo.png";

// Import images
import pakistanFlag from "../assets/images/pakistan.png";
import emailIcon from "../assets/images/email-white.png";
import callIcon from "../assets/images/call-white.png";
import ukFlag from "../assets/images/united-kingdom.png";
const Footer = () => {
  const navigate = useNavigate();

  const handleLinkClick = (path) => {
    navigate(path);
    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <footer className="section-footer">
        <div className="container">
          <div className="row align-items-center footer-top-part">
            <div className="col-md-2 col-sm-3">
              <div className="footer-logo" onClick={() => handleLinkClick("/")}>
                <NavLink to="/">
                  <img
                    src={cnWhiteLogo}
                    alt="logo"
                    width="120"
                    style={{ width: "120px", maxWidth: "40%" }}
                    height="30"
                    className="company-logo"
                    loading="lazy"
                  />
                </NavLink>
              </div>

            </div>
          </div>

          <div className="row footer-bottom-part">
            <div className="col-lg-3 col-md-6 footer-colm col-spacing-bottom">
              <div className="footer-navigation">
                <h3 className="h6 title">Quick Links</h3>
                <ul className="footer-navigation-list">
                  <li onClick={() => handleLinkClick("/hire-us")}>
                    <NavLink to="/hire-us">Hire Us</NavLink>
                  </li>
                  <li onClick={() => handleLinkClick("/casestudies")}>
                    <NavLink to="/casestudies">Case Study</NavLink>
                  </li>
                  <li onClick={() => handleLinkClick("/portfolio")}>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                  </li>
                
                  {/* <li><a href="blog/index.png" target="_blank">Blogs</a></li> */}
                  <li onClick={() => handleLinkClick("/contact-us")}>
                    <NavLink to="/contact-us">Contact</NavLink>
                  </li>
                  {/* <li><a href="#">Best Shopify Theme</a></li> */}
                  <li onClick={() => handleLinkClick("/privacy-policy")}>
                    <NavLink to="/privacy-policy">Privacy Policy</NavLink>
                  </li>
                 
                  <li>
                    <NavLink to="/build-your-free-store">
                      Build Your Store
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-colm col-spacing-bottom">
              <div className="footer-navigation">
                <h3 className="h6 title">Services</h3>
                <ul className="footer-navigation-list">
                  <li
                    onClick={() =>
                      handleLinkClick("/shopify-plus-store-development")
                    }
                  >
                    <NavLink to="/shopify-plus-store-development">
                      Shopify Store Development
                    </NavLink>
                  </li>
                  <li>
                    <a href="#">Shopify Integrations</a>
                  </li>
                  <li onClick={() => handleLinkClick("/shopify-migration")}>
                    <NavLink to="/shopify-migration">
                      Shopify Migrations
                    </NavLink>
                  </li>
                  <li>
                    <a href="#">Digital Marketing</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 footer-address-part footer-colm col-spacing-bottom">
              <h3 className="h6 title">
                <span className="flag-icon">
                  <img
                    src={pakistanFlag}
                    alt="indian flag"
                    width="20px"
                    height="20px"
                    loading="lazy"
                  />
                </span>
                Pakistan
              </h3>
              <p className="address">
                Muslim Town, Lahore
              </p>
              <ul className="contact-info">
                <li>
                  <a
                    href="mailto:contact@codeloom-nexus.com"
                                          title="contact@codeloom-nexus.com"
                  >
                    <span className="contact-icon">
                      <img
                        src={emailIcon}
                        alt="email"
                        width="16px"
                        height="14px"
                        loading="lazy"
                      />
                    </span>
                                          contact@codeloom-nexus.com
                  </a>
                </li>
                <li>
                  <a href="tel:+92 303 6682519">
                    <span className="contact-icon">
                      <img
                        src={callIcon}
                        alt="call"
                        width="17px"
                        height="17px"
                        loading="lazy"
                      />
                    </span>
                    +92 303 6682519
                  </a>
                </li>
                {/* <li><a href="tel:+92330 043 3565"><span className="contact-icon"><img src="/../assets/images/call-white.png" alt="call" width="17px" height="17px" loading="lazy" /></span>+92330 043 3565</a></li> */}
              </ul>
            </div>
          </div>
        </div>

        <div className="copyright-and-follow-part">
          <div className="container">
            <div className="row">
              <div className="col-md-8">
                <div className="copyright-content">
                  © Copyright {currentYear} by{" "}
                  <NavLink
                    to="/"
                    onClick={() => handleLinkClick("/")}
                    className="link"
                  >
                    <strong>CodeLoom Nexus</strong>
                  </NavLink>
                </div>
              </div>
              <div className="col-md-4">
                <ul className="social-media">
                  <li>
                    <a
                      href="https://www.facebook.com/CodeLoom Nexus"
                      aria-label="fb link"
                      className="social-media-back"
                      target="_blank"
                    >
                      <svg
                        className="social-media-icon social-media-fb-icon"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.7188 3.12848L11.6525 3.12598C9.64875 3.12598 8.35437 4.45348 8.35437 6.51035V8.06973H6.28125V10.8916H8.35437L8.35187 16.876H11.2525L11.255 10.8916H13.6337L13.6319 8.07035H11.255V6.74723C11.255 6.11098 11.4056 5.7891 12.2337 5.7891L13.7125 5.78848L13.7188 3.12848Z"
                          fill="white"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/codeloom-nexus-technologies-ltd"
                      aria-label="linkdin"
                      className="social-media-back"
                      target="_blank"
                    >
                      <svg
                        className="social-media-icon social-media-linkdin-icon"
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M12 13H9.6V8.45063C9.6 7.20263 9.0918 6.50635 8.1804 6.50635C7.1886 6.50635 6.6 7.23188 6.6 8.45063V13H4.2V4.55H6.6V5.50024C6.6 5.50024 7.353 4.06885 9.0498 4.06885C10.7472 4.06885 12 5.19097 12 7.51277V13ZM1.4652 3.19858C0.655801 3.19858 0 2.48232 0 1.59897C0 0.716275 0.655801 0 1.4652 0C2.274 0 2.9298 0.716275 2.9298 1.59897C2.9304 2.48232 2.274 3.19858 1.4652 3.19858ZM0 13H3V4.55H0V13Z"
                          fill="white"
                        ></path>
                      </svg>
                    </a>
                  </li>
                  {/* <li>
                            <a href="https://twitter.com/CodeLoom Nexus" className="social-media-back" aria-label="twitter" target="_blank">
                                <svg className="social-media-icon social-media-twitter-icon" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="15" height="15" x="0" y="0" viewBox="0 0 1226.37 1226.37" xml:space="preserve"><g><path d="M727.348 519.284 1174.075 0h-105.86L680.322 450.887 370.513 0H13.185l468.492 681.821L13.185 1226.37h105.866l409.625-476.152 327.181 476.152h357.328L727.322 519.284zM582.35 687.828l-47.468-67.894-377.686-540.24H319.8l304.797 435.991 47.468 67.894 396.2 566.721H905.661L582.35 687.854z" fill="#ffffff" opacity="1" data-original="#000000" className=""></path></g></svg>
                            </a>
                        </li> */}
                  {/* <li>
                            <a href="https://in.pinterest.com/CodeLoom Nexus/" className="social-media-back" aria-label="pinterest" target="_blank">
                                <svg className="social-media-icon social-media-pinterest-icon" width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.22546 9.7162C4.82487 11.6441 4.30692 13.0342 2.85987 14.0002C2.41253 11.0874 3.51635 8.90008 4.0281 6.57608C3.15458 5.22632 4.1331 2.50867 5.9737 3.17738C8.2387 4.00173 4.17546 7.99997 7.0131 8.52455C9.97605 9.07138 11.0366 4.35255 9.20046 2.63797C6.54635 0.162432 1.2584 2.26161 2.08164 5.77149C2.4134 7.18632 1.28487 7.58902 1.28487 7.58902C0.370752 7.24314 0.283409 6.04572 0.330166 4.87714C0.435166 2.18996 2.95692 0.308199 5.48664 0.0471432C8.68605 -0.282272 11.6887 1.12679 12.1025 3.89385C12.5702 7.01585 10.7199 10.6023 7.2981 10.3586C6.37164 10.2927 5.22546 9.7162 5.22546 9.7162Z" fill="white"></path>
                                </svg>
                            </a>
                        </li> */}
                  <li>
                    <a
                      href="https://www.instagram.com/CodeLoom Nexus/"
                      aria-label="instagram"
                      className="social-media-back"
                      target="_blank"
                    >
                      <svg
                        className="social-media-icon social-media-insta-icon"
                        width="15"
                        height="15"
                        viewBox="0 0 15 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M4.40224 0.0920469C3.18133 0.147134 2.12311 0.445632 1.26862 1.29651C0.411146 2.15187 0.116356 3.21428 0.0611313 4.42249C0.0268023 5.1766 -0.173936 10.8737 0.408162 12.3678C0.800704 13.3758 1.57383 14.1508 2.59101 14.5446C3.06564 14.7292 3.60745 14.8541 4.40224 14.8906C11.0479 15.1914 13.5113 15.0276 14.5501 12.3678C14.7345 11.8943 14.8613 11.353 14.8964 10.5602C15.2001 3.89753 14.8472 2.45336 13.6889 1.29651C12.7703 0.38012 11.6897 -0.243691 4.40224 0.0920469ZM4.46342 13.5507C3.7358 13.5179 3.34102 13.3967 3.07759 13.2947C2.41489 13.0371 1.91713 12.5414 1.66115 11.8826C1.21786 10.7473 1.36489 5.35539 1.40444 4.48292C1.44325 3.62831 1.61638 2.84725 2.21937 2.24427C2.96565 1.49983 3.92983 1.13499 10.4948 1.43128C11.3516 1.46999 12.1344 1.64277 12.7389 2.24427C13.4852 2.9887 13.8553 3.9603 13.5539 10.5001C13.521 11.2259 13.3994 11.6198 13.2971 11.8826C12.6218 13.6134 11.068 13.8536 4.46342 13.5507ZM10.5672 3.51722C10.5672 4.01004 10.968 4.41077 11.4628 4.41077C11.9576 4.41077 12.3591 4.01004 12.3591 3.51722C12.3591 3.02441 11.9576 2.62403 11.4628 2.62403C10.968 2.62403 10.5672 3.02441 10.5672 3.51722ZM3.647 7.49097C3.647 9.60218 5.3627 11.3138 7.47915 11.3138C9.59559 11.3138 11.3113 9.60218 11.3113 7.49097C11.3113 5.37977 9.59559 3.6692 7.47915 3.6692C5.3627 3.6692 3.647 5.37977 3.647 7.49097ZM4.9918 7.49097C4.9918 6.12123 6.10525 5.00989 7.47915 5.00989C8.85305 5.00989 9.9665 6.12123 9.9665 7.49097C9.9665 8.86147 8.85305 9.97315 7.47915 9.97315C6.10525 9.97315 4.9918 8.86147 4.9918 7.49097Z"
                          fill="white"
                        ></path>
                      </svg>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
