import React from "react";
import Navigation from "./Navigation";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div style={{ overflowX: "hidden" }}>
      <div className="home-container">
        <div className="background-image2">
          <div className="color-overlay1 d-flex align-items-center justify-content-center">
            <div>
              <h1 className="head text-white text-center">
                Eye-catching design & User Friendly
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="cintainer-fluid mb-3">
        <div className="row mt-3">
          <div className=" col-md-3">
            <div className="background-img05">
              <div className="color-overlay05 pb-3 pt-2 outlet">
                <Navigation />
              </div>
            </div>
          </div>

          <div className="col-md-9 mt-3 mb-5" style={{ textAlign: "justify" }}>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
