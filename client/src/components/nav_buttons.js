import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
// import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { getCart, updateSummary, getSummary, removeCartAlert } from '../actions';
import '../assets/css/nav_buttons.css';

class NavButtons extends Component {

    handleCartSummary = /*async*/ () => {
        this.props.removeCartAlert();
        // this.props.history.push("/cart");
        // await this.props.getCart();
        // console.log("handleCartSummary, summary_id: ", this.props.summary.id);
        // const summary_id = this.props.summary.id;
        // this.props.updateSummary(summary_id);
        // await this.props.getSummary();
    }

    render() {
        const { cartAlert } = this.props.addCartAlert;
        
        return (
            <Fragment>
                <div className="hide-on-small-only navBar">
                    <Link className="btn navButtons" to="/">home</Link>
                    <Link className="btn navButtons" to="/contact">contact</Link>
                    <Link className="btn navButtons" to="/sign-in">sign in</Link>
                    <Link className="btn navButtons" to="/sign-up">sign up</Link>
                    {/* <Link className="btn navButtons">sign out</Link> */}
                    <Link onClick={ this.handleCartSummary } className={ `btn navButtons ${cartAlert}` } to="/cart">cart</Link>
                </div>
                <div className="show-on-small hide-on-med-and-up mobileNavBar">
                    <Link className="material-icons iconButtons" to="/">home</Link>
                    <Link className="material-icons iconButtons" to="/contact">contacts</Link>
                    <Link className="material-icons iconButtons" to="/sign-in">vpn_key</Link>
                    <Link className="material-icons iconButtons" to="/sign-up">create</Link>
                    <Link onClick={ this.handleCartSummary } className={ `material-icons iconButtons ${cartAlert}` } to="/cart">shopping_cart</Link>
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps(state){
    return {
        addCartAlert: state.addCartAlert,
        // summary: state.summary.single
    }
}

export default connect(mapStateToProps, {getCart, updateSummary, getSummary, removeCartAlert})(NavButtons);
