import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCart} from '../actions';
import '../assets/css/cart.css';

class Cart extends Component {
    componentDidMount() {
        this.props.getCart();
    }

    render() {
        console.log("props in CART:", this.props.cart);
        if(!this.props.cart.length){
            return <h1>Your CART is empty</h1>;
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
                <div className="row center">
                    <button className="checkoutButton waves-effect waves-light btn">checkout</button>
                </div>
            </div>
        );


        // return (
        //     <div className="col s12">
        //         <div className="cart center">CART</div>
        //         <table className="striped responsive-table">
        //             <thead>
        //             <tr>
        //                 <th>Product</th>
        //                 <th>Quantity</th>
        //                 <th className="right-align">Price</th>
        //             </tr>
        //             </thead>
        //             <tbody>
        //                 <tr>
        //                     <td>{item.name}</td>
        //                     <td>{item.quantity}</td>
        //                     <td className="right-align">${item.price/100}</td>
        //                 </tr>
        //             </tbody>
        //         </table>
        //         <button className="checkoutButton waves-effect waves-light btn">checkout</button>
        //     </div>
        // );
        // });
    }
}

function mapStateToProps(state){
    console.log('Redux State from Cart Component:', state);
    return {
        cart: state.getCart.all
    }
}

export default connect(mapStateToProps, { getCart })(Cart);