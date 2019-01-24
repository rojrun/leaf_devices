// import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import '../assets/css/dialog_box.css';
//
// class DialogBox extends Component {
//
//     state = {
//         messageComment: ""
//     }
//
//     render() {
//         const { messageComment } = this.state;
//
//         return (
//             <div className="status spin">
//                 <div className="center comment">{ messageComment }</div>
//             </div>
//         );
//     }
// }
//
// function mapStateToProps(state){
//     console.log('DialogBox- Redux State:', state);
//     return {
//         addContactUs: state.addContactUs.all
//     }
// }
//
// export default connect(mapStateToProps, { addContactMessage })(DialogBox);