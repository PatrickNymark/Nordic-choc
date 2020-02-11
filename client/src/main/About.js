import React, { PureComponent } from 'react'
import Menu from '../common/Menu'

class About extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div style={{backgroundColor: '#000', paddingLeft: '10px'}}>
                <Menu />
            </div>
        )
    }
}

export default About