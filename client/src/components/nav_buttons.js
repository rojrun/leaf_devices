import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/nav_buttons.css';



export default () => (
    <div>
        <Link className="waves-effect waves-light btn navButtons" to="/" >home</Link>
        <Link className="waves-effect waves-light btn navButtons" to="/cart">cart</Link>
        <Link className="waves-effect waves-light btn navButtons" to="/contact">contact</Link>
        <Link className="waves-effect waves-light btn navButtons" to="/create">create</Link>
        <Link className="waves-effect waves-light btn navButtons" to="/login">login</Link>
    </div>
);


