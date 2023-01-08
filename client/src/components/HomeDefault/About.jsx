import React from 'react';
import lax from 'lax.js';
import { Link } from 'react-router-dom';
import LaxButton from '../Shared/LaxButton';
 
class About extends React.Component {
    
    constructor(props) {
        super(props)
        lax.setup()
    
        document.addEventListener('scroll', function(x) {
            lax.update(window.scrollY)
        }, false)
    
        lax.update(window.scrollY)
    }

    render(){
        return (
            <section id="majutus" className="about-area ptb-120 bg-image">
                <div className="container">
                    <div className="row h-100 align-items-center">
                        <div className="col-lg-6">
                            <div className="about-content">
                                <span>Majutus</span>
                                <h2>Hestia Hotel Haapsalu SPA</h2>
                                <p>Majutuse peab iga osaleja broneerima ise ....</p>
                                
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

                                <div className="signature">
                                    <img src={require("../../assets/images/signature.png")} alt="signature" />
                                </div>
                                <a href='https://hestiahotels.com/haapsaluspa/' target="_blank" rel="noreferrer"  className="btn btn-primary" >Koduleht<i className="icofont-double-right"></i></a>
                                <a href='https://www.booking.com/hotel/ee/hestia-hotel-haapsalu-spa.et.html' className="btn btn-secondary" >Booking</a>

                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="about-image">
                                <img src={require("../../assets/images/about1.jpg")} className="about-img1" alt="about" />

                                <img src={require("../../assets/images/about2.jpg")} className="about-img2" alt="about" />

                                <img src={require("../../assets/images/shapes/5.png")} className="shape-img" alt="about" />
                                
            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default About;