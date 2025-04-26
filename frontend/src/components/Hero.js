import React from 'react'
import { Button } from './Button'
import './Hero.css';
import videos from '../videos/cargo1.mp4';
import Typical from 'react-typical'
import Navbar from './Navbar';
function Hero() {
    return (
        <div className='hero-container'>
            <Navbar />
            <img src="/homepage.jpg" alt="Hero Background" className="hero-image" />

            <h1>Ledger
                <Typical className="text-anim"
                    loop={Infinity}
                    wrapper='b'
                    steps={[
                        'FLOW',
                        1000,
                        '',
                        1000,
                        'FLOW',
                        1000
                    ]}
                />
            </h1>

            <p>Simplify your supply chain, amplify your success</p>
            
        </div>
    );
};


export default Hero;
