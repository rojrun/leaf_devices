const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
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
        FROM \`cart\` AS c INNER JOIN \`products\` AS p WHERE product_id = p.id AND customer_id = '1'`, (error, results) => {
        res.send({
            results: results
        });
    });
});

app.get('/api/cart-meta', (req, res) => {
    db.query(`SELECT customer_id, total_quantity, subtotal FROM \`cart_meta\` WHERE customer_id = '1'`, (error, results) => {
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

// app.get('/api/contact_us', (req, res) => {
//     db.query('', (error, results) => {
//         res.send({
//             results: results
//         });
//     });
// });

app.post('/api/cart', (req, res) => {
    const {product_id, quantity} = req.body;

    db.query(`INSERT INTO \`cart\` (customer_id, product_id, quantity, price, gross_price)
        SELECT '1' AS customer_id, ${product_id} AS product_id, ${quantity} AS quantity, price, price * ${quantity} AS gross_price
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

// app.post('/api/cart-meta', (req, res) => {
//     console.log('cart-meta post: ', req.body);
//
//     db.query(`SELECT * FROM \`cart_meta\` WHERE \`customer_id\` = 1`, (error, results) => {
//         if(!results.length){
//             db.query(`INSERT INTO \`cart_meta\` (customer_id, total_quantity, subtotal)
//         SELECT c.customer_id AS customer_id, SUM(c.quantity) AS total_quantity, SUM(c.gross_price) AS subtotal
//         FROM \`cart\` AS c WHERE c.customer_id = '1'`, (error, results) => {
//                 if(error){
//                     res.send('failed');
//                     return;
//                 }
//                 res.send({
//                     results: results
//                 });
//             });
//         }
//
//         res.send({
//             results: results
//         })
//     })
// });

app.post('/api/cart-meta', (req, res) => {
    console.log('cart-meta post: ', req.body);
    db.query(`INSERT INTO \`cart_meta\` (customer_id, total_quantity, subtotal)
        SELECT c.customer_id AS customer_id, SUM(c.quantity) AS total_quantity, SUM(c.gross_price) AS subtotal
        FROM \`cart\` AS c WHERE c.customer_id = '1'`, (error, results) => {
        if(error){
            res.send('failed');
            return;
        }
        res.send({
            results: results
        });
    });
});

// INSERT INTO `checkout` (customer_id, subtotal, tax, shipping, total)
// SELECT c.customer_id AS customer_id, SUM(c.gross_price) AS subtotal, subtotal * 0.0775 AS tax, 0 AS shipping, subtotal + tax + shipping AS total
// FROM `cart` AS c

// app.post('/api/checkout', (req, res) => {
//     db.query(`INSERT INTO \`checkout\` (customer_id, subtotal, tax, shipping, total)
//         SELECT c.customer_id AS customer_id, SUM(c.gross_price) AS subtotal,
//         subtotal * 0.0775 AS tax, 0 AS shipping, subtotal + tax + shipping AS total
//         FROM \`cart\` AS c`, (error, results) => {
//         if(error){
//             res.send('failed');
//             return;
//         }
//         res.send({
//             results: results
//         });
//     });
// });

app.post('/api/contact-message', (req, res) => {
    const { first_name, last_name, email, phone_number, message } = req.body;

    const sql = 'INSERT INTO `contact_us` (first_name, last_name, email, phone_number, message) VALUES (?, ?, ?, ?, ?)';
    const inserts = [ first_name, last_name, email, phone_number, message ];
    const formattedSql = mysql.format(sql, inserts);

    db.query(formattedSql, (error, results) => {
        if(error){
            res.send('failed');
            return;
        }
        res.send({
            results: results
        });
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
