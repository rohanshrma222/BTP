import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.css'
import { faIndustry, faPlaneDeparture, faShip, faTrainSubway, faTruckField, faWarehouse } from '@fortawesome/free-solid-svg-icons'
import video2 from '../../videos/video1.mp4'
import { Link } from 'react-router-dom'
const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  // useEffect(() => {
  //   return setTimeout(() => {
  //     setLetterClass('text-animate-hover')
  //   }, 3000)
  // }, [])ß

  return (
    <>
      <div className="about-page">
        <img src="/about-us1.png" alt="About-us Background" className="about-us-image" />
        <div className="text-zone">
          <h1 className='text-about'>
            ABOUT US
          </h1>
          <br />  <br />
          <p className='top_para'>
          We are using innovative technologies to improve the efficiency and transparency of supply chain management, which can benefit businesses by helping them better serve their customers and stakeholders.
          We have designed an approach to help small startup ventures in automating their Supply Chain in order to maximise their profit. Our model includes various Supply Chain Services like Demand Projection and Analysis, Product Lineage Tracking and a marketplace to connect ventures to the wholesale Sellers.
          </p>
              <div className="stage-cube-cont">
              <div className="cubespinner">
                <div className="face1">
                  <FontAwesomeIcon icon={faTruckField} color="#EB455F " />
                </div>
                <div className="face2">
                  <FontAwesomeIcon icon={faWarehouse} color="#EB455F " />
                </div>
                <div className="face3">
                  <FontAwesomeIcon icon={faPlaneDeparture} color= "#EB455F" />
                </div>
                <div className="face4">
                  <FontAwesomeIcon icon={faShip} color="#EB455F " />
                </div>
                <div className="face5">
                  <FontAwesomeIcon icon={faTrainSubway} color="#EB455F " />
                </div>
                <div className="face6">
                  <FontAwesomeIcon icon={faIndustry} color="#EB455F " />
                </div>
              </div>
            </div>
        </div>

       


      </div>
      {/* <Loader type="pacman" /> */}
    </>
  )
}

export default About
