import React, {Component} from 'react';
import '../assets/css/sdc_kit.css';

class SdcKit extends Component {

    data = [
        {
            description: "The Smoke-Drink-Chill Kit: Black.",
            backgroundColor: "black carousel-item col s10",
            img: "black",
            href: "#one!"
        },
        {
            description: "The Smoke-Drink-Chill Kit: Blue.",
            backgroundColor: "blue carousel-item col s10",
            img: "blue",
            href: "#two!"
        },
        {
            description: "The Smoke-Drink-Chill Kit: Green.",
            backgroundColor: "green carousel-item col s10",
            img: "green",
            href: "#three!"
        },
        {
            description: "The Smoke-Drink-Chill Kit: Purple.",
            backgroundColor: "purple carousel-item col s10",
            img: "purple",
            href: "#four!"
        },
        {
            description: "The Smoke-Drink-Chill Kit: Red.",
            backgroundColor: "red carousel-item col s10",
            img: "red",
            href: "#five!"
        }
    ];

    minus(){

    }

    plus(){

    }

    render(){
        // const products = this.data.map(prod => {
        //     return <div className="carousel-item" img={prod.img}>
        // });
        const products = this.data.map(prod => {
            return (
                <div className={prod.backgroundColor} href={prod.href}>
                    <div className="card col s6"></div>
                    <div className=" col s6">
                        <div className="description input-group-button">
                            {prod.description}
                        </div>
                        <div className="row">
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
        });

            return (
                <div>
                    {products}
                </div>
            );

        // return (
        //     <div className="carousel-item col s10" href="#one!">
        //         <div className="card col s6"></div>
        //         <div className=" col s6">
        //             <div className="description input-group-button">
        //                 Description
        //             </div>
        //             <div className="row">
        //                 <button type="button" className="btn-floating btn-small waves-effect waves-light" data-quantity="minus" data-field="quantity">
        //                     <i className="material-icons">-</i>
        //                 </button>
        //                 <input  type="number" name="quantity" value="0"/>
        //                 <button type="button" className="btn-floating btn-small waves-effect waves-light" data-quantity="add" data-field="quantity">
        //                     <i className="material-icons">+</i>
        //                 </button>
        //             </div>
        //         </div>
        //     </div>
        // );

}

export default SdcKit;