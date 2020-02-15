import React, { PureComponent } from 'react'
import Header from '../common/Header'
import './sass/chocolates.scss';

class Chocolate extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div className="chocolates-banner"></div>
                <div className="chocolates-content">
                    <div className="chocolate-title col">
                        <h1>The Chocolate</h1>
                    </div>
                    <div className="chocolate-content col">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sit amet lacus augue. Etiam sit amet tristique justo. Aenean scelerisque scelerisque ante, ac ultricies ligula consequat vitae. Morbi eget tincidunt odio. In eleifend commodo ligula. Etiam orci justo, viverra sodales rutrum a, dictum non magna. Pellentesque ullamcorper purus odio, in luctus nisi dictum sit amet. Integer sit amet velit quam. Mauris quis sapien consectetur, interdum mi nec, venenatis sem. Donec tincidunt interdum mauris, aliquam molestie massa euismod vitae. Praesent malesuada semper velit vel tristique. Maecenas et mauris accumsan, fermentum tortor sed, dapibus leo. Vivamus sagittis, diam eget semper accumsan, risus felis molestie odio, quis pulvinar tellus elit ac augue.</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Chocolate