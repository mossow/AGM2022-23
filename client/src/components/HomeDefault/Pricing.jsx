import React from 'react';
import { Link } from 'react-router-dom';
import lax from 'lax.js';
import LaxDiv from '../Shared/LaxDiv';
 
class Pricing extends React.Component {

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
            <section className="pricing-area ptb-120 bg-image">
                <div className="container">
                    <div className="section-title">
                        <span>Osalustasu</span>
                        <h2> <b>Maksmise</b> info</h2>
                        <p><b>Saaja:</b> Peep Bergstein</p>
                        <p><b>Konto nr:</b> ???</p>
                        <p><b>Selgitus:</b> “AGM 2023” ja inimese (inimeste) nimed</p>
                        <LaxDiv text="Pricing" dataPreset="driftLeft" />

                        <div className="bar"></div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">Aktiivne</h3>
                                    <div className="price-value"><sup>€</sup>50</div>
                                </div>
                                
                                <ul className="pricing-content">
                                    <li>RTE aktiivliige</li>
                                    <li>LCE aktiivliige</li>
                                    <li> .</li>
                                </ul>
                                
                        
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">RTE </h3>
                                    <div className="price-value"><sup>€</sup>120</div>
                                </div>
                                
                                <ul className="pricing-content">
                                    <li>Vanake</li>
                                    <li>Kandidaat</li>
                                    <li>Külaline</li>
                                </ul>
                                
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="pricing-table-box">
                                <div className="pricingTable-header">
                                    <h3 className="title">LCE </h3>
                                    <div className="price-value"><sup>€</sup>100</div>
                                </div>
                                
                                <ul className="pricing-content">
                                    <li>Eksleedi</li>
                                    <li>Kandidaatliige</li>
                                    <li>Külaline</li>
                                </ul>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
 
export default Pricing;