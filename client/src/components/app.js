import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ProductCarousel from './product_carousel';
import '../assets/css/app.css';

const App = () => (
    <div className="row">
        <div className="col s3 back_ground">
            <div className="col s3 footer-copyright">
                © 2019 Leaf Devices LLC. All rights reserved.
            </div>
        </div>
        <div className="col s6 main_content">
            <div className="col s2"></div>
            <div className="col s8 logo"></div>
            <div className="col s2"></div>
            <ProductCarousel/>
        </div>
        <div className="col s3 back_ground"></div>
    </div>
);

export default App;
