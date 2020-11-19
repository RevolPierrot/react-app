import {React, Component} from 'react';

class Clock extends Component {

    d = new Date();
    state = {
        currentTime: this.d.toLocaleTimeString()
    }
    interval = null;

    /*
    constructor() {
        super();
        // Intervall hier in Millisek. behandeln, also 1 Sek = 1000!/
        setInterval(this.getCurrentTime,1000);
    }
    */
    //s.o., Version mit Constructor; s.u. Version ohne
    componentDidMount() {
        this.interval = setInterval(this.getCurrentTime,1000);
    }

    //...falls die Uhr anhalten soll (siehe Lifecycles - initiieren, beenden etc.):
    /*
    componentWillUnmount() {
        clearInterval(this.interval)
    }
    */

    getCurrentTime = () => {
        const d = new Date()
        this.setState({currentTime: d.toLocaleTimeString()})
    }

    render() {
        return (
            <span>{this.state.currentTime}</span>
        );
    }
}

export default Clock;