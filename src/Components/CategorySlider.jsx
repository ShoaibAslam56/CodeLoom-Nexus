import React from "react";
import Slider from "react-slick";

// Import industry images
import image13 from "../assets/images/image 13.png";
import image14 from "../assets/images/image 14.png";
import image15 from "../assets/images/image 15.png";
import image23 from "../assets/images/image 23.png";
import automotive from "../assets/images/Automotive.png";
import education from "../assets/images/Education.png";
import healthcare from "../assets/images/Healthcare.png";
import manufacturing from "../assets/images/Manufacturing.png";

const CategorySlider = () => {
  const industriesData = [
    // Add your industry data here
    {
      name: "Fashion",
      imageSrc: image13,
      alt: "fashion",
    },
    {
      name: "Cosmetic",
      imageSrc: image14,
      alt: "Cosmetic",
    },
    {
      name: "Jewellery",
      imageSrc: image23,
      alt: "Jewellery",
    },
    {
      name: "Retail & eCommerce",
      imageSrc: image15,
      alt: "Retail & eCommerce",
    },
    {
      name: "Automotive",
      imageSrc: automotive,
      alt: "Automotive",
    },
    {
      name: "Education",
      imageSrc: education,
      alt: "Education",
    },
    {
      name: "Healthcare",
      imageSrc: healthcare,
      alt: "Healthcare",
    },
    {
      name: "Manufacturing",
      imageSrc: manufacturing,
      alt: "Manufacturing",
    },
    // Add other industries similarly
  ];

  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    arrows: false,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section class="industries-we-work section-spacing section-inner-spacing">
      <div class="container">
        <div class="section-head-part">
          <h2 class="section-head-title">Diverse Industries We cater</h2>
        </div>

        <div className="industries-we-work-slider">
          <Slider {...settings}>
            {industriesData.map((industry, index) => (
              <div key={index} className="industries-we-work-single">
                <div className="industries-we-work-inner">
                  <div className="industries-image">
                    <img
                      src={industry.imageSrc}
                      width="299px"
                      height="205px"
                      alt={industry.alt}
                      loading="lazy"
                    />
                  </div>
                  <div className="industries-name h6">{industry.name}</div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CategorySlider;
