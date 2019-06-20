import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCartMeta, makeCart, addCartAlert, getCustomerID} from '../actions';
import '../assets/css/sdc_kit.css';

class SdcKit extends Component {
    state = {
        productQuantity: 0,
        hasCart: false
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

    makeCustomerCart = async () => {
        if(!this.state.hasCart) {
            this.props.makeCart();
            await this.props.getCustomerID();
            this.setState({
                hasCart: !this.state.hasCart
            });
        }
        
    }

    handleAddToCart = () => {
        this.makeCustomerCart();
        
        // if(!this.state.hasCart) {
        //     this.props.makeCart();
        //     this.setState({
        //         hasCart: !this.state.hasCart
        //     });         
        // }

        

        const productQuantity = this.state.productQuantity;
        const {id} = this.props.product;
        const {customer_id} = this.props.customerID;
        console.log("customer_id:", customer_id);
        // console.log("customer_id:", this.props.customerID);

        if(productQuantity > 0) {
            this.props.addToCartMeta(customer_id, id, productQuantity);
            // this.props.addCartAlert();
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
                    <div className="productInput">
                        <div className="row quantityField">
                            <button onClick={this.handleSubtractCount} type="button"
                                className="btn inputButtons minusButton waves-effect waves-light"
                                data-quantity="subtract" data-field="quantity">-
                            </button>
                            <div className="productQuantity">
                                <input type="number" name="quantity"
                                    value={productQuantity} product_id={id} onChange={() => {}}/>
                            </div>    
                            <button onClick={this.handleAddCount} type="button"
                                className="btn inputButtons waves-effect waves-light"
                                data-quantity="add" data-field="quantity">+
                            </button>
                        </div>
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
        makeCart: state.makeCart.single,
        getCart: state.getCart,
        addCartAlert: state.addCartAlert,
        customerID: state.customerID.single
    }
}

export default connect(mapStateToProps, { addToCartMeta, makeCart, addCartAlert, getCustomerID })(SdcKit);