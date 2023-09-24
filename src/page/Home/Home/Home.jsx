import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from './Banner/Banner';
import Footer from '../../Footer/Footer';
import Category from '../Category/Category';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Category/>
        </div>
    );
};

export default Home;