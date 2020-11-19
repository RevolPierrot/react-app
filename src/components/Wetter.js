import {React, Component} from 'react';
import Default from "./Default";

class Wetter extends Component {

    render() {
        return (
            <div className="container">
                <h3>Meine Wetter Page</h3>
                <Default message="Wetter Kram..."/>
            </div>
        );
    }
}
export default Wetter;