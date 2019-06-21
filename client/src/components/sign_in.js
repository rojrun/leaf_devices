import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import {addSignIn} from '../actions';
import Input from './general/input';
import '../assets/css/sign_in.css'; 

class SignIn extends Component {
    handleSignIn = (values) => {
        const { email, password } = values;
        this.props.addSignIn(email, password);
        this.props.history.push("/");
    } 

    render() {
        const { handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleSignIn)}>
                <div className="center contact">SIGN IN</div>
                <div className="row">
                    <Field name="email" label="email" size="l12 m12 s12" component={Input}/>
                </div>
                <div className="row">
                    <Field name="password" label="password" size="l12 m12 s12" component={Input}/>
                </div>
                <div className="row center">
                    <button onClick={this.props.reset} type="button" className="btn waves-effect contactButton">Cancel</button>                 
                    <button className="waves-effect waves-light btn completeSignIn">complete sign in</button>
                </div>  
            </form>    
        );
    }
}

function validate({ email, password }) {
    const errors = {};

    if(!email) {
        errors.email = "Please enter your email.";
    }

    if(!password) {
        errors.password = "Please enter your password.";
    }

    return errors;
}

SignIn = reduxForm ({
    form: 'sign_in_form',
    validate: validate
})(SignIn);

export default connect(null, { addSignIn })(SignIn);