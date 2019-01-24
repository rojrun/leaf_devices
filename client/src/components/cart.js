import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCart, addCartMeta, getCartMeta} from '../actions';
import '../assets/css/cart.css';

class Cart extends Component {
    async componentDidMount() {
        await this.props.getCart();
        await this.props.addCartMeta();
        await this.props.getCartMeta();
    }



    render() {
        console.log("props in CART:", this.props.cart);
        if(!this.props.cart.length){
            return (
                <div className="status spin">
                    <div className="center comment">CART EMPTY</div>
                </div>
            );
        }

        const cart = this.props.cart.map( (item) => {
            console.log("item:", item);
            return (
                <tr>
                    <td>{item.name}</td>
                    <td>{item.quantity}</td>
                    <td className="right-align">${item.price/100}</td>
                </tr>
            );
        });

        console.log("props in CARTMETA:", this.props.cartMeta);
        const { total_quantity, subtotal } = this.props.cartMeta[0];
        console.log("total_quantity: ", total_quantity);
        console.log("subtotal: ", subtotal);

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

                    <thead>
                        <tr>
                            <th>Total Quantity: </th>
                            <td>{total_quantity}</td>
                        </tr>
                        <tr>
                            <th>Subtotal: </th>
                            <td>{subtotal}</td>
                        </tr>
                    </thead>
                </table>
                <div className="row center">
                    <button className="checkoutButton waves-effect waves-light btn">checkout</button>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log('Redux State from Cart Component:', state);
    return {
        cart: state.getCart.all,
        cartMeta: state.getCartMeta.all
    }
}

export default connect(mapStateToProps, { getCart, addCartMeta, getCartMeta })(Cart);