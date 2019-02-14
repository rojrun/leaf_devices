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
        firstName: "",
        lastName: "",
        email: "",
        phone_number: "",
        message: "",
        messageStatus: false,
    }

    handleContactForm = (values) => {
        console.log("contact form: ", values);    
        // e.preventDefault();
        // this.setState({
        //     messageStatus: true
        // });
        // const { firstName, lastName, email, phone_number, message } = this.state;
        // await this.props.addContactMessage( firstName, lastName, email, phone_number, message );
        // setTimeout( () => {
        //     this.props.history.push('/')
        // }, 2100);
    }

    cancel = () => {
        this.setState({
            firstName: "",
            lastName: "",
            email: "",
            phone_number: "",
            message: "",
            messageStatus: false
        });
    }

    render(){
        const { handleSubmit } = this.props;
        const { firstName, lastName, email, phone_number, message } = this.state;

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
                    <button onClick={this.cancel} type="button" className="btn waves-effect contactButton">Cancel</button>
                    <button className="btn waves-effect waves-light contactButton">Submit</button>
                </div> 
            </form>

            
        //     <div>
        //         <form onSubmit={this.handleSaveForm} className="col s12">
        //             <div className="center contact">CONTACT US</div>
        //             <div className="row">
        //                 <div className="input-field col s6">
        //                     <input name="firstName" onChange={(e) => this.setState({your_fname: e.target.value})} value={your_fname} id="your_fname" type="text" className="validate" autoComplete="off"/>
        //                     <label htmlFor="your_fname" className="blue-text text-darken-4">Your First Name</label>
        //                 </div>
        //                 <div className="input-field col s6">
        //                     <input name="lastName" onChange={(e) => this.setState({your_lname: e.target.value})} value={your_lname} id="your_lname" type="text" className="validate" autoComplete="off"/>
        //                     <label htmlFor="your_lname" className="blue-text text-darken-4">Your Last Name</label>
        //                 </div>
        //             </div>
        //             <div className="row">
        //                 <div className="input-field col s12">
        //                     <input name="email" onChange={(e) => this.setState({your_email: e.target.value})} value={your_email} id="your_email" type="text" className="validate" autoComplete="off"/>
        //                     <label htmlFor="your_email" className="blue-text text-darken-4">Your Email</label>
        //                 </div>
        //             </div>
        //             <div className="row">
        //                 <div className="input-field col s12">
        //                     <input name="phoneNumber" onChange={(e) => this.setState({your_phone_number: e.target.value})} value={your_phone_number} id="your_phone_number" type="text" className="validate" autoComplete="off"/>
        //                     <label htmlFor="your_phone_number" className="blue-text text-darken-4">Your Phone Number</label>
        //                 </div>
        //             </div>
        //             <div className="row">
        //                 <div className="input-field col s12">
        //                     <input name="message" onChange={(e) => this.setState({your_message: e.target.value})} value={your_message} id="your_message" type="text" className="validate" autoComplete="off"/>
        //                     <label htmlFor="your_message" className="blue-text text-darken-4">Your Message</label>
        //                 </div>
        //             </div>
        //             <div className="row">
        //                 <div className="col s6 center">
        //                     <button onClick={this.cancel} type="button" className="btn waves-effect contactButton">Cancel</button>
        //                 </div>
        //                 <div className="col s6 center">
        //                     <button className="btn waves-effect waves-light contactButton">Submit</button>
        //                 </div>
        //             </div>
        //         </form>
        //     </div>
        );
    }
}

function mapStateToProps(state){
    console.log('contact form- Redux State:', state);
    return {
        addContactUs: state.addContactUs.all
    }
}

export default reduxForm ({
    form: 'contact-form'
})(connect(mapStateToProps, { addContactMessage })(Contact));