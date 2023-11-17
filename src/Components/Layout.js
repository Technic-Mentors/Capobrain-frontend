import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

export default function Layout() {
  
  return (
    <div className="container-fluid ps-0">
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
              >
                 Eye-catching design & User Friendly
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-end"></div>
      <div className="row mt-3">
        <div className=" col-md-3">
          <div
            className="background-img5"
            style={{ backgroundImage: `url(${"img/b1.jpg"})` }}
          >
            <div
              className="color-overlay5 pb-3 pt-2 outlet"
            >
              <Navigation />
            </div>
          </div>
        </div>

        <div className="col-md-9 mt-3 mb-5" style={{ textAlign: "justify" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}


// import React, { useEffect } from "react";
// import { Link } from "react-router-dom";

// export default function Layout() {
//   useEffect(() => {
//     const scrollingNavLinks = document.getElementById("scrollingNavLinks");

//     if (scrollingNavLinks) {
//       scrollingNavLinks.addEventListener("click", handleNavLinkClick);
//     }

//     return () => {
//       if (scrollingNavLinks) {
//         scrollingNavLinks.removeEventListener("click", handleNavLinkClick);
//       }
//     };
//   }, []);

//   function handleNavLinkClick(event) {
//     const targetId = event.target.getAttribute("data-scroll-target");

//     if (targetId) {
//       const targetElement = document.getElementById(targetId);

//       if (targetElement) {
//         event.preventDefault();
//         targetElement.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   }
// }
