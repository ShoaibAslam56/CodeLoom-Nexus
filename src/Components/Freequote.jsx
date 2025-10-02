import React, { useEffect, useRef, useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import axios from "axios";
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

const Freequote = ({ closeModal }) => {
  const modalRef = useRef();
  const form = useRef();
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const errors = {};

    // Validation for required fields
    formData.forEach((value, key) => {
      if (!value.trim()) {
        errors[key] = "This field is required";
      }
    });

    // Validate phone number
    if (!phoneNumber) {
      errors["phone"] = "Phone number is required";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Show loader
      setSubmitting(true);

      // Create an object to send as payload
      const data = {
        name: formData.get("name"),
        email: formData.get("email"),
        phone: phoneNumber, // Use the formatted phone number with country code
        message: formData.get("message"),
      };

      try {
        // Send the data to your Laravel API
        const response = await axios.post(
          "https://apis.codeloomnexus.com/api/send-email",
          data,
        );
        console.log(response.data);
        setSuccessMessage(true);
      } catch (error) {
        console.error(error);
      } finally {
        // Hide loader whether success or error
        setSubmitting(false);
      }
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [closeModal]);

  return (
    <>
      <style>{phoneInputStyles}</style>
      <div className="modals contact-modal contact-form-modal active-model">
        <div className="modal-overlap"></div>
        <div className="modal-dialog" ref={modalRef}>
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="form-title">Get A Free Quote</h4>
              <div
                className="contact-model-close model-close-icon"
                onClick={closeModal}
              >
                <svg
                  className="close-icon"
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33 33L18 18M18 18L3 3M18 18L33 3M18 18L3 33"
                    stroke="black"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </div>
            </div>
            <div className="modal-body">
              <form
                ref={form}
                onSubmit={sendEmail}
                id="contactpopupFrom"
                noValidate
              >
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
                  <div
                    style={{
                      color: "red",
                      fontSize: "14px",
                      paddingTop: "3px",
                    }}
                  >
                    {formErrors.phone && "Phone number is required"}
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
                          wrapperStyle={{}}
                          wrapperClass=""
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
        </div>
      </div>
    </>
  );
};

export default Freequote;
