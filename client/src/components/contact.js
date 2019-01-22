import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../assets/css/contact.css';
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
        console.log('Contact form:', this.state);
        console.log('handleSaveForm:', this.props);
        e.preventDefault();
        this.setState({
            messageStatus: true,
            messageComment: "MESSAGE SENT"
        });
        const { your_fname, your_lname, your_email, your_phone_number, your_message } = this.state;
        await this.props.addContactMessage( your_fname, your_lname, your_email, your_phone_number, your_message );
        setTimeout( () => {
            this.props.history.push('/')
        }, 2000);
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
                <div>MESSAGE SENT</div>
            )
        }

        return (
            <div>
                <form onSubmit={this.handleSaveForm} className="col s12">
                    <div className="center contact">CONTACT US</div>
                    <div className="row">
                        <div className="input-field col s6">
                            <input onChange={(e) => this.setState({your_fname: e.target.value})} value={your_fname} id="your_fname" type="text" className="validate" autoComplete="off"/>
                            <label htmlFor="your_fname">Your First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input onChange={(e) => this.setState({your_lname: e.target.value})} value={your_lname} id="your_lname" type="text" className="validate" autoComplete="off"/>
                            <label htmlFor="your_lname">Your Last Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input onChange={(e) => this.setState({your_email: e.target.value})} value={your_email} id="your_email" type="text" className="validate" autoComplete="off"/>
                            <label htmlFor="your_email">Your Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input onChange={(e) => this.setState({your_phone_number: e.target.value})} value={your_phone_number} id="your_phone_number" type="text" className="validate" autoComplete="off"/>
                            <label htmlFor="your_phone_number">Your Phone Number</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input onChange={(e) => this.setState({your_message: e.target.value})} value={your_message} id="your_message" type="text" className="validate" autoComplete="off"/>
                            <label htmlFor="your_message">Your Message</label>
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

function mapStateToProps(state){
    console.log('contact form- Redux State:', state);
    return {
        addContactUs: state.addContactUs.all
    }
}

export default connect(mapStateToProps, { addContactMessage })(Contact);

// export default Contact;