import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {addCheckout} from '../actions';
import Input from './general/input';
import '../assets/css/checkout.css';

class Checkout extends Component {

    handleCheckout = async (values) => {
        const { firstName, lastName, mailingAddress, mailingCity, mailingState, mailingZip, phoneNumber } = values;
        await this.props.addCheckout( firstName, lastName, mailingAddress, mailingCity, mailingState, mailingZip, phoneNumber );
        this.props.history.push("/order-complete");
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleCheckout)}>
                <div className="center contact">CHECKOUT</div>
                <div className="row">
                    <Field name="firstName" label="First Name" size="l6 m6 s12" component={Input}/>
                    <Field name="lastName" label="Last Name" size="l6 m6 s12" component={Input}/>
                </div>
                <div className="row">
                    <Field name="mailingAddress" label="Mailing Address" size="l12 m12 s12" component={Input}/>
                </div>
                <div className="row">
                    <Field name="mailingCity" label="Mailing City" size="l6 m6 s12" component={Input}/>
                    <Field name="mailingState" label="Mailing State" size="l2 m3 s6" component={Input}/>
                    <Field name="mailingZip" label="Mailing Zip" size="l4 m3 s6"component={Input}/>
                </div>
                <div className="row">
                    <Field name="phoneNumber" label="Phone Number" size="16 m6 s6" component={Input}/>
                </div>
                <div className="row center">
                    <button onClick={this.props.reset} type="button" className="btn contactButton">Cancel</button>                 
                    <button className="btn completeCheckout">complete checkout</button>
                </div>  
            </form>
        );
    }
}

function validate({firstName, lastName, mailingAddress, mailingCity, mailingState, mailingZip, emailAddress, phoneNumber}){
    const errors = {};

    if(!firstName){
         errors.firstName = "Please enter your first name.";
    }

    if(!lastName){
        errors.lastName = "Please enter your last name.";
    }

    if(!mailingAddress){
        errors.mailingAddress = "Please enter your mailing address.";
    }

    if(!mailingCity){
        errors.mailingCity = "Please enter your mailing city.";
    }

    if(!mailingState){
        errors.mailingState = "Please enter your mailing state.";
    }

    if(!mailingZip){
        errors.mailingZip = "Please enter your mailing zip code.";
    }

    if(!phoneNumber){
        errors.phoneNumber = "Please enter your phone number.";
    }

    return errors;  
}

Checkout = reduxForm ({
    form: 'checkout-form',
    validate: validate
})(Checkout);

export default connect(null, { addCheckout })(Checkout);