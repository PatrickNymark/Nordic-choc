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
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <ul>
                            <li><Link to="/philosophy">Philosophy <span>&rarr;</span></Link></li>
                            <li><Link to="/team">The Team <span>&rarr;</span></Link></li>
                            <li><Link to="/philosophy">The Films <span>&rarr;</span></Link></li>
                        </ul>
                    </div>
                </div>
                <div className="philosophy-wrapper">
                    <div className="philosophy-content-video">
                        {this.state.videoFinished && 
                            <div className="video-overlay">
                                Play
                            </div>}
                        <ReactPlayer onEnded={this.handleVideo} url='https://res.cloudinary.com/dw8noz36h/video/upload/v1582120088/Peter_Svenningsen_CHERRY_v19_Online_YT_Netmix_online-video-cutter.com_lhuqls.mp4' playing />
                    </div>
                    <div className="philosophy-content-description">
                        <div className="philosophy-description-content">
                            <h1>Philosophy</h1>
                            <p>Holding on to the High-end, Old-world and the feel of starched damask cloth as a backdrop for a taste universe going its own
                            new ways. One must want to put it in ones mouth (and everything that applies to what we do and how we will in the future!).
                            No fillers, no bullshit, no gilded crumbs - maintain and refine the allegiance to the purest and best raw materials and the clean
                            process in production. Razor-sharp on product, variants and flavour nuances. We don’t run after the herd. We do not cater for
                            the broad taste.</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About