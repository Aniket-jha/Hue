import React, { useEffect } from 'react';
import { FooterThree, HeaderFour, HeaderSix, Wrapper } from '../../../layout';
import { animationCreate } from '../../../utils/utils';
import Breadcrumb from '../../common/breadcrumb/breadcrumb';
import MasonryItems from './masonry-items';

const PortfolioMasonry = ({work}) => {

  useEffect(() => {
    setTimeout(() => {
      animationCreate();
    }, 500);
  }, []);

  return (
    <Wrapper>
      <HeaderFour />
      <Breadcrumb title={'Our Work'} />
      <MasonryItems work={work} />
      <FooterThree />
    </Wrapper>
  );
};

export default PortfolioMasonry;