import React from 'react';
import '../assets/css/comments.css';
    
/* Comments component displays message from props */
const Comments = (props) => {
    return (
        <div className="status">
            <div className="center comment">{props.message}</div>
        </div>
    );
}

export default Comments;