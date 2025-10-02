import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { NavLink } from "react-router-dom";

// Import images
import caseStudyBack from "../assets/images/case-study-back.png";
import recovapro from "../assets/images/recovapro.png";
import blackleaves from "../assets/images/blackleaves.png";

const CaseStudySlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section
      id="case_study"
      className="case-study section-spacing section-inner-spacing lazy-background"
      data-src={caseStudyBack}
    >
      <div className="container">
        <div className="section-head-part">
          <h3 className="section-head-title h2">Case Study</h3>
          <p className="section-head-content">
            CodeLoom Nexus is the best Shopify development agency with 15+
            years of experience in the industry. Our web developers have
            empowered numerous businesses to overcome their issues using strong
            technical backgrounds. Here, we have enlisted some of the remarkable
            case studies of our valued client.
          </p>
        </div>

        <Slider {...settings}>
          <div>
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="case-study-image">
                  <img
                                          src={recovapro}
                    alt="case study Plantquility"
                    width="575px"
                    height="420px"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="case-study-content">
                  <h4 className="title">Recovapro</h4>
                  <div className="Requirements h5">Requirements:</div>
                  <p className="text">
                    Our client, recovapro, requested that we develop a strong
                    brand identity from the ground up that reflects the core of
                    their brand and allows users to explore the perfect
                    houseplant plant that matches their lifestyle.
                  </p>
                  <NavLink to="/casestudies" className="button" tabIndex="-1">
                    View More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="row align-items-center">
              <div className="col-md-6">
                <div className="case-study-image">
                  <img
                                          src={blackleaves}
                    alt="aoklok-case-study"
                    width="567px"
                    height="379px"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="case-study-content">
                  <h4 className="title">Blackleaves</h4>
                  <div className="Requirements h5">Requirements:</div>
                  <p className="text">
                    Our client blackleaves requested that we develop a strong
                    brand identity from the ground up that reflects the core of
                    their brand and allows users to explore their trending
                    collection.
                  </p>
                  <NavLink to="/casestudies" className="button" tabIndex="0">
                    View More
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

export default CaseStudySlider;
