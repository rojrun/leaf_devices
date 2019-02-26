import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCartMeta, makeCart, getCart, addCartAlert} from '../actions';
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
            this.props.addToCartMeta(id, productQuantity);
            this.props.addCartAlert();
        }
    };

    render() {
        const { name, price, href, style, image, id } = this.props.product;
        const {productQuantity} = this.state;

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
                    <div className="row quantityField">
                        <button onClick={this.handleSubtractCount} type="button"
                                className="btn inputButtons minusButton waves-effect waves-light"
                                data-quantity="subtract" data-field="quantity">-
                        </button>
                        <div className="center productQuantity" type="number" name="quantity"
                              value={productQuantity} product_id={id} onChange={() => {}}>{productQuantity}
                        </div>
                        <button onClick={this.handleAddCount} type="button"
                                className="btn inputButtons waves-effect waves-light"
                                data-quantity="add" data-field="quantity">+
                        </button>
                        <button onClick={this.handleAddToCart} type="button"
                                className="btn inputSubmit waves-effect waves-light">Add
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