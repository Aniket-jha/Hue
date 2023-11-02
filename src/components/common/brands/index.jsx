import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { urlFor } from '../../../lib/client';

const brand_images = [
  '/assets/img/brand/brand-1.png',
  '/assets/img/brand/brand-2.png',
  '/assets/img/brand/brand-3.png',
  '/assets/img/brand/brand-4.png',
  '/assets/img/brand/brand-5.png',
  '/assets/img/brand/brand-6.png',
  '/assets/img/brand/brand-6.png',
]

const Index = ({homeContent}) => {
  const [sliderLoop, setSliderLoop] = React.useState(false);
  React.useEffect(() => setSliderLoop(true), [])
  console.log(homeContent)
  return (
    <Swiper
      loop={sliderLoop}
      spaceBetween={30}
      slidesPerView={2}
      modules={[Autoplay]}
      autoplay={
        { delay: 2500, disableOnInteraction: true, }
      }
      className="swiper-wrapper d-flex align-items-center"
      breakpoints={{
        // when window width is >= 1200px
        1200: {
          slidesPerView: 3.7,
        },
        // when window width is >= 992px
        992: {
          slidesPerView: 2.7,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 1.8,
        },
        // when window width is >= 576px
        576: {
          slidesPerView: 1,
        }
      }}
    >
      {homeContent && homeContent?.brandList?.map((brand, i) => (
        <SwiperSlide key={i}>
          <div className="tp-brand-icon text-center">
            <img style={{width:"230px"}} src={urlFor(brand)} alt="" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Index;