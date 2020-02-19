import React, { PureComponent } from 'react';
import { Helmet } from "react-helmet";
import axios from 'axios';
import Header from '../common/Header';
import Muscovado from '../images/muscovado-caramel.jpg'
import Bergamot from '../images/bergamot.jpg'
import Iceland from '../images/inland_ice.jpg'
import Island from '../images/bornholm3.jpg'
import './sass/pieces.scss'

import $ from 'jquery';

class Pieces extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            pieces: []
        }
    }


    componentWillMount() {
        axios.get('/api/pieces').then(pieces => {
            this.setState({ 
                pieces: pieces.data
            });
        });


        


    }


    render() {
        return (
            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Nordic Chocolatiers - Pieces</title>
                </Helmet>
                <Header />
                <div className="pieces-wrapper">
                    <div className="pieces-title col">
                        <h1>The Pieces</h1>
                    </div>
                    <div className="pieces-content col">
                      {/*  {this.state.pieces.map(piece => {
                            return (
                                <div className="pieces" key={piece._id}>
                                    <div className="piece-logo"><img src={Muscovado}></img></div>
                                    <div className="piece-content">
                                        <h3>Muscovado Caramel</h3>
                                        <p>Quisque id lacus nisl. Mauris et posuere erat. Aenean et sodales elit. Vivamus eget libero ornare, maximus lacus sit amet, cursus neque. Phasellus vel urna eget diam bibendum dignissim sed quis ante. Fusce maximus libero vel mi imperdiet, ornare convallis eros ornare. Pellentesque molestie risus at commodo volutpat. Proin pellentesque risus et leo mollis volutpat.</p>
                                    </div>
                                </div>
                            )})} */ }
                        <div className="pieces">
                            <div className="piece-logo"><img src={Muscovado}></img></div>
                            <div className="piece-content">
                                <h3>Muscovado Caramel</h3>
                                <div className="piece-content-text">
                                    <p>Quisque id lacus nisl. Mauris et posuere erat. Aenean et sodales elit. Vivamus eget libero ornare, maximus lacus sit amet, cursus neque. Phasellus vel urna eget diam bibendum dignissim sed quis ante. Fusce maximus libero vel mi imperdiet, ornare convallis eros ornare. Pellentesque molestie risus at commodo volutpat. Proin pellentesque risus et leo mollis volutpat.</p>
                                </div>
                                <p>More &rarr;</p>
                            </div>
                        </div>
                        <div className="pieces">
                            <div className="piece-logo"><img src={Bergamot}></img></div>
                            <div className="piece-content">
                                <h3>Olive Oil Bergamot</h3>
                                <p>Quisque id lacus nisl. Mauris et posuere erat. Aenean et sodales elit. Vivamus eget libero ornare, maximus lacus sit amet, cursus neque. Phasellus vel urna eget diam bibendum dignissim sed quis ante. Fusce maximus libero vel mi imperdiet, ornare convallis eros ornare. Pellentesque molestie risus at commodo volutpat. Proin pellentesque risus et leo mollis volutpat.</p>
                            </div>
                        </div>
                        <div className="pieces">
                            <div className="piece-logo"><img style={{ position: 'relative', top: '-50px'}} src={Iceland}></img></div>
                            <div className="piece-content">
                                <h3>Inland Ice</h3>
                                <p>Quisque id lacus nisl. Mauris et posuere erat. Aenean et sodales elit. Vivamus eget libero ornare, maximus lacus sit amet, cursus neque. Phasellus vel urna eget diam bibendum dignissim sed quis ante. Fusce maximus libero vel mi imperdiet, ornare convallis eros ornare. Pellentesque molestie risus at commodo volutpat. Proin pellentesque risus et leo mollis volutpat.</p>
                            </div>
                        </div>
                        <div className="pieces">
                            <div className="piece-logo"><img src={Bergamot}></img></div>
                            <div className="piece-content">
                                <h3>Olive Oil Bergamot</h3>
                                <p>Quisque id lacus nisl. Mauris et posuere erat. Aenean et sodales elit. Vivamus eget libero ornare, maximus lacus sit amet, cursus neque. Phasellus vel urna eget diam bibendum dignissim sed quis ante. Fusce maximus libero vel mi imperdiet, ornare convallis eros ornare. Pellentesque molestie risus at commodo volutpat. Proin pellentesque risus et leo mollis volutpat.</p>
                            </div>
                        </div>
                        <div className="pieces">
                            <div className="piece-logo"><img src={Island}></img></div>
                            <div className="piece-content">
                                <h3>Island Water</h3>
                                <p>Quisque id lacus nisl. Mauris et posuere erat. Aenean et sodales elit. Vivamus eget libero ornare, maximus lacus sit amet, cursus neque. Phasellus vel urna eget diam bibendum dignissim sed quis ante. Fusce maximus libero vel mi imperdiet, ornare convallis eros ornare. Pellentesque molestie risus at commodo volutpat. Proin pellentesque risus et leo mollis volutpat.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pieces