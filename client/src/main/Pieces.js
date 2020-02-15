import React, { PureComponent } from 'react'
import axios from 'axios';
import Header from '../common/Header';
import Muscovado from '../images/muscovado-caramel.jpg'
import './sass/pieces.scss'

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
                                <p>Quisque id lacus nisl. Mauris et posuere erat. Aenean et sodales elit. Vivamus eget libero ornare, maximus lacus sit amet, cursus neque. Phasellus vel urna eget diam bibendum dignissim sed quis ante. Fusce maximus libero vel mi imperdiet, ornare convallis eros ornare. Pellentesque molestie risus at commodo volutpat. Proin pellentesque risus et leo mollis volutpat.</p>
                            </div>
                        </div>
                        <div className="pieces">
                            <div className="piece-logo"><img src={Muscovado}></img></div>
                            <div className="piece-content">
                                <h3>Muscovado Caramel</h3>
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