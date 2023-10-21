import React, { useEffect } from 'react';
import { FooterThree, HeaderSix, Wrapper } from '../../../layout';
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
      <HeaderSix />
      <Breadcrumb title={'Portfolio Masonry'} />
      <MasonryItems work={work} />
      <FooterThree />
    </Wrapper>
  );
};

export default PortfolioMasonry;