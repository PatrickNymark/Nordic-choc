import React, { PureComponent } from 'react'
import Header from '../common/Header'
import './sass/team.scss'

import Peter from '../images/images.jpeg';

import AnimatedCard from '../common/AnimatedCard.js';

import { useSpring, animated } from 'react-spring'


class Team extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="team-page">
                    <div className="team-page-left">
                        <div className="image-wrapper">
                            <img src={Peter} />
                        </div>
                    </div>
                    <div className="team-page-right">
                        <div className="image-wrapper">
                        </div>

                    </div>
                </div>
                <div style={{ textAlign: 'center' }}>
                   
                </div>
            </div>
        )
    }
}

export default Team