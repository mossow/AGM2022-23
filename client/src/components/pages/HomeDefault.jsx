import React from 'react';
import MainBanner from '../HomeDefault/MainBanner';
import About from '../HomeDefault/About';
import WhyUs from '../Common/WhyUs';
import Speakers from '../HomeDefault/Speakers';
import GoTop from '../Shared/GoTop';
import Footer from '../Common/Footer';
import EventSchedules from '../HomeDefault/EventSchedules';
import FunFact from '../Common/FunFact';
import Pricing from '../HomeDefault/Pricing';
import lax from 'lax.js';
import Partner from '../Common/Partner';
import LatestNews from '../HomeDefault/LatestNews';
import BuyTicket from '../Common/BuyTicket';
import Subscribe from '../Common/Subscribe';
 
class HomeDefault extends React.Component {
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
            <React.Fragment>
        
                <MainBanner />
                 {/* kommentaar */}
                <About />
            
                <FunFact />
          
                <EventSchedules />

             
              
                <Pricing />
             {/* 
                <BuyTicket />
                <Partner /> */}
          
                <LatestNews />
           



                <Footer /> 

                 Back Top top 
                <GoTop scrollStepInPx="50" delayInMs="16.66" /> 
            </React.Fragment>
        );
    }
}
 
export default HomeDefault;