import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Logo from '../images/logo-dark.png'

class Header extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div className="about-header">
                    <div className="about-logo">
                        <Link to="/"><img src={Logo} /></Link>
                    </div>
                    <div className="about-menu">
                        <Menu dark={true} />
                    </div>
                </div>
        )
    }
}

export default Header