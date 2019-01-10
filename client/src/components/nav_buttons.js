import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/nav_buttons.css';



export default () => (
    <div className="buttons">
        <Link className="waves-effect waves-light btn-small" to="/" >home</Link>
        <Link className="waves-effect waves-light btn-small" to="/cart">cart</Link>
        <Link className="waves-effect waves-light btn-small" to="/contact">contact</Link>
        <Link className="waves-effect waves-light btn-small" to="/create">create</Link>
        <Link className="waves-effect waves-light btn-small" to="/login">login</Link>
    </div>
);


