import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addToCart} from '../actions';
import '../assets/css/sdc_kit.css';


class SdcKit extends Component {
    state = {
        productQuantity: 0
    }

    subtractCount = () =>{
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

    addCount = () => {
        this.setState({
            productQuantity: this.state.productQuantity + 1
        });
    }

    handleAddToCart = () => {
        // console.log('Add to Cart button: ', this.state.productQuantity);
        const productQuantity = this.state.productQuantity;
        console.log("productQuantity: ", productQuantity);

        const {id} = this.props.product;
        console.log("productId: ", id);

        this.props.addToCart(id, productQuantity);
    }

    render() {
        const { name, price, href, style, image, id } = this.props.product;
        console.log("products component: ", this.props.product);

        const {productQuantity} = this.state;

        return (
            <div className={`carousel-item col s10 ${style}`} href={href}>
                <div className="card col s12">
                    <img className="prodImage" src={image}/>
                </div>
                <div className="center col s12">
                    <div className="name">
                        {name}
                    </div>
                    <div className="price">
                        ${price/100}
                    </div>
                    <div className="center row quantityField">
                        <button onClick={this.subtractCount} type="button"
                                className="btn inputButtons waves-effect waves-light"
                                data-quantity="minus" data-field="quantity">
                            <i className="material-icons">-</i>
                        </button>
                        <span className="center productQuantity" type="number" name="quantity"
                              value={productQuantity} productId={id} onChange={() => {}}>{productQuantity}
                        </span>
                        <button onClick={this.addCount} type="button"
                                className="btn inputButtons waves-effect waves-light"
                                data-quantity="add" data-field="quantity">
                            <i className="material-icons">+</i>
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
    console.log('sdc kit -Redux State:', state);
    return {
        addCart: state.addCart.all
    }
}

export default connect(mapStateToProps, { addToCart })(SdcKit);

// export default SdcKit;