import React, {Component} from 'react';
import '../assets/css/sdc_kit_black.css';

class SdcKitBlack extends Component {

    minus(){

    }

    plus(){

    }

    render(){
        return (
            <div className="black carousel-item col s10" href="#one!">
                <div className="card col s6"></div>
                <div className=" col s6">
                    <div className="description input-group-button">
                        The Leaf Devices Smoke-Drink-Chill Kit: Black.
                    </div>
                    <div>
                        {/*<input type="button" value="-" id="minus" onClick="minus()"/>*/}
                        {/*<input type="text" size="1" value="1" id="count"/>*/}
                        {/*<input type="button" value="+" id="plus" onClick="plus()"/>*/}
                        <button type="button" className="btn-floating btn-small waves-effect waves-light" data-quantity="minus" data-field="quantity">
                            <i className="material-icons">-</i>
                        </button>
                        <input  type="number" name="quantity" value="0"/>
                        <button type="button" className="btn-floating btn-small waves-effect waves-light" data-quantity="add" data-field="quantity">
                            <i className="material-icons">+</i>
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

export default SdcKitBlack;