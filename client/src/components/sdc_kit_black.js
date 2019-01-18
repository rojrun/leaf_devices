import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../actions';
import '../assets/css/sdc_kit.css';
import grinder from '../assets/images/grinder.jpg';

class SdcKitBlack extends Component {
    state = {
            productQuantityBlack: 0
    }

    data = {
            description: "The Smoke-Drink-Chill Kit: Black.",
            backgroundColor: "black carousel-item col s10",
            img: grinder,
            href: "#one!"
        }

    componentDidMount() {
        this.props.getProducts();
    }

    subtractCount = () =>{
        if(this.state.productQuantityBlack < 1){
            this.setState({
               productQuantityBlack: 0
            });
        } else {
            this.setState({
                productQuantityBlack: this.state.productQuantityBlack - 1
            });
        }
    }

    addCount = () => {
        this.setState({
            productQuantityBlack: this.state.productQuantityBlack + 1
        });
    }

    handleAddToCart = () => {
        console.log('event', this.state.productQuantityBlack);

    }

    render() {
        console.log("in render: ", this.props.products);
        // const product = this.props.products[0];
        // console.log("product: ", product);

        const {productQuantityBlack} = this.state;
        return (
            <div className={this.data.style} href={this.data.href}>
                <div className="card col s6">
                    <img className="prodImage" src={this.data.image}/>
                </div>
                <div className="col s6">
                    <div className="description">
                        {this.data.name}
                    </div>
                    {/*<div>{this.data.price}</div>*/}
                    <div className="row quantityField">
                        <button onClick={this.subtractCount} type="button" className="btn inputButtons waves-effect waves-light"
                                data-quantity="minus" data-field="quantity">
                            <i className="material-icons">-</i>
                        </button>
                        <input className="center productQuantity" type="number" name="quantity" value={productQuantityBlack}/>
                        <button onClick={this.addCount} type="button" className="btn inputButtons waves-effect waves-light"
                                data-quantity="add" data-field="quantity">
                            <i className="material-icons">+</i>
                        </button>
                        <button onClick={this.handleAddToCart} type="button" className="btn inputSubmit waves-effect waves-light">Add to Cart</button>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log('Redux State:', state);
    return {
        products: state.products.all
    }
}


export default connect(mapStateToProps, {
    getProducts: getProducts
})(SdcKitBlack);