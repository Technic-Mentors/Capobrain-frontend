import React from "react";

export default function Feature() {
  return (
    <div>
      {/* <!-- Feature Start--> */}
      <div
        className="container-fluid services py-5 mb-5"
        style={{ backgroundColor: "#1975B9" }}
      >
        <div className="container">
          <div className="row g-5 services-inner">
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
              <div className="services-item">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i
                      className="fa-solid fa-cloud fa-3x mb-3"
                      style={{ color: "#6FE7F9" }}
                    ></i>
                    <h5 className="mb-3">Cloud-Based System</h5>
                    <p className="mb-4">
                      Elevate your operations with Cloud-Based Systems,
                      harnessing the power of scalability and flexibility.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
              <div className="services-item1">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i
                      className="fa-solid fa-computer fa-3x mb-3"
                      style={{ color: "#6FE7F9" }}
                    ></i>
                    <h5 className="mb-3">Computer-Based Exam </h5>
                    <p className="mb-4">
                      Experience the future of testing with Computer-Based
                      Exams, enhancing convenience and accuracy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
              <div className="services-item">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i
                      className="fa-solid fa-memory fa-3x mb-3"
                      style={{ color: "#6FE7F9" }}
                    ></i>
                    <h5 className="mb-3">latest cutting-edge </h5>
                    <p className="mb-4">
                      Stay at the forefront of progress with the latest
                      cutting-edge advancements in various industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center mt-3 mb-2">
            <h1
              className="text-white text-center"
              style={{
                backgroundColor: "#51CCF8",
                width: 250,
                borderRadius: 30,
              }}
            >
              Features
            </h1>
          </div>
          <div className="row g-5 services-inner">
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
              <div className="services-item1">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i
                      className="fa-solid fa-arrows-to-eye fa-3x mb-3"
                      style={{ color: "#6FE7F9" }}
                    ></i>
                    <h5 className="mb-3">Staff assessment</h5>
                    <p className="mb-4">
                      Unlock the potential of your workforce with feature-rich
                      Staff Assessment solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
              <div className="services-item">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i
                      className="fa-solid fa-file-shield mb-3"
                      style={{ color: "#6FE7F9" }}
                    ></i>
                    <h5 className="mb-3">Data Security</h5>
                    <p className="mb-4">
                      Elevate your peace of mind with robust Data Security
                      features, protecting your valuable assets.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
              <div className="services-item1">
                <div className="p-4 text-center services-content">
                  <div className="services-content-icon">
                    <i
                      className="fas fa-laptop mb-3"
                      style={{ color: "#6FE7F9" }}
                    ></i>
                    <h5 className="mb-3">Data Backup Facility</h5>
                    <p className="mb-4">
                      Secure your data's future with our advanced Data Backup
                      Facility, ensuring continuity and peace of mind.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Feature End */}
    </div>
  );
}
