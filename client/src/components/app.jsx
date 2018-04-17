import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Modal from 'react-modal';
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
        axios.get('/photos', {
            params: {id: id}
        })
        .then((res) => {
            console.log('HandlePhotos Axios GET Success', res);
            this.setState({
                photoArray: res.data.photos
            })
        })
        .catch((error) => {
            console.log('HandlePhotos Axios GET Error', error);
        })
    }

    // componentDidMount () {
    //     let id = window.location.href.split('/').pop().substring(4) || '1';
    //     this.handlePhotos(id);
    // }

    componentDidMount () {
        axios.get('/photos')
        .then((res) => {
            console.log('Axios Component GET Success');
            const collection = [];
            const description = [];
            const name = [];
            for (var i = 0; i < 5; i++) {
                collection.push(res.data[i].imageUrls[0]);
                description.push(res.data[i].description);
                name.push(res.data[i].name);
                
                this.setState({
                    photoArray: collection,
                    photo: collection[0],
                    description: description[0],
                    name: name[0],
                })
            }
        })
        .catch((err) => {
            console.log('Axios Component GET Failure', err);
        });
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
                <div className="zoom" 
                    onMouseOver={this.hoverInstruction}
                    onMouseOut={this.hoverInstruction} 
                    onClick={this.openModal}>
                    <div>
                        <Photolist hoverPicture={this.hoverPicture} photos={this.state.photoArray}/>
                    </div>
                    <div className="main">
                        <img className="zoomImage" src={this.state.photo}/> 
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
            </div>
        )
    }
}

export default App;