import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCartMeta, addCartAlert, addToCart, removeFromCart } from '../actions';
import '../assets/css/sdc_kit.css';

class SdcKit extends Component {
    // state = {
    //     productQuantity: 0
    // }

    handleSubtractCount = (id, quantity) => {
        console.log("handleSubtractCount id:", id);
        console.log("handleSubtractCount quantity:", quantity);
        this.props.removeFromCart(id, quantity);
        // if(this.state.productQuantity < 1){
        //     this.setState({
        //        productQuantity: 0
        //     });
        // } else {
        //     this.setState({
        //         productQuantity: this.state.productQuantity - 1
        //     });
        // }
    }

    handleAddCount = (id, quantity) => {
        console.log("handleAddCount id:", id);
        console.log("handleAddCount quantity:", quantity);
        this.props.addToCart(id, quantity);

        // this.setState({
        //     productQuantity: this.state.productQuantity + 1
        // });
    }

    handleAddToCart = () => {
        const productQuantity = this.state.productQuantity;
        const {id} = this.props.product;

        if(productQuantity > 0) {
            this.props.addToCartMeta(id, productQuantity);
            this.props.addCartAlert();
        }
    };

    render() {
        const { name, price, href, style, image, id } = this.props.product;
        const { quantity } = this.props.cart;
    
        return (
            <div className={`carousel-item ${style}`} href={href}>
                <div className="card">
                    <img className="prodImage" src={image}/>
                </div>
                <div className="content">
                    <div className="name">
                        {name}
                    </div>
                    <div className="price">
                        ${price/100}
                    </div>
                    <div className="productInput">
                        <div className="row quantityField">
                            <button onClick={() => this.handleSubtractCount(id, quantity)} type="button"
                                className="btn inputButtons minusButton"
                                data-quantity="subtract" data-field="quantity">-
                            </button>
                            <div className="productQuantity">
                                <input type="number" name="quantity"
                                    value={quantity} product_id={id} onChange={() => {}}/>
                            </div>    
                            <button onClick={() => this.handleAddCount(id, quantity)} type="button"
                                className="btn inputButtons"
                                data-quantity="add" data-field="quantity">+
                            </button>
                        </div>
                        <button onClick={this.handleAddToCart} type="button"
                            className="btn inputSubmit">Add
                        </button>  
                    </div>                      
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    
    return {
        cart: state.cart    
    }
}

export default connect(mapStateToProps, { addToCartMeta, addCartAlert, addToCart, removeFromCart })(SdcKit);