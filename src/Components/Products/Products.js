import React from "react";
import { AiTwotoneStar } from "react-icons/ai";
import upto from "../images/images/lg.jpg";
import p1 from "../images/images/p1.jpg";
import p2 from "../images/images/p2.jpg";
import p3 from "../images/images/p3.jpg";
import p4 from "../images/images/p4.jpg";
import "./Product.css";

const Products = () => {
  return (
    <>
      <section id="products" className="products">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="headline text-center mb-5">
                <h2 className="pb-3 position-relative d-inline-block">
                  {" "}
                  FEATURED PRODUCTS
                </h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-6 col-lg-4 ">
              <a href="#" className="d-block text-center mb-4 single_box">
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
                  <div className="product-name pt-3">
                    <h3 className="text-capitalize">
                      Winter Long Sleve Black White
                    </h3>
                    <p className="mb-0 amount">
                      $400.00 <del>$580.00</del>
                    </p>
                    <div className="py-1">
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                    </div>
                    <button className="add_to_card">ADD TO CARD</button>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-lg-4">
              <a href="#" className="d-block text-center mb-4 single_box">
                <div className="product-list">
                  <div className="product-image position-relative">
                    <img
                      src={p3}
                      alt="products"
                      className="img-fluid product-image-first"
                    />
                    <img
                      src={p4}
                      alt="products"
                      className="img-fluid product-image-second"
                    />
                  </div>
                  <div className="product-name pt-3">
                    <h3 className="text-capitalize">
                      Winter Long Sleve Black White
                    </h3>
                    <p className="mb-0 amount">$400.00</p>
                    <div className="py-1">
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                    </div>
                    <button className="add_to_card">ADD TO CARD</button>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-lg-4">
              <a href="#" className="d-block text-center mb-4 single_box">
                <div className="product-list">
                  <div className="product-image position-relative">
                    <img
                      src={p3}
                      alt="products"
                      className="img-fluid product-image-first"
                    />
                    <img
                      src={p4}
                      alt="products"
                      className="img-fluid product-image-second"
                    />
                  </div>
                  <div className="product-name pt-3">
                    <h3 className="text-capitalize">
                      Winter Long Sleve Black White
                    </h3>
                    <p className="mb-0 amount">$400.00</p>
                    <div className="py-1">
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                    </div>
                    <button className="add_to_card">ADD TO CARD</button>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-lg-4 ">
              <a href="#" className="d-block text-center mb-4 single_box">
                <div className="product-list">
                  <div className="product-image position-relative">
                    <img
                      src={p3}
                      alt="products"
                      className="img-fluid product-image-first"
                    />
                    <img
                      src={p4}
                      alt="products"
                      className="img-fluid product-image-second"
                    />
                  </div>
                  <div className="product-name pt-3">
                    <h3 className="text-capitalize">
                      Winter Long Sleve Black White
                    </h3>
                    <p className="mb-0 amount">$400.00</p>
                    <div className="py-1">
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                    </div>
                    <button className="add_to_card">ADD TO CARD</button>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-lg-4 ">
              <a href="#" className="d-block text-center mb-4 single_box">
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
                  <div className="product-name pt-3">
                    <h3 className="text-capitalize">
                      Winter Long Sleve Black White
                    </h3>
                    <p className="mb-0 amount">
                      $400.00 <del>$580.00</del>
                    </p>
                    <div className="py-1">
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                    </div>
                    <button className="add_to_card">ADD TO CARD</button>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-sm-6 col-lg-4 ">
              <a href="#" className="d-block text-center mb-4 single_box">
                <div className="product-list">
                  <div className="product-image position-relative">
                    <img
                      src={p3}
                      alt="products"
                      className="img-fluid product-image-first"
                    />
                    <img
                      src={p4}
                      alt="products"
                      className="img-fluid product-image-second"
                    />
                  </div>
                  <div className="product-name pt-3">
                    <h3 className="text-capitalize">
                      Winter Long Sleve Black White
                    </h3>
                    <p className="mb-0 amount">$400.00</p>
                    <div className="py-1">
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                      <span>
                        <AiTwotoneStar className="star_icon" />
                      </span>
                    </div>
                    <button className="add_to_card">ADD TO CARD</button>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <div className="overflow-hidden my-5">
            <div className="row">
              <div className="col-sm-12 up_to_off">
                <img src={upto} alt="" className="img-fluid w-100" />
                <div className="up_to_content">
                  <h2>UP TO 75% OFF SPRINGSALE !</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
