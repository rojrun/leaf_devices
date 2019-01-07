import React, { Component } from 'react';
import '../assets/css/product_carousel.css';
import SdcKitBlack from './sdc_kit_black';
import SdcKitBlue from "./sdc_kit_blue";
import SdcKitGreen from './sdc_kit_green';
import SdcKitPurple from './sdc_kit_purple';
import SdcKitRed from './sdc_kit_red';

class Carousel extends Component {
    componentDidMount() {
         this.instance = M.Carousel.init(this.carousel);
    }

    render() {
        return (
            <div ref={(element) => this.carousel = element} className="carousel">
                <SdcKitBlack/>
                <SdcKitBlue/>
                <SdcKitGreen/>
                <SdcKitPurple/>
                <SdcKitRed/>
            </div>
        );
    }
}

export default Carousel;
