import React from "react";
import { useState } from "react";
const Faq = ({ faqData: providedFaqData }) => {
  const defaultFaqData = [
    {
      question: "What does your Shopify App & Store Development include?",
      answer:
        "End‑to‑end Shopify services: custom theme builds, store setup, private/public apps, checkout and payment integrations, performance tuning, and ongoing maintenance.",
    },
    {
      question: "Do you offer Full‑Stack Web Development for custom products?",
      answer:
        "Yes. We build React/Next.js frontends with Node.js backends, integrate REST/GraphQL APIs, set up CI/CD, testing, analytics, and deploy to modern cloud platforms.",
    },
    {
      question: "What can you build with Framer?",
      answer:
        "High‑conversion marketing sites with delightful interactions, CMS‑ready content, SEO meta/sitemaps, and integrations like forms, CRM, and analytics.",
    },
    {
      question: "How do you approach Webflow development and CMS?",
      answer:
        "We create clean, scalable Webflow projects with reusable components, CMS collections, accessibility, fast page speed, and an editor‑friendly handover.",
    },
    {
      question: "Do you provide WordPress theme and plugin development?",
      answer:
        "Absolutely. We craft custom Gutenberg themes, extend WooCommerce, build secure plugins, and support headless WordPress when needed.",
    },
    {
      question: "What is your UI/UX design process?",
      answer:
        "Discovery workshops, user flows, information architecture, wireframes, interactive prototypes, and design systems—validated with feedback before development.",
    },
    {
      question: "Can you help with SEO and digital marketing after launch?",
      answer:
        "Yes. We provide technical SEO, on‑page optimization, content strategy, and paid performance campaigns to grow qualified traffic and conversions.",
    },
  ];

  const faqData =
    Array.isArray(providedFaqData) && providedFaqData.length
      ? providedFaqData
      : defaultFaqData;

  const [openAccordion, setOpenAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  return (
    <>
      <section id="faq_section" class="faq-section section-spacing">
        <div class="container">
          <div class="section-head-part">
            <h2 class="section-head-title">Frequently Asked Questions</h2>
          </div>

          <div class="accordion accordion-part-inner">
            {faqData.map((faq, index) => (
              <div className="single-accordion" key={index}>
                <div className="accordion-header">
                  <button
                    className={`accordion-title h5 ${openAccordion === index ? "active" : ""}`}
                    type="button"
                    onClick={() => handleAccordionClick(index)}
                  >
                    {faq.question}
                  </button>
                </div>
                <div
                  className={`accordion-collapse ${openAccordion === index ? "open" : ""}`}
                >
                  {openAccordion === index && (
                    <div className="accordion-content">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
