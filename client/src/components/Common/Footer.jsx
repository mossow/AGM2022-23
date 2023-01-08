import React from 'react';
import { Link } from 'react-router-dom';
 
class Footer extends React.Component {
    render(){
        return (
            <footer className="footer-area">
                <div className="container">
                    <div className="row">
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