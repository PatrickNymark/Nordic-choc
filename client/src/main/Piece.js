import React, { Component } from 'react'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import $ from 'jquery';
import './sass/piece.scss'

export default class Piece extends Component {
    constructor(props) {
        super(props)

        this.state = {
            open: false,
        }
    }

    handleModal = (e) => {
        if(!$(e.target).hasClass('piece-modal')) return;
        if(!e.keyCode === 27) return;

        this.closeModal();
    }

    openModal = (e) => {
        this.setState({
            open: true,
        });

        disableBodyScroll($('.pieces-wrapper'));
    }

    closeModal = (e) => {
        this.setState({
            open: false
        });

        clearAllBodyScrollLocks($('.pieces-wrapper'))
    }

    componentDidMount() {
        document.addEventListener("keydown", this.closeModal, false);
    }

    render() {
        return (
            <div>
                <p style={{ cursor: 'pointer'}} onClick={this.openModal}>More &rarr;</p>
                {this.state.open && <div onClick={this.handleModal} className="piece-modal">
                    <div className="piece-modal-wrapper">
                        <div onClick={this.closeModal} className="modal-close">
                            X
                        </div>
                        {this.props.children}
                    </div>
                </div>}
            </div>
        )
    }
}
