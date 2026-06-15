import React, { use } from 'react';
import LatestProductCard from './LatestProductCard';

const LatestProduct = ({latestProductPromise}) => {
    const products = use(latestProductPromise);
   
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                products.map(product => <LatestProductCard  key={product._id} product={product}></LatestProductCard>)
            }
        </div>
    );
};

export default LatestProduct;