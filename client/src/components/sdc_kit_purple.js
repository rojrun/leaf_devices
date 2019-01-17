import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../actions';
import '../assets/css/sdc_kit.css';
import grinder from '../assets/images/grinder.jpg';

class SdcKitPurple extends Component {
    state = {
        productQuantityPurple: 0
    }

    componentDidMount() {
        this.props.getProducts();
    }

    data = {
        description: "The Smoke-Drink-Chill Kit: Purple.",
        backgroundColor: "purple carousel-item col s10",
        img: grinder,
        href: "#four!"
    }

    subtractCount = () =>{
        if(this.state.productQuantityPurple < 1){
            this.setState({
                productQuantityPurple: 0
            });
        } else {
            this.setState({
                productQuantityPurple: this.state.productQuantityPurple - 1
            });
        }
    }

    addCount = () => {
        this.setState({
            productQuantityPurple: this.state.productQuantityPurple + 1
        });
    }

    handleAddToCart = () => {
        console.log('event', this.state.productQuantityPurple);

    }


    render() {
        const {productQuantityPurple} = this.state;

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
                        <input className="center productQuantity" type="number" name="quantity" value={productQuantityPurple}/>
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
})(SdcKitPurple);