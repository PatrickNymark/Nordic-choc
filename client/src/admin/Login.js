import React, { PureComponent } from 'react'
import Header from '../common/Header'
import Logo from '../images/logo-dark.png';
import './sass/login.scss'
import Input from '../common/Input';

class Login extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }

    render() {
        return (
            <div>
                <Header />
                <div style={{ position: 'relative', height: '500px' }}>
                    <div className="login-wrapper">
                        <div className="login-logo"><img src={Logo} /></div>
                        <h4>Login</h4>
                        <Input label="Email" />
                        <Input label="Password" />
                    </div>
                </div>
               
            </div>
        )
    }
}

export default Login