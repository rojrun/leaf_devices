const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;
// const { resolve } = require('path');
const db = require('./db');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
// app.use(express.static(resolve(__dirname, 'client', 'dist')));

app.get('/api/products', (req, res) => {
   db.query('SELECT p.id, p.name, p.description, p.price, p.href, p.style, p.image FROM `products` AS p', (error, results) => {
       res.send({
           results: results
       });
   });
});

app.get('/api/cart', (req, res) => {
    db.query(`SELECT c.id, product_id, quantity, p.name, p.price, quantity * p.price AS gross_price 
        FROM \`cart\` AS c INNER JOIN \`products\` AS p WHERE product_id = p.id ORDER BY id DESC LIMIT 1`, (error, results) => {
        res.send({
            results: results
        });
    });
});

app.get('/api/cart-meta', (req, res) => {
    db.query('', (error, results) => {
        res.send({
            results: results
        });
    });
});

app.get('/api/checkout', (req, res) => {
    db.query('SELECT c.cart_id, c.quantity, p.name, p.price, c.quantity * p.price AS subtotal, tax, shipping,' +
        ' subtotal + tax + shipping AS total, checkout_date FROM `cart` AS c ' +
        'INNER JOIN `products` AS p INNER JOIN `checkout`', (error, results) => {
        res.send({
            results: results
        });
    });
});

app.get('/api/payment', (req, res) => {
    db.query('', (error, results) => {
        res.send({
            results: results
        });
    });
});

app.get('/api/purchase_history', (req, res) => {
    db.query('', (error, results) => {
        res.send({
            results: results
        });
    });
});

app.get('/api/customer', (req, res) => {
    db.query('', (error, results) => {
        res.send({
            results: results
        });
    });
});

// app.get('/api/contact_us', (req, res) => {
//     db.query('', (error, results) => {
//         res.send({
//             results: results
//         });
//     });
// });

app.post('/api/cart', (req, res) => {
    const {product_id, quantity} = req.body;
    db.query(`INSERT INTO \`cart\` (product_id, quantity, price, gross_price)
        SELECT ${product_id} AS product_id, ${quantity} AS quantity, price, price * ${quantity} AS gross_price
        FROM \`products\` WHERE id=${product_id}`, (error, results) => {
        if(error){
            res.send('failed');
            return;
        }
        res.send({
            results: results
        });
    });
});

// app.post('/api/send-message', (req, res) => {
//     db.query('')
//         res.send({
//             results: results
//         });
//     });
//     console.log('Data from client:', req.body);
//     res.send({
//         success: true,
//         dataReceived: req.body
//     });
// });

// app.get('*', (req, res) () => {
//     res.sendFile(resolve(__dirname, 'client', 'dist', 'index.html'));
// });

app.listen(PORT, () => {
    console.log('Server running @ localhost:' + PORT);
}).on('error', (err) => {
    console.log('Server listen error, do you already have a server running on PORT:' + port);
});
