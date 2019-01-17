import React, { Component } from 'react';
import '../assets/css/product_carousel.css';
import SdcKit from './sdc_kit';

class ProductCarousel extends Component {

    componentDidMount() {
         this.instance = M.Carousel.init(this.carousel);
    }

    render() {
        return (
            <div ref={(element) => this.carousel = element} className="carousel">
                <SdcKit/>
            </div>
        );
    }
}

export default ProductCarousel;
