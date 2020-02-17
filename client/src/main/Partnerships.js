import React, { PureComponent } from 'react';
import { Helmet } from "react-helmet";
import Header from '../common/Header'
import Frederiksberg from '../images/frederiksberg-kirsebærvin.png';
import Holm from '../images/friis-holm.png';
import './sass/partnerships.scss'
import Banner from '../common/Banner';
import PartnerBanner from '../images/partnerships-banner.jpg';

class Partnerships extends PureComponent {
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
                    <title>Nordic Chocolatiers - Partnerships</title>
                </Helmet>
                <Header />
                <Banner background={PartnerBanner} positionTop="50%" positionLeft="50%" />
                <div className="partnerships-wrapper">
                        <div className="partnerships-title col">
                            <h1>Partnerships</h1>
                        </div>
                        <div className="partnerships-content col">
                            <p>Ingredients are acquired from trusted partners with the same mindset when it comes to quality in produce: World class
                            chocolate from Friis-Holm, unique salts from Icelandic Saltwerk; soft, sweet, organic birch sap from Voss Distilery in Iceland;
                            refined cherry juice from Frederiksdal Kirsebærvin, coldbrewed coffee from Ayoola and the purest, smooth water from
                            esteemed gourmet water supplier Inland Ice.
                            Collaboration between producers is vital to producing high quality end products. We take great care to ensure that we only
                            work with the best – the innovative seekers of perfection – who share our values and beliefs regarding quality, fair trade and
                            sustainability</p>    
                        </div>
                        <div className="partnerships-logos col">
                            <div className="logos">
                                <div className="logo-wrapper"><img src={Holm} /></div>
                                <div className="logo-wrapper"><img src={Frederiksberg} /></div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Partnerships