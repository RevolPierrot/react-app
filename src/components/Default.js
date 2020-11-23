import {React, Component} from 'react';

class Default extends Component {
    render() {
        var message = "Nothing here but a void - please return to your house in sunny DomRep #isopale" ;
//wenn schon eine Message exisitiert, überschreibe sie mit der neuen Info (lange Version: if(this.props.message && this.props.message != "")):
        if(this.props.message) {
            message = this.props.message;
        }

        return (
            <div className="container">
                <h3>{message}</h3>
            </div>
        )
    }
}
export default Default;