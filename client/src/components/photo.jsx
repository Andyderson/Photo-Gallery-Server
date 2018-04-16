import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

class Photo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        }
    }

    render() {
        return (
            <div> 
                <img className="photo" onMouseOver={this.props.hoverPicture} onClick={this.props.clickPicture} src={this.props.photo}/>
            </div>
        )
    }
}

export default Photo;
