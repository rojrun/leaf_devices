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

app.get('/api/products', (req, res) => {
   const data = {
       // SELECT p.name, p.description, p.price, p.href, p.style FROM `products` AS p
   };
   res.send(data);
});

app.get('/api/cart', (req, res) => {
    const data = {
        success: true,
        message: 'Test API working!',
        another: 'Property goes here'
    };
    res.send(data);
});

app.get('/api/checkout', (req, res) => {
    const data = {
        success: true,
        message: 'Test API working!',
        another: 'Property goes here'
    };
    res.send(data);
})

app.get('/api/payment', (req, res) => {
    const data = {
        success: true,
        message: 'Test API working!',
        another: 'Property goes here'
    };
    res.send(data);
});

app.get('/api/purchase_history', (req, res) => {
    const data = {
        success: true,
        message: 'Test API working!',
        another: 'Property goes here'
    };
    res.send(data);
});

app.get('/api/customer', (req, res) => {
    const data = {
        success: true,
        message: 'Test API working!',
        another: 'Property goes here'
    };
    res.send(data);
});

app.get('/api/contact_us', (req, res) => {
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
