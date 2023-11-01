import Link from 'next/link';
import React from 'react';

const Breadcrumb = ({ title, back_home= false }) => {
  return (
    <section className="breadcrumb__area  breadcrumb__pt-310 include-bg p-relative"
      style={{ backgroundColor: '#edf4ff' }}>
      <div className="ac-about-shape-img z-index-1">
        <img src="/assets/img/breadcrum/ab-shape-1.1.jpg" alt="" />
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xxl-12">
            <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}  className="breadcrumb__content p-relative z-index-1">
              <h3 style={{fontSize:"7rem"}} className="breadcrumb__title">{title}</h3>
              {!back_home &&<Link  href="/contact">
                <a  className="tp-btn-white-border">Lets work together <i className="far fa-arrow-right"></i></a>
              </Link>}
              {back_home &&<Link href="/">
                <a className="tp-btn-white-border">Back to home <i className="far fa-arrow-right"></i></a>
              </Link>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Breadcrumb;