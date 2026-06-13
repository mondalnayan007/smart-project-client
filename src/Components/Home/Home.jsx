import React from 'react';
import LatestProduct from '../LatestProduct/LatestProduct';

const latestProductPromise = fetch('http://localhost:3000/latest-products').then(res=>res.json());

const Home = () => {

    
   
    return (
        <div>
            home

            <LatestProduct latestProductPromise={latestProductPromise}></LatestProduct>
        </div>
    );
};

export default Home;