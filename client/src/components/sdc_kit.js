import React, {Component} from 'react';
import '../assets/css/sdc_kit.css';
import grinder from '../assets/images/grinder.jpg';

class SdcKit extends Component {
    state = {
            productQuantity: 0
        }

    data = [
        {
            description: "The Smoke-Drink-Chill Kit: Black.",
            backgroundColor: "black carousel-item col s10",
            img: "grinder",
            href: "#one!"
        },
        {
            description: "The Smoke-Drink-Chill Kit: Blue.",
            backgroundColor: "blue carousel-item col s10",
            img: "grinder",
            href: "#two!"
        },
        {
            description: "The Smoke-Drink-Chill Kit: Green.",
            backgroundColor: "green carousel-item col s10",
            img: "grinder",
            href: "#three!"
        },
        {
            description: "The Smoke-Drink-Chill Kit: Purple.",
            backgroundColor: "purple carousel-item col s10",
            img: "grinder",
            href: "#four!"
        },
        {
            description: "The Smoke-Drink-Chill Kit: Red.",
            backgroundColor: "red carousel-item col s10",
            img: "grinder",
            href: "#five!"
        }
    ];

    subtractCount = () =>{
        if(this.state.productQuantity < 1){
            this.setState({
               productQuantity: 0
            });
        } else {
            this.setState({
                productQuantity: this.state.productQuantity - 1
            });
        }
    }

    addCount = () => {
        this.setState({
            productQuantity: this.state.productQuantity + 1
        });
    }

    handleAddToCart = () => {
        console.log('event', this.state.productQuantity);

    }


    render() {
        const {productQuantity} = this.state;
        const products = this.data.map(prod => {
            return (
                <div className={prod.backgroundColor} href={prod.href}>
                    <div className="card col s6">
                        <img className="prodImage" src={prod.img}/>
                    </div>
                    <div className="col s6">
                        <div className="description">
                            {prod.description}
                        </div>
                        <div className="row quantityField">
                            <button onClick={this.subtractCount} type="button" className="btn inputButtons waves-effect waves-light"
                                    data-quantity="minus" data-field="quantity">
                                <i className="material-icons">-</i>
                            </button>
                            <input className="center" type="number" name="quantity" value={productQuantity}/>
                            <button onClick={this.addCount} type="button" className="btn inputButtons waves-effect waves-light"
                                    data-quantity="add" data-field="quantity">
                                <i className="material-icons">+</i>
                            </button>
                            <button onClick={this.handleAddToCart} type="button" className="btn inputSubmit waves-effect waves-light">Add to Cart</button>
                        </div>
                    </div>
                </div>
            );
        });

        return (
            <div>
                {products}
            </div>
        );
    }
}

export default SdcKit;