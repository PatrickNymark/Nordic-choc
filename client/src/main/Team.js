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
                            <img src="https://res.cloudinary.com/dw8noz36h/image/upload/v1582884462/peter_h2ziwt.jpg" />
                            <h1>PETER SVENNINGSEN - GASTRONOMIC CHOCOLATE NERD</h1>
                            <p>Award-winning chocolatier Peter Svenningsen constantly strives for the ultimate chocolate experience. Seeking to promote and accentuate the divine nuances of good chocolate, he is innovative and uncompromising both in his selection of ingredients and in his craftsmanship. </p>
                            <p>Every piece is carefully designed to satisfy both visually and in taste. With an uncompromising approach to raw ingredients, the artisanal chocolates are pure, simple, and exceptional. For many years, the production of handcrafted artisanal chocolates was a hobby preserved for friends and family. However, Peter was convinced to submit his chocolate to the International chocolate awards and won gold – world’s best chocolate. </p>
                        </div>

                    </div>
                    <div className="team-page-right">
                        <div className="image-wrapper">
                            <img src="https://res.cloudinary.com/dw8noz36h/image/upload/v1582884462/jakob_rx8dnn.jpg" />
                            <h1>JAKOB ØRSTRUP - FOODIE, ARTISAN & CULINARY INNOVATO</h1>
                            <p>With his uncompromising approach, Jakob always seeks to unleash the full flavour potential of any of the carefully selected ingredients he works with. An insatiable gastronomic curiosity and fearless play with food characterizes Jacob, and he is not afraid to break with traditional cuisines and conventions in the art of cooking. An approach to gastronomy that more than once has led Jakob into the role of respected adviser to well-known chefs and renowned food companies.</p>
                            <p>Simplicity, purity & honesty characterize Jakob’s food, and since 2018, also his chocolates.</p>
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