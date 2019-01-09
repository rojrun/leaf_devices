import React, {Component} from 'react';
import '../assets/css/nav_buttons.css';

class NavButtons extends Component {

    handleHomeClick(event) {
        console.log('home click:', event);
    }

    handleCartClick(event) {

    }

    handleContactClick(event) {

    }

    handleCreateClick(event) {


    }

    handleLoginClick(event) {

    }

    render() {
        return (
            <div className="buttons">
                <button className="waves-effect waves-light btn-small" onChange={this.handleHomeClick.bind(this)}>home</button>
                <button className="waves-effect waves-light btn-small" onChange={this.handleCartClick.bind(this)}>cart</button>
                <button className="waves-effect waves-light btn-small" onChange={this.handleContactClick.bind(this)}>contact</button>
                <button className="waves-effect waves-light btn-small" onChange={this.handleCreateClick.bind(this)}>create</button>
                <button className="waves-effect waves-light btn-small" onChange={this.handleLoginClick.bind(this)}>login</button>
            </div>
        );
    }
}

export default NavButtons;