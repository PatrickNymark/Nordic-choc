import React, { PureComponent } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import './sass/homepage.scss'
import Menu from '../common/Menu'
import Logo from '../images/logo-light.png'

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

                <div className="home-content">
                    <p>Content</p>
                </div>
            </div>
        )
    }
}

export default HomePage