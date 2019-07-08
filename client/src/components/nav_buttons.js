import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCart, updateSummary, getSummary, removeCartAlert } from '../actions';
import '../assets/css/nav_buttons.css';

class NavButtons extends Component {

    handleCartAlert = () => {
        this.props.removeCartAlert();
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
                    <Link className="btn navButtons" to="/sign-out">sign out</Link>
                    <Link onClick={ this.handleCartAlert } className={ `btn navButtons ${cartAlert}` } to="/cart">cart</Link>
                </div>
                <div className="show-on-small hide-on-med-and-up mobileNavBar">
                    <Link className="material-icons iconButtons" to="/">home</Link>
                    <Link className="material-icons iconButtons" to="/contact">contacts</Link>
                    <Link className="material-icons iconButtons" to="/sign-in">lock_open</Link>
                    <Link className="material-icons iconButtons" to="/sign-up">create</Link>
                    <Link className="material-icons iconButtons" to="/sign-out">lock</Link>
                    <Link onClick={ this.handleCartAlert } className={ `material-icons iconButtons ${cartAlert}` } to="/cart">shopping_cart</Link>
                </div>
            </Fragment>
        );
    }
}

function mapStateToProps(state){
    return {
        addCartAlert: state.addCartAlert
    }
}

export default connect(mapStateToProps, {getCart, updateSummary, getSummary, removeCartAlert})(NavButtons);
