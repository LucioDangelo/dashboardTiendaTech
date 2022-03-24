import React from 'react';
import LastProductInDb from './LastProductInDb';
import CategoriesInDb from './CategoriesInDb';
import StatusInDb from './StatusInDb';

function ContentRowCenter(){
    return (
        <div className="row">
            
            

            {/*<!-- Genres in DB -->*/}
            <CategoriesInDb />
            {/*<!-- End content row Genres in DB -->*/}

            {/*<!-- Genres in DB -->*/}
            <StatusInDb />
            {/*<!-- End content row Status in DB -->*/}

            {/*<!-- Last Movie in DB -->*/}
            {/* <div class="d-flex justify-content-center">
            <LastProductInDb />
            </div> */}
            {/*<!-- End content row last movie in Data Base -->*/}

        </div>
    )
}

export default ContentRowCenter;