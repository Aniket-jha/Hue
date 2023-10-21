import React from 'react';
import { urlFor } from '../../../lib/client';

const CaseImageArea = ({case_item,workDetails}) => {
  return (
    <div className="cd-banner-area pt-110 pb-100">
      <div className="container">
        <div className="row  ">
        
          {
            workDetails?.workImages?.map((imgItem,index)=>(
                <div key={index} className="col-6">
              <div className="cd-banner-img">
              <img className='w-60 mt-3 ' src={urlFor(imgItem)} alt="" />
            </div>
             </div>
            ))
          }
            
         
        </div>
      </div>
    </div>
  );
};

export default CaseImageArea;