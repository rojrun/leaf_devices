import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavButtons from './nav_buttons';
import ProductCarousel from './product_carousel';
import Contact from './contact';
import Cart from './cart';
import GuestCheckout from './guest_checkout';
import OrderComplete from './order_complete';
import Comments from './comments';
import '../assets/css/app.css';

const App = () => (
    <Router>
        <div>
            <div className="main_content">
                <header className="logo"></header>
                <main>
                    <Route exact path="/" component={ProductCarousel}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/guest-checkout" component={GuestCheckout}/>
                    <Route path="/order-complete" component={OrderComplete}/>
                    <Route path="/comments" component={Comments}/>
                </main>    
                <footer className="footer-copyright">
                    <p>© 2019 Leaf Devices LLC.</p>
                    <p>&nbsp; All rights reserved.</p>  
                </footer>
            </div>
            <NavButtons/>
        </div>
    </Router>
);

export default App;
