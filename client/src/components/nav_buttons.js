import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCart, updateSummary, getSummary} from '../actions';
import '../assets/css/nav_buttons.css';

class NavButtons extends Component {

    handleCartSummary = async () => {
        console.log('handleCartSummary clicked');
        await this.props.getCart();

        console.log('summary props: ', this.props.summary);
        const summary_id = this.props.summary.id;
        await this.props.updateSummary(summary_id);
        await this.props.getSummary();
    }

    render() {
        return (
            <div>
                <div className="hide-on-small-only">
                    <Link className="waves-effect waves-light btn navButtons" to="/">home</Link>
                    <Link className="waves-effect waves-light btn navButtons" to="/contact">contact</Link>
                    <Link onClick={this.handleCartSummary} className={`waves-effect waves-light btn navButtons `} to="/cart">cart</Link>
                    {/*<Link className="waves-effect waves-light btn navButtons" to="/create">create</Link>*/}
                    {/*<Link className="waves-effect waves-light btn navButtons" to="/login">login</Link>*/}
                </div>
                <div className="show-on-small hide-on-med-and-up">
                    <Link className="material-icons iconButtons" to="/">home</Link>
                    <Link className="material-icons iconButtons" to="/contact">message</Link>
                    <Link onClick={this.handleCartSummary} className="material-icons iconButtons" to="/cart">shopping_cart</Link>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    console.log('Redux State from Cart Component:', state);
    return {
        cart: state.getCartMeta.single,
        summary: state.summary.single
    }
}

export default connect(mapStateToProps, {getCart, updateSummary, getSummary})(NavButtons);
