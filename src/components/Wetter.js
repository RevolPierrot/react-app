import {React, Component} from 'react';

const API_URL = 'http://api.openweathermap.org/data/2.5/weather';
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

class Wetter extends Component {

    state = {
        city: null,
        weather: null,
        error: null,
    }

    onButtonClick = () => {
        const city = document.getElementById('city').value
        //state.city setzen
        console.info(this.setState({city: city, weather: null, error: null}))
    }

    render() {
        return (
            <div className="container">
                <input id="city" placeholder="Please enter City"/>
                <button onClick={this.onButtonClick}>Get Weather</button>
                <h3>Weather for {this.state.city}</h3>
            </div>
        );
    }
}
export default Wetter;