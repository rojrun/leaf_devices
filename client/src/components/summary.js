import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../assets/css/summary.css';
import {addToSummary, getSummary} from '../actions';

class Summary extends Component {

    componentDidMount() {
        this.instances = M.FormSelect.init(this.formSelect);
        this.props.addToSummary();
        this.props.getSummary();
    }

    componentDidUpdate(prevProps) {
        if(prevProps.summary !== this.props.summary) {
            this.instances = M.FormSelect.init(this.formSelect);
        }      
    }

    shippingMethods = () =>  {
        return (
            <div className="input-field">
                <select ref="dropdown" defaultValue="1" className="browser-default">
                    <option value="1">Standard Shipping: </option>
                    <option value="2">Expedited Shipping: </option>
                </select>
                <label>Select Shipping Method</label>
            </div>
        );
    }

    handleCheckout = () => {
        console.log("handleCheckout clicked");
    }

    render() {
        const { total_quantity, subtotal, tax, shipping, total } = this.props.summary;

        return (
            <div className="summary col s12 center">
                <p><b>Total Quantity: </b>{total_quantity}</p>
                <p><b>Subtotal: </b>{subtotal/100}</p>
                <p><b>Tax: </b>{tax/100}</p>

                {/* <p><b>Shipping: </b>{shipping/100}</p> */}
                <div className="row">
                    <b>{this.shippingMethods}</b>
                    {shipping}
                </div>

                <p><b>Total: ${total/100}</b></p>
                <button onClick={this.handleCheckout} className="checkoutButton waves-effect waves-light btn">checkout</button>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        summary: state.summary.single
    }
}

export default connect(mapStateToProps, { addToSummary, getSummary })(Summary);