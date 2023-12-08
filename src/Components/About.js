import React, { useEffect } from "react";
import Testimonial from "./Testimonial";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
export default function About() {
  useEffect(() => {
    AOS.init();
  }, []);
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
              <h1 className="head text-center text-white animate__animated animate__zoomIn">
                Transforming Education Through Technology
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div>
          <div className="container">
            <div className="mb-3" style={{ border: "none" }}>
              <div className="row g-0">
                <div className="col-md-8">
                  <div className="card-padding">
                    <h1 className="mt-4 mb-4">
                      About <span style={{ color: "#FAC400" }}>Us</span>
                    </h1>
                    <p className="card-text" style={{ textAlign: "justify" }}>
                      CapoBrain is a comprehensive Education Management System
                      designed to streamline administrative tasks and enhance
                      communication among educators, students, and parents
                      within diverse educational institutions. Featuring a
                      user-friendly interface and robust capabilities, CapoBrain
                      empowers educational organizations to efficiently handle
                      student information, class scheduling, and attendance
                      tracking. Moreover, it offers tools for educators to
                      create and distribute assignments while keeping parents
                      informed about their child's progress. A notable feature
                      of CapoBrain is its capacity to manage accounts and
                      inventory with ease. The system's financial management
                      tools enable educational institutions to monitor expenses,
                      income, and budgets, facilitating well-informed financial
                      decisions. The inventory management feature allows
                      institutions to oversee their resources and equipment,
                      generating reports to monitor usage and stock levels.
                      Explore CapoBrain's comprehensive functionalities and its
                      capacity to serve a wide range of educational settings.
                    </p>
                    <div className="row d-flex justify-content-between">
                      <div className="col-md-5 col-5 d-flex mt-3">
                        <i className="fa-solid fa-school fa-2x me-2"></i>
                        <h5>
                          Academic <br /> Excellence
                        </h5>
                      </div>
                      <div className="col-md-6 col-5 d-flex mt-3">
                        <i className="fas fa-bullseye fa-2x me-2"></i>
                        {/* <i className=""></i> */}
                        <h5>
                          Al-powered <br /> Features
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <img
                    src="img/education.png"
                    className="img-fluid rounded-start about-imgg"
                    alt="school management software"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  />
                </div>
              </div>
            </div>

            <div className="mb-3" style={{ border: "none" }}>
              <div className="row g-0 reverse-order">
                <div className="col-md-4 mt-4">
                  <img
                    src="img/about us.png"
                    className="img-fluid rounded-start"
                    alt="school management software"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                  />
                </div>
                <div className="col-md-8">
                  <div className="card-padding">
                    <p className="card-text" style={{ textAlign: "justify" }}>
                      Our journey in the digital realm has been nothing short of
                      remarkable. With a talented team of developers and a
                      commitment to delivering top-notch solutions, we’ve been
                      privileged to work on a diverse range of web development
                      projects. Our mission is to transform ideas into engaging,
                      functional, and visually stunning websites that captivate
                      audiences and drive results.Whether it’s e-commerce
                      platforms, corporate websites, or custom web applications,
                      we’ve successfully completed projects that have not only
                      met but exceeded our clients’ expectations. Our secret
                      sauce? A blend of cutting-edge technologies, creative
                      ingenuity, and a passion for crafting digital experiences
                      that leave a lasting impression. Our portfolio boasts a
                      rich tapestry of web development successes. Our journey is
                      marked by projects that have pushed the boundaries of
                      what’s possible on the web. We take pride in our ability
                      to understand our clients’ unique requirements and turn
                      them into reality. From seamless user interfaces to robust
                      backend systems.
                    </p>
                    <div className="row d-flex justify-content-between">
                      <div className="col-md-5 col-5 d-flex mt-3">
                        <i className="fa-regular fa-clock fa-2x me-2"></i>
                        <h5>
                          24/7 <br /> Support
                        </h5>
                      </div>
                      <div className="col-md-5 col-5 d-flex mt-3">
                        <i className="fa-solid fa-pencil fa-2x me-2"></i>
                        <h5>
                          Regular <br /> Updates
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="about2 background-img3 mt-5"
          style={{ backgroundImage: `url(${"img/b1.jpg"})` }}
        >
          <div className="color-overlay3">
            <div className="container pt-4 pb-3">
              <h1 className="text-center text-white">
                Technic <span style={{ color: "#FAC400" }}>Mentors</span>{" "}
                Services
              </h1>
              <div className="row">
                <div className="col-md-12 mb-3">
                  <p style={{ textAlign: "justify" }} className="text-white">
                    Technic mentors is the best IT consulting company in
                    Gujranwala to look at when searching for extraordinary
                    software and technology solutions. We provide value-added
                    and quality products and services. Our team is specialized
                    and experienced and provides our clients with the finest
                    experience ever. We provide IT solutions for commercial
                    clients, government, institutions, and schools, that are
                    aimed to improve the learning and development ecosystem.
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="services">
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
                            <h4 className="card-title">
                              Web Design & Development
                            </h4>
                            <p
                              className="card-text"
                              style={{ textAlign: "justify" }}
                            >
                              Web development services encompass two essential
                              steps: web design and web development. Web design
                              focuses on the aesthetics and visual appeal of
                              your website,while it emphasizes its
                              functionality.
                            </p>
                            <i className="fa-solid fa-arrow-right me-2"></i>
                            <a
                              style={{ textDecoration: "underline" }}
                              href="https://technicmentors.com/web-development-services"
                              target="blank"
                            >
                              Learn More
                            </a>
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
                            <h4 className="card-title">Software Development</h4>
                            <p
                              className="card-text"
                              style={{ textAlign: "justify" }}
                            >
                              Software development services encompass a series
                              of essential steps involving the developing
                              business solutions. These steps include
                              identifying needs, analyzing requirements,
                              designing, developing, testing.
                            </p>
                            <i className="fa-solid fa-arrow-right me-2"></i>
                            <a
                              style={{ textDecoration: "underline" }}
                              href="https://technicmentors.com/software-development-services"
                              target="blank"
                            >
                              Learn More
                            </a>
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
                            <h4 className="card-title">
                              Mobile App Development
                            </h4>
                            <p
                              className="card-text"
                              style={{ textAlign: "justify" }}
                            >
                              Mobile app development services play a pivotal
                              role in elevating businesses, offering a range of
                              benefits. In today’s digital landscape, mobile
                              applications have become preferred.
                            </p>
                            <i className="fa-solid fa-arrow-right me-2"></i>
                            <a
                              style={{ textDecoration: "underline" }}
                              href="https://technicmentors.com/mobile-app-development-services"
                              target="blank"
                            >
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-6 col-lg-4 mb-3"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                    >
                      <div className="services-item3 bg-light">
                        <div className="p-4 text-center services-content">
                          <div className="services-content-icon3">
                            <h4 className="card-title">
                              Search Engine Optimization
                            </h4>
                            <p
                              className="card-text"
                              style={{ textAlign: "justify" }}
                            >
                              SEO services involve optimizing your website to
                              improve its ranking on search engine result pages
                              when users search for products or services related
                              to your business on Google, Bing, or other search
                              engines.
                            </p>
                            <i className="fa-solid fa-arrow-right me-2"></i>
                            <a
                              style={{ textDecoration: "underline" }}
                              href="https://technicmentors.com/seo-services"
                              target="blank"
                            >
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-6 col-lg-4 mb-3"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                    >
                      <div className="services-item3 bg-light">
                        <div className="p-4 text-center services-content">
                          <div className="services-content-icon3">
                            <h4 className="card-title">Digital Marketing</h4>
                            <p
                              className="card-text"
                              style={{ textAlign: "justify" }}
                            >
                              The promotion of brands through internet-based
                              platforms, social media, and various digital
                              communication channels is commonly reffered to as
                              digital marketing services.It involves engaging
                              with potential clients
                            </p>
                            <i className="fa-solid fa-arrow-right me-2"></i>
                            <a
                              style={{ textDecoration: "underline" }}
                              href="https://technicmentors.com/digital-marketing-services"
                              target="blank"
                            >
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-md-6 col-lg-4 mb-3"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                      data-aos-easing="ease-in-out"
                    >
                      <div className="services-item3 bg-light">
                        <div className="p-4 text-center services-content">
                          <div className="services-content-icon3">
                            <h4 className="card-title">Graphics Designing</h4>
                            <p
                              className="card-text"
                              style={{ textAlign: "justify" }}
                            >
                              Graphics designing services involve the skilled
                              creation of visual content aimed at effectively
                              conveying messages Designers employ typography and
                              graphics to meet user needs
                            </p>
                            <i className="fa-solid fa-arrow-right me-2"></i>
                            <a
                              style={{ textDecoration: "underline" }}
                              href="https://technicmentors.com/graphics-designing-services"
                              target="blank"
                            >
                              Learn More
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Testimonial />
    </div>
  );
}
