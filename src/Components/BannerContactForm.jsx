import React, { useRef, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// Custom styles for phone input to match your form design
const phoneInputStyles = `
  .react-tel-input {
    width: 100%;
  }
  
  .react-tel-input .form-control {
    width: 100%;
    height: 48px;
    padding: 12px 16px 12px 60px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 16px;
    background: white;
    transition: border-color 0.3s ease;
  }
  
  .react-tel-input .form-control:focus {
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
    outline: none;
  }
  
  .react-tel-input.error-field .form-control {
    border-color: #dc3545;
  }
  
  .react-tel-input .flag-dropdown {
    border: 1px solid #ddd;
    border-right: none;
    border-radius: 4px 0 0 4px;
    background: #f8f9fa;
  }
  
  .react-tel-input .flag-dropdown.open {
    background: #e9ecef;
  }
  
  .react-tel-input .selected-flag {
    padding: 0 8px;
    border-radius: 4px 0 0 4px;
  }
  
  .react-tel-input .selected-flag:hover {
    background-color: #e9ecef;
  }
  
  .react-tel-input .flag-dropdown .country-list {
    max-height: 200px;
    overflow-y: auto;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  .react-tel-input .country-list .search {
    padding: 8px 12px;
    border-bottom: 1px solid #eee;
    background: #f8f9fa;
  }
  
  .react-tel-input .country-list .search input {
    width: 100%;
    padding: 6px 8px;
    border: 1px solid #ddd;
    border-radius: 3px;
    font-size: 14px;
  }
  
  .react-tel-input .country-list .country {
    padding: 8px 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: background-color 0.2s;
  }
  
  .react-tel-input .country-list .country:hover {
    background-color: #f8f9fa;
  }
  
  .react-tel-input .country-list .country.highlight {
    background-color: #e3f2fd;
  }
`;

const BannerContactForm = () => {
  const form = useRef();
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  // Validate the form
  const validateForm = (formData) => {
    const errors = {};
    formData.forEach((value, key) => {
      if (!value.trim()) {
        errors[key] =
          `${key.charAt(0).toUpperCase() + key.slice(1)} is required`;
      }
    });

    // Validate phone number
    if (!phoneNumber) {
      errors["phone"] = "Phone number is required";
    }

    return errors;
  };

  // Send email API call
  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const errors = validateForm(formData);

    // Set form errors if validation fails
    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setSubmitting(true); // Show loader

      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: phoneNumber, // Use the formatted phone number with country code
        message: formData.get("message"),
        c_url: formData.get("c_url"),
      };

      try {
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
      <style>{phoneInputStyles}</style>
      <div className="page-main-banner-colm col-lg-5 col-md-5">
        <div className="page-main-banner-contact-form">
          <h2 className="form-title h5">Get A Free Quote</h2>

          <form ref={form} onSubmit={sendEmail} id="contactpopupFrom" noValidate>
            <input
              type="hidden"
              name="c_url"
              value="CodeLoom Nexus.com/ecommerce-solution.php"
            />

            <div className={`form-group ${formErrors.name && "error"}`}>
              <input
                className={`form-field ${formErrors.name && "error-field"}`}
                aria-label="Name"
                type="text"
                id="name_popup"
                name="name"
                placeholder="Name"
              />
              <div style={{ color: "red", fontSize: "14px", paddingTop: "3px" }}>
                {formErrors.name}
              </div>
            </div>

            <div className={`form-group ${formErrors.email && "error"}`}>
              <input
                className={`form-field ${formErrors.email && "error-field"}`}
                aria-label="Email"
                type="email"
                id="email_popup"
                name="email"
                placeholder="Email Address"
                required
              />
              <div style={{ color: "red", fontSize: "14px", paddingTop: "3px" }}>
                {formErrors.email}
              </div>
            </div>

            <div className={`form-group ${formErrors.phone && "error"}`}>
              <PhoneInput
                country={'pk'}
                value={phoneNumber}
                onChange={(phone) => setPhoneNumber(phone)}
                className={`${formErrors.phone && "error-field"}`}
                placeholder="Phone Number"
                inputProps={{
                  id: "phone_popup",
                  name: "phone",
                  required: true,
                  'aria-label': "Phone Number"
                }}
                enableSearch={true}
                searchPlaceholder="Search country..."
                searchNotFound="No country found"
                preferredCountries={['pk', 'us', 'ca', 'gb', 'au', 'de', 'fr', 'in']}
                onlyCountries={['pk', 'us', 'ca', 'gb', 'au', 'de', 'fr', 'in', 'bd', 'lk', 'np', 'my', 'sg', 'th', 'vn', 'ph', 'id', 'jp', 'kr', 'cn']}
                countryCodeEditable={false}
                autoFormat={true}
                disableSearchIcon={true}
                searchStyle={{
                  width: '100%',
                  padding: '8px 12px',
                  border: '1px solid #ddd',
                  borderRadius: '4px',
                  fontSize: '14px'
                }}
              />
              <div style={{ color: "red", fontSize: "14px", paddingTop: "3px" }}>
                {formErrors.phone}
              </div>
            </div>

            <div className={`form-group ${formErrors.message && "error"}`}>
              <textarea
                className={`form-field ${formErrors.message && "error-field"}`}
                aria-label="message"
                id="message_popup"
                name="message"
                placeholder="Write Message"
              ></textarea>
              <div style={{ color: "red", fontSize: "14px", paddingTop: "3px" }}>
                {formErrors.message}
              </div>
            </div>

            {successMessage ? (
              <div className="success-msg" style={{ textAlign: "center" }}>
                Thank you. We will get back to you soon.
              </div>
            ) : (
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
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default BannerContactForm;
