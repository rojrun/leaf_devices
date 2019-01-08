import React, {Component} from 'react';
import '../assets/css/contact.css';

class Contact extends Component {
    state = {
        your_name: "",
        your_email: "",
        your_phone_number: "",
        your_message: ""
    }

    reset = () => {
        this.setState({
            your_name: "",
            your_email: "",
            your_phone_number: "",
            your_message: ""
        });
    }

    render(){
        return (
            <div>
                <form className="col s12">
                    <div className="center contact">CONTACT US</div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="your_name" type="text" className="validate"/>
                            <label htmlFor="your_name">Your Name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="your_email" type="text" className="validate"/>
                            <label htmlFor="your_email">Your Email</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="your_phone_number" type="text" className="validate"/>
                            <label htmlFor="your_phone_number">Your Phone Number</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input id="your_message" type="text" className="validate"/>
                            <label htmlFor="your_message">Your Message</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s6 center">
                            <button onClick={this.reset} type="button" className="btn-small waves-effect">Reset</button>
                        </div>
                        <div className="col s6 center">
                            <button className="btn-small waves-effect waves-light">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default Contact;