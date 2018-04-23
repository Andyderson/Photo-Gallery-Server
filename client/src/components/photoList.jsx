import React from 'react';
import ReactDOM from 'react-dom';
import Photo from './photo.jsx';

const Photolist = (props) => {
    return (
        <div className="photo-list">
            {props.photos.map((photo, i) => <Photo key={i} photo={photo} clickPicture={props.clickPicture} hoverPicture={props.hoverPicture}/>)}
        </div>
    )
}

export default Photolist;