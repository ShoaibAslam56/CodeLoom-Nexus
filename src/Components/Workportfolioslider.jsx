import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import aoklok from "../assets/images/aoklok.png";
import plantquility from "../assets/images/plantquility.png";

const Workportfolioslider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // Add more breakpoints as needed
    ],
  };

  const slidesData = [
    {
      title: "Aoklok",
              image: aoklok,
      requirements: "Requirements: Our client KCLOT requested...",
      text: "Our client KCLOT requested that we develop a strong brand identity...",
      link: "casestudies.php",
    },
    {
      title: "Plantquility",
              image: plantquility,
      requirements: "Requirements: Our client, PLANTQUILITY, requested...",
      text: "Our client, PLANTQUILITY, requested that we develop a strong brand identity...",
      link: "casestudies.php",
    },
    // Add more slide data as needed
  ];

  return (
    <>
      <section
        id="case_study"
        className="case-study section-spacing section-inner-spacing"
      >
        <div className="container">
          <div className="section-head-part">
            <h2 className="section-head-title">Our Creative Work Portfolio!</h2>
            <p className="section-head-content">
              Please go through with these amazing portfolios for an overview of
              the most interesting cases
            </p>
          </div>

          <Slider {...settings}>
            {slidesData.map((slide, index) => (
              <div key={index} className="case-study-list">
                <div className="row align-items-center">
                  <div className="col-md-6">
                    <div className="case-study-image">
                      <img
                        loading="lazy"
                        src={slide.image}
                        alt={`${slide.title}-case-study`}
                        width="567px"
                        height="379px"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="case-study-content">
                      <h3 className="title">{slide.title}</h3>
                      <div className="Requirements h5">
                        {slide.requirements}
                      </div>
                      <p className="text">{slide.text}</p>
                      <a href={slide.link} className="button" tabIndex={0}>
                        View More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
};

export default Workportfolioslider;
