import React, { PureComponent } from 'react'
import Header from '../common/Header'
import Frederiksberg from '../images/frederiksberg-kirsebærvin.png';
import Holm from '../images/friis-holm.png';
import './sass/partnerships.scss'

class Partnerships extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="partnerships-banner"></div>
                <div className="partnerships-wrapper">
                        <div className="partnerships-title col">
                            <h1>Partnerships</h1>
                        </div>
                        <div className="partnerships-content col">
                            <p>Quisque id lacus nisl. Mauris et posuere erat. Aenean et sodales elit. Vivamus eget libero ornare, maximus lacus sit amet, cursus neque. Phasellus vel urna eget diam bibendum dignissim sed quis ante. Fusce maximus libero vel mi imperdiet, ornare convallis eros ornare. Pellentesque molestie risus at commodo volutpat. Proin pellentesque risus et leo mollis volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            <p>Quisque id lacus nisl. Mauris et posuere erat. Aenean et sodales elit. Vivamus eget libero ornare, maximus lacus sit amet, cursus neque. Phasellus vel urna eget diam bibendum dignissim sed quis ante. Fusce maximus libero vel mi imperdiet, ornare convallis eros ornare. Pellentesque molestie risus at commodo volutpat. Proin pellentesque risus et leo mollis volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            </div>
                        <div className="partnerships-logos col">
                            <div className="logos">
                                <div className="logo-wrapper"><img src={Holm} /></div>
                                <div className="logo-wrapper"><img src={Frederiksberg} /></div>
                            </div>
                        </div>
                </div>
            </div>
        )
    }
}

export default Partnerships