import React from 'react';
import {Link} from 'react-router-dom';
import '../assets/css/SignUpInPage.css';

const SignUpInPage = () => (
    <div>
        <div className="userCart center">PLEASE SIGN-IN OR SIGN-UP</div>
        <div className="center">
            <Link className="btn navButtons userCartLinks" to="/sign-in">sign in</Link>
            <Link className="btn navButtons userCartLinks" to="/sign-up">sign up</Link>
        </div>
    </div>
);

export default SignUpInPage;