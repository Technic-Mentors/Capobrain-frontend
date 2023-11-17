import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

export default function Pricing() {

  useEffect(() => {
    AOS.init();
  }, []);

 
  
  return (
    <div className="mt-5 mb-4">
      {/* <h5 className="text-center mb-3" style={{color:"black"}}>Pricing Plans</h5>
      <div className="wow fadeInUp" data-wow-delay=".3s">
      <h1 className="text-center">

      Get Know The <span style={{ color: "#FAC400" }}>Basics & Simple</span> Pricing Plans

      </h1>
      </div> */}
      {/* <!-- pricing Start --> */}
      {/* <div className="container-fluid"> */}
        {/* <div className="color-overlay2">
          <div className="container py-5">
            <div className="row g-5">
              <div
                className="col-lg-4 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="rounded bg-light pricing-item">
                  <div
                    className="py-3 px-5 text-center rounded-top border-bottom border-dark"
                    style={{ backgroundColor: "#133D78" }}
                  >
                    <h5 className="m-0 text-white">Primary</h5>
                  </div>
                  <div
                    className="px-4 py-3 text-center text-white pricing-label pricing-featured1"
                    style={{ backgroundColor: "#133D78" }}
                  >
                    <h5 className="mb-0 text-white">
                      1000<span className="text-white fs-5 fw-normal">/mo</span>
                    </h5>
                  </div>
                  <div className="p-4 text-center fs-5">
                    <div className="row text-start">
                      <div className="col-12">
                        
                          <div>
                          <p>
                      <i className="fa fa-check text-success me-2"></i>Staff Profile Management
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>Student Profile Management
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>Fee Management
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>Accounts Management
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>Expense Management
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>
                      Announcement Management
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>User
                      Management
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>
                      Configuration
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>Download Reports 
                    </p>
                    <p>
                      <i className="fa fa-times text-danger me-2"></i>
                      Inventory Management 
                    </p>
                    <p>
                      <i className="fa fa-times text-danger me-2"></i>
                      Result Management
                    </p>
                    <p>
                      <i className="fa fa-times text-danger me-2"></i>
                      Certificate Management
                    </p>
                    <p>
                      <i className="fa fa-times text-danger me-2"></i>
                      Academics Management
                    </p>
                    <p>
                      <i className="fa fa-times text-danger me-2"></i>Transport Management
                    </p>
                    <p>
                      <i className="fa fa-times text-danger me-2"></i>
                      Communication Management
                    </p>
                    <p>
                      <i className="fa fa-times text-danger me-2"></i>Reception Management
                    </p>
                    <p>
                      <i className="fa fa-times text-danger me-2"></i>Learning Management
                    </p>
                    <p>
                      <i className="fa fa-times text-danger me-2"></i>Library Management
                    </p>
                    <p>
                      <i className="fa fa-times text-danger me-2"></i>Leave Management
                    </p>
                    <p>
                      <i className="fa fa-times text-danger me-2"></i>Assets Management
                    </p>
                    <p>
                      <i className="fa fa-times text-danger me-2"></i> Sports Management
                    </p>
                    <p>
                      <i className="fa fa-times text-danger me-2"></i> Website Management
                    </p>
                    <Link to="/manual">
                    <button
                      type="button"
                      className="btn btn-price border-0 rounded-pill px-4 py-3 mt-3 text-white"
                    >
                      {" "}
                      <span>Get Started</span>
                    </button>
                    </Link>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="rounded bg-light pricing-item">
                  <div
                    className="py-3 px-5 text-center rounded-top border-bottom border-primary"
                    style={{ backgroundColor: "#FAC400" }}
                  >
                    <h5 className="m-0 text-white">Standard</h5>
                  </div>
                  <div
                    className="px-4 py-3 text-center pricing-label pricing-featured mb-2"
                    style={{ backgroundColor: "#FAC400" }}
                  >
                    <h5 className="mb-0 text-white">
                      3000<span className="fs-5 fw-normal">/mo</span>
                    </h5>
                  </div>
                  <div className="p-4 text-center fs-5">
                    <div className="row text-start">
                      <div className="col-12">
                        
                          <div>
                            <p>
                              <i className="fa fa-check text-success me-2"></i>
                              Staff Profile Management
                            </p>
                            <p>
                              <i className="fa fa-check text-success me-2"></i>
                              Student Profile Management
                            </p>
                            <p>
                              <i className="fa fa-check text-success me-2"></i>
                              Fee Management
                            </p>
                            <p>
                              <i className="fa fa-check text-success me-2"></i>
                              Inventory Management
                            </p>
                            <p>
                              <i className="fa fa-check text-success me-2"></i>
                              Accounts Management
                            </p>
                            <p>
                              <i className="fa fa-check text-success me-2"></i>
                              Result Management
                            </p>
                            <p>
                              <i className="fa fa-check text-success me-2"></i>
                              Certificate Management
                            </p>
                            <p>
                              <i className="fa fa-check text-success me-2"></i>
                              Academics Management
                            </p>
                            <p>
                              <i className="fa fa-check text-success me-2"></i>
                              Transport Management
                            </p>
                            <p>
                              <i className="fa fa-check text-success me-2"></i>
                              Expense Management
                            </p>
                            <p>
                              <i className="fa fa-check text-success me-2"></i>
                              Download Reportss
                            </p>
                            <p>
                              <i className="fa fa-check text-success me-2"></i>
                              Announcement Management
                            </p>
                            <p>
                              <i className="fa fa-check text-success me-2"></i>
                              Communication Management
                            </p>
                            <p>
                              <i className="fa fa-check text-success me-2"></i>
                              User Management
                            </p>
                            <p>
                              <i className="fa fa-check text-success me-2"></i>
                              Configuration
                            </p>
                            <p>
                              <i className="fa fa-times text-danger me-2"></i>
                              Reception Management
                            </p>
                            <p>
                              <i className="fa fa-times text-danger me-2"></i>
                              Learning Management
                            </p>
                            <p>
                              <i className="fa fa-times text-danger me-2"></i>
                              Library Management
                            </p>
                            <p>
                              <i className="fa fa-times text-danger me-2"></i>
                              Leave Management
                            </p>
                            <p>
                              <i className="fa fa-times text-danger me-2"></i>
                              Assets Management
                            </p>
                            <p>
                              <i className="fa fa-times text-danger me-2"></i>
                               Sports Management
                            </p>
                            <p>
                              <i className="fa fa-times text-danger me-2"></i>
                               Website Management
                            </p>
                            <Link to="/manual">
                            <button
                              type="button"
                              className="btn btns btn-price1 border-0 rounded-pill px-4 py-3 mt-3"
                            >
                              Get Started
                            </button>
                            </Link>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                <div className="rounded bg-light pricing-item">
                  <div
                    className="py-3 px-5 text-center rounded-top border-bottom border-dark"
                    style={{ backgroundColor: "#133D78" }}
                  >
                    <h5 className="m-0 text-white">Enterprise</h5>
                  </div>
                  <div
                    className="px-4 py-3 text-center pricing-label pricing-featured1 mb-2"
                    style={{ backgroundColor: "#133D78" }}
                  >
                    <h5 className="mb-0 text-white">
                      5000<span className="text-white fs-5 fw-normal">/mo</span>
                    </h5>
                  </div>
                  <div className="p-4 text-center fs-5">
                    
                    <div className="row text-start">
                      <div className="col-12">
                        
                          <div>
                          <p>
                      <i className="fa fa-check text-success me-2"></i>Reception Management
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>Staff Profile Management
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>Student Profile Management
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>Inventory Management
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>Fee Management
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>Accounts Management
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>Result Management
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>
                      Certificate Management
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>
                      Academics Management
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>
                      Learning Management
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>Paper
                      Generator
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>Library Management
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>Leave Management
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>Expense Management
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i> Assets Management
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>Download Reportss
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>
                      Announcement Management
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>
                      Communication Management
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>Sports Management
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i> Website Management
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>User
                      Management
                    </p>
                    <p>
                      <i className="fa fa-check text-success me-2"></i>
                      Configuration
                    </p>
                    <Link to="/manual">
                    <button
                      type="button"
                      className="btn btn-price border-0 rounded-pill px-4 py-3 mt-3 text-white"
                    >
                      Get Started
                    </button>
                    </Link>
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      {/* </div> */}
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h3>Elevate Your <span style={{ color: "#FAC400" }}>Institution</span> with <span style={{ color: "#FAC400" }}>Capobrain</span></h3>
            <p style={{textAlign:"justify"}}>Imagine an education management system that takes the hassle out of administrative tasks and transforms the way your school operates. Capobrain is here to empower your institution. Our user-friendly platform simplifies student data management, scheduling, and resource allocation, allowing educators to focus on what they do best – teaching. With Capobrain, you'll foster collaboration among students, teachers, and parents, creating a vibrant, interactive learning environment. Step into the future of education management and let Capobrain be your trusted guide in this transformative journey.</p>
          </div>
          <div className="col-md-6">
<h3>Greening <span style={{ color: "#FAC400" }}>Education</span> with <span style={{ color: "#FAC400" }}>Capobrain</span></h3>
<p style={{textAlign:"justify"}}>Sustainability matters, and Capobrain is committed to making education more eco-friendly. Our approach promotes a paper-free environment in educational institutions. Ditch the stacks of paper assignments and go digital with Capobrain. Our system enables seamless electronic communication, eliminating the need for printed notices and newsletters. Centralized digital storage reduces paper clutter, and our support for remote learning cuts down on printed textbooks. Join us in the effort to reduce waste and embrace a more sustainable future for education. Capobrain - where efficiency meets environmental responsibility.</p>
          </div>
        </div>
      </div>
      {/* <!-- Pricing End --> */}
    </div>
  );
}
