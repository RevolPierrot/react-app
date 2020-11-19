import {React, Component} from 'react';
import Clock from "./Clock";

class Home extends Component {

    state = {
        txt: null,
    }

    /* Funktionen werden hier nicht extra mit 'function' vorab benannt*/
    changeText = (e) => {
        this.setState({txt: e.target.value});
        /*e für event; console.info(e) gibt den Wert i.d. Browser-console->target->value*/
        console.info(e)
    }

    render() {
        return (
            <div className="container">
                <h3>My Home</h3>
                <Clock/>
                <p>{this.props.text}</p>
                <h5>{this.props.person.firstname} {this.props.person.lastname}</h5>

                {/*hier in der h3 ausgabe des textes der in input eingegeben wird*/}
                <h3>Hier state Ausgabe: {this.state.txt}</h3>
                <input type="text" onChange={this.changeText}/>
            </div>
        );
    }
}

export default Home;