import React from 'react';
import '../assets/css/nav_buttons.css';

export default () => {

    return (
        <div className="buttons">
            <button className="waves-effect waves-light btn-small">home</button>
            <button className="waves-effect waves-light btn-small">cart</button>
            <button className="waves-effect waves-light btn-small">contact</button>
            <button className="waves-effect waves-light btn-small">create</button>
            <button className="waves-effect waves-light btn-small">login</button>
        </div>
    );
}