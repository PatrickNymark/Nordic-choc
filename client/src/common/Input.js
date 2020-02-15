import React, { PureComponent } from 'react'
import './sass/input.scss'

class Input extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            active: false
        }
    }

    onFocus = (e) => {
        this.setState({
            active: !this.state.active
        })
    }

    

    render() {
        return (
            <div className="input-wrapper">
                <label className={this.state.active ? "input-label is-active" : 'input-label'} for="first-name">{this.props.label}</label>
                <input onBlur={this.onFocus} onFocus={this.onFocus} className="input" type="text"></input>
            </div>
        )
    }
}

export default Input