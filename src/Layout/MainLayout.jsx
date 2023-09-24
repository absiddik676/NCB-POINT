import React from 'react';
import Home from '../page/Home/Home/Home';
import Navbar from '../page/Home/Navbar/Navbar';
import Footer from '../page/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
           <Navbar/>
           <Outlet/>
           <Footer/>
        </div>
    );
};

export default MainLayout;