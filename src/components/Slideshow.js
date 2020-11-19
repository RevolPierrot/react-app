import {React, Component} from 'react';
import '../Slideshow.css';

class Slideshow extends Component {

    counter = 0
    images = [
        'cowboy.jpg',
        'ziel.jpg',
        'venus.jpg',
        'see.jpg',
        'haus_in_strasse.jpg',
    ]
    state = {
        imgSource: 'haus_in_strasse.jpg'
    }

    constructor() {
        super();
        setInterval(this.changeImage, 3000);
    }

    changeImage = () => {
        if (this.counter >= this.images.length) {
            this.counter = 0
        }
        this.setState({imgSource: this.images[this.counter]});
        this.counter++;
    }

    render() {
        return (
            <div className="slideshow">
                <img src={'images/' + this.state.imgSource}/>
            </div>
        );
    }
}
export default Slideshow;