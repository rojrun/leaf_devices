import React, {Component} from 'react';
import '../assets/css/logo.css';

class Logo extends Component {
    refreshPage = () => {
        location.reload(true);
    }

    render() {
        return (
            <div className="logo" onClick={this.refreshPage}></div>
        );
    }
}

export default Logo;