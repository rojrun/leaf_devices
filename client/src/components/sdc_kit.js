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
        console.log("addCount state:", this.state);
    }

    handleAddToCart = () => {
        console.log("at handleAddToCart state:", this.state);
        console.log("at handleToCart props:", this.props);
        const productQuantity = this.state.productQuantity;
        const {id} = this.props.product;
        this.props.addToCart(id, productQuantity);
    }

    render() {
        const { name, price, href, style, image, id } = this.props.product;
        const {productQuantity} = this.state;

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
                        <button onClick={this.subtractCount} type="button"
                                className="btn inputButtons waves-effect waves-light"
                                data-quantity="minus" data-field="quantity">-
                        </button>
                        <span className="center productQuantity" type="number" name="quantity"
                              value={productQuantity} productId={id} onChange={() => {}}>{productQuantity}
                        </span>
                        <button onClick={this.addCount} type="button"
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
    console.log('sdc kit -Redux State:', state);
    return {
        addCart: state.addCart.all
    }
}

export default connect(mapStateToProps, { addToCart })(SdcKit);