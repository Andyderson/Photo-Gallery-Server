import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Modal from 'react-modal';
import ReactImageMagnify from 'react-image-magnify';
import Photo from './photo.jsx';
import Photolist from './photoList.jsx';
import styles from '../styles/styles.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoArray: [],
            photo: null,
            modalIsOpen: false,
            instruction: true,
            name: null,
            description: null,
        }
        this.handlePhotos = this.handlePhotos.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.hoverInstruction = this.hoverInstruction.bind(this);
        this.hoverPicture = this.hoverPicture.bind(this);
        this.clickPicture = this.clickPicture.bind(this);
    }

    handlePhotos (id) {
        axios.get(`/products/${id}/photos`)
        .then((res) => {
            console.log('HandlePhotos Axios GET Success', res.data);
            this.setState({
                photoArray: res.data.imageUrls,
                photo: res.data.imageUrls[0],
                name: res.data.name,
                description: res.data.description,
            })
        })
        .catch((error) => {
            console.log('HandlePhotos Axios GET Error', error);
        })
    }

    componentDidMount () {
        const id = this.props.id || 0;
        this.handlePhotos(id);
    }

    componentWillReceiveProps () {
        this.handlePhotos(this.props.id);
    }
    
    hoverInstruction (e) {
        this.setState({
            instruction: !this.state.instruction
        })
    }

    hoverPicture (e) {
        this.setState({
            photo: e.target.getAttribute('src'),
        })
    }

    clickPicture (e) {
        this.setState({
            photo: e.target.getAttribute('src'),
        })
    }

    openModal() {
        this.setState({
            modalIsOpen: true
        });
    }
     
    closeModal() {
        this.setState({
            modalIsOpen: false
        });
    }

    render () {
        return (
            <div>
                <div className="main">
                    <div>
                        <Photolist hoverPicture={this.hoverPicture} photos={this.state.photoArray}/>
                    </div>
                    <div className="zoom">
                        <img className="zoomImage" 
                            src={this.state.photo} 
                            onMouseOver={this.hoverInstruction}
                            onMouseOut={this.hoverInstruction} 
                            onClick={this.openModal}/> 
                        <div className="description">
                        {this.state.instruction ? 'Roll over image to zoom in' : 'Click to open expanded view'}
                        </div>
                    </div>
                </div>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onRequestClose={this.closeModal}
                    style={styles.customStyles}
                    contentLabel="Picture Modal">
                    
                    <button className="close" onClick={this.closeModal}>X</button>
                    <br></br>
                    <br></br>
                    <div className="modalContainer">
                        <img className="modalPic" src={this.state.photo}/>
                        
                        <div className="information">
                            <div className="modalDivName">Name: {this.state.name}</div>
                            <br></br>
                            <div className="modalDivDescription">Description: {this.state.description}</div>
                            <br></br>
                            <div className="modalListContainer">
                                <Photolist clickPicture={this.clickPicture} photos={this.state.photoArray}/>
                            </div>
                        </div>
                    </div>
                </Modal>
                {/* <Example/> */}
            </div>
        )
    }
}

export default App;