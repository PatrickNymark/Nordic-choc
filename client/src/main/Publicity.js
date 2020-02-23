import React, { PureComponent } from 'react'
import Header from '../common/Header'
import Feed from './Feed'

class Publicity extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Header />
                <Feed />
            </div>
        )
    }
}

export default Publicity