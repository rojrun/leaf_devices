import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import '../assets/css/product_carousel.css';
import SdcKitBlack from './sdc_kit_black';
import SdcKitBlue from "./sdc_kit_blue";
import SdcKitGreen from './sdc_kit_green';
import SdcKitPurple from './sdc_kit_purple';
import SdcKitRed from './sdc_kit_red';

export default (props) => {
    return (
        <div className="carousel">
            <SdcKitBlack/>
            <SdcKitBlue/>
            <SdcKitGreen/>
            <SdcKitPurple/>
            <SdcKitRed/>
        </div>
    );
}
