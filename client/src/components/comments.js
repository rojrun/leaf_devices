import React from 'react';
import '../assets/css/comments.css';
    
<<<<<<< HEAD
/* Comments component displays message from props */
=======
/* Comment component using logo, with message passed through props */
>>>>>>> 05a7c81ed781baf3312162ed5e92b3c076ddb91e
const Comments = (props) => {
    return (
        <div className="status">
            <div className="center comment">{props.message}</div>
        </div>
    );
}

export default Comments;