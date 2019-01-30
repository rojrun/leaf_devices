import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../assets/css/summary.css';
import {addToCheckout, getCheckout} from '../actions';

class Summary extends Component {

    componentDidMount() {
        this.props.getCheckout();
    }

    handleCheckout = () => {
        this.props.addToCheckout();
    }

    render() {
        console.log("Summary: ", this.props.summary);
        const { total_quantity, subtotal, tax, shipping, total } = this.props.summary;

        return (
            <div className="summary col s12 center">
                <p><b>Total Quantity: </b>{total_quantity}</p>
                <p><b>Subtotal: </b>{subtotal/100}</p>
                <p><b>Tax: </b>{tax/100}</p>
                <p><b>Shipping: </b>{shipping/100}</p>
                <p><b>Total: ${total/100}</b></p>
                <button onClick={this.handleCheckout} className="checkoutButton waves-effect waves-light btn">checkout</button>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log('Redux State from Summary Component:', state);
    return {
        summary: state.summary.single
    }
}

export default connect(mapStateToProps, { addToCheckout, getCheckout })(Summary);