import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCart, deleteCartMetaItem, updateCartMetaQuantity, updateSummary, getSummary} from '../actions';
import Summary from './summary';
import '../assets/css/cart.css';

class Cart extends Component {
    componentDidMount() {
        this.props.getCart();
    }

    handleSubtractCount = (id, quantity) => {
        if(quantity < 1) {
            quantity = 0;
        } else {
            quantity--;
        }
        this.props.updateCartMetaQuantity(id, quantity);
        this.props.getCart();

        const summary_id = this.props.summary.id;
        this.props.updateSummary(summary_id);
        this.props.getSummary();
    }

    handleAddCount = (id, quantity) => {
        quantity++;
        this.props.updateCartMetaQuantity(id, quantity);
        this.props.getCart();

        const summary_id = this.props.summary.id;
        this.props.updateSummary(summary_id);
        this.props.getSummary();
    }

    handleDeleteItem = (id, quantity) => {
        this.props.deleteCartMetaItem(id, quantity);
        this.props.getCart();

        const summary_id = this.props.summary.id;
        this.props.updateSummary(summary_id);
        this.props.getSummary();
    }

    render() {
        if(!this.props.cart.length){
            return (
                <div className="status">
                    <div className="center comment cart_empty">CART EMPTY</div>
                </div>
            );
        }

        const cart = this.props.cart.map( (item, i) => {
            const {id, quantity, name, price} = item;
            return (
                <tr key={i}>
                    <td onClick={ () => this.handleDeleteItem(id) }  className="material-icons clear">clear</td>
                    <td>{name}</td>
                    <td className="row center">
                        <button onClick={ () => this.handleSubtractCount(id, quantity) } type="button"
                                className="btn inputButtons cartMinusBtn waves-effect waves-light"
                                data-quantity="subtract" data-field="quantity">-
                        </button>
                        {quantity}
                        <button onClick={ () => this.handleAddCount(id, quantity) } type="button"
                                className="btn inputButtons cartAddBtn waves-effect waves-light"
                                data-quantity="add" data-field="quantity">+
                        </button>
                    </td>
                    <td className="right-align">${price/100}</td>
                </tr>
            );
        });

        return (
            <div>
                <div className="cart center">CART</div>
                <div className="col s12 row">
                    <div className="col s8">
                        <table className="striped rounded">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Product</th>
                                    <th className="center">Quantity</th>
                                    <th className="right-align">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart}
                            </tbody>
                        </table>
                        <div className="row center">
                            <Link className="btn inputButtons waves-effect waves-light shop_update" to="/">back to shopping</Link>
                        </div>
                    </div>
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
        cart: state.getCartMeta.single,
        summary: state.summary.single
        // getCheckout: state.getCheckout.single
    }
}

export default connect(mapStateToProps, { getCart, deleteCartMetaItem, updateCartMetaQuantity, updateSummary, getSummary })(Cart);