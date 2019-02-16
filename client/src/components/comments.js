import React from 'react';
import '../assets/css/comments.css';
    
/* Comment component using logo, with message passed through props */
export default (props) => {
    return (
        <div className="status">
            <div className="center comment">{props.message}</div>
        </div>
    );
}