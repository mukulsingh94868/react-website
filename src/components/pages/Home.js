import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection/HeroSection';
import Cards from '../Card/Cards';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
            <HeroSection />
            <Cards />
            <Footer />
        </>
    )
}

export default Home;