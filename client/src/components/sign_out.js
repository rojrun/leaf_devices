import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signOut } from '../actions';
import Comments from './comments';

class SignOut extends Component {
    componentDidMount() {
        this.props.signOut();
        setTimeout( () => {
            this.props.history.push('/');
        }, 2500);
    }

    render() {
        return (
            <Comments message="YOU HAVE SIGNED OUT"/>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.user.auth
    }
}

export default connect(mapStateToProps, {signOut})(SignOut);
