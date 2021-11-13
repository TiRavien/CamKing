import React from 'react';
import Navber from '../../Shared/Navber/Navber';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Products from '../Products/Products';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Navber />
            <Banner></Banner>
            <Products></Products>
            <Review></Review>
            <Footer />
        </div>
    );
};

export default Home;