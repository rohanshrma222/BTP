import React from 'react'
import Hero from '../Hero';
import Cards from '../Cards';
import Footer from '../Footer';
import About from '../About';
import Navbar from '../Navbar';
import './Home.css';

function Home() {
    return (
        <div className="home-container">
            <Hero />
            <About />
            <Cards />
            <Footer />
        </div>
    )
}

export default Home;