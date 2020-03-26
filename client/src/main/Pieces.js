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
                            <div className="piece-image">
                                <div className="piece-logo"><img src="https://res.cloudinary.com/dw8noz36h/image/upload/v1582883125/muscovado_fvhu6v.jpg"></img></div>
                            </div>
                            <div className="piece-content">
                                <h3>Muscovado Caramel</h3>
                                <div className="piece-content-text">
                                    <p>Deep chocolate-enriched caramel from dark muscovado cane sugar – with a pinch of aromatic sea salt from Saltwerk in Iceland. Shell is 70% dark La Dalia from Friis-Holm, and the caramel is enriched with Virunga Dark Milk from Original Beans.</p>
                                </div>
                            </div>
                        </div>
                        <div className="pieces">
                            <div className="piece-image">
                                <div className="piece-logo"><img src="https://res.cloudinary.com/dw8noz36h/image/upload/v1582883124/bergamot_al3ola.jpg"></img></div>
                            </div>
                            <div className="piece-content">
                                <h3>Olive Oil Bergamot</h3>
                                <p>Creamy, intense dark ganache, smoothed with a dash of olive oil and lightly flavoured with bergamot. Water-based on 70% dark O’Payo from Friis-Holm. Infused with olive oil and organic bergamot.</p>
                            </div>
                        </div>
                        <div className="pieces">
                            <div className="piece-image">
                                <div className="piece-logo"><img src={Iceland}></img></div>
                            </div>
                            <div className="piece-content">
                                <h3>Inland Ice</h3>
                                <p>Smooth, cool and clean water ganache based on 70% dark O’payo from Friis-Holm and the purest crisp water from Greenland. A deceptively simple piece, where the water promotes and enhances the chocolate flavours while giving a cool, smooth texture to the ganache.</p>
                            </div>
                        </div>
                        <div className="pieces">
                            <div className="piece-image">
                                <div className="piece-logo"><img src="https://res.cloudinary.com/dw8noz36h/image/upload/v1582883124/cherry_heht00.jpg"></img></div>
                            </div>
                            <div className="piece-content">
                                <h3>Cherry Infusion</h3>
                                <p>Beautiful ganache infused with the raw juices of the cherries from Frederiksdal Cherrywine. The cherries give the piece balanced acidity along with a world of taste notes, complementing and accentuating the chocolate flavours from  a mix of 70% and 60% La Dalia from Friis-Holm.</p>
                            </div>
                        </div>
                        <div className="pieces">
                            <div className="piece-image">
                                <div className="piece-logo"><img src="https://res.cloudinary.com/dw8noz36h/image/upload/v1582883124/island_water_v7lnhc.jpg"></img></div>
                            </div>
                            <div className="piece-content">
                                <h3>Island Water</h3>
                                <p>Pure water ganache based on water from an old source on the island of Bornholm in Denmark. The water ganache is made with O'Payo organic chocolate from Friis-Holm.</p>
                            </div>
                        </div>
                        <div className="pieces">
                            <div className="piece-image">
                                <div className="piece-logo"><img src="https://res.cloudinary.com/dw8noz36h/image/upload/v1582883124/blueberry_wdg6o8.jpg"></img></div>
                            </div>
                            <div className="piece-content">
                                <h3>Blueberry Rosemary</h3>
                                <p>Fruity smooth ganache of intense, dark Friis-Holm chocolate and fresh blueberries infused with fresh rosemary, adding spice to sweetness and accentuating the fruity aromas of the chocolate. A Nordic Chocolatiers classic </p>
                            </div>
                        </div>
                        <div className="pieces">
                            <div className="piece-image">
                                <div className="piece-logo"><img src="https://res.cloudinary.com/dw8noz36h/image/upload/v1585252007/blackberry_qtt3mv.jpg"></img></div>
                            </div>
                            <div className="piece-content">
                                <h3>Blackberry Tarragon</h3>
                                <p>A new piece in the process. As with the blueberry piece, blackberries are cooked together with fresh tarragon. The taste? We don’t quite know yet … using Virunga chocolate from Original Beans.</p>
                            </div>
                        </div>
                        <div className="pieces">
                            <div className="piece-image">
                                <div className="piece-logo"><img src="https://res.cloudinary.com/dw8noz36h/image/upload/v1585252007/soumak_p6slns.jpg"></img></div>
                            </div>
                            <div className="piece-content">
                                <h3>Sumac Almond crunch</h3>
                                <p>Also a new creation. A nice mix of worlds: an almond brittle, crushed and drizzled into dark chocolate shells. Engulfed with a pure Inland Ice water ganache, spiced up with sumac for a little after kick … </p>
                            </div>
                        </div>
                        <div className="pieces">
                            <div className="piece-image">
                                <div className="piece-logo"><img src="https://res.cloudinary.com/dw8noz36h/image/upload/v1582883124/pecan_jfhbgn.jpg"></img></div>
                            </div>
                            <div className="piece-content">
                                <h3>Spicy Pecan</h3>
                                <p>Organic pecans caramelized with star anis, liquorice root and Icelandic sea salt. Engulfed in pure dark chocolate. A nice mildly spicy piece to go with an espresso and a good calvados. Mmm …</p>
                            </div>
                        </div>
                        <div className="pieces">
                            <div className="piece-image">
                                <div className="piece-logo"><img src="https://res.cloudinary.com/dw8noz36h/image/upload/v1582883125/ayoola_ug3abm.jpg"></img></div>
                            </div>
                            <div className="piece-content">
                                <h3>Ayoola</h3>
                                <p>Super smooth and surprisingly fresh tasting coffee ganache. Based on clean cold brewed coffee sweetened with Algarve syrup, elderflower and lemons, this piece is entirely without any of the bitter taste notes usually present in coffee.</p>
                            </div>
                        </div>
                        <div className="pieces">
                            <div className="piece-image">
                                <div className="piece-logo"><img src="https://res.cloudinary.com/dw8noz36h/image/upload/v1585252007/apple_1_iwfy7x.jpg"></img></div>
                            </div>
                            <div className="piece-content">
                                <h3>Apple Infusion</h3>
                                <p>A ganache which is almost a caramel in texture and mouthfeel. Apple juice is reduced to a thick and sweet syrup and infused into a dark chocolate ganache based on a pure dark 80% chocolate from Tien Giang in Vietnam made by Marou.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Pieces