import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ServicesPage() {
  useEffect(() => {
    AOS.init();
  }, []);

  const moveToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div>
      <div className="home-container">
        <div
          className="background-image1"
          style={{
            backgroundImage: `url(${"img/about5.jpg"})`,
          }}
        >
          <div className="color-overlay1">
            <div>
              <h1
                className="head text-white text-center animate__animated animate__zoomIn"
                style={{ marginTop: 140, fontSize: 70 }}
              >
                Our Services
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Services Start --> */}
      <div className="container-fluid services py-5 mb-5">
        <div className="container">
          <div
            className="text-center mx-auto pb-5"
            style={{ maxWidth: "600px" }}
          >
            <h1>Our Features</h1>
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
                    <h4 className="mb-3">Cloud-Based System</h4>
                    <p className="mb-4">
                      Elevate your operations with Cloud-Based Systems,
                      harnessing the power of scalability and flexibility.
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
                    <h4 className="mb-3">latest cutting-edge technologies</h4>
                    <p className="mb-4">
                      Stay at the forefront of progress with the latest
                      cutting-edge advancements in various industries.
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
                    <h4 className="mb-3">Computer-Based Exam Solutions</h4>
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
                    <h4 className="mb-3">Student and staff assessment</h4>
                    <p className="mb-4">
                      Unlock the potential of your workforce with feature-rich
                      Staff Assessment solutions.
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
                    <h4 className="mb-3">Data Security</h4>
                    <p className="mb-4">
                      Elevate your peace of mind with robust Data Security
                      features, protecting your valuable assets.
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
                    <h4 className="mb-3">Data Backup Facility</h4>
                    <p className="mb-4">
                      Secure your data's future with our advanced Data Backup
                      Facility, ensuring continuity and peace of mind.
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
                    <h4 className="mb-3">Live Reporting</h4>
                    <p className="mb-4">
                      Stay ahead of the curve with Live Reporting, offering
                      up-to-the-minute updates on critical data.
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
                    <h4 className="mb-3">Mobile App</h4>
                    <p className="mb-4">
                      Experience convenience at your fingertips with our Mobile
                      App, delivering seamless functionality anytime, anywhere.
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
                    <h4 className="mb-3">WhatsApp Message Sending</h4>
                    <p className="mb-4">
                      Effortlessly connect with your audience using WhatsApp
                      Message Sending, for swift and effective messaging.
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
                    <h4 className="mb-3">Biometric Attendance</h4>
                    <p className="mb-4">
                      Experience next-level attendance tracking with Biometric
                      Attendance, ensuring accuracy and security.
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
                    <h4 className="mb-3">Alerts for events and accounts</h4>
                    <p className="mb-4">
                      Never miss a crucial update with our Alerts for Events and
                      Accounts feature, ensuring timely awareness and action.
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
                    <i className="fa-solid fa-dna fa-3x mb-4 "></i>
                    <h4 className="mb-3">Student and Staff evaluation</h4>
                    <p className="mb-4">
                      Promote academic excellence and growth through
                      comprehensive Student and Staff Evaluation tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Services End --> */}

      <div
        onClick={moveToTop}
        className="btn btn-secondary btn-square rounded-circle back-to-top"
      >
        <i className="fa fa-arrow-up text-white"></i>
      </div>
    </div>
  );
}
