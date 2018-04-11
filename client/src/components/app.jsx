import React from 'react';
import ReactDOM from 'react-dom';
import Photo from './photo.jsx';
import Photolist from './photoList.jsx';
import axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }

    componentDidMount () {
        axios.get('/photos')
            .then((res) => {
                console.log('Axios Component GET Success', res);
            })
            .catch((err) => {
                console.log('Axios Component GET Failure', err);
            });
    }

    render () {
        return (
            <div>
                <Photolist />
            </div>
        )
    }
}

export default App;