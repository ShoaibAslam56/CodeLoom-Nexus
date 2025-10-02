import React, { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { NavLink, Outlet } from "react-router-dom";
import Freequote from "../Components/Freequote";

// Import images
import shopifyExpertIcon from "../assets/images/shopify-expert-icon.png";

const Layout = () => {
  const [modal, setModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  // const [isShow, setIsShow] = useState(false);

  // Show the popup after 3 seconds
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsShow(true);
  //   }, 3000);

  //   return () => {
  //     clearTimeout(timer); // Cleanup the timer on component unmount
  //   };
  // }, []); // Empty dependency array ensures this effect runs only once after initial render

  // const handleHide = () => {
  //   setIsShow(false);
  // };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const triggerPoint = window.innerHeight; // Adjust this value based on your needs

    if (scrollY > triggerPoint) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closemodal = () => {
    setModal(false);
  };

  // const containerStyle = {
  //   position: "fixed",
  //   left: "50%",
  //   transform: "translateX(-50%)",
  //   bottom: "0px",
  //   textAlign: "center",
  //   justifyContent: "center",
  //   zIndex: 111111111111,
  //   display: isShow ? "flex" : "none", // Show or hide based on state
  //   width: "70%", // Default width for desktop view
  //   maxWidth: "450px", // Maximum width for desktop view
  //   margin: "0 auto", // Center horizontally
  // };

  const linkStyle = {
    textDecoration: "none",
    color: "white",
    padding: "10px 20px",
    backgroundColor: "#E94FCA",
    borderRadius: "25px",
    marginRight: "10px",
  };

  return (
    <>
      <Navbar />
      {modal && <Freequote closeModal={closemodal} />}

      <div
        className="stickey-button-all-page left-stickey"
        onClick={() => setModal(true)}
      >
        <div className="button-content form-model-button">
          <span className="button-name">
            <b>Estimate</b>
          </span>
        </div>
      </div>

      <div className="stickey-button-all-page right-stickey">
        <div className="button-content">
          <NavLink to="/ecommerce-solution">
            <p className="button-name">
              <img
                src={shopifyExpertIcon}
                alt="Shopify Expert"
                loading="lazy"
                width="20px"
                height="17px"
                className="stickey-button-icon"
              />
              <b>eCommerce Solution</b>
            </p>
          </NavLink>
        </div>
      </div>

      <Outlet />

      <div
        className={`back-to-top ${isVisible ? "show" : ""}`}
        onClick={scrollToTop}
      >
        <svg width="15" height="15" viewBox="0 0 15 9" fill="none">
          <path
            d="M13.8945 7.27344L7.89453 1.27344L1.89453 7.27344"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div class="bottom-right-icon">
        <a
          href="https://wa.me/923036682519"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path
              fill="#00f080"
              d="M92.1 254.6c0 24.9 7 49.2 20.2 70.1l3.1 5-13.3 48.6L152 365.2l4.8 2.9c20.2 12 43.4 18.4 67.1 18.4h.1c72.6 0 133.3-59.1 133.3-131.8c0-35.2-15.2-68.3-40.1-93.2c-25-25-58-38.7-93.2-38.7c-72.7 0-131.8 59.1-131.9 131.8zM274.8 330c-12.6 1.9-22.4 .9-47.5-9.9c-36.8-15.9-61.8-51.5-66.9-58.7c-.4-.6-.7-.9-.8-1.1c-2-2.6-16.2-21.5-16.2-41c0-18.4 9-27.9 13.2-32.3c.3-.3 .5-.5 .7-.8c3.6-4 7.9-5 10.6-5c2.6 0 5.3 0 7.6 .1c.3 0 .5 0 .8 0c2.3 0 5.2 0 8.1 6.8c1.2 2.9 3 7.3 4.9 11.8c3.3 8 6.7 16.3 7.3 17.6c1 2 1.7 4.3 .3 6.9c-3.4 6.8-6.9 10.4-9.3 13c-3.1 3.2-4.5 4.7-2.3 8.6c15.3 26.3 30.6 35.4 53.9 47.1c4 2 6.3 1.7 8.6-1c2.3-2.6 9.9-11.6 12.5-15.5c2.6-4 5.3-3.3 8.9-2s23.1 10.9 27.1 12.9c.8 .4 1.5 .7 2.1 1c2.8 1.4 4.7 2.3 5.5 3.6c.9 1.9 .9 9.9-2.4 19.1c-3.3 9.3-19.1 17.7-26.7 18.8zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM148.1 393.9L64 416l22.5-82.2c-13.9-24-21.2-51.3-21.2-79.3C65.4 167.1 136.5 96 223.9 96c42.4 0 82.2 16.5 112.2 46.5c29.9 30 47.9 69.8 47.9 112.2c0 87.4-72.7 158.5-160.1 158.5c-26.6 0-52.7-6.7-75.8-19.3z"
            />
          </svg>
        </a>
      </div>

      {/* Modal removed - Shopify 3 months banner */}
      {/* <div style={containerStyle}>
        <a
          href="https://shopify.pxf.io/q4yEjq"
          target="_blank"
          className="button submit-button"
          type="submit"
          aria-label="button"
          id="get_free_quote_popup"
          style={linkStyle}
        >
          Enjoy Shopify 3 Months For $1 Plan 2024, Start Free Trial
        </a>
        <span
          style={{
            padding: "12px",
            background: "black",
            color: "white",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
          }}
          onClick={handleHide}
        >
          X
        </span>
      </div> */}

      <Footer />
    </>
  );
};

export default Layout;
