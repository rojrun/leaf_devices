import React, {Component} from 'react';
import axios from 'axios';

class Landing extends Component {
    // async componentDidMount(){
    //     const message = {
    //         text: 'This is a message from the client, Hello',
    //         name: 'Kim'
    //     };
    //     const postResp = await axios.post('/api/send-message', message);
    //     console.log('Send message resp:', postResp);
    //
    //     const resp = await axios.get('/api/test');
    //     console.log('Test Response:', resp);
    //
    //     const user = await axios.get('/api/user');
    //     console.log('User Response:', user);
    // }

    render(){
        return (
            <div>
                <header>
                    <h1>Leaf Devices</h1>
                </header>
                <div>
                    body
                </div>
            </div>
        );
    }
}

export default Landing;
