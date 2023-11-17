import React, { useEffect } from "react";
import OwlCarousel from "react-owl-carousel";
import AOS from "aos";
import "aos/dist/aos.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

export default function Testimonial() {
  useEffect(() => {
    AOS.init();
  }, []);
  const options = {
    autoplay: true,
    smartSpeed: 1000,
    center: true,
    dots: false,
    loop: true,
    nav: true,
    navText: [
      '<i className="bi bi-arrow-left" style="font-size:60px"></i>',
      '<i className="bi bi-arrow-right" style="font-size:60px"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
    },
  };

  return (
    <div>
      {/* <!-- Testimonial Start --> */}
      
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto mb-5"
            style={{ maxWidth: "600px" }}
          >
            <h1>
              What <span style={{ color: "#FAC400" }}>Our Clients</span> Say!
            </h1>
          </div>
          <OwlCarousel
            {...options}
            className="owl-carousel testimonial-carousel"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
          >
            <div className="testimonial-item text-center">
              <img
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                src="img/testimonial-1.jpg"
                style={{ width: "100px", height: "100px" }}
                alt="client"
              />
              <div className="testimonial-text rounded text-center p-4">
                <p>
                  CapoBrain's user-friendly interface has made it easy for us to
                  manage student information, schedule classes, and track
                  attendance without any hassle.
                </p>
                <h5 className="mb-1">Shehryar Shahid</h5>
                <span className="fst-italic">Principal (Scholar's School)</span>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                src="img/testimonial-2.jpg"
                style={{ width: "100px", height: "100px" }}
                alt="client"
              />
              <div className="testimonial-text rounded text-center p-4">
                <p>
                  CapoBrain has revolutionized the way our school manages
                  administrative tasks. It has made our work easier, more
                  efficient, and allowed us to focus on student success.
                </p>
                <h5 className="mb-1">Danish Mirza</h5>
                <span className="fst-italic">CEO (British School)</span>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                src="img/testimonial-3.jpg"
                style={{ width: "100px", height: "100px" }}
                alt="client"
              />
              <div className="testimonial-text rounded text-center p-4">
                <p>
                  With CapoBrain, our teachers have been able to easily assign
                  tasks and communicate with parents, creating a more
                  collaborative learnign environment.
                </p>
                <h5 className="mb-1">Hadeed Ul Hassan</h5>
                <span className="fst-italic">
                  Voice Principle (Crescent School)
                </span>
              </div>
            </div>
            <div className="testimonial-item text-center">
              <img
                className="img-fluid bg-light rounded-circle p-2 mx-auto mb-4"
                src="img/testimonial-4.jpg"
                style={{ width: "100px", height: "100px" }}
                alt="client"
              />
              <div className="testimonial-text rounded text-center p-4">
                <p>
                  CapoBrain has helped us enhance our communication & build
                  stronger relationships, leading to parents engagement and
                  involvement in child's education.
                </p>
                <h5 className="mb-1">Usama Munir</h5>
                <span className="fst-italic">
                  Director (Kid's Gramer School)
                </span>
              </div>
            </div>
          </OwlCarousel>
        </div>
      </div>
      {/* <!-- Testimonial End --> */}
    </div>
  );
}
