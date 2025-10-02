import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images
import testimImageMale from "../assets/images/lp-images/testim-image-male.png";
import star from "../assets/images/star.png";

const TestimonialSlider = () => {
  const testimonialData = [
    {
      name: "Daniel S Cunningham",
      date: "Feb, 2022",
      content:
        "The work that CodeLoom Nexus have done for our project has been up to the mark. This is perhaps one of the best, cost-effective e-commerce company who have lived up to our expectations.",
      rating: 5,
    },
    {
      name: "Yucheng Tu",
      date: "Apr, 2021",
      content:
        "The extremely supportive team at CodeLoom Nexus have helped establish our web presence to a great extent. The team that was assigned to me have completed the given tasks seamlessly within the specified timeframe.",
      rating: 5,
    },
    {
      name: "Kim M Williams",
      date: "Sep, 2022",
      content:
        "The quality of work completed by the team at CodeLoom Nexus has been exceptional, having met our standards to the core. We look forward to working with the team for our future projects and would definitely recommend them to others.",
      rating: 5,
    },
    // Add more testimonials as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: (
      <button
        className="slick-prev slick-arrow"
        aria-label="Previous"
        type="button"
      >
        Previous
      </button>
    ),
    nextArrow: (
      <button
        className="slick-next slick-arrow"
        aria-label="Next"
        type="button"
      >
        Next
      </button>
    ),
  };

  return (
    <section className="lp-testimonial-section section-spacing">
      <div className="container">
        <Slider {...sliderSettings}>
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="lp-testim-slide">
              <div className="lp-testim-slide-inn">
                <div className="lp-testim-mem-info">
                  <figure className="lp-testim-mem-img">
                    <img
                      loading="lazy"
                      src={testimImageMale}
                      width="97px"
                      height="97px"
                      alt="testim-image-male"
                    />
                  </figure>
                  <div className="lp-testim-mem-rht">
                    <h5 className="h5">{testimonial.name}</h5>
                    <span className="lp-testim-date">{testimonial.date}</span>
                  </div>
                </div>
                <p>{testimonial.content}</p>
                <div className="lp-testim-rating">
                  {[...Array(testimonial.rating)].map((star, i) => (
                    <span key={i} className="star">
                      <img
                        loading="lazy"
                        src={star}
                        alt="star"
                      />
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default TestimonialSlider;
