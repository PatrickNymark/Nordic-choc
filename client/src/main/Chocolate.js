import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import Header from '../common/Header'
import './sass/chocolates.scss';
import Banner from '../common/Banner';
import ChocolateBanner from '../images/chocolates-banner.jpg'


class Chocolate extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Nordic Chocolatiers - The Chocolate</title>
                </Helmet>
                <Header />
                <Banner background={ChocolateBanner} positionTop="50%" positionLeft="50%" />
                <div className="chocolates-content">
                    <div className="chocolate-title col">
                        <h1>The Chocolate</h1>
                    </div>
                    <div className="chocolate-content col">
                        <p>We take great care in finding and using the best chocolate we can find. For us, chocolate is simply not just chocolate. Its not just using "good dark chocolate". We are proud to say who and what we use. Every chocolate maker uses time and energy in making some of the worlds best chocolate. So when we make our pieces, we strive to combine the right chocolate with the right ingredients. This is why we don't just use a single dark chocolate. And the hunt for good chocolate is part of our journey, so that we also can expand our horizons. The O'Payo from Friis-Holm for the Inland Ice or the La Dalia for our Olive oil pieces. Our new Blackberry Terragon is smooth with Virunga from Original Beans. Or using Tien Giang 80% from Marou for the acidity of the apples for the Apple Infusion piece.</p>
                        <ul>
                            <li><Link to="/pieces">The Pieces <span>&rarr;</span></Link> </li>
                        </ul>    
                    </div>
                </div>
            </div>
        )
    }
}

export default Chocolate