import React from "react";
import { FaMobileAlt, FaRegEnvelope } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { RiRocketLine } from "react-icons/ri";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <section id="contact" className="contact">
        <div className="container">
          <div className="mb-5 text-center">
            <h5>Let's Start a Conversation</h5>
            <h2 className="fw-bold">Contact US</h2>
          </div>
          <div className="row">
            <div className="col-lg-5 col-md-5">
              <h4>Contact Info</h4>
              <div className="contact_allinfo">
                <div className="logo_title d-flex align-items-center">
                  <ImLocation />
                  <p>
                    <a href="">Lorem ipsum dolor sit amet consectetur adipis</a>
                  </p>
                </div>
                <div className="logo_title d-flex align-items-center">
                  <FaMobileAlt />
                  <p>
                    <a href="">+88 015355584</a>
                  </p>
                </div>
                <div className="logo_title d-flex align-items-center">
                  <FaRegEnvelope />
                  <p>
                    <a href="">ag@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-7 pt-lg-0 pt-md-0 pt-4">
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="from_control"
                        name="name"
                        id="name"
                        placeholder="Your name..."
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        className="from_control"
                        name="email"
                        id="email"
                        placeholder="Your email ..."
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-group">
                      <textarea
                        name="textarea"
                        id=""
                        cols="30"
                        rows="4"
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <button className="btn btn-danger">
                      <RiRocketLine />
                      <span> Send Messsage</span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
