import React from "react";
import { Link } from "react-router-dom";

export default function Service() {
  return (
    <div>
      {/* <!-- Services Start --> */}
      <h1 className="text-center mb-5 responsive-h2">
        Educational <span style={{ color: "#FAC400" }}> Management Software</span>{" "}
        Features
      </h1>
      <div
        className="background-img3"
        style={{ backgroundImage: `url(${"img/b1.jpg"})` }}
      >
        <div className="color-overlay3">
          <div className="container-fluid services pb-4 pt-5">
            <div>
              <div className="container">
                <div
                  className="text-center"
                  style={{ maxWidth: "600px" }}
                ></div>
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
                          Experience the flexibility and accessibility of our cloud-based school management system, enabling seamless management from anywhere.
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
                          <h5 className="mb-3">
                          Latest Cutting-Edge Technologies
                          </h5>
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
                          <h5 className="mb-3">
                          Computer-Based Exam Solutions
                          </h5>
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
                          <i className="fa-regular fa-bell fa-3x mb-4 "></i>
                          <h5 className="mb-3">
                          Alerts For Events And Accounts
                          </h5>
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
            <div className="d-flex justify-content-center">
           <Link to="/features"> <button className="btn btn1 mt-4">Explore More</button></Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Services End --> */}
    </div>
  );
}
