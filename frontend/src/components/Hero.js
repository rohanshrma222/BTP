import React, { useEffect } from 'react'
import { Button } from './Button'
import './Hero.css';
import videos from '../videos/cargo1.mp4';
import Typical from 'react-typical'
import Navbar from './Navbar';
function Hero() {

    useEffect(() => {
        const background = document.getElementById('hero-background');

        const handleMouseMove = (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 50; // -20 to +20 px
            const y = (e.clientY / window.innerHeight - 0.5) * 50;
            background.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
          };
          

        window.addEventListener('mousemove', handleMouseMove);
    
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, []);

    return (
        <div className='hero-container'>
            <Navbar />
            <img src="/homepage.jpg" alt="Hero Background" className="hero-image" id="hero-background" />


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
