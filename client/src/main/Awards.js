import React, { PureComponent } from 'react';
import { Helmet } from "react-helmet";
import { awardService } from './services/award.service';
import './sass/awards.scss'
import Header from '../common/Header'
import Banner from '../common/Banner'
import AwardBanner from '../images/bergamot.jpg'
import AwardImage from '../images/ica-prize-logo-2019-gold-world-rgb.jpg'
import GoldScandi2019 from '../images/ica-prize-logo-2019-gold-world-rgb.jpg'


class Awards extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            awards: []
        }
    }

    componentDidMount() {
        awardService.getAll().then(awards => {
            this.setState({
                awards
            })
        });
    }

    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Nordic Chocolatiers - Awards</title>
                </Helmet>
                <Header />
                <Banner background={AwardBanner} image={AwardImage} positionTop="50%" positionLeft="43%" />
                <div className="awards-page">
                    <div className="awards-header">
                        <div className="awards-header-title">
                            <h1>The Awards</h1>
                        </div>

                        <div className="awards-header-content">
                            <p>Our chocolates have won numerous awards at national and international competitions. We have won for our individual
                            chocolates, but have also won awards for our chocolate spread, inclusion and infusion bars and for our pålægschokolade.
                            Bringing out the most wonderful aromas in the best ingredients, nature has to offer.
                            Handcrafted artisanal chocolates with an attitude.</p>
                        </div>
                    </div>
                    <div className="awards-content-wrapper">
                        {/* <div className="awards-content">
                            <div className="awards-content-title">
                                <h4>2019</h4>
                            </div>
                            <div className="awards-wrapper">
                                <div className="award-wrapper">
                                    <div className="award-img">
                                        <img src={GoldScandi2019} />
                                    </div>    
                                </div>
                                <div className="award-wrapper">
                                    <div className="award-img">
                                        <img src={GoldScandi2019} />
                                    </div>    
                                </div>
                                <div className="award-wrapper">
                                    <div className="award-img">
                                        <img src={GoldScandi2019} />
                                    </div>    
                                </div>
                                <div className="award-wrapper">
                                    <div className="award-img">
                                        <img src={GoldScandi2019} />
                                    </div>    
                                </div>
                            </div>
                        </div>
                        <div className="awards-content">
                            <div className="awards-content-title">
                                <h4>2018</h4>
                            </div>
                            <div className="awards-wrapper">
                                <div className="award-wrapper">
                                    <div className="award-img">
                                        <img src={GoldScandi2019} />
                                    </div>    
                                </div>
                                <div className="award-wrapper">
                                    <div className="award-img">
                                        <img src={GoldScandi2019} />
                                    </div>    
                                </div>
                                <div className="award-wrapper">
                                    <div className="award-img">
                                        <img src={GoldScandi2019} />
                                    </div>    
                                </div>
                                <div className="award-wrapper">
                                    <div className="award-img">
                                        <img src={GoldScandi2019} />
                                    </div>    
                                </div>
                            </div>
                        </div> */}
                        <img className="award-line-up" src="https://res.cloudinary.com/dw8noz36h/image/upload/v1582892412/award_line-up__2_lq0jyp.svg"  />
                    </div>
                </div>
            </div>
        )
    }
}

export default Awards