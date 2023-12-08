import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Logo() {
  const [showDots, setShowDots] = useState(true);

  useEffect(() => {
    AOS.init();
    // Update showDots on window resize
    const handleResize = () => {
      setShowDots(window.innerWidth >= 765);
    };

    window.addEventListener("resize", handleResize);

    // Initial check
    handleResize();

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    autoplay: true,
    infinite: true,
    dots: showDots,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <ul style={{ display: "flex", justifyContent: "center" }}>
        {dots
          .filter((dot, index) => index < 6)
          .map((dot, index) => (
            <li key={index} style={{ listStyle: "none", margin: "0 5px" }}>
              {dot}
            </li>
          ))}
      </ul>
    ),
  };
  return (
    <div>
      <div>
        <div
          className="background-img3"
          style={{ backgroundImage: `url(${"img/b1.jpg"})` }}
        >
          <div className="color-overlay3">
            <div className="container logo-container py-5">
              <div className="row d-flex align-items-center justify-content-center justify-content-between">
                <div className="col-md-3 col-10 mt-4 logo-bg">
                  <Slider className="custom-slider" {...settings}>
                    <img
                      className="mt-3 client-img p-5"
                      src="img/client17.webp"
                      alt="Client Logo"
                    />{" "}
                    <img
                      className="mt-2 client-img p-5"
                      src="img/client15.webp"
                      alt="Client Logo"
                    />
                    <img
                      className="mt-2 client-img p-5"
                      src="img/client6.webp"
                      alt="Client Logo"
                    />
                    <img
                      className="mt-2 mb-1 client-img-2 p-5"
                      src="img/client9.webp"
                      alt="Client Logo"
                    />
                    <img
                      className="mt-3 client-img-2 p-5"
                      src="img/client10.webp"
                      alt="Client Logo"
                    />
                    <img
                      className="mt-3 client-img p-5"
                      src="img/client11.webp"
                      alt="Client Logo"
                    />
                    <img
                      className="mt-3 client-img p-5"
                      src="img/client12.webp"
                      alt="Client Logo"
                    />
                    <img
                      className="client-img mt-3 p-5"
                      src="img/client13.webp"
                      alt="Client Logo"
                    />
                    <img
                      className="mt-4 client-img p-5"
                      src="img/client14.webp"
                      alt="Client Logo"
                    />
                    <img
                      className="mt-2 client-img p-5"
                      src="img/client2.webp"
                      alt="Client Logo"
                    />
                  </Slider>
                </div>
                <div className="col-md-8 col-12 logo-text">
                  <h1 className="mb-4 text-white">
                    Our <span style={{ color: "#FAC400" }}>Trusted</span>{" "}
                    Clients
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    style={{ textAlign: "justify", color: "white" }}
                  >
                    Capobrain takes pride in serving diverse clients,
                    specializing in educational institutions and management
                    solutions. Our digital tools empower schools by automating
                    administrative tasks, enhancing communication, and
                    streamlining processes. We understand the unique challenges
                    in today's digital age and are dedicated to revolutionizing
                    school management. Clients experience the benefits of our
                    commitment, including a complete accounting software for
                    schools, easing fee collection, and streamlining salary
                    payments. Capobrain's online school software offers
                    cutting-edge AI features for any educational institute.
                    <a
                      target="blank"
                      href="https://technicmentors.com/"
                      style={{ textDecoration: "underline", color: "#FAC400" }}
                    >
                      Technic Mentors
                    </a>{" "}
                    It is not just a school software, any education institute
                    can benefit from the cutting-edge AI-based features offered
                    by Capobrain online school software.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  );
}
