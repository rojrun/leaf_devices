import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {Link} from 'react-router-dom';
import {addGuestCheckout} from '../actions';
import Input from './general/input';
import '../assets/css/guest_checkout.css';

class GuestCheckout extends Component {

    handleGuestCheckout = (values) => {
        const { firstName, lastName, mailingAddress, mailingCity, mailingState, mailingZip, emailAddress, phoneNumber } = values;
        this.props.addGuestCheckout( firstName, lastName, mailingAddress, mailingCity, mailingState, mailingZip, emailAddress, phoneNumber );
    }

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleGuestCheckout)}>
                <div className="center contact">GUEST CHECKOUT</div>
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
                    <Field name="mailingZip" label="Mailing Zip Code" size="l4 m3 s6"component={Input}/>
                </div>
                <div className="row">
                    <Field name="emailAddress" label="Email Address" size="l6 m6 s6" component={Input}/>
                    <Field name="phoneNumber" label="Phone Number" size="16 m6 s6" component={Input}/>
                </div>
                <div className="row center">
                    <button onClick={this.props.reset} type="button" className="btn waves-effect contactButton">Cancel</button>                 
                    <Link className="waves-effect waves-light btn completeCheckout" to="/order-complete">complete checkout</Link>
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

    if(!emailAddress){
        errors.emailAddress = "Please enter your email address.";
    }

    if(!phoneNumber){
        errors.phoneNumber = "Please enter your phone number.";
    }

    return errors;  
}

function mapStateToProps(state){
    return {
        addGuestCheckout: state.addGuestCheckout.all
    }
}

GuestCheckout = reduxForm ({
    form: 'guest_checkout-form',
    validate: validate
})(GuestCheckout);

export default connect(mapStateToProps, { addGuestCheckout })(GuestCheckout);