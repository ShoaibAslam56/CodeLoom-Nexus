import React, { useEffect, useState } from "react";
import LetDiscuss from "../Components/LetDiscuss";
import { NavLink } from "react-router-dom";

// Import all portfolio images
import project1 from "../assets/Project/1.avif";
import project2 from "../assets/Project/2.avif";
import project3 from "../assets/Project/3.avif";
import project4 from "../assets/Project/4.avif";
import project5 from "../assets/Project/5.avif";
import project6 from "../assets/Project/6.avif";
import project7 from "../assets/Project/7.avif";
import project8 from "../assets/Project/8.avif";

const Portfolio = () => {
  const [visibleProjects, setVisibleProjects] = useState(5);

  const portfolioData = [
    {
      id: 1,
      name: "MLS UAE",
      image: project1,
      description:
        "Partnered with MLS UAE to build a Shopify store with multilingual support, fast 3-hour Dubai delivery, and seamless browsing for premium global meat selections.",
      link: "https://mlsuae.ae/",
      // category: "Meat Snack",
    },
    {
      id: 2,
      name: "Mizodia",
      image: project2,
      description:
        "We partnered with Mizodia to create a sleek Shopify store with multilingual support, Shopify Markets, and custom loyalty features scaling their fine-jewelry brand across Europe.",
      link: "https://mizodia.com/",
      // category: "Cloths Store",
    },
       {
      id: 3,
      name: "Giovici",
      image: project3,
      description:
        "We partnered with Giovici, a premium UK men’s underwear brand, to build their Shopify store enhancing UK shipping, clean product navigation, and seamless checkout for a luxe yet trusted online experience.",
      link: "https://www.giovici.com/",
      // category: "Plant",
    },
       {
      id: 4,
      name: "PhosandGaia",
      image: project4,
      description:
        "We partnered with Phos & Gaia to craft a stunning Shopify store that reflects their artisanal, nature-inspired décor. From sleek design to seamless shopping, we brought their brand vision beautifully online.",
      link: "https://phosandgaia.gr/",
      // category: "Baby Boutique",
    },
       {
      id: 5,
      name: "Lake View Home",
      image: project5,
      description:
        "Partnered with Lakeview Home to create a sleek Shopify store for luxury décor & gifts blending curated collections with a seamless, elegant shopping experience.",
      link: "https://lakeviewhome.com/",
      // category: "Cloths Store",
    },
       {
      id: 6,
      name:  "Microscopecentral",
      image: project6,
      description:
        "We partnered with Microscope Central to build a powerful Shopify store showcasing their premium microscopes & accessories. Our design and optimization deliver a seamless, expert-backed shopping experience.",
      link: "https://microscopecentral.com/",
      // category: "Boutique",
    },
       {
      id: 7,
      name: "PhosandGaia",
      image: project7,
      description:"We partnered with Phos & Gaia to craft a stunning Shopify store that reflects their artisanal, nature-inspired décor. From sleek design to seamless shopping, we brought their brand vision beautifully online." ,
      link: "https://phosandgaia.gr/",
      // category: "Healthcare",
    },
    {
      id: 8,
      name: "Happily Chic",
      image: project8,
      description:
        "Experience the elegant bridal designs with Happily Chic Designs. Using the Shopify platform, we have created a fully customized development website with a Pixel-perfect design. Whereas the Happily Chic Designs is designed by Nathalie Fleitas &amp; developed by CodeLoom Nexus. Whereas the Happily Chic website is designed by Nathalie Fleitas &amp; developed by CodeLoom Nexus.",
      link: "https://happilychicdesigns.patternbyetsy.com/",
      category: "Gift Shop",
    },
  ];

  const handleLoadMore = () => {
    setVisibleProjects(prev => Math.min(prev + 3, portfolioData.length));
  };

  const visiblePortfolioData = portfolioData.slice(0, visibleProjects);

  return (
    <div>
      <div
        class="breadcrumb-container dark-breadcrumb"
        style={{ marginTop: "160px" }}
      >
        <div class="container">
          <ul class="breadcrumb">
            <li>
              <NavLink to="/" class="medium-text">
                Home
              </NavLink>
            </li>
            <li>
              <span class="medium-text">Portfolio</span>
            </li>
          </ul>
        </div>
      </div>

      <div class="container">
        <div class="section-head-part portfolio-page-head">
          <h2 class="section-head-title">Our Projects</h2>
          <p class="section-head-content">
            Our work is a testimonial of our hard-earned reputation in the
            market. Check out our portfolio and then take a final call whether
            you can see us make a difference in your bussiness.
          </p>
        </div>
      </div>

      <div class="container">
        <div class="portfolio-page-list">
          {visiblePortfolioData.map((project, index) => (
            <div key={project.id} class="portfolio-single-main" style={{ display: "flex" }}>
              <div class="portfolio-image-part">
                <a
                  href={project.link}
                  class="link"
                  target="_blank"
                >
                  <img
                    loading="lazy"
                    src={project.image}
                    alt={project.name}
                    width="400px"
                    height="200px"
                    style={{ objectFit: 'cover' }}
                  />
                </a>
              </div>
              <div class="portfolio-detail-part">
                <div class="portfolio-detail-inner">
                  <h3 class="portfolio-name">{project.name}</h3>
                  <p class="content">
                    {project.description}
                  </p>
                  {/* <span class="portfolio-category large-text">{project.category}</span> */}
                </div>
                <a
                  href={project.link}
                  class="portfolio-link-button"
                  aria-label="porfolio link"
                  target="_blank"
                >
                  <svg
                    class="arrow-icon-cross-dark"
                    width="34"
                    height="33"
                    viewBox="0 0 34 33"
                    fill="none"
                  >
                    <path
                      d="M16.4805 5.94727L28.2598 6.76699L27.207 18.5278"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                    <path
                      d="M5.36328 26.291L26.3728 8.37767"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          ))}
          {visibleProjects < portfolioData.length && (
            <div style={{ textAlign: 'center', marginTop: '40px' }}>
              <button 
                onClick={handleLoadMore} 
                style={{
                  padding: '12px 24px',
                  fontSize: '14px',
                  backgroundColor: '#330c79',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s ease'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#e94fca'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#330c79'}
              >
                Load More Projects
              </button>
            </div>
          )}
        </div>
      </div>
      <LetDiscuss />
    </div>
  );
};

export default Portfolio;
