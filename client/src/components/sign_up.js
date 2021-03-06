import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import {addSignUp} from '../actions';
import Input from './general/input';
import '../assets/css/sign_up.css'; 

class SignUp extends Component {
    handleSignUp = async (values) => {
        const { name, email, password } = values;
        await this.props.addSignUp(name, email, password);
        this.props.history.push("/cart");
    } 

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleSignUp)}>
                <div className="center contact">SIGN UP</div>
                <div className="row">
                    <Field name="name" label="name" size="l12 m12 s12" component={Input}/>
                </div>
                <div className="row">
                    <Field name="email" label="email" size="l12 m12 s12" component={Input}/>
                </div>
                <div className="row">
                    <Field name="password" label="password" size="l12 m12 s12" component={Input}/>
                </div>
                <div className="row center">
                    <button onClick={this.props.reset} type="button" className="btn contactButton">Cancel</button>                 
                    <button className="btn completeSignUp">complete sign up</button>
                </div>  
            </form>    
        );
    }
}

function validate({ name, email, password }) {
    const errors = {};

    if(!name) {
        errors.name = "Please enter your name.";
    }

    if(!email) {
        errors.email = "Please enter your email.";
    }

    if(!password) {
        errors.password = "Please enter your password.";
    }

    return errors;
}

SignUp = reduxForm ({
    form: 'sign_up_form',
    validate: validate
})(SignUp);

export default withRouter(connect(null, { addSignUp })(SignUp));