import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const Photo = (props) => {
    return (
        <div> 
            <img className="photo" onMouseOver={props.hoverPicture} onClick={props.clickPicture} src={props.photo}/>
        </div>
    )
}

export default Photo;
