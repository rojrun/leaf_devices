import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCartMeta, makeCart, getCart, addCartAlert} from '../actions';
import '../assets/css/sdc_kit.css';

class SdcKit extends Component {
    state = {
        productQuantity: 0
    }

    handleSubtractCount = () =>{
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
            this.props.addToCartMeta(id, productQuantity);
            // console.log('cart alert:', this.props.cartNotif);
            this.props.addCartAlert();
            // console.log('updated cart alert:', this.props.cartNotif);
        }
    };

    render() {
        const { name, price, href, style, image, id } = this.props.product;
        const {productQuantity} = this.state;

        // console.log("addCartAlert******************", this.props.addCartAlert.disableBttn);

        return (
            <div className={`carousel-item col s10 ${style}`} href={href}>
                <div className="card col s12 l6">
                    <img className="prodImage" src={image}/>
                </div>
                <div className="center col s12 l6">
                    <div className="name">
                        {name}
                    </div>
                    <div className="price">
                        ${price/100}
                    </div>
                    <div className="center row quantityField">
                        <button onClick={this.handleSubtractCount} type="button"
                                className="btn inputButtons waves-effect waves-light"
                                data-quantity="subtract" data-field="quantity">-
                        </button>
                        <span className="center productQuantity" type="number" name="quantity"
                              value={productQuantity} product_id={id} onChange={() => {}}>{productQuantity}
                        </span>
                        <button onClick={this.handleAddCount} type="button"
                                className="btn inputButtons waves-effect waves-light"
                                data-quantity="add" data-field="quantity">+
                        </button>
                        <button onClick={this.handleAddToCart} type="button"
                                className="btn inputSubmit waves-effect waves-light">Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        addToCartMeta: state.addToCartMeta.single,
        makeCart: state.makeCart.all,
        getCart: state.getCart,
        addCartAlert: state.addCartAlert
    }
}

export default connect(mapStateToProps, { addToCartMeta, makeCart, getCart, addCartAlert })(SdcKit);