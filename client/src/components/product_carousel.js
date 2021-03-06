import React, { Component } from 'react';
import {connect} from 'react-redux';
import {getProducts} from '../actions';
import SdcKit from './sdc_kit';
import Comments from './comments';
import '../assets/css/product_carousel.css';

/* Main carousel component to display products */
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
            return <Comments message="LOADING PRODUCTS"/>
        }

        const products = this.props.products.map( (product) => {
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
    return {
        products: state.products.all
    }
}

export default connect(mapStateToProps, { getProducts })(ProductCarousel);
