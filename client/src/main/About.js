import React, { PureComponent } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import './sass/about.scss'
import Header from '../common/Header';
import Banner from '../common/Banner';
import AboutBanner from '../images/jb_wplusb7033.png';
import ReactPlayer from 'react-player'


class About extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            videoFinished: false
        }
    }

    handleVideo = () => {
        this.setState({ videoFinished: !this.state.videoFinished })
    }

    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <meta name="title" content="Nordic Chocolatiers - Water based chocolate" />
                    <meta name="description" content="Award-winning chocolatier Peter Svenningsen constantly strives for the ultimate chocolate experience. Seeking to promote
                    and accentuate the divine nuances of good chocolate, he is innovative and uncompromising both in his selection of
                    ingredients and in his craftsmanship." /> 
                    <title>Nordic Chocolatiers - About</title>
                </Helmet>
                <Header />
                <Banner background={AboutBanner} positionTop="50%" positionLeft="50%" />
                <div className="about-content">
                    <div className="content-info">
                        <h1>About</h1>
                    </div>
                    <div className="content-pieces">
                        <p>Holding on to the High-end, Old-world and the feel of starched damask cloth as a backdrop for a taste universe going its own new ways. One must want to put it in ones mouth (and everything that applies to what we do and how we will in the future!). No fillers, no bullshit, no gilded crumbs - maintain and refine the allegiance to the purest and best raw materials and the clean process in production. Razor-sharp on product, variants and flavour nuances. We don’t run after the herd. We do not cater for the broad taste.</p>
                        <p className="content-pieces-bold">Sublime or bust.</p>
                        <p>All ingredients are chosen in respect to nature and environment. Finding local, organic produce of the highest quality. Ensuring that all produce is of the best quality. Whenever possible, organic ingredients are chosen.
                        Collaboration between producers is vital to producing high quality end products. We take great care to ensure that we only work with the best – the innovative seekers of perfection – who share our values and beliefs regarding quality, fair trade and sustainability. Combining Scandinavian simplicity and quality into a local and global product.</p>
                        <p></p>
                        <ul>
                            <li><Link to="/team">The Team <span>&rarr;</span></Link></li>
                            <li><Link to="/films">The Films <span>&rarr;</span></Link></li>
                        </ul>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default About