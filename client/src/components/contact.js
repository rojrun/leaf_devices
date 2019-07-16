import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import '../assets/css/contact.css';
import '../assets/css/comments.css';
import {addContactMessage} from "../actions";
import Comments from './comments';
import Input from './general/input';

class Contact extends Component {
    state = {
        messageStatus: false
    }

    handleContactForm = async (values) => {
        const { firstName, lastName, email, phone_number, message } = values;
        this.setState({
            messageStatus: true
        });
        await this.props.addContactMessage( firstName, lastName, email, phone_number, message );
        setTimeout( () => {
            this.props.history.push('/')
        }, 3000);
    }

    render(){
        const { handleSubmit } = this.props;

        if(this.state.messageStatus){
            return <Comments message="MESSAGE SENT"/>
        }

        return (
            <form onSubmit={handleSubmit(this.handleContactForm)}>
                <div className="center contact">CONTACT US</div>
                <div className="row">
                    <Field name="firstName" label="First Name" size="m6 s12" component={Input}/>
                    <Field name="lastName" label="Last Name" size="m6 s12" component={Input}/>
                </div>
                <div className="row">
                    <Field name="email" label="Email" size="m6 s12" component={Input}/>
                    <Field name="phone_number" label="Phone Number" size="m6 s12" component={Input}/>
                </div>
                <div className="row">
                    <Field name="message" label="Message" component={Input}/>
                </div>
                <div className="row center">
                    <button onClick={this.props.reset} type="button" className="btn contactButton">Cancel</button>
                    <button className="btn contactButton">Submit</button>
                </div> 
            </form>
        );
    }
}

function validate({firstName, lastName, email, phone_number, message}){
    const errors = {};

    if(!firstName){
         errors.firstName = "Please enter your first name.";
    }

    if(!lastName){
        errors.lastName = "Please enter your last name.";
    }

    if(!email){
        errors.email = "Please enter your email.";
    }

    if(!phone_number){
        errors.phone_number = "Please enter your phone number.";
    }

    if(!message){
        errors.message = "Please enter a message.";
    }

    return errors;  
}

Contact = reduxForm ({
    form: 'contact-form',
    validate: validate
})(Contact);

export default connect(null, { addContactMessage })(Contact);
