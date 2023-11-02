import React from 'react';
import SEO from '../../components/seo';
import { Wrapper } from '../../layout';
import PortfolioDetailsMain from '../../components/portfolios/portfolio-details';
import { portfolio_data } from '../../data';
import { useRouter } from 'next/router';
import { client } from '../../lib/client';

const PortfolioDynamicDetails = ({workDetails}) => {
  const router = useRouter();
  const {id} = router.query;
  const case_item = portfolio_data.find(item => Number(item.id) === Number(id))
  return (
    <Wrapper>
      <SEO pageTitle={'Portfolio Details'} />
      <PortfolioDetailsMain workDetails={workDetails} case_item={case_item} />
    </Wrapper>
  );
};

export const getServerSideProps = async ({params}) =>{

 
   const workDetailsQuery = `*[_type == "work" &&  _id == '${params.id}']{
    
    workImages,
    _id,
    workTitle, 
    
    workType,
    workCover,
    workVideos[]{
      asset->{
        url
      }
    }
    
  }`;
  const workDetailList  = await client.fetch(workDetailsQuery);
   const workDetails = workDetailList[0]
  return{
    props:{workDetails}
  }
}

export default PortfolioDynamicDetails;

