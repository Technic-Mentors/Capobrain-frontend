import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  if(location.pathname === "/admin/addblog" || location.pathname === "/admin/allposts" || location.pathname === "/admin/allcategory" || location.pathname === "/admin/addcategory" || location.pathname === "/admin/board"){
    return null;
  }
  const selectPath = location.pathname;
  const handleClick = (path) => {
    if (path === selectPath) {
      window.scrollTo(0, 0);
    }
  };
  return (
    <div>
      {/* <!-- Footer Start --> */}
      <div
        className="container-fluid footer bg-dark wow fadeIn"
        data-wow-delay=".3s"
      >
        <div className="container pt-5 pb-4">
          <div className="row g-5 d-flex justify-content-between">
            <div className="col-lg-4 col-md-6">
              <h3 className="text-white h3 fw-bold d-block">
                Capo<span style={{ color: "#FAC400" }}>Brain</span>{" "}
              </h3>
              <p className="mt-4 text-light" style={{ textAlign: "justify",fontSize:"15px" }}>
                Capobrain is the most advanced AI-Powered education management
                system that redefines educational administration by seamlessly
                streamlining tasks and fostering robust communication channels
                amongst educators, staff, and parents. With a myriad of features
                and capabilities, it revolutionizes the way educational
                institutions operate, ensuring a harmonious and paper-free
                school environment.
              </p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h3 className="h4" style={{ color: "#FAC400" }}>
                Short Link
              </h3>
              <div className="mt-4 d-flex flex-column short-link">
                <Link
                  to="/"
                  className="mb-2 text-white"
                  style={{fontSize:"15px"}}
                  onClick={() => handleClick("/")}
                >
                  <i className="fas fa-angle-right me-2"></i>
                  Home
                </Link>
                <Link
                  to="/about"
                  className="mb-2 text-white"
                  style={{fontSize:"15px"}}
                  onClick={() => handleClick("/about")}
                >
                  <i className="fas fa-angle-right  me-2"></i>
                  About
                </Link>
                <Link
                  to="/features"
                  className="mb-2 text-white"
                  style={{fontSize:"15px"}}
                  onClick={() => handleClick("/features")}
                >
                  <i className="fas fa-angle-right me-2"></i>
                  Features
                </Link>
                <Link
                  to="/manual"
                  className="mb-2 text-white"
                  style={{fontSize:"15px"}}
                  onClick={() => handleClick("/manual")}
                >
                  <i className="fas fa-angle-right  me-2"></i>
                  User Manual
                </Link>
                <Link
                  to="/contact"
                  className="mb-2 text-white"
                  style={{fontSize:"15px"}}
                  onClick={() => handleClick("/contact")}
                >
                  <i className="fas fa-angle-right  me-2"></i>
                  Contact
                </Link>
                <Link
                  to="/blog"
                  className="mb-2 text-white"
                  style={{fontSize:"15px"}}
                  onClick={() => handleClick("/blog")}
                >
                  <i className="fas fa-angle-right  me-2"></i>
                  Blog
                </Link>
                <Link
                  to="/demo"
                  className="mb-2 text-white"
                  style={{fontSize:"15px"}}
                  onClick={() => handleClick("/demo")}
                >
                  <i className="fas fa-angle-right  me-2"></i>
                  Request a Demo
                </Link>
                <Link
                  to="/login"
                  className="mb-2 text-white"
                  style={{fontSize:"15px"}}
                  onClick={() => handleClick("/signup")}
                >
                  <i className="fas fa-angle-right  me-2"></i>
                  Admin
                </Link>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <h3 className="h3" style={{ color: "#FAC400" }}>
                Contact Us
              </h3>
              <div className="text-white mt-4 d-flex flex-column contact-link">
                <a href="#/" className="pb-2 text-light" style={{fontSize:"15px"}}>
                  <i className="fas fa-map-marker-alt  me-2"></i> Mumtaz Market,
                  Main GT Road, Gujranwala
                </a>
                <a href="#/" className="py-2 text-light" style={{fontSize:"15px"}}>
                  <i className="fa fa-phone me-2"></i> +923 111 122 144
                </a>
                <a href="#/" className="py-2 mb-2 text-light" style={{fontSize:"15px"}}>
                  <i className="fas fa-envelope  me-2"></i> info@capobrain.com
                </a>
              </div>
              <h4 className="mb-3" style={{ color: "#FAC400" }}>
                Follow Us
              </h4>
              <div className="d-flex hightech-link">
                <a
                  href="https://www.facebook.com/CapoBrainOfficial"
                  target="blank"
                  className="nav-fill btn btn1 btn-sm-square rounded-circle me-2"
                >
                  <i className="fab fa-facebook-f text-dark"></i>
                </a>
                <a
                  href="https://twitter.com/BrainCapo"
                  target="blank"
                  className="nav-fill btn btn1 btn-sm-square rounded-circle me-2"
                >
                  <i className="fab fa-twitter text-dark"></i>
                </a>
                <a
                  href="https://www.youtube.com/@CapoBrain"
                  target="blank"
                  className="nav-fill btn btn1 btn-sm-square rounded-circle me-2"
                >
                  <i className="fab fa-youtube text-dark"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/CapoBrain/"
                  target="blank"
                  className="btn btn1 btn-sm-square rounded-circle me-2"
                >
                  <i className="fab fa-linkedin-in text-dark"></i>
                </a>
                <a
                  href="https://www.instagram.com/CapoBrain"
                  target="blank"
                  className="nav-fill btn btn1 btn-sm-square rounded-circle me-2"
                >
                  <i className="fa-brands fa-instagram text-dark"></i>
                </a>
                <a
                  href="https://wa.me/923111122144"
                  target="blank"
                  className="nav-fill btn btn1 btn-sm-square rounded-circle me-0"
                >
                  <i className="fa-brands fa-whatsapp text-dark"></i>
                </a>
              </div>
            </div>
          </div>
          <hr className="text-light mt-2 mb-4" />
          <div className="row d-flex justify-content-between">
            <div className="col-md-6 ">
              <span className="text-light" style={{fontSize:"15px"}}>
                <span style={{ color: "#1db7ff" }} >
                  <i className="fas fa-copyright  me-2"></i>Capobrain
                </span>
                , All right reserved.
              </span>
              <span className="text-light" style={{fontSize:"15px"}}>
                {" "}
                Developed With Love By
                <a
                  href="https://technicmentors.com/"
                  style={{ color: "#1db7ff" }}
                  target="blank"
                >
                  {" "}
                  Technic Mentors
                </a>
              </span>
            </div>
            <div className="col-md-3 d-flex align-items-center">
              <Link
                to="/privacy"
                style={{fontSize:"15px"}}
                className="text-white me-2"
                onClick={() => handleClick("/privacy")}
              >
                Privacy
              </Link>
              <div
                className="border-start border-2 me-2"
                style={{ height: "13px" }}
              ></div>
              <Link
                to="/t&c"
                style={{fontSize:"15px"}}
                className="text-white"
                onClick={() => handleClick("/t&c")}
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Footer End --> */}
      <div></div>
    </div>
  );
}
