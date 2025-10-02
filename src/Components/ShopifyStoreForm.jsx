import React, { useRef, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

const ShopifyStoreForm = () => {
  const form = useRef();
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const validateForm = (formData) => {
    const errors = {};

    formData.forEach((value, key) => {
      if (!value.trim()) {
        errors[key] = "This field is required";
      }
    });

    if (!formData.get("countrycode").trim()) {
      errors["countrycode"] = "Country code is required";
    }

    return errors;
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const errors = validateForm(formData);

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSubmitting(true);

      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      try {
        const response = await fetch(
          "https://apis.codeloomnexus.com/api/team-up-form", // Make sure the URL is correct
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
          setSuccessMessage(true);
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
    <>
      <section
        id="contact_form"
        className="contact-form-section page-main-banner section-inner-spacing homepage-banner"
      >
        <div className="container">
          <div className="section-head-part">
            <h2 className="section-head-title">Let's Work Together!</h2>
            <p className="section-head-content">
              We’re here to help turn your ideas into a fully realized online
              store. Just fill out the form below to tell us a bit about your
              project, and we’ll follow up with insights and guidance to set you
              on the path to success.
            </p>
          </div>

          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail} id="contact-form">
              <div className="form-inner">
                <div className="row">
                  {/* Name Field */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="hidden" name="c_url" value="index.html" />
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

                  {/* Email Field */}
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

                  {/* Phone Number & Country Code Fields */}
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
                              className={`form-field codeloomnexusplacholder ${formErrors.countrycode && "error-field"}`}
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
                        {formErrors.countrycode && formErrors.countrycode}
                      </div>
                    </div>
                  </div>

                  {/* Business Name Field */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className={`form-field ${formErrors.business_name && "error-field"}`}
                        aria-label="Business Name"
                        type="text"
                        name="business_name"
                        placeholder="Business Name"
                      />
                      <div
                        style={{
                          color: "red",
                          fontSize: "14px",
                          paddingTop: "3px",
                        }}
                      >
                        {formErrors.business_name &&
                          "Business Name is required"}
                      </div>
                    </div>
                  </div>

                  {/* Product Niche Field */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className={`form-field ${formErrors.product_niche && "error-field"}`}
                        aria-label="Preferred Product Niche"
                        type="text"
                        name="product_niche"
                        placeholder="Preferred Product Niche"
                      />
                      <div
                        style={{
                          color: "red",
                          fontSize: "14px",
                          paddingTop: "3px",
                        }}
                      >
                        {formErrors.product_niche &&
                          "Product Niche is required"}
                      </div>
                    </div>
                  </div>

                  {/* Experience Level Field */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <select
                        className={`form-field ${formErrors.experience_level && "error-field"}`}
                        name="experience_level"
                        aria-label="Experience Level"
                      >
                        <option value="">Select Experience Level</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                      </select>
                      <div
                        style={{
                          color: "red",
                          fontSize: "14px",
                          paddingTop: "3px",
                        }}
                      >
                        {formErrors.experience_level &&
                          "Experience Level is required"}
                      </div>
                    </div>
                  </div>

                  {/* Current Online Store Field */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <select
                        className={`form-field ${formErrors.has_online_store && "error-field"}`}
                        name="has_online_store"
                        aria-label="Has Online Store"
                      >
                        <option value="">Do you have an online store?</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                      <div
                        style={{
                          color: "red",
                          fontSize: "14px",
                          paddingTop: "3px",
                        }}
                      >
                        {formErrors.has_online_store &&
                          "Current Online Store status is required"}
                      </div>
                    </div>
                  </div>

                  {/* Start Timeline Field */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        className={`form-field ${formErrors.start_timeline && "error-field"}`}
                        aria-label="Start Timeline"
                        type="text"
                        name="start_timeline"
                        placeholder="Start Timeline"
                      />
                      <div
                        style={{
                          color: "red",
                          fontSize: "14px",
                          paddingTop: "3px",
                        }}
                      >
                        {formErrors.start_timeline &&
                          "Start Timeline is required"}
                      </div>
                    </div>
                  </div>

                  {/* Marketing Services Field */}
                  <div className="col-md-6">
                    <div className="form-group">
                      <select
                        className={`form-field ${formErrors.needs_marketing_services && "error-field"}`}
                        name="needs_marketing_services"
                        aria-label="Needs Marketing Services"
                      >
                        <option value="">
                          Do you need marketing services?
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                      </select>
                      <div
                        style={{
                          color: "red",
                          fontSize: "14px",
                          paddingTop: "3px",
                        }}
                      >
                        {formErrors.needs_marketing_services &&
                          "Marketing Services status is required"}
                      </div>
                    </div>
                  </div>

                  {/* Additional Comments Field */}
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        className={`form-field ${formErrors.additional_comments && "error-field"}`}
                        aria-label="Additional Comments"
                        name="additional_comments"
                        placeholder="Message"
                        id="message_contact"
                      ></textarea>
                      <div
                        style={{
                          color: "red",
                          fontSize: "14px",
                          paddingTop: "3px",
                        }}
                      >
                        {formErrors.additional_comments &&
                          "Additional comments are required"}
                      </div>
                    </div>
                  </div>

                  {/* Success Message or Submit Button */}
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
                              height="16"
                              width="16"
                              color="white"
                              strokeWidth="4"
                              animationDuration="0.75"
                              ariaLabel="rotating-lines-loading"
                            />
                          ) : (
                            "Submit"
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
      </section>
    </>
  );
};

export default ShopifyStoreForm;
