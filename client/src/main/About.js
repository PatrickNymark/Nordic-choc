import React, { PureComponent } from 'react'
import Menu from '../common/Menu';
import Logo from '../images/logo-dark.png'
import { Link } from 'react-router-dom';
import './sass/about.scss'
import Header from '../common/Header';
import Banner from '../common/Banner';
import AboutBanner from '../images/jb_wplusb7033.png';

class About extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Banner background={AboutBanner} positionTop="50%" positionLeft="50%" />
                <div className="about-content">
                    <div className="content-info">
                        <h1>About</h1>
                    </div>
                    <div className="content-pieces">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                        <ul>
                            <li><Link to="/philosophy">Philosophy</Link></li>
                            <li><Link to="/philosophy">The Team</Link></li>
                            <li><Link to="/philosophy">The Films</Link></li>
                        </ul>
                    </div>
                </div>
                <div style={{ minHeight: '500px', paddingTop: '200px'}}>More content</div>
            </div>
        )
    }
}

export default About