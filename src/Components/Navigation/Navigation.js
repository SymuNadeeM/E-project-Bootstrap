import React from "react";
import "./Nav.css";

const Navigation = () => {
  return (
    <>
      <section id="header">
        <nav class="navbar navbar-expand-lg bg-white fixed-top">
          <div class="container">
            <a className="navbar-brand" href="#home">
              E-SHOP
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#home">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#products">
                    Products
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#summer">
                    Special
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#testimonial">
                    Testimonial
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navigation;
