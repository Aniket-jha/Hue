import React from 'react';
import SEO from '../components/seo';
import { Wrapper } from '../layout';
import HomeFourMain from '../components/homes/home-4';
import { client } from "../lib/client"
const index = ({homeContent}) => {
  return (
    <Wrapper>
      <SEO pageTitle={'Home'} />
      <HomeFourMain homeContent={homeContent} />
    </Wrapper>
  );
};
export const getServerSideProps = async ()=>{
  const query = '*[_type == "homeContent"] | order(releaseDate desc) | order(_createdAt desc)';
  const data = await client.fetch(query);
 const homeContent = data[0]
   return {
    props: { homeContent}
  }
}

export default index;