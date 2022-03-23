import React from 'react';

import ContentRowProducts from './ContentRowProducts';
import ContentRowCenter from './ContentRowCenter';
import Chart from './Chart';
import Chart2 from './Chart2';
// import banner from '../assets/images/bannerIronMan.png';

function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Digital Tech</h1>
						{/* <img src={banner} class="img-fluid" width="100"></img> */}
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowProducts />				
					<ContentRowCenter />
					<Chart />	
					<Chart2 />	
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;