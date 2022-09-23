import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from '../images/images/slide1.jpg';
import slider2 from '../images/images/slide2.jpg';
import './home.css';

const Banner = () => {
  return (
    <>
      <section id='home' className='home pt-5 overflow-hidden'>
      <Carousel fade>
      <Carousel.Item className='total_items'>
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption className='carouel_text'>
          <h1>Women</h1>
          <h2>52% Discount For This Season</h2>
           <a href="#" className='btn btn-danger text-uppercase mt-4' >Our Products</a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='total_items'>
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />

        <Carousel.Caption className='carouel_text'>
        <h1>E-Shop</h1>
          <h2>With Working Card and Pay Pal</h2>
           <a href="#" className='btn btn-danger text-uppercase mt-4' >Our Products</a>
        </Carousel.Caption>
      </Carousel.Item>
      
    </Carousel>
      </section>
    </>
  );
};

export default Banner;