import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../actions';
import '../assets/css/sdc_kit.css';
import grinder from '../assets/images/grinder.jpg';

class SdcKitBlue extends Component {
    state = {
        productQuantityBlue: 0
    }

    componentDidMount() {
        this.props.getProducts();
    }

    data = {
        description: "The Smoke-Drink-Chill Kit: Blue.",
        backgroundColor: "blue carousel-item col s10",
        img: grinder,
        href: "#two!"
    }

    subtractCount = () =>{
        if(this.state.productQuantityBlue < 1){
            this.setState({
                productQuantityBlue: 0
            });
        } else {
            this.setState({
                productQuantityBlue: this.state.productQuantityBlue - 1
            });
        }
    }

    addCount = () => {
        this.setState({
            productQuantityBlue: this.state.productQuantityBlue + 1
        });
    }

    handleAddToCart = () => {
        console.log('event', this.state.productQuantityBlue);

    }

    render() {
        const {productQuantityBlue} = this.state;

        return (
            <div className={this.data.backgroundColor} href={this.data.href}>
                <div className="card col s6">
                    <img className="prodImage" src={this.data.img}/>
                </div>
                <div className="col s6">
                    <div className="description">
                        {this.data.description}
                    </div>
                    <div className="row quantityField">
                        <button onClick={this.subtractCount} type="button" className="btn inputButtons waves-effect waves-light"
                                data-quantity="minus" data-field="quantity">
                            <i className="material-icons">-</i>
                        </button>
                        <input className="center productQuantity" type="number" name="quantity" value={productQuantityBlue}/>
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
        products: state.product.all
    }
}


export default connect(mapStateToProps, {
    getProducts: getProducts
})(SdcKitBlue);