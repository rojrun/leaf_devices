import React, {Component} from 'react';
import '../assets/css/checkout.css';

class Checkout extends Component {


    render() {
        return (
            <div>
                <form className="col s12">
                    <div className="center contact">CHECKOUT</div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate"/>
                            <label htmlFor="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate"/>
                            <label htmlFor="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="address" type="text" className="validate"/>
                            <label htmlFor="address">Address</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s5">
                            <input id="city" type="text" className="validate"/>
                            <label htmlFor="city">City</label>
                        </div>
                        <div className="input-field col s3">
                            <input id="state" type="text" className="validate"/>
                            <label htmlFor="state">State</label>
                        </div>
                        <div className="input-field col s4">
                            <input id="zip" type="text" className="validate"/>
                            <label htmlFor="zip">Zip</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="email" type="text" className="validate"/>
                            <label htmlFor="email">Email</label>
                        </div>
                    </div>
                    <button type="button" className="waves-effect waves-light btn-small">complete checkout</button>
                </form>
            </div>
        );
    }
}

export default Checkout;