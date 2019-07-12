import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { addToCartMeta, addCartAlert, updateSummary, addToSummary } from '../actions';
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

    handleAddToCart = async () => {
        const productQuantity = this.state.productQuantity;
        const {id} = this.props.product;

        if(productQuantity > 0) {
            this.props.addCartAlert("pulse");
            await this.props.addToCartMeta(id, productQuantity);

            // Added for when "back to shopping" button is pressed, from Cart component.
            const {shipping_method, shipping} = this.props.summary;
            await this.props.addToSummary();
            if(shipping_method !== undefined && shipping !== undefined) {
                this.props.updateSummary(shipping_method, shipping);
            } else {             
                this.props.updateSummary("Standard", 0);
            }       
        }
    };

    render() {
        const { name, price, href, style, image, id } = this.props.product;
        const {productQuantity} = this.state;

        console.log("Auth:", this.props.auth);
    
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
        cart: state.cart,
        summary: state.summary.single
    }
}

export default withRouter(connect(mapStateToProps, { addToCartMeta, addCartAlert, updateSummary, addToSummary })(SdcKit));
