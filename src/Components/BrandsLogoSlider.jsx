import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import brand logos
import brand1 from "../assets/1.avif";
import brand2 from "../assets/2.svg";
import brand3 from "../assets/3.avif";
// import brand4 from "../assets/4.svg";
import brand5 from "../assets/5.webp";
import brand6 from "../assets/6.svg";
import brand7 from "../assets/7.avif";
import brand8 from "../assets/8.avif";
import brand9 from "../assets/9.svg";
import brand10 from "../assets/10.avif";

const BrandsLogoSlider = () => {
  const brandLogos = [
    { src: brand1, alt: "Brand 1" },
    { src: brand2, alt: "Brand 2" },
    { src: brand3, alt: "Brand 3" },
    // { src: brand4, alt: "Brand 4" },
    { src: brand5, alt: "Brand 5" },
    { src: brand6, alt: "Brand 6" },
    { src: brand7, alt: "Brand 7" },
    // { src: brand8, alt: "Brand 8" },
    { src: brand9, alt: "Brand 9" },
    { src: brand10, alt: "Brand 10" },
  ];

  const brandSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slider {...brandSettings}>
      {brandLogos.map((logo, index) => (
        <div key={index}>
          <img
            className="brand-image"
            loading="lazy"
            width="234px"
            height="64px"
            src={logo.src}
            alt={logo.alt}
          />
        </div>
      ))}
    </Slider>
  );
};

export default BrandsLogoSlider;
