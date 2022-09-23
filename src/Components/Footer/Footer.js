import React from "react";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import "./footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer_cla">
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <h2>E-SHOP</h2>
              <h6>ECOMMERCE COMPANY</h6>
            </div>
            <div className="col-lg-8 d-flex justify-content-between">
              <div className="part-one">
                <p>WEEBLY THEMES</p>
                <p>PRE-SALE FAQS</p>
                <p>SUBMIT A TICKET</p>
              </div>
              <div className="part-one">
                <p>SERVICES</p>
                <p>THEME TWEAK</p>
              </div>
              <div className="part-one">
                <p>SHOWCASE</p>
                <p>WIDETKIT</p>
                <p>SUPPORT</p>
              </div>
              <div className="part-one">
                <p>WEEBLY THEMES</p>
                <p>PRE-SALE FAQS</p>
                <p>SUBMIT A TICKET</p>
              </div>
            </div>
          </div>
          <hr />

          <div className="all_media">
            <div className="social_media">
              <BsFacebook className="smedia_icon" />
              <BsTwitter className="smedia_icon" />
              <BsInstagram className="smedia_icon" />
              <BsLinkedin className="smedia_icon" />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
