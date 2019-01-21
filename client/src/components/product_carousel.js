import React, { Component } from 'react';
import '../assets/css/product_carousel.css';
import SdcKit from './sdc_kit';
import {connect} from "react-redux";
import {getProducts} from "../actions";

class ProductCarousel extends Component {

    componentDidMount() {
        this.instance = M.Carousel.init(this.carousel);
        this.props.getProducts();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if(prevProps.products.length !== this.props.products.length){
            this.instance = M.Carousel.init(this.carousel);
        }
    }

    render() {
        if(!this.props.products.length){
            return (
                <div className="status spin">
                    LOADING PAGE
                </div>
            );
        }

        const products = this.props.products.map( (product) => {
            console.log('Product:', product);
            return <SdcKit key={product.href} product={product}/>
        });

        return (
            <div ref={(element) => this.carousel = element} className="carousel">
                {products}
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

export default connect(mapStateToProps, { getProducts })(ProductCarousel);
