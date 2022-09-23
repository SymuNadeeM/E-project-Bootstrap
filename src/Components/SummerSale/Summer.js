import React from "react";
import Countdown from "react-countdown";
import p1 from "../images/images/p1.jpg";
import p2 from "../images/images/p2.jpg";
import "./Summer.css";

const Summer = () => {
  // Random component./
  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {days}:{hours}:{minutes}:{seconds}
        </span>
      );
    }
  };

  return (
    <>
      <div id="summer" className="summer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="headline text-center mb-5">
                <h2 className="pb-3 position-relative d-inline-block">
                  SUMMER SALE
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 col-lg-7 text-center text-lg-start  summer_details ">
              <div className="titel-summer">
                <h2>Sexy women floral embroider</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempore voluptatibus vitae aut sint dolores culpa nisi impedit
                  tenetur commodi et facere minus, odio veritatis consequatur
                  adipisci eius libero ratione deleniti?
                </p>
              </div>
              <div className="time_counter">
                <Countdown
                  className="conunt_donwn"
                  date={Date.now() + 432000000}
                  renderer={renderer}
                />
              </div>
              <span className="count-down-price d-block mb-4">
                $420 <del>$570</del>
              </span>
              <button className="btn btn-danger">Order Now</button>
            </div>
            <div className="col-sm-12 col-lg-5">
              <a href="#products" className="d-block text-center mb-4">
                <div className="product-list">
                  <div className="product-image position-relative">
                    <span className="sale">Sale</span>
                    <img
                      src={p1}
                      alt="products"
                      className="img-fluid product-image-first"
                    />
                    <img
                      src={p2}
                      alt="products"
                      className="img-fluid product-image-second"
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Summer;
