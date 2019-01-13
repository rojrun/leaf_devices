import React, {Component} from 'react';
import '../assets/css/contact.css';

class Contact extends Component {
    state = {
        your_name: "",
        your_email: "",
        your_phone_number: "",
        your_message: ""
    }

    handleSaveForm = async (e) => {
        console.log('form:', this.props);
        e.preventDefault();
        // await this.props.add(this.state);
        // this.props.history.push('/');
    }

    cancel = () => {
        this.setState({
            your_name: "",
            your_email: "",
            your_phone_number: "",
            your_message: ""
        });
    }

    render(){
        const {your_name, your_email, your_phone_number, your_message} = this.state;
        return (
            <div>
                <form onSubmit={this.handleSaveForm} className="col s12">
                    <div className="center contact">CONTACT US</div>
                    <div className="row">
                        <div className="input-field col s12">
                            <input onChange={(e) => this.setState({your_name: e.target.value})} value={your_name} id="your_name" type="text" className="validate" autoComplete="off"/>
                            <label htmlFor="your_name">Your Name</label>
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

export default Contact;