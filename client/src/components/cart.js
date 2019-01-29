import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCart, addToCheckout, getCheckout } from '../actions';
import '../assets/css/cart.css';

class Cart extends Component {
    // state = {
    //     subTotal: 0,
    //     itemCount: 0
    // }

    componentDidMount() {
        this.props.getCart();
    }

    handleCheckout = () => {
        this.props.addToCheckout();
    }

    render() {
        if(!this.props.cart.length){
            return (
                <div className="status spin">
                    <div className="center comment cart_empty">CART EMPTY</div>
                </div>
            );
        }

        let subTotal = 0;
        let itemCount = 0;

        const cart = this.props.cart.map( (item, i) => {
            // console.log("item:", item);

            // this.setState({
            //     subTotal: this.state.subTotal += item.price * item.quantity,
            //     itemCount: this.state.itemCount += item.quantity
            // });
            subTotal += item.price * item.quantity;
            itemCount += item.quantity;
            return (
                <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td className="right-align">${item.price/100}</td>
                </tr>
            );
        });
        // const { subTotal, itemCount } = this.state;

        return (
            <div className="col s12">
                <div className="cart center">CART</div>
                <table className="striped responsive-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th className="right-align">Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart}
                    </tbody>
                </table>
                <div className="checkout container">
                    <div className="total">Count Total: {itemCount}</div>
                    <button onClick={this.handleCheckout} className="checkoutButton waves-effect waves-light btn">checkout</button>
                    <div className="total">Total: ${subTotal/100}</div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log('Redux State from Cart Component:', state);
    return {
        // cart: state.makeCart.all,
        cart: state.getCartMeta.single,
        getCheckout: state.getCheckout.single
    }
}

export default connect(mapStateToProps, { getCart, addToCheckout, getCheckout })(Cart);