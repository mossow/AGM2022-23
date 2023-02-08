import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel3';
import lax from 'lax.js';
import LaxDiv from '../Shared/LaxDiv';

const options = {
    loop: true,
    nav: false,
    dots: true,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    navText: [
        "<i class='icofont-rounded-left'></i>",
        "<i class='icofont-rounded-right'></i>"
    ],
    responsive:{
        0: {
            items:1,
        },
        768: {
            items:2,
        },
        1200: {
            items:3,
        }
    }
}
 
class LatestNews extends React.Component {
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
            <section className="blog-area ptb-120 bg-image">
                <div className="container">
                    <div className="section-title">
                        <span>Kontaktid!</span>
                        <h2>Võte meiega <b>Ühendust</b></h2>

                        <LaxDiv text="Contact" dataPreset="driftLeft" />


                        <div className="bar"></div>
                    </div>

                    <div className="row">
                        <OwlCarousel 
                            className="blog-slides owl-carousel owl-theme"
                            {...options}
                        >

                            <div className="col-lg-12 col-md-12">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <Link to="/single-blog"><img src={require("../../assets/images/annika.jpg")} alt="blog" /></Link>

                                        <div className="post-tag">
                                        <Link>Majutus</Link>
                                        </div>
                                    </div>

                                    <div className="blog-post-content">
                                        <h3>Annika Stüff</h3>
                                        <p><b>Telefon:</b>+372 5664 7671</p>
                                        <p><b>Email:</b>annika.styff@gmail.com</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <Link to="/single-blog"><img src={require("../../assets/images/majutus.jpg")} alt="blog" /></Link>

                                        <div className="post-tag">
                                        <Link>Üldine</Link>
                                        </div>
                                    </div>

                                    <div className="blog-post-content">
                                        <h3> Silver Sarapuu </h3>
                                        <p><b>Telefon:</b>+372 5363 5372</p>
                                        <p><b>Email:</b> silver.sarapuu@rte.ee</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12">
                                <div className="single-blog-post">
                                    <div className="blog-image">
                                        <Link to="/single-blog"><img src={require("../../assets/images/peep.jpg")} alt="blog" /></Link>

                                        <div className="post-tag">
                                        <Link>Maksmine</Link>
                                        </div>
                                    </div>

                                    <div className="blog-post-content">
                                        <h3> Peep Bergsten </h3>
                                        <p><b>Telefon:</b>+372 5696 5885</p>
                                        <p><b>Email:</b>peep.pergsten@rte.ee</p>
                                    </div>
                                </div>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default LatestNews;