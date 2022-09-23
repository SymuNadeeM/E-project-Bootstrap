import React from "react";
import Carousel from "react-bootstrap/Carousel";
import user1 from "../images/images/user.png";
import user2 from "../images/images/user2.png";
import user3 from "../images/images/user3.jpg";
import "./testimonial.css";

const Testimonial = () => {
  return (
    <>
      <section id="testimonial" className="testimonial">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="headline text-center mb-5">
                <h2 className="pb-3 position-relative d-inline-block">
                  Testimonial
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-12 col-lg-8 text-center offset-lg-2">
                <Carousel fade>
                  <Carousel.Item className="carousel-items">
                    <img className="w-100" src={user1} alt="First slide" />
                    <Carousel.Caption className="caption_test">
                      <h3>First slide label</h3>
                      <p>
                        Nulla vitae elit libero, a pharetra augue mollis
                        interdum.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="carousel-items">
                    <img className="w-100" src={user2} alt="Second slide" />

                    <Carousel.Caption className="caption_test">
                      <h3>Second slide label</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item className="carousel-items">
                    <img className="w-100" src={user3} alt="Third slide" />

                    <Carousel.Caption className="caption_test">
                      <h3>Third slide label</h3>
                      <p>
                        Praesent commodo cursus magna, vel scelerisque nisl
                        consectetur.
                      </p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
