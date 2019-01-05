import React, {Component} from 'react';
import axios from 'axios';

class Test extends Component {
    async componentDidMount(){
        const message = {
            text: 'This is a message from the client, Hello',
            name: 'Kim'
        };
        const resp = await axios.post('/api/send-message', message);
        console.log('Send message resp:', resp);
        // const resp = await axios.get('/api/test');
        // console.log('Test Response:', resp);
        //
        // const user = await axios.get('/api/user');
        // console.log('User Response:', user);
    }

    render(){
        return (
            <div>
                <h1>test component</h1>
            </div>
        );
    }
}

export default Test;
