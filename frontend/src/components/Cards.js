import React from 'react'
import CardItem from './CardItem'
import './Cards.css'
import video from '../videos/video1.mp4'
import pic1 from '../images/4020769.jpg'
import pic2 from '../images/product_track.jpg'
import pic3 from '../images/marketplace.jpg'
import pic4 from '../images/datacompression.jpg'


function Cards() {
    return (
        <div className='cards'>

            <img src="/Cards.png" alt="About-us Background" className="about-us-image" />
            <h1 className='try'>TRY US OUT</h1>
            
            <div className='cards__container'>
                <div className='cards__wrapper'>
                    <ul className='cards__items'>
                        <a href='https://gleeful-gumption-a9d8b1.netlify.app/'>

                            <CardItem
                                src={pic2}
                                text={<a className='links' href='https://gleeful-gumption-a9d8b1.netlify.app/'>Administration Panel</a>}
                                label='Services'
                            />
                        </a>
                        <a href="https://dapper-gelato-31f330.netlify.app/">
                        <CardItem
                            src={pic3}
                            text={<a className='links' href="https://dapper-gelato-31f330.netlify.app/">Customer Panel</a>}
                            label='product'
                        />
                        </a>
                        <a href="https://dapper-gelato-31f330.netlify.app/">
                        <CardItem
                            src={pic4}
                            text={<a className='links' href="https://tanmay-0017-demand-forecasting-main-l0arkt.streamlit.app/">Data Compression</a>}
                            label='product'
                        />
                        </a>
                        <a href="https://dapper-gelato-31f330.netlify.app/">
                        <CardItem
                            src={pic1}
                            text={<a className='links' href="https://tanmay-0017-demand-forecasting-main-l0arkt.streamlit.app/">Demand Forecasting</a>}
                            label='product'
                        />
                        </a>

                    </ul>
                </div>
            </div>
            <p>
                ~CONTRIBUTORS:<br />
                <br />
                Rohan -  frontend + backend<br />
                Tanmay - blockchain + AI<br />
                Dipesh - Backend
            </p>
        </div>
    )
}

export default Cards
