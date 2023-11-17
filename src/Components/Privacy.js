import React from "react";

export default function Privacy() {
  return (
    <div>
      <div className="home-container">
        <div
          className="background-image1"
          style={{
            backgroundImage: `url(${"img/bg01.jpg"})`,
          }}
        >
          <div className="color-overlay1 d-flex align-items-center justify-content-center">
            <div>
              <h1
                className="head text-white animate__animated animate__zoomIn"
              >
                Privacy
              </h1>
            </div>
          </div>
        </div>
      </div>
    <div className="container">
      <h1 className="text-center mt-5">Privacy Policy</h1>
      <p style={{ textAlign: "justify" }}>
        Welcome to Capobrain's Privacy Policy. We understand the importance of
        your privacy and are committed to safeguarding your personal
        information. This Privacy Policy explains how we collect, use, and
        protect the information you provide to us through our website and
        services.
      </p>
      <h3>1. Information We Collect</h3>
      <p style={{ textAlign: "justify" }}>
        Personal Information: When you sign up for Capobrain or use our
        services, we may collect personal information such as your name, email
        address, and contact information. Usage Data: We may collect information
        about how you use Capobrain, including your interactions with our
        website and the features you access.
      </p>

      <h3>2. How We Use Your Information</h3>
      <p style={{ textAlign: "justify" }}>
        We use the information we collect for various purposes, including:
        Providing Services: To deliver and improve our educational management
        software and services. Communication: To communicate with you about
        updates, promotions, and important information related to Capobrain.
        Analytics: To analyze usage patterns, improve our services, and enhance
        user experience.
      </p>

      <h3>3. Data Security</h3>
      <p style={{ textAlign: "justify" }}>
        We take data security seriously and have implemented measures to protect
        your information. Our website and services utilize industry-standard
        security protocols to safeguard your data.
      </p>

      <h3> 4. Sharing Your Information</h3>
      <p style={{ textAlign: "justify" }}>
        We do not sell or share your personal information with third parties,
        except when required by law or to provide our services.
      </p>
      <h3>5. Your Choices</h3>
      <p style={{ textAlign: "justify" }}>
        You can manage your communication preferences and update your personal
        information through your Capobrain account settings. You have the right
        to access, correct, or delete your personal data.
      </p>
      <h3>6. Cookies and Tracking Technologies</h3>
      <p style={{ textAlign: "justify" }}>
        Our website may use cookies and tracking technologies to enhance your
        experience. You can control cookie preferences through your browser
        settings.
      </p>
      <h3>7. Third-Party Links</h3>
      <p style={{ textAlign: "justify" }}>
        Our website may contain links to third-party websites. We are not
        responsible for their privacy practices, and we encourage you to review
        their privacy policies.
      </p>
      <h3>8. Changes to this Privacy Policy</h3>
      <p style={{ textAlign: "justify" }}>
        We may update our Privacy Policy to reflect changes in our practices.
        Any updates will be posted on this page, and we will notify you if
        required by law.
      </p>
      <h3>9. Contact Us</h3>
      <p style={{ textAlign: "justify" }}>
        If you have any questions or concerns regarding this Privacy Policy or
        your data, please contact us at [ <span style={{color:"rgb(19, 61, 120)"}}>info@capobrain.com</span> ]. By using Capobrain's
        services and website, you agree to this Privacy Policy. We recommend
        reviewing this policy regularly to stay informed about how we protect
        your information.
      </p>
    </div>
    </div>
  );
}
