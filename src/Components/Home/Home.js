import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Mywork from '../MyWork/Mywork';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Mywork></Mywork>
            <About></About>
            <Footer></Footer>
        </div>
    );
};

export default Home;