// import React from 'react'
// import './sass/menu.scss';

// function Menu(props) {
//     const state = {
//         show: false
//     }

//     return (
//         <div>
//             <div className="menu-toggle">
//                 <input type="checkbox" />
//                 <span className={props.color === "light" ? 'light' : ''}></span>
//                 <span className={props.color === "light" ? 'light' : ''}></span>
//                 <span className={props.color === "light" ? 'light' : ''}></span>
//             </div>
//             {state ? <div>Hello</div> : ''}
          
//         </div>

//     )
// }

// export default Menu

import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import './sass/menu.scss';


class Menu extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            active: false
        }
    }

    onChange = (e) => {
        this.setState({ 
            active: !this.state.active
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="menu-toggle" onChange={this.onChange}>
                    <input type="checkbox" />
                    <span className={this.state.active ? 'menu-checked' : ''}></span>
                    <span className={this.state.active ? 'menu-checked' : ''}></span>
                    <span className={this.state.active ? 'menu-checked' : ''}></span>
                </div>
                <div className={this.state.active ? "menu-content show" : 'menu-content'}>
                    <ul>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/chocolate">Chocolates</Link></li>
                        <li><Link to="/pieces">Pieces</Link></li>
                        <li><Link to="/partnerships">Patnerships</Link></li>
                        <li><Link to="/awards">Awards</Link></li>
                    </ul>
                </div> 
                
            </React.Fragment>

        )
    }
}

export default Menu
