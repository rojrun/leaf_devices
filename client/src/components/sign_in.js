import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { addSignIn } from '../actions';
import Input from './general/input';
import '../assets/css/sign_in.css'; 

class SignIn extends Component {
    state = {
        errorMessage: ""
    }

    handleSignIn = async (values) => {
        const { email, password } = values;
        const resp = await this.props.addSignIn(email, password);

        if(resp.user) {
            this.props.history.push('/cart');
        } else {
            this.setState({
                errorMessage: "Email and/or Password do not match" 
            });          
        }
    } 

    render() {
        const {handleSubmit} = this.props;     
        
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
                    <button onClick={this.props.reset} type="button" className="btn contactButton">Cancel</button>                 
                    <button type="button" className="btn completeSignIn">complete sign in</button>
                    <p className="red-text text-darken-2">{this.state.errorMessage}</p>
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