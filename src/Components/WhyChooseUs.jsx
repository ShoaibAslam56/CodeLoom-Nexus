import React from "react";

// Import images
import clientSatisfactionIcon from "../assets/images/je-client-satisfaction-icon.png";
import diverseTechnicalSkillsIcon from "../assets/images/je-diverse-technical-skills-icon.png";
import sustainableDevelopmentPract from "../assets/images/je-sustainable-development-pract.png";
import onDeliveryTimeIcon from "../assets/images/je-on-delivery-time-icon.png";
import portfolioDiversityIcon from "../assets/images/je-portfolio-diversity-icon.png";
import crossPlatformCompatibility from "../assets/images/je-cross-platform-compatibility.png";
import scalabilityIcon from "../assets/images/je-scalability-icon.png";
import securityComplianceIcon from "../assets/images/je-security-compliance-icon.png";
import seoPerformanceIcon from "../assets/images/je-seo-performance-icon.png";
import positiveAppStoreRatingsIc from "../assets/images/je-positive-app-store-ratings-ic.png";
import qualityAssuranceIcon from "../assets/images/je-quality-assurance-icon.png";
import postLaunchSupportIcon from "../assets/images/je-post-launch-support-icon.png";

const ICONS = [
  {
          src: clientSatisfactionIcon,
    alt: "Client Satisfaction",
    text: "Client Satisfaction",
  },
  {
    src: diverseTechnicalSkillsIcon,
    alt: "Diverse Technical Skills",
    text: "Diverse Technical Skills",
  },
  {
    src: sustainableDevelopmentPract,
    alt: "Sustainable Development Practices",
    text: "Sustainable Development Practices",
  },
  {
    src: onDeliveryTimeIcon,
    alt: "On-Time Delivery",
    text: "On-Time Delivery",
  },
  {
    src: portfolioDiversityIcon,
    alt: "Portfolio Diversity",
    text: "Portfolio Diversity",
  },
  {
    src: crossPlatformCompatibility,
    alt: "Cross Platform Compatibility",
    text: "Cross Platform Compatibility",
  },
  {
    src: scalabilityIcon,
    alt: "Scalability",
    text: "Scalability",
  },
  {
    src: securityComplianceIcon,
    alt: "Security Compliance",
    text: "Security Compliance",
  },
  {
    src: seoPerformanceIcon,
    alt: "SEO Performance",
    text: "SEO Performance",
  },
  {
    src: positiveAppStoreRatingsIc,
    alt: "Positive App Store Ratings",
    text: "Positive App Store Ratings",
  },
  {
    src: qualityAssuranceIcon,
    alt: "Quality Assurance",
    text: "Quality Assurance",
  },
  {
    src: postLaunchSupportIcon,
    alt: "Post Launch Support",
    text: "Post Launch Support",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="icon_with_point" className="icon-with-points section-spacing">
      <div className="container">
        <div className="section-head-part">
          <h2 className="section-head-title">Why Choose Us?</h2>
          <p className="section-head-content">
            We craft digital solutions covering every aspect of the development
            lifecycle that enhance user engagement and drive growth
          </p>
        </div>

        <div className="row row-mb-minus">
          {ICONS.map((icon, index) => (
            <div
              key={index}
              className="col-xl-3 col-md-4 col-sm-6 col-spacing-bottom"
            >
              <div className="icon-with-point-single">
                <div className="icon-part">
                  <div className="icon-part-inner">
                    <img src={icon.src} alt={icon.alt} width="40" height="40" />
                  </div>
                </div>
                <div className="point-content">
                  <p className="point">{icon.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
