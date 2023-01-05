import React from 'react';
import { Link } from 'react-router-dom';
 
class Footer extends React.Component {
    render(){
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>Asukoht </h3>
                                <span>
                                    <i className="icofont-calendar"></i> 09-11 Juuni, 2023
                                </span>

                                <p className="location">
                                    <i className="icofont-google-map"></i> Sadama 9/11, Haapsalu, 90502 Lääne maakond
                                </p>

                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-footer-widget">
                                <h3>RTE </h3>
                                <p>Ühine meie sotsiaalmeediaga!</p>
                                
                                <ul className="social-links">
                                    <li>
                                        <Link to="https://www.facebook.com/" className="facebook" target="_blank">
                                            <i className="icofont-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.linkedin.com/" className="linkedin" target="_blank">
                                            <i className="icofont-linkedin"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="https://www.instagram.com/" className="instagram" target="_blank">
                                            <i className="icofont-instagram"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-12">
                            <div className="copyright-area">
                                <div className="logo">
                                    <Link to="/">
                                        <img src={require("../../assets/images/logo.png")} alt="logo" />
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}
 
export default Footer;