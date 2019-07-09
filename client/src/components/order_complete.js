import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCart, getSummary, getCustomer, updateCartStatus} from '../actions';
import Comments from './comments';
import '../assets/css/order_complete.css';

class OrderComplete extends Component {
    componentDidMount() {
        this.props.getCart();
        this.props.getSummary();
        this.props.getCustomer();
        this.props.updateCartStatus();
    }

    addZeroes(num) {
        return num.toLocaleString("en", {useGrouping: false, minimumFractionDigits: 2});
    }

    render() {
        if(!this.props.cart.length){
            return <Comments message="LOADING"/>
        }

        const cart = this.props.cart.map( (item, i) => {
            const {quantity, name, price} = item;
            return (
                <tr key={i}>
                    <td>{quantity}x</td>
                    <td>{name}</td>
                    <td className="right-align">{price/100}</td>
                </tr>
            );
        });

        const { total_quantity, subtotal, tax, shipping_method, shipping, total } = this.props.summary;
        const { first_name, last_name, mailing_address, mailing_city, mailing_state, mailing_zip } = this.props.customer;

        return (
            <div>
                <div className="center contact">THANK YOU FOR YOUR ORDER</div>
                <div className="orderOverview col s12 m12 l12 container">
                    <div className="order">Your order: </div>
                    <table className="orderTable orderCompleteText">
                        <tbody>
                            {cart}
                        </tbody>
                    </table>
                    <div className="right-align orderSummary orderDetail orderCompleteText">
                        <div>Total Quantity:  {total_quantity}</div>
                        <div>Subtotal:  {subtotal/100}</div>
                        <div>Tax:  {tax/100}</div>
                        <div>{shipping_method} Shipping:  {this.addZeroes(shipping/100)}</div>  
                        <div>Total:  ${total/100}</div>
                    </div>
                </div>
                <div className="orderOverview col s12 m12 l12 container orderShip">
                    <div className="order">Will be shipped to: </div>
                    <div className="center orderDetail orderCompleteText">
                        <div>{first_name} {last_name}</div>
                        <div>{mailing_address}</div>
                        <div>{mailing_city}, {mailing_state} {mailing_zip}</div>
                    </div>    
                </div>    
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log("mapstatetoprops", state);
    return {
        cart: state.getCartMeta.single,
        summary: state.summary.single,
        customer: state.customer.single
    }
}

export default connect(mapStateToProps, { getCart, getSummary, getCustomer, updateCartStatus })(OrderComplete);