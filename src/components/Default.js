import {React, Component} from 'react';

class Default extends Component {
    render() {
        var message = "Nothing here but a void - please return to your house in sunny DomRep #isopale" ;

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