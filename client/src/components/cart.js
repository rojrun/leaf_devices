import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCartMeta, deleteCartMetaItem, updateCartMetaQuantity, updateSummary, getSummary} from '../actions';
import Summary from './summary';
import Comments from './comments';
import '../assets/css/cart.css';

/* Cart component to display selected items from landing page */
class Cart extends Component {
    componentDidMount() {
        this.props.getCartMeta();
    }

    handleSubtractCount = async (id, quantity) => {
        if(quantity < 1) {
            quantity = 0;
        } else {
            quantity--;
        }
        await this.props.updateCartMetaQuantity(id, quantity);
        await this.props.getCartMeta();

        const summary_id = this.props.summary.id;
        const { shipping } = this.props.summary;
        await this.props.updateSummary(summary_id, shipping);
        await this.props.getSummary();
    }

    handleAddCount = async (id, quantity) => {
        quantity++;
        await this.props.updateCartMetaQuantity(id, quantity);
        await this.props.getCartMeta();

        const summary_id = this.props.summary.id;
        const { shipping } = this.props.summary;
        await this.props.updateSummary(summary_id, shipping);
        await this.props.getSummary();
    }

    handleDeleteItem = async (id, quantity) => {
        await this.props.deleteCartMetaItem(id, quantity);
        await this.props.getCartMeta();

        const summary_id = this.props.summary.id;
        const { shipping } = this.props.summary;
        await this.props.updateSummary(summary_id, shipping);
        await this.props.getSummary();
    }

    render() {
        if(!this.props.cart.length){
            return <Comments message="CART EMPTY"/>
        }

        const cart = this.props.cart.map( (item, i) => {
            const {id, quantity, name, price} = item;
            return (
                <tr key={i}>
                    <td onClick={ () => this.handleDeleteItem(id) }  className="material-icons clear">clear</td>
                    <td>{name}</td>
                    <td className="row center">
                        <button onClick={ () => this.handleSubtractCount(id, quantity) } type="button"
                                className="btn cartMinusBtn cartBtn waves-effect waves-light"
                                data-quantity="subtract" data-field="quantity">-
                        </button>
                        <div className="cartQuantity">
                            {quantity}
                        </div>    
                        <button onClick={ () => this.handleAddCount(id, quantity) } type="button"
                                className="btn cartAddBtn cartBtn waves-effect waves-light"
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
                <div className="col s12 m12 l12 row cartTable">
                    <div className="col s12 m12 l8 table">
                        <table className="col s12 m12 l12 striped rounded">
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
                            <Link className="btn waves-effect waves-light shop_update" to="/">back to shopping</Link>
                        </div>
                    </div>
                    <div className="col s12 m12 l4">
                        <Summary/>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        getCartMeta: state.getCartMeta.single,
        summary: state.summary.single
    }
}

export default connect(mapStateToProps, { getCartMeta, deleteCartMetaItem, updateCartMetaQuantity, updateSummary, getSummary })(Cart);