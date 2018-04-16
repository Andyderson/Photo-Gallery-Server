import React from 'react';
import ReactDOM from 'react-dom';
import Photo from './photo.jsx';

class Photolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="photo-list">
                {this.props.photos.map((photo, i) => <Photo key={i} photo={photo} clickPicture={this.props.clickPicture} hoverPicture={this.props.hoverPicture}/>)}
            </div>
        )
    }
}

export default Photolist;

