import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addToCartMeta, addCartAlert } from '../actions';
import '../assets/css/sdc_kit.css';

class SdcKit extends Component {
    state = {
        productQuantity: 0
    }

    handleSubtractCount = () => {
        if(this.state.productQuantity < 1){
            this.setState({
               productQuantity: 0
            });
        } else {
            this.setState({
                productQuantity: this.state.productQuantity - 1
            });
        }
    }

    handleAddCount = () => {
        this.setState({
            productQuantity: this.state.productQuantity + 1
        });
    }

    handleAddToCart = () => {
        const productQuantity = this.state.productQuantity;
        const {id} = this.props.product;

        if(productQuantity > 0) {
            this.props.addCartAlert("pulse");
            this.props.addToCartMeta(id, productQuantity);
        }
    };

    render() {
        const { name, price, href, style, image, id } = this.props.product;
        const {productQuantity} = this.state;

        console.log('Is User Signed In:', this.props.auth);
    
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
                            <button onClick={this.handleSubtractCount} type="button"
                                className="btn inputButtons minusButton"
                                data-quantity="subtract" data-field="quantity">-
                            </button>
                            <div className="productQuantity">
                                <input type="number" name="quantity"
                                    value={productQuantity} product_id={id} onChange={() => {}}/>
                            </div>    
                            <button onClick={this.handleAddCount} type="button"
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
        auth: state.user.auth,
        cart: state.cart    
    }
}

export default withRouter(connect(mapStateToProps, { addToCartMeta, addCartAlert })(SdcKit));
