import React, {Component} from 'react';
import '../assets/css/comments.css';
    
/* Comment component using logo, with message passed through props */
class Comments extends Component {
    render() {
        return (
            <div className="status">
                <div className="center comment">{this.props.message}</div>
            </div>
        );
    }
}

export default Comments;