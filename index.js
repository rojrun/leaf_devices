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
    const query = `SELECT p.name, p.price, i.quantity FROM cart AS c JOIN products AS p JOIN cart_meta AS i ON c.id=i.cart_id AND i.product_id=p.id WHERE c.status="incomplete" AND c.customer_id=1`;
    db.query(query, (error, results) => {
        console.log('Error:', error);
        console.log('Results:', results);
        res.send({
            results: results
        });
    });
});

app.post('/api/cart', (req, res) => {
    db.query(`INSERT INTO \`cart\` (customer_id) VALUES (1)`, (error, results) => {
        if(error){
            res.send('failed');
            return;
        }
        res.send({
            results: results
        });
    });
});

app.get('/api/cart-meta', (req, res) => {
    db.query(`SELECT c.id AS cart_id, c.customer_id AS customer_id, p.id AS product_id, p.name AS product_name,
        quantity, p.price AS price, quantity * price AS gross_price FROM \`cart\` AS c, \`products\` AS p, \`cart-meta\`  `, (error, results) => {
        res.send({
            results: results
        });
    });
});

app.post('/api/cart-meta', (req, res) => {
    const {product_id, quantity} = req.body;
    db.query('SELECT * FROM `cart` WHERE `customer_id`=1 AND `status`="incomplete"', (error, result) => {
        const inserSql = 'INSERT INTO `cart_meta` (`cart_id`, `customer_id`, `product_id`, `quantity`) VALUES (?, ?, ?, ?)';

        if(!result.length){
            db.query('INSERT INTO `cart` (customer_id, status) VALUES (1, "incomplete")', (error, result) => {
                const cartId = result.insertId;
                const inserts = [cartId, 1, product_id, quantity];
                const sql = mysql.format(inserSql, inserts);

                db.query(sql, (err, result) => {
                    res.send({
                        success: true
                    });
                });
            });
            return;
        }

        const [cart] = result;
        const inserts = [cart.id, 1, product_id, quantity];
        const sql = mysql.format(inserSql, inserts);
        db.query(sql, (err, result) => {
            console.log('Added cart-meta:', result);
            res.send({
                success: true
            });
        });
    });
});

app.put('/api/cart-meta/product/:id', (req, res) => {
    const {} = req.body;
    db.query(`UPDATE \`cart_meta\` SET \`quantity\`=5 WHERE \`id\`=22`, (error, results) => {
        res.send({
            results: results
        });
    });
});

app.get('/api/checkout', (req, res) => {
    db.query(`SELECT total_quantity, subtotal, tax, shipping, total FROM  \`checkout\``, (error, results) => {
        res.send({
            results: results[0] || {}
        });
    });
});

app.post('/api/checkout', (req, res) => {
    const user_id = 1;

    const query = `SELECT p.name, p.price, i.quantity, c.id AS \`cartId\` FROM cart AS c JOIN products AS p JOIN cart_meta AS i ON c.id=i.cart_id AND i.product_id=p.id WHERE c.status="incomplete" AND c.customer_id=${user_id}`;

    db.query(query, (error, results) => {
        if(error){
            res.send('failed');
            return;
        }

        console.log('Results:', results);

        if(results.length){
            let totalQuantity = 0;
            let subTotal = 0;
            let cartId = results[0].cartId;
            const tax = .0775;
            const shipping = 300;

            results.map( item => {
                totalQuantity += item.quantity;
                subTotal += item.quantity * item.price;
            });

            const total = (subTotal * tax) + subTotal + shipping;
            const sql = `INSERT INTO ?? (cart_id, customer_id, total_quantity, subtotal, tax, shipping, total, checkout_date) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
            const inserts = [ 'checkout', cartId, user_id, totalQuantity, subTotal, subTotal * tax, shipping, total, new Date() ];
            const checkoutAdd = mysql.format(sql, inserts);

            db.query(checkoutAdd, (err, results) => {
                console.log('Post to checkout Results:', results);

                res.send('It Worked!');
            });
        } else {
            res.status(422).send('No items in cart');
        }
    });
});

// app.get('/api/contact-message', (req, res) => {
//     db.query(`SELECT * FROM \`contact_us\``, (error, results) => {
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
