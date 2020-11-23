import {React, Component} from 'react';
import Clock from "./Clock";
import Default from "./Default";

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

    constructor() {
        super();
        this.meinAlertFenster('Guten Morgen!')
    }

    /*
    Projectday4: 1. Schaut Euch bitte die Dokumentation zur ES6 (EcmaScript 2015) an:
    https://www.w3schools.com/react/react_es6.asp (hier insbesondere Thema „Arrow-Functions“)
    2. Schreibt bitte in der Home Komponente folgende Funktion:
    */
    meinAlertFenster = (meldung) => {
        alert(meldung);
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
                <Default message="Jetzt biste auf der Homepage."/>
            </div>
        );
    }
}

export default Home;