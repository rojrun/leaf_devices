import React, {Component} from 'react';
import '../assets/css/cart.css';

class Cart extends Component {

    render() {
        return (
            <div>
                <div className="cart center">CART</div>
                <table className="striped responsive-table">
                    <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Smoke-Drink-Chill Kit: Black</td>
                            <td>1</td>
                            <td>$24.99</td>
                        </tr>
                        <tr>
                            <td>Smoke-Drink-Chill Kit: Red</td>
                            <td>1</td>
                            <td>$24.99</td>
                        </tr>
                    </tbody>
                </table>
                <button className="waves-effect waves-light btn-small">checkout</button>
            </div>
        );
    }
}

export default Cart;