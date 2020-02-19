import React, { PureComponent } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import './sass/homepage.scss'
import Menu from '../common/Menu'
import Logo from '../images/logo-light.png'
import WorldGold from '../images/world-gold-no-bg.png';
import ScandiGold from '../images/scandi-gold-no-bg.png';
import Brown from '../images/ayoola.jpg';
import Green from '../images/bergamot.jpg';
import White from '../images/inland_ice.jpg';
import Blue from '../images/bornholm2.jpg';
import LandingContentBanner from '../images/front-deco-banner.svg';

import SVG from 'react-inlinesvg';


class HomePage extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="home-wrapper">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Nordic Chocolatiers - Award Winning Chocolate</title>
                </Helmet>
                <div className="home-background"></div>
                <div className="home-header">
                    <div className="home-logo">
                        <Link to="/"><img src={Logo}></img></Link>
                    </div>
                    <div className="home-menu">
                        <Menu light={true}/>
                    </div>
                </div>
                <div className="home-headline">
                    <div>
                        <h1>SUBLIME OR BUST</h1>
                    </div>
                </div>
                <div className="home-awards">
                    <div className="home-award">
                        <img src={WorldGold} />
                    </div>
                    <div className="home-award">
                        <img src={ScandiGold} />
                    </div>
                </div>
                <div className="break"></div>
                <div className="home-content">
                    <div className="landing-content-banner">
                        <SVG className="landing-banner" src={LandingContentBanner} />
                    </div>
                    <div className="landing-wrapper">
                        <div className="landing-content">
                            <div>
                                <h1>CULINARY ADVENTURES OF THE COCOA NUT</h1>
                                <h2>Icelandic water based Chocolate made by Nordic Chocolatiers</h2>
                                <p>Morbi a orci faucibus, placerat velit aliquet, 
                                sagittis mi. Quisque finibus risus non tempus blandit. Maecenas posuere eros ex, a
                                 eleifend nibh tempor vitae. Aenean imperdiet est sed scelerisque fringilla. In blandit ipsum eu 
                                 vestibulum rhoncus. Quisque dapibus ligula eget augue luctus tristique. Donec convallis sit amet odio in faucibus.</p>
                            </div>
                        </div>
                        <div className="landing-image-collage">
                            <img src={Brown} />
                            <img src={Green} />
                            <img src={Blue} />
                            <img src={White} />


                        </div>4
                    </div>
                </div>
            </div>
        )
    }
}

export default HomePage