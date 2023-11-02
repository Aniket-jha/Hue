import React from 'react';
import { urlFor } from '../../../lib/client';

const CaseImageArea = ({case_item,workDetails}) => {
  console.log(workDetails?.workVideos)
  return (
    <div className="cd-banner-area pt-110 pb-100">
      <div className="container">
        <div className="row  ">
          <h2 style={{textAlign:"center",color:"black",fontWeight:"600",marginBottom:".5rem",fontSize:"2rem"}} >Work Images</h2>
          {
            workDetails?.workImages?.map((imgItem,index)=>(
                <div key={index} className="col-6">
              <div className="cd-banner-img">
              <img className='w-60 mt-3 ' src={urlFor(imgItem)} alt="" />
            </div>
             </div>
            ))
          }
          {workDetails?.workVideos && <>  <h2 style={{textAlign:"center",color:"black",fontWeight:"600",marginBottom:".5rem",marginTop:"2rem",fontSize:"2rem"}} >Videos</h2>
          {
            workDetails?.workVideos?.map((imgItem,index)=>(
                <div key={index} className="col-6">
              <div className="cd-banner-img">
            <video style={{borderRadius:"20px"}} width="650" height="400" controls>
            <source src={imgItem.asset.url} type="video/mp4" />

      </video>

            </div>
             </div>
            ))
          }
          </>  }
            
         
        </div>
      </div>
    </div>
  );
};

export default CaseImageArea;
