import {React, Component} from 'react';

class Hello extends Component {
    render() {
        var title = "Standart-Titel";
        if(this.props.title) {
            title = this.props.title;
        }

        return (
            <div className="container">
                <h1>{title}</h1>
            </div>
        );
    }
}
export default Hello;

