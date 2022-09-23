import React from 'react';
import offer1 from '../images/images/offer1.jpg';
import offer2 from '../images/images/offer2.jpg';
import offer3 from '../images/images/offer3.jpg';
import offer4 from '../images/images/offer4.jpg';
import './Offer.css';

const Offer = () => {
  return (
    <>
      <div className="offers">
         <div className="container">
           <div className="row">
             <div className="col-lg-4 col-sm-6 mb-lg-0 mb-4">
              <a href="#">
                 <div className="offer-box text-center position-relative">
                   <div className="offer-inner">
                    <div className="offer-image position-relative overflow-hidden">
                      <img src={offer1} alt="off1" />
                      <div className="offer-overlay"></div>
                    </div>
                    <div className="offer-info">
                     <div className="offer-info-inner">
                     <p className='heading-bigger text-capitalize' >Sale 30%</p>
                      <p className='offer-title-1 text-uppercase font-weight-bold'>DOn't Miss This Chance</p>
                      <button type='button' className='btn btn-outline-danger mt-4'>Shop Now</button>
                     </div>
                    </div>
                   </div>
                 </div>
              </a>             
             </div>
             <div className="col-lg-4 col-sm-6 mb-lg-0 mb-4 d-flex flex-column justify-content-between">
              <a href="#">
                 <div className="offer-box text-center position-relative mb-4 mb-sm-0 mb-lg-0">
                   <div className="offer-inner">
                    <div className="offer-image position-relative overflow-hidden">
                      <img src={offer2} alt="off1" />
                      <div className="offer-overlay"></div>
                    </div>
                    <div className="offer-info">
                     <div className="offer-info-inner">
                     <p className='heading-bigger text-capitalize' >Sale 30%</p>
                      <p className='offer-title-1 text-uppercase font-weight-bold'>DOn't Miss This Chance</p>
                      <button type='button' className='btn btn-outline-danger mt-4'>Shop Now</button>
                     </div>
                    </div>
                   </div>
                 </div>
              </a>
              <a href="#">
                 <div className="offer-box text-center position-relative">
                   <div className="offer-inner">
                    <div className="offer-image position-relative overflow-hidden">
                      <img src={offer3} alt="off1" />
                      <div className="offer-overlay"></div>
                    </div>
                    <div className="offer-info">
                     <div className="offer-info-inner">
                     <p className='heading-bigger text-capitalize' >Sale 30%</p>
                      <p className='offer-title-1 text-uppercase font-weight-bold'>DOn't Miss This Chance</p>
                      <button type='button' className='btn btn-outline-danger mt-4'>Shop Now</button>
                     </div>
                    </div>
                   </div>
                 </div>
              </a>
             </div>
             <div className="col-lg-4 col-sm-6 mb-lg-0 mb-4">
              <a href="#">
                 <div className="offer-box text-center position-relative">
                   <div className="offer-inner">
                    <div className="offer-image position-relative overflow-hidden">
                      <img src={offer4} alt="off1" />
                      <div className="offer-overlay"></div>
                    </div>
                    <div className="offer-info">
                     <div className="offer-info-inner">
                     <p className='heading-bigger text-capitalize' >Sale 30%</p>
                      <p className='offer-title-1 text-uppercase font-weight-bold'>DOn't Miss This Chance</p>
                      <button type='button' className='btn btn-outline-danger mt-4'>Shop Now</button>
                     </div>
                    </div>
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

export default Offer;