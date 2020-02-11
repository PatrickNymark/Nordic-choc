import React, { PureComponent } from 'react'
import axios from 'axios';

class Pieces extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            pieces: []
        }
    }


    componentWillMount() {
        axios.get('/api/pieces').then(pieces => {
            this.setState({ 
                pieces: pieces.data
            });
        });
    }

    render() {
        return (
            <div>
                <div>Pieces</div>
                {this.state.pieces.map(piece => <div key={piece.title}>{piece.title}</div>)}
            </div>
        )
    }
}

export default Pieces