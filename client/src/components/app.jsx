import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Modal from 'react-modal';
import Photo from './photo.jsx';
import Photolist from './photoList.jsx';

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
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.hoverInstruction = this.hoverInstruction.bind(this);
        this.hoverPicture = this.hoverPicture.bind(this);
    }

    componentDidMount () {
        axios.get('/photos')
            .then((res) => {
                console.log('Axios Component GET Success', res.data);
                let collection = [];
                let description = [];
                let name = [];
                for (var i = 0; i < 5; i++) {
                    collection.push(res.data[i].imageUrls[0]);
                    description.push(res.data[i].description);
                    name.push(res.data[i].name);
                }
                this.setState({
                    photoArray: collection,
                    photo: collection[0],
                    description: description[0],
                    name: name[0],
                })
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
            photo: "https://puu.sh/zM0Wo/547680d731.png"
            // photo: e
        })
        console.log('this photo', this.state.photo);
    }

    openModal() {
        this.setState({
            modalIsOpen: true
        });
    }
     
    afterOpenModal() {
        // this.subtitle.style.color = '#000000';
    }
     
    closeModal() {
        this.setState({
            modalIsOpen: false
        });
    }


    render () {

        const customStyles = {
            content : {
              top: '50%',
              left: '50%',
              right: 'auto',
              bottom: 'auto',
              marginRight: '50%',
              transform: 'translate(-50%, -50%)',
              background: 'black',
            //   width: 1000,
            //   height: 750,
            }
          };

        return (
            <div>
                <div className="zoom" 
                    onMouseOver={this.hoverInstruction} 
                    onClick={this.openModal}>
                    <img className="zoomImage" src={this.state.photo}/> 
                    {this.state.instruction ? <i>'Roll over image to zoom in'</i> : <i>'Click to open expanded view'</i>}
                </div>
                
                <Photolist hoverPicture={this.hoverPicture} photos={this.state.photoArray}/>
        
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Picture Modal">
                
                    <button onClick={this.closeModal}>x</button>
                    <br></br>
                    <br></br>
                    <div className="modalDiv">Name: {this.state.name}</div>
                    <br></br>
                    <div className="modalDiv">Description: {this.state.description}</div>
                    <br></br>
                    <img src={this.state.photo}/>
                </Modal>

            </div>
        )
    }
}

export default App;