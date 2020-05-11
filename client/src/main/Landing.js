import React, { PureComponent } from 'react';
import { Helmet } from "react-helmet";
import { Link } from 'react-router-dom';
import './sass/homepage.scss'
import Menu from '../common/Menu'
import Logo from '../images/logo-light.png'
import WorldGold from '../images/world-gold-no-bg.png';
import ScandiGold from '../images/scandi-gold-no-bg.png';


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
                <div className="home-headline">
                    <div>
                        <h1>SUBLIME OR BUST</h1>
                        <img src="https://res.cloudinary.com/dw8noz36h/image/upload/v1582886282/chocolate_skull_xyhgru.svg" />
                    </div>
                </div>
                {/*<div style={{ minHeight: '500px'}}>
                    <div className="offer-wrapper">
                        <div className="image-wrapper">
                            <div className="left">
                                <div className="image-one">
                                    <img id="header" src="https://res.cloudinary.com/dw8noz36h/image/upload/v1585082586/Svenningsen_Chocolate_5_piece_box_580x_2x_x5atql.jpg" />
                                </div>
                                <div className="logo">
                                    <img id="logo" src="https://res.cloudinary.com/dw8noz36h/image/upload/v1585083008/svenningsen_orstrup_chocolatiers_z4fkg0.png" />
                                </div>
                            </div>
                            <div className="right">
                                <div className="logo-collage">
                                    <div class="image">
                                        <img src="https://res.cloudinary.com/dw8noz36h/image/upload/v1582883124/pecan_jfhbgn.jpg" />
                                    </div>
                                    <div class="image">
                                        <img src="https://res.cloudinary.com/dw8noz36h/image/upload/v1582883124/bergamot_al3ola.jpg" />
                                    </div>
                                    <div class="image">
                                        <img src="https://res.cloudinary.com/dw8noz36h/image/upload/v1582883125/muscovado_fvhu6v.jpg" />
                                    </div>
                                    <div class="image">
                                        <img src="https://res.cloudinary.com/dw8noz36h/image/upload/v1582883124/cherry_heht00.jpg" />

                                    </div>
                                    <div class="image">
                                    <img src="https://res.cloudinary.com/dw8noz36h/image/upload/v1582883124/blueberry_wdg6o8.jpg" />

                                    </div>
                                    <div class="image">
                                        <img src="https://res.cloudinary.com/dw8noz36h/image/upload/v1582883124/soumak_kihcuj.jpg" />

                                    </div>
                                    <div class="image">
                                        <img src="https://res.cloudinary.com/dw8noz36h/image/upload/v1585082557/Peter_Svenningsen_Singature_Box_15_pcs_580x_2x_bgqpwh.jpg" />
                                    </div>
                                    <div class="image">
                                        <img src="https://res.cloudinary.com/dw8noz36h/image/upload/v1582883125/ayoola_ug3abm.jpg" />
                                    </div>
                                    <div class="image">
                                        <img src="https://res.cloudinary.com/dw8noz36h/image/upload/v1582883124/island_water_v7lnhc.jpg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="offer-content">
                            <h2>Brug for lidt lækkert?</h2>
                            <p>Vi er, som alle andre, også påvirket af Corona, og derfor vil vi gøre vores til at forsøde denne specielle tid en smule. Vi har sat al vores chokolade 20% ned,
                                med undtagelse af AYOOLA, Inland Ice & Island Water, som er udsolgt pt.  <br /><br /> Se vores udvalg <Link to="/pieces" className="piece-btn">her</Link> <br /><br />
                                Æskerne er med samme type chokolade i, og det er desværre ikke muligt at blande.
                                Tilbuddet er efter ”Click&Collect”-princippet. Du bestiller på jakob@nordicchocolatiers.com, vi pakker og du henter på et aftalt tidspunkt ved vores køkken i Kirke Værløse. Fredag er vi der fra 16-19. 
                                Betaling foregår via MobilePay på 425588. Alt sammen virusfrit!
                                <br /> <br /> Og så er du selvfølgelig med til at sikre, at vi kan forsætte med at lave prisvindende fyldte chokolader ud i fremtiden. <br /> Tak, Peter & Jakob </p>                        
                            <p>5 styks æsker <span>68,-</span> 3 styks æsker <span>36,-</span></p>
                        </div>
                    </div>
                </div>
                {/* <div className="home-awards">
                    <div className="home-award">
                        <img src={WorldGold} />
                    </div>
                    <div className="home-award">
                        <img src={ScandiGold} />
                    </div>
                </div> */}                
            </div>
        )
    }
}

export default HomePage