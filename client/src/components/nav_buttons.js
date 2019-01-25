import React from 'react';
import {Link} from 'react-router-dom';
import {getCart} from '../actions';
import '../assets/css/nav_buttons.css';

export default () => (
    <div>
        <div className="hide-on-small-only">
            <Link className="waves-effect waves-light btn navButtons" to="/" >home</Link>
            <Link className="waves-effect waves-light btn navButtons" to="/contact">contact</Link>
            <Link onClick={getCart} className="waves-effect waves-light btn navButtons" to="/cart">cart</Link>
            {/*<Link className="waves-effect waves-light btn navButtons" to="/create">create</Link>*/}
            {/*<Link className="waves-effect waves-light btn navButtons" to="/login">login</Link>*/}
        </div>
        <div className="show-on-small hide-on-med-and-up">
            <Link className="material-icons iconButtons" to="/">home</Link>
            <Link className="material-icons iconButtons" to="/contact">message</Link>
            <Link className="material-icons iconButtons" to="/cart">shopping_cart</Link>
        </div>
    </div>
);
