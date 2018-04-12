import React from 'react';
import ReactDOM from 'react-dom';
import Photo from './photo.jsx';
import Photolist from './photoList.jsx';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photoArray: [],
            photo: null,
        }
    }

    componentDidMount () {
        axios.get('/photos')
            .then((res) => {
                console.log('Axios Component GET Success', res.data);
                let photos = [];
                for (var i = 0; i < 10; i++) {
                    photos.push(res.data[i].imageUrl);
                }
                console.log('this is photos', photos)
                this.setState({
                    photoArray: photos,
                    photo: photos[0],
                })
                console.log('state', this.state.photo);
            })
            .catch((err) => {
                console.log('Axios Component GET Failure', err);
            });
    }

    render () {
        return (
            <div>
                <Photo photo={this.state.photo}/>
                <Photolist photos={this.state.photoArray}/>
            </div>
        )
    }
}

export default App;