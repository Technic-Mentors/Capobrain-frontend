import React from "react";
import { useLocation } from "react-router-dom";

export default function Topbar() {

  const location = useLocation();

  if(location.pathname === "/admin/addblog" || location.pathname === "/admin/allposts" || location.pathname === "/admin/allcategory" || location.pathname === "/admin/addcategory" || location.pathname === "/admin/board"){
    return null;
  }
  return (
    <div>
      {/* <!-- Topbar Start --> */}
      <div
        className="container-fluid pe-0 d-none d-lg-block"
        style={{ backgroundColor: "#133D78" }}
      >
        <div className="row gx-0 d-flex align-items-center">
          <div className="col-md-8 d-flex text-lg-start mb-2 mb-lg-0">
          <p className="m-0 mx-4 text-white">
          <i className="fa fa-envelope-open me-2"></i>
                  info@capobrain.com
                </p>
                <p className="m-0 text-white">
                <i className="fa fa-phone me-1"></i> +923 111 122 144
                </p>
                
          </div>
          <div className="col-md-4 text-center text-lg-end py-1">
            <div className="position-relative d-inline-flex align-items-center py-1" style={{marginRight:"9%"}}>
             
              <a
                href="https://www.facebook.com/CapoBrainOfficial"
                target="blank"
                className="nav-fill btn btn1 btn-sm-square rounded-circle me-2"
              >
                <i className="fab fa-facebook-f text-white"></i>
              </a>
              <a
                href="https://twitter.com/BrainCapo"
                target="blank"
                className="nav-fill btn btn1 btn-sm-square rounded-circle me-2"
              >
                <i className="fab fa-twitter text-white"></i>
              </a>
              <a
                href="https://www.youtube.com/@CapoBrain"
                target="blank"
                className="nav-fill btn btn1 btn-sm-square rounded-circle me-2"
              >
                <i className="fab fa-youtube text-white"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/CapoBrain/"
                target="blank"
                className="nav-fill btn btn1 btn-sm-square rounded-circle me-2"
              >
                <i className="fab fa-linkedin-in text-white"></i>
              </a>
              <a
                href="https://www.instagram.com/CapoBrain"
                target="blank"
                className="nav-fill btn btn1 btn-sm-square rounded-circle me-2"
              >
                <i className="fa-brands fa-instagram text-white"></i>
              </a>
              <a
                href="https://wa.me/923111122144"
                target="blank"
                className="nav-fill btn btn1 btn-sm-square rounded-circle me-0"
              >
                <i className="fa-brands fa-whatsapp text-white"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Topbar End --> */}
    </div>
  );
}
