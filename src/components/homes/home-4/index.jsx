import React, { useEffect } from 'react';
import { FooterThree, HeaderFour, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import BlogArea from './blog-area';
import BrandArea from './brand-area';
import FeatureArea from './feature-area';
import HeroArea from './hero-area';
import NewsLetter from './news-letter';
import ProjectArea from './project-area';
import ServicesArea from './services-area';
import TestimonialArea from './testimonial-area';

const HomeFour = ({homeContent}) => {
  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderFour />
      <HeroArea homeContent={homeContent}  />
      <BrandArea homeContent={homeContent} />
      <ServicesArea/>
      <FeatureArea homeContent={homeContent} />
      {/* <ProjectArea/> */}
      {/* <TestimonialArea/>
      <NewsLetter/>
      <BlogArea/> */}
      <FooterThree home_four={true} />
    </Wrapper>
  );
};



export default HomeFour;