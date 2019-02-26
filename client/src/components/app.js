import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavButtons from './nav_buttons';
import ProductCarousel from './product_carousel';
import Contact from './contact';
import Cart from './cart';
import Checkout from './checkout';
import Create from './create';
import Login from './login';
import '../assets/css/app.css';

const App = () => (
    <Router>
        <div>
            <div className="main_content">
                <div className="logo"></div>
                <Route exact path="/" component={ProductCarousel}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/checkout" component={Checkout}/>
                <Route path="/create" component={Create}/>
                <Route path="/login" component={Login}/>
                <footer>
                    <div className="footer-copyright center">
                        © 2019 Leaf Devices LLC. All rights reserved.
                    </div>
                </footer>
            </div>
            <NavButtons/>
        </div>
    </Router>
);

export default App;
