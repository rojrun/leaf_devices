import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCart} from '../actions';
import '../assets/css/cart.css';

class Cart extends Component {
    componentDidMount() {
        this.props.getCart();
    }



    render() {
        if(!this.props.cart.length){
            return (
                <div className="status spin">
                    <div className="center comment cart_empty">CART EMPTY</div>
                </div>
            );
        }

        let total = 0;
        let itemCount = 0;

        const cart = this.props.cart.map( (item, i) => {
            // console.log("item:", item);

            total += item.price * item.quantity;
            itemCount += item.quantity;
            return (
                <tr key={i}>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td>${item.price/100}</td>
                </tr>
            );
        });

        return (
            <div className="col s12">
                <div className="cart center">CART</div>
                <table className="striped responsive-table">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cart}
                    </tbody>
                </table>
                <div className="checkout container">
                    <div className="total">Count Total: {itemCount}</div>
                    <button className="checkoutButton waves-effect waves-light btn">checkout</button>
                    <div className="total">Total: ${total/100}</div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log('Redux State from Cart Component:', state);
    return {
        // cart: state.makeCart.all,
        cart: state.getCartMeta.single
    }
}

export default connect(mapStateToProps, { getCart })(Cart);