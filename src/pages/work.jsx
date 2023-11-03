import { Wrapper } from "../layout";
import SEO from "../components/seo";
import PortfolioMasonryMain from '../components/portfolios/portfolio-masonry';
import { client } from "../lib/client"
export default function index({work}) {
  
  return (
    <Wrapper>
      <SEO pageTitle={'Work'} />
      <PortfolioMasonryMain work={work} />
    </Wrapper>
  )
}

export const getServerSideProps = async ()=>{
  const query = '*[_type == "work"] | order(releaseDate desc) | order(_createdAt desc)';
  const work = await client.fetch(query);

   return {
    props: { work}
  }
}