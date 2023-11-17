import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function FeaturePage() {
  useEffect(() => {
    AOS.init();
  }, []);

  // const moveToTop = () => {
  //   window.scrollTo(0, 0);
  // };
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
                className="head text-white text-center animate__animated animate__zoomIn"
                // style={{ fontSize: 60 }}
              >
                Ensuring AI-Powered Paperless Environment
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Services Start --> */}
      <div className="container-fluid services mt-5 py-5 mb-2">
        <div className="container">
          <div
            className="text-center mx-auto mb-2 pb-5"
            style={{ maxWidth: "550px" }}
          >
            <h2>
              {/* Our<span style={{ color: "#FAC400" }}> Features</span>{" "} */}
              Standout Features Of Our<span style={{ color: "#FAC400" }}> Educational Management Software</span>{" "} 
            </h2>
          </div>
          <div className="row g-5 services-inner">
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fa-solid fa-cloud fa-3x mb-4 "></i>
                    <h5 className="mb-3">Cloud-Based System</h5>
                    <p className="mb-4">
                    Experience the flexibility and accessibility of our cloud-based school management system, enabling seamless and management from anywhere.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fa-solid fa-memory fa-3x mb-4 "></i>
                    <h5 className="mb-3">Latest Cutting-Edge Technologies</h5>
                    <p className="mb-4">
                    Stay ahead in education with our school management system, powered by the latest cutting-edge technologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fa-solid fa-computer fa-3x mb-4 "></i>
                    <h5 className="mb-3">Computer-Based Exam Solutions</h5>
                    <p className="mb-4">
                    Experience the future of testing with Computer-Based
                            Exams, enhancing convenience and accuracy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fa-solid fa-arrows-to-eye fa-3x mb-4 "></i>
                    <h5 className="mb-3">AI Powered Evaluation System</h5>
                    <p className="mb-4">
                    Experience efficient and accurate assessments with our Artificial Intelligence Powered Evaluation System, revolutionizing grading and feedback in education.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fa-solid fa-file-shield fa-3x mb-4 "></i>
                    <h5 className="mb-3">Data Security</h5>
                    <p className="mb-4">
                    Safeguard your school's sensitive information with robust data security measures, ensuring the privacy and integrity of your institution's data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fas fa-laptop fa-3x mb-4 "></i>
                    <h5 className="mb-3">Data Backup Facility</h5>
                    <p className="mb-4">
                    Ensure the safety of your school's valuable data with our reliable data backup facility, providing peace of mind for data preservation.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fa-solid fa-camera-retro fa-3x mb-4 "></i>
                    <h5 className="mb-3">Live Reporting</h5>
                    <p className="mb-4">
                    Access real-time insights and make informed decisions with our live reporting feature, keeping your school management dynamic and responsive.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fa-solid fa-mobile-screen-button fa-3x mb-4 "></i>
                    <h5 className="mb-3">Mobile App</h5>
                    <p className="mb-4">
                    Stay connected on the go with our mobile app, offering convenient access to your school management system anytime, anywhere.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fa-brands fa-whatsapp fa-3x mb-4 "></i>
                    <h5 className="mb-3">WhatsApp Message Sending</h5>
                    <p className="mb-4">
                    Effortlessly reach out to students, parents, and staff with WhatsApp message sending, simplifying communication within your school community.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fa-solid fa-clipboard-user fa-3x mb-4 "></i>
                    <h5 className="mb-3">Biometric Attendance</h5>
                    <p className="mb-4">
                    Enhance security and accuracy in attendance tracking with our biometric attendance feature, ensuring a reliable record of student and staff presence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon3">
                    <i className="fa-regular fa-bell fa-3x mb-4 "></i>
                    <h5 className="mb-3">Alerts For Events And Accounts</h5>
                    <p className="mb-4">
                    Stay informed and organized with event and account alerts, ensuring nothing important slips through the cracks in your school management system.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="services-item3 bg-light">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon3">
                  <i className="fas fa-link fa-3x mb-4 "></i>
                          <h5 className="mb-3">Enhance parent-teacher connection</h5>
                          <p className="mb-4">
                          Facilitate effortless communication between parents and instructors, fostering a strong partnership for student success.
                          </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Services End --> */}

      {/* contact start */}
      <div className="home-container">
        <div
          className="background-image3"
          style={{
            backgroundImage: `url(${"img/bg01.jpg"})`,
          }}
        >
          <div className="color-overlay3 d-flex align-items-center justify-content-center">
            <div className="container">
              <div className="row d-flex align-items-center justify-content-between pt-5 pb-5 mt-3">
                <div className="col-md-8">
               {/* <p
                className="text-white"> CapoBrain Ensures AI-Powered Paperless Environment with Eye-catching design & User Friendly display, Don't Hesitate to ask us more about this Most Advanced Education Management Software!</p> */}
                <h4 className="text-white">Learn more about our advanced Education Management Software!
</h4>
                </div>
                <div className="col-md-3 text-center">
                <Link to="/contact">
                  <button className="btn btn1">
                    Get In Touch With Us!
                  </button>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div
        className="background-img3"
        style={{ backgroundImage: `url(${"img/b1.jpg"})` }}
      >
        <div className="color-overlay3">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-between pt-5 pb-5">
              <div className="col-md-8 py-3">
                <h3 className="text-white">
                  Empowering Education, Transforming Tomorrow with CapoBrain.So
                  Don't Waste Time Connect With Us!!
                </h3>
              </div>
              <div className="col-md-3">
                <Link to="/contact">
                  <button className="btn btn1 px-3 py-3 mb-2">
                    Get In Touch With Us!!
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* contact end */}
      {/* <div
        onClick={moveToTop}
        className="btn btn1 btn-square rounded-circle back-to-top"
      >
        <i className="fa fa-arrow-up text-white"></i>
      </div> */}
    </div>
  );
}
