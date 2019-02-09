import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../assets/css/contact.css';
import '../assets/css/dialog_box.css';
import {addContactMessage} from "../actions";
// import DialogBox from "./dialog_box";

class Contact extends Component {
    state = {
        your_fname: "",
        your_lname: "",
        your_email: "",
        your_phone_number: "",
        your_message: "",
        messageStatus: false,
        messageComment: ""
    }

    handleSaveForm = async (e) => {
        e.preventDefault();
        this.setState({
            messageStatus: true
        });
        const { your_fname, your_lname, your_email, your_phone_number, your_message } = this.state;
        await this.props.addContactMessage( your_fname, your_lname, your_email, your_phone_number, your_message );
        setTimeout( () => {
            this.props.history.push('/')
        }, 2100);
    }

    cancel = () => {
        this.setState({
            your_fname: "",
            your_lname: "",
            your_email: "",
            your_phone_number: "",
            your_message: "",
            messageStatus: false,
            messageComment: ""
        });
    }

    render(){
        const {your_fname, your_lname, your_email, your_phone_number, your_message, messageComment } = this.state;

        // if(this.state.messageStatus){
        //     return <DialogBox message={messageComment}/>
        // }
        if(this.state.messageStatus){
            return (
                <div className="status spin">
                    <div className="center comment">MESSAGE SENT</div>
                </div>
            );
        }

        return (
            <div>
                <form onSubmit={this.handleSaveForm} className="col s12">
                    <div className="center contact">CONTACT US</div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input name="firstName" onChange={(e) => this.setState({your_fname: e.target.value})} value={your_fname} id="your_fname" type="text" className="validate" autoComplete="off"/>
                            <label htmlFor="your_fname" className="blue-text text-darken-4">Your First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input name="lastName" onChange={(e) => this.setState({your_lname: e.target.value})} value={your_lname} id="your_lname" type="text" className="validate" autoComplete="off"/>
                            <label htmlFor="your_lname" className="blue-text text-darken-4">Your Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="email" onChange={(e) => this.setState({your_email: e.target.value})} value={your_email} id="your_email" type="text" className="validate" autoComplete="off"/>
                            <label htmlFor="your_email" className="blue-text text-darken-4">Your Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="phoneNumber" onChange={(e) => this.setState({your_phone_number: e.target.value})} value={your_phone_number} id="your_phone_number" type="text" className="validate" autoComplete="off"/>
                            <label htmlFor="your_phone_number" className="blue-text text-darken-4">Your Phone Number</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input name="message" onChange={(e) => this.setState({your_message: e.target.value})} value={your_message} id="your_message" type="text" className="validate" autoComplete="off"/>
                            <label htmlFor="your_message" className="blue-text text-darken-4">Your Message</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6 center">
                            <button onClick={this.cancel} type="button" className="btn waves-effect contactButton">Cancel</button>
                        </div>
                        <div className="col s6 center">
                            <button className="btn waves-effect waves-light contactButton">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

function validate({ firstName, lastName, email, phoneNumber, message }) {
    const errors = {};

    if (!firstName){
        errors.firstName = 'Please enter your first name';
    }

    if (!lastName){
        errors.lastName = 'Please enter your first name';
    }

    if (!email){
        errors.email = 'Please enter your email';
    }

    if (!phoneNumber){
        errors.phoneNumber = 'Please enter your phone number';
    }

    if (!message){
        errors.message = 'Please enter your phone message';
    }

    return errors;
}

function mapStateToProps(state){
    console.log('contact form- Redux State:', state);
    return {
        addContactUs: state.addContactUs.all
    }
}

export default connect(mapStateToProps, { addContactMessage, validate })(Contact);