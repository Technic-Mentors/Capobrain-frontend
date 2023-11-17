import React, { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState("");
  useEffect(() => {
    AOS.init();
  }, []);

  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Perform form validation
    const form = formRef.current;
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const project = form.project.value.trim();
    const message = form.message.value.trim();

    const nameI = document.getElementById("nameI");
    const emailI = document.getElementById("emailI");
    const projectI = document.getElementById("projectI");
    const textI = document.getElementById("textI");

    let hasError = false;

    if (!name) {
      nameI.innerText = "please fiil name field";
      hasError = true;
    } else {
      nameI.innerText = "";
    }
    if (!email) {
      emailI.innerText = "please fiil email field";
      hasError = true;
    } else {
      emailI.innerText = "";
    }
    if (!project) {
      projectI.innerText = "please fiil number field";
      hasError = true;
    } else {
      projectI.innerText = "";
    }
    if (!message) {
      textI.innerText = "please fiil message field";
      hasError = true;
    } else {
      textI.innerText = "";
    }

    if (hasError) {
      return;
    }

    emailjs
      .sendForm(
        "service_pj93zyr",
        "template_i20j2uo",
        formRef.current,
        "2IXZCnlGYrCJooOAK"
      )
      .then((response) => {
        formRef.current.reset();
        setSuccessMessage("Email is sent successfully");
        setTimeout(() => {
          setSuccessMessage("");
        }, 3000);
      });
  };
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
                Get In Touch With Us
              </h1>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact Start --> */}
      <div className="mt-3 mb-3 pt-5">
        <div className="container">
          <div className="text-center">
            <h1 className="mb-3 ">Contact for any query</h1>
          </div>
          <div className="row mb-5 mt-4">
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div
                className="d-flex align-items-center p-2 rounded"
                style={{ backgroundColor: "rgb(246 249 255)" }}
              >
                <div
                  className="flex-shrink-0 btn-square rounded-circle"
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#FAC400",
                  }}
                >
                  <i className="fas fa-map-marker-alt text-white"></i>
                </div>
                <div className="ms-3">
                  <h4 style={{ color: "#133D78" }}>Address</h4>
                  <p style={{color:"black"}}>Mumtaz Market, GT Road, Gujranwala</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div
                className="d-flex align-items-center p-3 rounded"
                style={{ backgroundColor: "rgb(246 249 255)" }}
              >
                <div
                  className="flex-shrink-0 btn-square rounded-circle"
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#FAC400",
                  }}
                >
                  <i className="fa fa-phone text-white"></i>
                </div>
                <div className="ms-3">
                  <h4 style={{ color: "#133D78" }}>Call Us</h4>
                  <p style={{color:"black"}}>+923 111 122 144</p>
                </div>
              </div>
            </div>
            <div
              className="col-md-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div
                className="d-flex align-items-center p-3 rounded"
                style={{ backgroundColor: "rgb(246 249 255)" }}
              >
                <div
                  className="flex-shrink-0 btn-square rounded-circle"
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "#FAC400",
                  }}
                >
                  <i className="fa fa-envelope text-white"></i>
                </div>
                <div className="ms-3">
                  <h4 style={{ color: "#133D78" }}>Email</h4>
                  <p style={{color:"black"}}>info@capobrain.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div
              className="col-md-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <div className="p-1 h-100 rounded contact-map">
                <iframe
                  className="img-fluid"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3376.859812864154!2d74.18231357455578!3d32.18105481420559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f2990ca7332c7%3A0xda83589acd8c568d!2sMumtaz%20Market!5e0!3m2!1sen!2s!4v1694084446010!5m2!1sen!2s"
                  width="600"
                  height="450"
                  style={{ border: 0, height: 495 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="working"
                ></iframe>
              </div>
            </div>
            <div
              className="col-md-6 pt-3 pb-3"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              style={{ backgroundColor: "rgb(246 249 255)" }}
            >
              <div className="p-1 rounded">
                <div>
                  <form onSubmit={sendEmail} ref={formRef}>
                    {successMessage && (
                      <div className="alert alert-info">{successMessage}</div>
                    )}
                    <div className="mb-4">
                      <input
                        type="text"
                        name="name"
                        className="form-control border-0 py-3"
                        placeholder="Your Name"
                      />
                      <div id="nameI" style={{ color: "red" }}></div>
                    </div>
                    <div className="mb-4">
                      <input
                        type="email"
                        name="email"
                        className="form-control border-0 py-3"
                        placeholder="Your Email"
                      />
                      <div id="emailI" style={{ color: "red" }}></div>
                    </div>
                    <div className="mb-4">
                      <input
                        type="number"
                        name="project"
                        className="form-control border-0 py-3"
                        placeholder="Whatsapp Number"
                      />
                      <div id="projectI" style={{ color: "red" }}></div>
                    </div>
                    <div className="mb-4">
                      <textarea
                        className="w-100 form-control border-0 py-3"
                        name="message"
                        rows="6"
                        cols="10"
                        placeholder="Message"
                      ></textarea>
                      <div id="textI" style={{ color: "red" }}></div>
                    </div>
                    <div className="text-start d-flex justify-content-center">
                      <button className="btn btn1" type="submit">
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Contact End --> */}
      {/* <div
        onClick={MoveToTop}
        className="btn btn1 btn-square rounded-circle back-to-top"
      >
        <i className="fa fa-arrow-up text-white"></i>
      </div> */}
    </div>
  );
}
