import React from 'react';
import ReactDOM from 'react-dom';

class Photolist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div className="photo-list">
                {/* {this.props.photoList.map((photo, i) => <Photo key={i} photo={photo}/>)}/> */}
            </div>
        )
    }
}

export default Photolist;

