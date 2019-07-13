import React, { Component } from 'react';
import { connect } from 'react-redux';


export default function (WrappedComponent, redirect = true){
    class Auth extends Component {

        componentDidMount(){
            this.checkAuth();
        }

        componentDidUpdate(){
            this.checkAuth();
        }

        checkAuth(){
            const { auth, history } = this.props;

            if(!auth && redirect){
                history.push('/sign-up-sign-in');
            }
        }

        render(){
            return <WrappedComponent {...this.props} />
        }
    }

    function mapStateToProps(state){
        return {
            auth: state.user.auth
        }
    }

    return connect(mapStateToProps)(Auth);
}
