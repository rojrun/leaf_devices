import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getCart} from '../actions';
import Summary from './summary';
import '../assets/css/cart.css';

class Cart extends Component {
    componentDidMount() {
        this.props.getCart();
    }

    // subtractCount = () =>{
    //     if(this.state.productQuantity < 1){
    //         this.setState({
    //             productQuantity: 0
    //         });
    //     } else {
    //         this.setState({
    //             productQuantity: this.state.productQuantity - 1
    //         });
    //     }
    // }
    //
    // addCount = () => {
    //     this.setState({
    //         productQuantity: this.state.productQuantity + 1
    //     });
    //     console.log("addCount state:", this.state);
    // }

    render() {
        if(!this.props.cart.length){
            return (
                <div className="status spin">
                    <div className="center comment cart_empty">CART EMPTY</div>
                </div>
            );
        }

        const cart = this.props.cart.map( (item, i) => {
            return (
                <tr key={i}>
                    <td>{item.name}</td>
                    <td className="row center">
                        <button onClick={this.subtractCount} type="button"
                                className="btn inputButtons waves-effect waves-light"
                                data-quantity="add" data-field="quantity">-
                        </button>
                        {item.quantity}
                        <button onClick={this.addCount} type="button"
                                className="btn inputButtons waves-effect waves-light"
                                data-quantity="add" data-field="quantity">+
                        </button>
                    </td>
                    <td className="right-align">${item.price/100}</td>
                </tr>
            );
        });

        return (
            <div>
                <div className="cart center">CART</div>
                <div className="col s12 row">
                    <table className="striped col s8">
                        <thead>
                            <tr>
                                <th>Product</th>
                                <th className="center">Quantity</th>
                                <th className="right-align">Price</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart}
                        </tbody>
                    </table>
                    <div className="col s4">
                        <Summary/>
                    </div>
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
        // getCheckout: state.getCheckout.single
    }
}

export default connect(mapStateToProps, { getCart })(Cart);