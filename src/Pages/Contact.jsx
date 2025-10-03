import React, { useRef, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { NavLink } from "react-router-dom";

// Import images
import contactPagePhonel from "../assets/images/contact-page-phonel.png";
import contactPageEmail from "../assets/images/contact-page-email.png";
import contactOfficeHours from "../assets/images/contact-office-hours.png";
import contactPageHomeAddress from "../assets/images/contact-page-home-address.png";
import pakistan from "../assets/images/pakistan.png";
import unitedKingdom from "../assets/images/united-kingdom.png";

const Contact = () => {
  const form = useRef();
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Function to send form data to the API
  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const errors = {};

    // Validate form fields
    formData.forEach((value, key) => {
      if (!value.trim()) {
        errors[key] = "This field is required";
      }
    });

    // Check if country code is empty and add a custom error message
    if (!formData.get("countrycode").trim()) {
      errors["countrycode"] = "Country code is required";
    }

    setFormErrors(errors);

    // If no errors, proceed to send data
    if (Object.keys(errors).length === 0) {
      setSubmitting(true); // Show loader

      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      try {
        // Make API call to send the email
        const response = await fetch(
          "https://apis.codeloomnexus.com/api/send-email",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          },
        );

        if (response.ok) {
          const result = await response.json();
          console.log("Email sent successfully:", result);
          setSuccessMessage(true); // Show success message
        } else {
          const errorResponse = await response.json();
          console.error("Error sending email:", errorResponse.message);
          alert("Failed to send email. Please try again later.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An unexpected error occurred. Please try again later.");
      } finally {
        setSubmitting(false); // Hide loader
      }
    }
  };

  return (
    <div>
      <div className="contact-page-main">
        <div className="contact-page-main-banner homepage-banner section-spacing">
          <div className="breadcrumb-container">
            <div className="container">
              <ul className="breadcrumb">
                <li>
                  <NavLink to="/" className="medium-text">
                    Home
                  </NavLink>
                </li>
                <li>
                  <span className="medium-text">Contact Us</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="row align-items-center">
              <div className="page-main-banner-colm col-md-12">
                <div className="page-main-banner-content">
                  <div className="page-main-banner-content-list">
                    <h1 className="title">Contact Us</h1>
                    <div className="content">
                      <p className="text">
                        Reach us to get the benefits of our top-notch Shopify
                        development solutions. Let us know your detailed
                        requirements to bring revolutionary Shopify development
                        solutions to your doorstep.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="section-inner-spacing">
          <div className="container">
            <div className="row row-mb-minus">
              <div className="col-lg-5 col-md-12 col-spacing-bottom contact-info-main">
                <div className="contact-information">
                  <h2 className="title h4">Contact Info</h2>
                  <div className="contact-inner-info">
                    <h3 className="h6 title">
                      <img
                        loading="lazy"
                        className="icon"
                        src={contactPagePhonel}
                        alt="contact"
                        width="50px"
                        height="50px"
                      />
                      Call On
                    </h3>
                    <div className="contact-info-link d-flex align-items-center">
                      <a href="tel:+92 303 6682519">+92 303 6682519</a>
                    </div>
                  </div>

                  <div className="contact-inner-info">
                    <h3 className="h6 title">
                      <img
                        loading="lazy"
                        className="icon"
                        src={contactPageEmail}
                        alt="email"
                        width="50px"
                        height="50px"
                      />
                      Email On
                    </h3>
                    <div className="contact-info-link">
                      <a href="mailto:contact@codeloom-nexus.com">
                        contact@codeloom-nexus.com
                      </a>
                    </div>
                  </div>

                  <div className="contact-inner-info">
                    <h3 className="h6 title">
                      <img
                        loading="lazy"
                        className="icon"
                        src={contactOfficeHours}
                        alt="hours"
                        width="50px"
                        height="50px"
                      />
                      Open Hours
                    </h3>
                    <div className="contact-info-link">
                      <p>Mon to Fri – 9:30am to 6:45pm</p>
                    </div>
                  </div>

                  <div className="contact-inner-info">
                    <h3 className="h6 title">
                      <img
                        loading="lazy"
                        className="icon"
                        src={contactPageHomeAddress}
                        alt="address"
                        width="50px"
                        height="50px"
                      />
                      Address
                    </h3>
                    <div className="contact-info-link">
                      <div className="country-address">
                        <div className="h18 country-name">
                          <img
                            loading="lazy"
                            className="flag"
                            src={pakistan}
                            width="16px"
                            height="16px"
                            alt="indian flag"
                          />
                          Pakistan
                        </div>
                        <p className="address">
                          Muslim Town, Lahore
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-7 col-md-12 col-spacing-bottom">
                <div className="contact-page-form-back">
                  <div className="contact-form-heading">
                    <h4 className="title">Your Information</h4>
                  </div>
                  <div className="contact-page-form">
                    <form ref={form} onSubmit={sendEmail} id="contact-form">
                      <div className="form-inner">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                type="hidden"
                                name="c_url"
                                value="index.html"
                              />
                              <input
                                className={`form-field ${formErrors.name && "error-field"}`}
                                aria-label="Name"
                                type="text"
                                id="name_popup"
                                name="name"
                                placeholder="Name"
                              />
                              <div
                                style={{
                                  color: "red",
                                  fontSize: "14px",
                                  paddingTop: "3px",
                                }}
                              >
                                {formErrors.name && "Name is required"}
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <input
                                className={`form-field ${formErrors.email && "error-field"}`}
                                aria-label="Email"
                                type="email"
                                id="email_popup"
                                name="email"
                                placeholder="Email Address"
                              />
                              <div
                                style={{
                                  color: "red",
                                  fontSize: "14px",
                                  paddingTop: "3px",
                                }}
                              >
                                {formErrors.email && "Email is required"}
                              </div>
                            </div>
                          </div>

                          <div className="col-md-6">
                            <div className="form-group">
                              <div className="select-location">
                                <div className="dropdown example">
                                  <div className="ui fluid search selection dropdown country_contact">
                                    <span>+</span>
                                    <input
                                      type="number"
                                      placeholder="92"
                                      minLength="1"
                                      maxLength="4"
                                      id="country_popup"
                                      name="countrycode"
                                      className={`form-field CodeLoom Nexus ${formErrors.countrycode && "error-field"}`}
                                    />
                                  </div>
                                </div>
                                <input
                                  type="tel"
                                  className={`form-field phone-number-field ${formErrors.phone && "error-field"}`}
                                  aria-label="Phone Number"
                                  id="phone_popup"
                                  name="phone"
                                  placeholder="Phone Number"
                                  autoComplete="off"
                                />
                              </div>
                              <div
                                style={{
                                  color: "red",
                                  fontSize: "14px",
                                  paddingTop: "3px",
                                }}
                              >
                                {formErrors.phone && "Phone number is required"}
                              </div>
                              <div
                                style={{
                                  color: "red",
                                  fontSize: "14px",
                                  paddingTop: "3px",
                                }}
                              >
                                {formErrors.countrycode &&
                                  formErrors.countrycode}
                              </div>
                            </div>
                          </div>

                          <div className="col-md-12">
                            <div className="form-group">
                              <textarea
                                className={`form-field ${formErrors.message && "error-field"}`}
                                aria-label="message"
                                name="message"
                                placeholder="Write Message"
                                id="message_contact"
                              ></textarea>
                              <div
                                style={{
                                  color: "red",
                                  fontSize: "14px",
                                  paddingTop: "3px",
                                }}
                              >
                                {formErrors.message && "Message is required"}
                              </div>
                            </div>
                          </div>

                          {successMessage ? (
                            <div
                              className="success-msg"
                              style={{ textAlign: "center" }}
                            >
                              Thank you. We will get back to you soon.
                            </div>
                          ) : (
                            <div className="col-md-12 form-button">
                              <div className="form-group">
                                <button
                                  className="button submit-button"
                                  type="submit"
                                  aria-label="button"
                                  id="get_free_quote_popup"
                                >
                                  {submitting ? (
                                    <RotatingLines
                                      visible={true}
                                      height="30"
                                      width="30"
                                      strokeColor="#fff"
                                      strokeWidth="5"
                                      animationDuration="0.75"
                                    />
                                  ) : (
                                    "Send Message"
                                  )}
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
