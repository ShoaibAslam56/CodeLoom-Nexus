import React from "react";
import LetDiscuss from "../Components/LetDiscuss";
import { NavLink } from "react-router-dom";

// Import images
import personalInfoPrivacy from "../assets/images/personal-info-privacy.png";

const PrivacyPolicy = () => {
  return (
    <div>
      <section
        id="page_banner"
        class="page-main-banner homepage-banner section-spacing privacy-policy-main"
      >
        <div class="breadcrumb-container">
          <div class="container">
            <ul class="breadcrumb">
              <li>
                <NavLink to="/" class="medium-text">
                  Home
                </NavLink>
              </li>
              <li>
                <span class="medium-text">Privacy Policy</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div class="container">
        <div class="section-head-part">
          <h2 class="section-head-title">CodeLoom Nexus Privacy Policy</h2>
          <p class="section-head-content">
            This Privacy Policy describes how your personal information is
            collected, used, and shared when you visit or make a purchase from
          </p>
        </div>
      </div>

      <section class="section-spacing privacy-policy-image-with-text">
        <div class="container">
          <div class="section-head-part">
            <h2 class="section-head-title">Personal Information We Collect</h2>
          </div>

          <div class="row row-mb-minus align-items-center">
            <div class="col-lg-6 col-spacing-bottom">
              <div class="image-with-text-content-part">
                <p>
                  When you visit the Site, we automatically collect certain
                  information about your device, including information about
                  your web browser, IP address, time zone, and some of the
                  cookies that are installed on your device.
                </p>
                <p>
                  Additionally, as you browse the Site, we collect information
                  about the individual web pages or products that you view, what
                  websites or search terms referred you to the Site, and
                  information about how you interact with the Site. We refer to
                  this automatically-collected information as “Device
                  Information.”
                </p>
              </div>
            </div>
            <div class="col-lg-6 col-spacing-bottom">
              <div class="image-with-text-image-part">
                <img
                  loading="lazy"
                  src={personalInfoPrivacy}
                  width="460px"
                  height="428px"
                  alt="personal-info-privacy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="content-part section-inner-spacing">
        <div class="container">
          <div class="section-spacing mt-0">
            <h3>
              We collect Device Information using the following technologies
            </h3>
            <ul class="correct-icon-with-list-small">
              <li>
                “Cookies” are data files that are placed on your device or
                computer and often include an anonymous unique identifier. For
                more information about cookies, and how to disable cookies,
                visit{" "}
                <a
                  class="keyword_text"
                  target="_blank"
                  href="http://www.allaboutcookies.org"
                >
                  http://www.allaboutcookies.org.
                </a>
              </li>
              <li>
                “Log files” track actions occurring on the Site, and collect
                data including your IP address, browser type, Internet service
                provider, referring/exit pages, and date/time stamps.
              </li>
              <li>
                “Web beacons,” “tags,” and “pixels” are electronic files used to
                record information about how you browse the Site.
              </li>
            </ul>
            <p>
              Additionally when you make a purchase or attempt to make a
              purchase through the Site, we collect certain information from
              you, including your name, billing address, shipping address,
              payment information (including credit card numbers, email address,
              and phone number. We refer to this information as “Order
              Information.”
            </p>
            <p>
              When we talk about “Personal Information” in this Privacy Policy,
              we are talking both about Device Information and Order
              Information.
            </p>
          </div>
          <div class="section-spacing">
            <h3>How Do We Use Your Personal Information?</h3>
            <p>
              We use the Order Information that we collect generally to fulfill
              any orders placed through the Site (including processing your
              payment information, arranging for shipping, and providing you
              with invoices and/or order confirmations). Additionally, we use
              this Order Information to:
            </p>
            <ul class="correct-icon-with-list-small">
              <li>Communicate with you;</li>
              <li>Screen our orders for potential risk or fraud; and</li>
              <li>
                When in line with the preferences you have shared with us,
                provide you with information or advertising relating to our
                products or services.
              </li>
            </ul>
            <p>
              We use the Device Information that we collect to help us screen
              for potential risk and fraud (in particular, your IP address), and
              more generally to improve and optimize our Site (for example, by
              generating analytics about how our customers browse and interact
              with the Site, and to assess the success of our marketing and
              advertising campaigns).
            </p>
          </div>
          <div class="section-spacing">
            <h3>Sharing Your Personal Information</h3>
            <p>
              We share your Personal Information with third parties to help us
              use your Personal Information, as described above. For example, we
              use Shopify to power our online store--you can read more about how
              Shopify uses your Personal Information here:{" "}
              <a
                class="keyword_text"
                target="_blank"
                href="https://www.shopify.com/legal/privacy"
              >
                https://www.shopify.com/legal/privacy
              </a>
              . We also use Google Analytics to help us understand how our
              customers use the Site--you can read more about how Google uses
              your Personal Information here:{" "}
              <a
                class="keyword_text"
                target="_blank"
                href="https://www.google.com/intl/en/policies/privacy/"
              >
                https://www.google.com/intl/en/policies/privacy/
              </a>
              . You can also opt-out of Google Analytics here:{" "}
              <a
                target="_blank"
                class="keyword_text"
                href="https://tools.google.com/dlpage/gaoptout"
              >
                https://tools.google.com/dlpage/gaoptout.
              </a>
            </p>
            <p>
              Finally, we may also share your Personal Information to comply
              with applicable laws and regulations, to respond to a subpoena,
              search warrant or other lawful request for information we receive,
              or to otherwise protect our rights.
            </p>
          </div>
          <div class="section-spacing">
            <h3>Behavioural Advertising</h3>
            <p>
              As described above, we use your Personal Information to provide
              you with targeted advertisements or marketing communications we
              believe may be of interest to you. For more information about how
              targeted advertising works, you can visit the Network Advertising
              Initiative’s (“NAI”) educational page at{" "}
              <a
                class="keyword_text"
                target="_blank"
                href="http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work."
              >
                http://www.networkadvertising.org/understanding-online-advertising/how-does-it-work.
              </a>
            </p>
          </div>
          <div class="section-spacing">
            <h3>You can opt out of targeted advertising by:</h3>
            <ul class="correct-icon-with-list-small">
              <li>
                FACEBOOK -{" "}
                <a
                  class="keyword_text"
                  target="_blank"
                  href="https://www.facebook.com/settings/?tab=ads"
                >
                  https://www.facebook.com/settings/?tab=ads
                </a>
              </li>
              <li>
                GOOGLE -{" "}
                <a
                  class="keyword_text"
                  target="_blank"
                  href="https://www.google.com/settings/ads/anonymous"
                >
                  https://www.google.com/settings/ads/anonymous
                </a>
              </li>
              <li>
                BING -{" "}
                <a
                  class="keyword_text"
                  target="_blank"
                  href="https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads"
                >
                  https://advertise.bingads.microsoft.com/en-us/resources/policies/personalized-ads
                </a>
              </li>
            </ul>
            <p>
              Additionally, you can opt out of some of these services by
              visiting the Digital Advertising Alliance’s opt-out portal at:{" "}
              <a
                class="keyword_text"
                target="_blank"
                href="http://optout.aboutads.info"
              >
                {" "}
                http://optout.aboutads.info/.
              </a>
            </p>
          </div>
          <div class="section-spacing">
            <h3>Do Not Track</h3>
            <p>
              Please note that we do not alter our Site’s data collection and
              use practices when we see a Do Not Track signal from your browser.
            </p>
          </div>
          <div class="section-spacing">
            <h3>Your Rights:</h3>
            <p>
              If you are an Asian or U.S resident, you have the right to access
              personal information we hold about you and to ask that your
              personal information be corrected, updated, or deleted. If you
              would like to exercise this right, please contact us through the
              contact information below.
            </p>
            <p>
              Additionally, if you are an Asian or U.S resident, we note that we
              are processing your information in order to fulfill contracts we
              might have with you (for example if you make an order through the
              Site), or otherwise to pursue our legitimate business interests
              listed above. Additionally, please note that your information will
              be transferred outside of Asia, including to Canada and the United
              States.
            </p>
          </div>
          <div class="section-spacing">
            <h3>Data Retention</h3>
            <p>
              When you place an order through the Site, we will maintain your
              Order Information for our records unless and until you ask us to
              delete this information.
            </p>
          </div>
          <div class="section-spacing">
            <h3>Minors</h3>
            <p>
              The Site is not intended for individuals under the age of fifteen.
            </p>
          </div>
          <div class="section-spacing">
            <h3>Changes</h3>
            <p>
              We may update this privacy policy from time to time in order to
              reflect, for example, changes to our practices or for other
              operational, legal or regulatory reasons.
            </p>
          </div>
        </div>
      </section>

      <section class="privacy-policy-bottom-intro">
        <div class="container">
          <div class="row">
            <p>
              For more information about our privacy practices, if you have
              questions, or if you would like to make a complaint, please
              contact us by e-mail at{" "}
              <a href="mailto:contact@codeloomnexus.com" title="Contact Us">
                contact@codeloomnexus.com
              </a>{" "}
              or by mail using the details provided below:
            </p>
            <p>
              701, 7th Floor, PV Enclave, opp. Courtyard by Marriott, off
              Sindhubhavan Road, Bodakdev, Ahmedabad, Gujarat 380054
            </p>
          </div>
        </div>
      </section>

      <LetDiscuss />
    </div>
  );
};

export default PrivacyPolicy;
