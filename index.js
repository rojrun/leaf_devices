const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;
// const { resolve } = require('path');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// app.use(express.static(resolve(__dirname, 'client', 'dist')));

app.get('/', (req, res) => {
    res.send('<h1>The server is working!</h1>');
});

app.get('/api/test', (req, res) => {
   const data = {
       success: true,
       message: 'Test API working!',
       another: 'Property goes here'
   };
   res.send(data);
});

app.get('/api/user', (req, res) => {
    const user = {
        email: 'jim@mail.com',
        name: 'Jim Bob',
        username: 'Jimmy'
    };
    res.send(user);
});

app.post('/api/send-message', (req, res) => {
    console.log('Data from client:', req.body);
    res.send({
        success: true,
        dataReceived: req.body
    });
});

// app.get('*', (req, res) () => {
//     res.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'));
// });

app.listen(PORT, () => {
    console.log('Server running @ localhost:' + PORT);
}).on('error', (err) => {
    console.log('Server listen error, do you already have a server running on PORT:' + port);
});
