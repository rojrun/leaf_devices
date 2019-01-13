import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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
        <div className="row">
            <div className="col s2 back_ground">
                <div className="footer-copyright">
                    <p>© 2019 Leaf Devices LLC.</p>
                    <p>All rights reserved.</p>
                </div>
            </div>
            <div className="col s8 main_content">
                <div className="row">
                    <div className="col s2"></div>
                    <div className="col s8 logo"></div>
                    <div className="col s2"></div>
                </div>
                <Route exact path="/" component={ProductCarousel}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/cart" component={Cart}/>
                <Route exact path="/checkout" component={Checkout}/>
                <Route exact path="/create" component={Create}/>
                <Route exact path="/login" component={Login}/>
            </div>
            <div className="col s2 back_ground">
                <NavButtons/>
            </div>
        </div>
    </Router>
);

export default App;
