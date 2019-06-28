import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Logo from './logo';
import NavButtons from './nav_buttons';
import ProductCarousel from './product_carousel';
import Contact from './contact';
import Cart from './cart';
import GuestCheckout from './guest_checkout';
import OrderComplete from './order_complete';
import SignUp from './sign_up';
import SignIn from './sign_in';
import SignUpInPage from './signUpInPage';
import '../assets/css/app.css';
import auth from '../hoc/auth';

const App = () => (
    <Router>
        <div>
            <div className="main_content">
                <header>
                    <Logo/>
                </header>
                <main>
                    <Route exact path="/" component={auth(ProductCarousel, false)}/>
                    <Route path="/contact" component={Contact}/>
                    <Route path="/cart" component={auth(Cart)}/>
                    <Route path="/guest-checkout" component={GuestCheckout}/>
                    <Route path="/order-complete" component={OrderComplete}/>
                    <Route path="/sign-up-sign-in" component={SignUpInPage}/>
                    <Route path="/sign-up" component={SignUp}/>
                    <Route path="/sign-in" component={SignIn}/>
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
