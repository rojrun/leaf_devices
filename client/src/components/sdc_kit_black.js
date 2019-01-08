import React, {Component} from 'react';
import '../assets/css/sdc_kit_black.css';

class SdcKitBlack extends Component {



    render(){
        return(
            <div className="black carousel-item col s10" href="#one!">
                <div className="card col s5"></div>
                <div className="container col s6">
                    <div className="description input-group-button">
                        The Leaf Devices Smoke-Drink-Chill Kit, Black.
                    </div>
                    <button type="button" className="btn-floating btn-small waves-effect waves-light" data-quantity="minus" data-field="quantity">
                        <i className="material-icons">-</i>
                    </button>
                    <input className="input-group-field" type="number" name="quantity" value="0"/>

                </div>
            </div>
        );
    }
}

export default SdcKitBlack;