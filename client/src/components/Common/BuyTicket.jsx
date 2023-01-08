import React from 'react';
import { Link } from 'react-router-dom';
 
class BuyTicket extends React.Component {
    render(){
        return (
            <section className="buy-tickets-area ptb-120">
                <div className="buy-tickets">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <span>Welcome night pidu!</span>
                                    <h2>KIRJELDUS PEO TEEMA KOHTA</h2>
                            
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
                                </div>
                            </div>

                            <div className="col-lg-6">
                                <div className="buy-ticket-btn">
                                <a href='https://docs.google.com/forms/d/e/1FAIpQLSfge2pRd5IfcbDtxn9djnv0HAfzrtA042tFOrFVZHPX4_vTMQ/viewform' className="btn btn-primary">Registreeri</a>  
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default BuyTicket;