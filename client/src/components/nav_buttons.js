import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getCart, updateSummary, getSummary} from '../actions';
import '../assets/css/nav_buttons.css';

class NavButtons extends Component {

    handleCartSummary = async () => {
        await this.props.getCart();

        const summary_id = this.props.summary.id;
        await this.props.updateSummary(summary_id);
        await this.props.getSummary();
    }

    render() {
        const {cartAlert} = this.props.addCartAlert;
        
        return (
            <Fragment>
                <div className="hide-on-small-only">
                    <Link className="waves-effect waves-light btn navButtons" to="/">home</Link>
                    <Link className="waves-effect waves-light btn navButtons" to="/contact">contact</Link>
                    <Link onClick={this.handleCartSummary} className={`waves-effect waves-light btn navButtons ${cartAlert}`} to="/cart">cart</Link>
                    {/*<Link className="waves-effect waves-light btn navButtons" to="/create">create</Link>*/}
                    {/*<Link className="waves-effect waves-light btn navButtons" to="/login">login</Link>*/}
                </div>
                <div className="show-on-small hide-on-med-and-up">
                    <Link className="material-icons iconButtons" to="/">home</Link>
                    <Link className="material-icons iconButtons" to="/contact">message</Link>
                    <Link onClick={this.handleCartSummary} className={`material-icons iconButtons ${cartAlert}`} to="/cart">shopping_cart</Link>
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps(state){
    return {
        cart: state.getCartMeta.single,
        summary: state.summary.single,
        addCartAlert: state.addCartAlert
    }
}

export default connect(mapStateToProps, {getCart, updateSummary, getSummary})(NavButtons);
