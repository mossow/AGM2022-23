import React from 'react';
import { Link } from 'react-router-dom';
import lax from 'lax.js';
import OwlCarousel from 'react-owl-carousel3';
import PlatinumSponsors from '../LaxButton/PlatinumSponsors';
import GoldSponsors from '../LaxButton/GoldSponsors';

const options = {
    loop: true,
    nav: false,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='icofont-rounded-left'></i>",
        "<i class='icofont-rounded-right'></i>"
    ],
    responsive: {
        0: {
            items:2,
        },
        400: {
            items:3,
        },
        576: {
            items:3,
        },
        768: {
            items:4,
        },
        1200: {
            items:5,
        }
    }
}
 
class Partner extends React.Component {

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
            <section className="partner-area ptb-120">
                <div className="container">
                    <div className="section-title">
                        <span>Sponsorid!</span>
                        <h2>Tule AGMi <b>Sponsoriks</b></h2>
                        <p><b>Kuld sponsor: </b> Mini sviit (4tk), üllatus hotelli toas, Sinu ettevõtte reklaam üritusel ja kodulehel </p>
                        <p><b>Platinum sponsor: </b> Ainuke Sviit hotellis,  üllatus hotelli toas,  Sinu ettevõtte reklaam üritusel ja kodulehel, </p>
                        <Link className="btn btn-primary">peep.bergstein@rte.ee</Link>

                        <div className="bar"></div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="partner-title platinum-sponsor">
                                <PlatinumSponsors />
                            </div>
                        </div>
                        <OwlCarousel 
                            className="platinum-partner-slides owl-carousel owl-theme"
                            {...options}
                        >   
                            <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                            
                                        <img src={require("../../assets/images/platinum-partner5.png")} alt="Partner Logo" />

                                </div>
                            </div>
                        </OwlCarousel>

                        <div className="col-lg-12">
                            <div className="border"></div>
                        </div>

                        <div className="col-lg-12">
                            <div className="partner-title gold-sponsor">
                                <GoldSponsors />
                            </div>
                        </div>

                        <OwlCarousel 
                            className="gold-partner-slides owl-carousel owl-theme"
                            {...options}
                        >
                            <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <Link to="/sponsors" target="_blank">
                                        <img src={require("../../assets/images/gold-partner1.png")} alt="Partner Logo" />
                                        <img src={require("../../assets/images/gold-partner1.png")} alt="Partner Logo" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <Link to="/sponsors" target="_blank">
                                        <img src={require("../../assets/images/gold-partner2.png")} alt="Partner Logo" />
                                        <img src={require("../../assets/images/gold-partner2.png")} alt="Partner Logo" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <Link to="/sponsors" target="_blank">
                                        <img src={require("../../assets/images/gold-partner3.png")} alt="Partner Logo" />
                                        <img src={require("../../assets/images/gold-partner3.png")} alt="Partner Logo" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <Link to="/sponsors" target="_blank">
                                        <img src={require("../../assets/images/gold-partner4.png")} alt="Partner Logo" />
                                        <img src={require("../../assets/images/gold-partner4.png")} alt="Partner Logo" />
                                    </Link>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="partner-item">
                                    <Link to="/sponsors" target="_blank">
                                        <img src={require("../../assets/images/gold-partner5.png")} alt="Partner Logo" />
                                        <img src={require("../../assets/images/gold-partner5.png")} alt="Partner Logo" />
                                    </Link>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Partner;