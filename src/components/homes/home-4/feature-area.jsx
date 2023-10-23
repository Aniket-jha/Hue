import React from 'react';
import { FeatureOne, FeatureThree, FeatureTwo } from '../../../svg';
import Image from 'next/image';
import { urlFor } from '../../../lib/client';

const feature_contents = {
  feature_img:'/assets/img/feature/fea-1.png',
  subtitle:'Why Choose us',
  title:'Your Creative and Social Media Partner ',
  highlight_text:'of Choice!',
  feature_lists:[
    {
      id:1,
      icon:<FeatureOne/>,
      title:'Fast working process',
      subtitle:<>Swift Solutions, Stunning Results. <br/> Experience the Speed of HUE! </>,
    },
    {
      id:2,
      icon:<FeatureTwo/>,
      title:'Dedicated team',
      subtitle:<>Committed team ensuring your brands success through  <br/> creativity and innovation – thats HUEs promise.</>,
    },
    {
      id:3,
      icon:<FeatureThree/>,
      title:'24/7 hours support',
      subtitle:<>At HUE, our support team is available 24/7, <br/> ensuring your peace of mind around the clock. Reach out anytime!</>,
    },
  ]
}

const {feature_img,feature_lists,highlight_text,subtitle,title} = feature_contents;

const FeatureArea = ({homeContent}) => {
  console.log(homeContent,"feature")
  return (
    <div className="tp-feature-arae pt-130 pb-100 p-relative">
      <div className="ce-chose-shape d-none d-lg-block">
        <Image width={80} height={80}  src="/assets/img/hero/hero-shape-4.png" alt=""/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 wow tpfadeLeft" data-wow-duration=".5s" data-wow-delay=".5s">
            <div className="tp-fea-img">
          {homeContent?.homeAboutImage  &&  <img src={urlFor(homeContent?.homeAboutImage)} alt=""/>}
            </div>
          </div>
          <div className="col-xl-6 col-lg-6  wow tpfadeRight" data-wow-duration=".5s" data-wow-delay=".7s">
            <div className="tp-fea-right-side">
              <div className="tp-fea-section-box">
                <h5 className="tp-subtitle pb-10">{subtitle}</h5>
                <h2 className="tp-title-sm pb-40">{title}
                  <span className="tp-section-highlight">
                    {highlight_text}
                    <svg width="240" height="11" viewBox="0 0 240 11" fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 0L240 11H0V0Z" fill="#FFDC60" />
                    </svg>
                  </span>
                </h2>
              </div>
              <div className="fea-wrapper-main">
                {feature_lists.map((list,i) => {
                  const {icon,id,subtitle,title} = list;
                  return <div key={id} className="tp-feature-list d-flex">
                  <div className={`tp-feature-list__icon-img fea-color-${i+1} mr-25`}>
                    {icon}
                  </div>
                  <div className="tp-feature-list__content">
                    <h4>{title}</h4>
                    <p>{subtitle}</p>
                  </div>
                </div>
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureArea;