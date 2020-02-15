import React, { PureComponent } from 'react'
import { awardService } from './services/award.service';
import './sass/awards.scss'
import Header from '../common/Header'
import Banner from '../common/Banner'
import AwardBanner from '../images/bergamot.jpg'
import AwardImage from '../images/ica-prize-logo-2019-gold-world-rgb.jpg'

class Awards extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            awards: []
        }
    }

    componentDidMount() {
        awardService.getAll().then(awards => {
            this.setState({
                awards
            })
        });
    }

    render() {
        return (
            <div>
                <Header />
                <Banner background={AwardBanner} image={AwardImage} positionTop="50%" positionLeft="43%" />
                <div className="awards-header">
                    <div className="awards-header-title">
                        <h1>The Awards</h1>
                    </div>

                    <div className="awards-header-content">
                        <p>Mauris vehicula consectetur mauris. Donec ac est risus. Fusce placerat arcu vel elit pharetra eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur a porta ligula, et luctus odio. Quisque facilisis arcu eu imperdiet convallis. Nullam risus tortor, ullamcorper at enim non, placerat sollicitudin tortor. Praesent elementum pharetra diam quis condimentum.</p>
                    </div>
                </div>
                <div className="awards-content">
                    {
                        this.state.awards.map(award => {
                            return <div>{award.year}</div>
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Awards