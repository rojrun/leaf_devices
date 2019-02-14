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
            <div className="col s2 back_ground"></div>
            <div className="col s8 main_content">
                <div className="col s12 logo"></div>
                <Route exact path="/" component={ProductCarousel}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/cart" component={Cart}/>
                <Route path="/checkout" component={Checkout}/>
                <Route path="/create" component={Create}/>
                <Route path="/login" component={Login}/>
                <div className="footer">
                    <div>© 2019 Leaf Devices LLC. </div>
                    <div> All rights reserved.</div>
                </div>
            </div>
            <div className="col s2 back_ground">
                <NavButtons/>
            </div>
        </div>
    </Router>
);

export default App;
