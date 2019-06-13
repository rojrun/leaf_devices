import React, {Component} from 'react';
import '../assets/css/logo.css';

class Logo extends Component {
    refreshApp = () => {
        location.reload(true);
    }

    render() {
        return (
            <div className="logo" onClick={this.refreshApp}></div>
        );
    }
}

export default Logo;