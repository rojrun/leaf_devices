const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const PORT = process.env.PORT || 9000;
// const { resolve } = require('path');
const { cookieSecret } = require('./config');
const cookieSession = require('cookie-session');
const db = require('./db');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieSession({
    name: 'session',
    secret: cookieSecret
}));
// app.use(express.static(resolve(__dirname, 'client', 'dist')));


/******** sign-up endpoint *************/

app.get('/api/cookie-test', (req, res) => {
    res.send({
        message: 'Session data',
        session: req.session
    });
});

app.get('/api/is-signed-in', (req, res) => {
    let auth = false;

    if(req.session.userId){
        auth = true;
    }

    res.send({auth});
});

app.post('/api/sign-up', (req, res) => {
    const { name, email, password } = req.body;

    function hasName(name) {
        if (!name) {
            res.send({
                message: 'No name was entered'
            });
            return;
        } else {
            return true;
        }
    }
      
    function isEmailValid(email) {
        if (!email) {
            res.send({
                message: 'No email was enetered'
            });
            return;
        } else {
            const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            const emailCheck = regex.test(String(email).toLowerCase());
            
            if(emailCheck === false) {
                res.send({
                    message: "Email must be in valid format"
                });
                return;
            } else {
                return true;
            }
        }
    }

    function isPasswordValid(password) {
        if (!password) {
            res.send({
                message: 'No password was entered'
            });
            return;
        } else {
            const regex = /^[A-Za-z0-9]{5,10}$/;
            const passwordCheck = regex.test(password);
    
            if(passwordCheck === false) {
                res.send({
                    message: "Password must be between 5-10 characters."
                });
                return;
            } else {
                return true;
            }
        }           
    } 

    if ( hasName(name) && isEmailValid(email) && isPasswordValid(password) ) {
        db.query(`SELECT id FROM \`users\` WHERE email='${email}'`, (error, results) => {
            if (results) {
                res.send({
                    message: 'Email already in use'
                });
                return;
            } else {
                const sql = `INSERT INTO \`users\` (name, email, password) VALUES (?, ?, ?)`;
                const inserts = [ name, email, password ];
                const formattedSql = mysql.format(sql, inserts);
                db.query(formattedSql, (error, results) => {
                    if(error){
                        res.send({
                            message: 'failed'
                        });
                        return;
                    }
                    req.session.userId = results.insertId;

                    res.send({
                        messege: "New user email successfully added",
                        results: results
                    });
                });
            }     
        });           
    }
});

/********* sign-in endpoint ***********/
app.post('/api/sign-in', (req, res) => {
    const { email, password } = req.body;

    if (!email && !password) {
        res.send({
            success: false,
            error: "Please enter email and password"
        });
        return;
    }

    db.query(`SELECT id, password FROM \`users\` WHERE email='${email}'`, (error, result) => {
        if(error) {
            res.send({
                error: "No email found"
            });
            return;
        } else {
            const user = result[0];
            console.log("sign in, user id: ", user);

            if(user) {
                if(password === user.password){
                    req.session.userId = user.id;
                    console.log("req.session.userId", user.id);

                    res.send({
                        message: 'User signed in',
                        user: {
                            email: email,
                            id: user.id
                        }
                    });
                }
            }
            res.send({
                success: false,
                error: 'Email and or password do not match'
            });
            return;
        }
    });
});

/******* products endpoint *******/
app.get('/api/products', (req, res) => {
   db.query('SELECT p.id, p.name, p.description, p.price, p.href, p.style, p.image FROM `products` AS p', (error, results) => {
       res.send({
           results: results
       });
   });
});

/******* cart endpoint *******/

/******* function getCart(), from /actions/index.js *****************/
app.get('/api/cart', (req, res) => {
    const userId = req.session.userId;

    // Check if user id, send back error if no id
    if(!userId) {
        res.send({
            success: false,
            error: "There is no user id"
        });
        return;
    }

    const query = `SELECT i.id AS id, p.name, p.price, i.quantity FROM cart AS c 
        JOIN products AS p JOIN cart_meta AS i 
        ON c.id=i.cart_id AND i.product_id=p.id 
        WHERE c.status="incomplete" AND c.customer_id=${userId}`;
    db.query(query, (error, results) => {
        res.send({
            results: results
        });
    });
});

app.post('/api/cart', (req, res) => {
    const userId = req.session.userId;

    // Check if user id, send back error if no id
    if(!userId) {
        res.send({
            success: false,
            error: "There is no user id"
        });
        return;
    }

    db.query(`INSERT INTO \`cart\` (customer_id) VALUES (${userId})`, (error, results) => {
        if(error){
            res.send({
                success: false,
                error: "Insert into cart table failed"
            });
            return;
        }
        res.send({
            results: results
        });
    });
});

/******* cart-meta endpoint *******/
app.get('/api/cart-meta', (req, res) => {
    const userId = req.session.userId;

    // Check if user id, send back error if no id
    if(!userId) {
        res.send({
            success: false,
            error: "There is no user id"
        });
        return;
    }

    db.query(`SELECT cm.id AS id, c.id AS cart_id, c.customer_id AS customer_id, 
        p.id AS product_id, p.name AS product_name, quantity, p.price AS price, 
        quantity * price AS gross_price 
        FROM \`cart\` AS c, \`products\` AS p, \`cart_meta\` AS cm`, (error, results) => {
        res.send({
            results: results
        });
    });
});

/*********** function addToCartMeta, from /actions/index.js **********/
app.post('/api/cart-meta', (req, res) => {
    const userId = req.session.userId;

    // Check if user id, send back error if no id
    if(!userId) {
        res.send({
            success: false,
            error: "There is no user id"
        });
        return;
    }

    const {product_id, quantity} = req.body;
    db.query(`SELECT * FROM \`cart\` WHERE customer_id=${userId} AND status="incomplete"`, (error, result) => {
        const inserSql = 'INSERT INTO `cart_meta` (`cart_id`, `customer_id`, `product_id`, `quantity`) VALUES (?, ?, ?, ?)';

        if(!result.length){
            db.query(`INSERT INTO \`cart\` (customer_id, status) VALUES (${userId}, "incomplete")`, (error, result) => {
                const cartId = result.insertId;
                const inserts = [cartId, userId, product_id, quantity];
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
        const inserts = [cart.id, userId, product_id, quantity];
        const sql = mysql.format(inserSql, inserts);
        db.query(sql, (err, result) => {
            res.send({
                success: true
            });
        });
    });
});

app.delete('/api/cart-meta/product/:id', (req, res) => {
    const userId = req.session.userId;

    // Check if user id, send back error if no id
    if(!userId) {
        res.send({
            success: false,
            error: "There is no user id"
        });
        return;
    }

    const {id} = req.body;
    if(typeof id !== "number"){
        res.send(422);
        return;     
    }

    db.query(`DELETE FROM \`cart_meta\` WHERE id = ${id}`, (error, results) => {
        res.send({
            results: results
        });
    });
});


/*************** function updateCartMetaQuantity(), from ../actions/index.js ********/
app.put('/api/cart-meta/product/:id', (req, res) => {
    const userId = req.session.userId;

    // Check if user id, send back error if no id
    if(!userId) {
        res.send({
            success: false,
            error: "There is no user id"
        });
        return;
    }

    const {id, quantity} = req.body;
    db.query(`UPDATE \`cart_meta\` SET \`quantity\` = ${quantity} WHERE \`id\`= ${id} AND \`customer_id\`=${userId}`, (error, results) => {
        res.send({
            results: results
        });
    });
});

/******* summary endpoint *******/
app.get('/api/summary', (req, res) => {
    const userId = req.session.userId;

    // Check if user id, send back error if no id
    if(!userId) {
        res.send({
            success: false,
            error: "There is no user id"
        });
        return;
    }

    db.query(`SELECT id, total_quantity, subtotal, tax, shipping_method, shipping, total FROM  \`summary\`
        WHERE customer_id = ${userId}`, (error, results) => {
        res.send({
            results: results[0] || {}
        });
    });
});

app.put('/api/summary/:id', (req, res) => {
    let { id, shipping_method, shipping } = req.body;
    
    const userId = req.session.userId;

    // Check if user id, send back error if no id
    if(!userId) {
        res.send({
            success: false,
            error: "There is no user id"
        });
        return;
    }

    const query = `SELECT p.name, p.price, i.quantity, c.id AS \`cartId\` 
        FROM cart AS c 
        JOIN products AS p
        JOIN cart_meta AS i 
        ON c.id=i.cart_id AND i.product_id=p.id 
        WHERE c.status="incomplete" AND c.customer_id=${userId}`;

    db.query(query, (error, results) => {
        if(error){
            res.send('failed');
            return;
        }

        if(results.length) {
            let totalQuantity = 0;
            let subTotal = 0;
            let cartId = results[0].cartId;
            const tax = .0775;
            console.log("cartId", cartId);

            results.map( item => {
                totalQuantity += item.quantity;
                subTotal += item.quantity * item.price;
                console.log("total quantity:", totalQuantity);
            });
            console.log("total quantity:", totalQuantity);
            let total = (subTotal * tax) + subTotal + shipping;
            let salesTax = subTotal * tax;
            
            db.query(`UPDATE \`summary\` SET cart_id=${cartId}, customer_id=${userId}, total_quantity=${totalQuantity},
                subtotal=${subTotal}, tax=${salesTax}, shipping_method=${shipping_method}, shipping=${shipping}, total=${total}, date= new Date() 
                WHERE \`id\`=${id}`, (error, results) => {
                    res.send({
                        results: results
                    });
                });

            // const total = (subTotal * tax) + subTotal + shipping;
            // const sql = `UPDATE \`summary\` SET cart_id=?, customer_id=?, total_quantity=?, subtotal=?, tax=?, shipping_method=?, shipping=?, total=?, date=? 
            //     WHERE \`id\`= ${id}`;

            // const inserts = [ totalQuantity, subTotal, subTotal * tax, shipping_method, shipping, total, new Date() ];
            // const summaryAdd = mysql.format(sql, inserts);

            // db.query(summaryAdd, (err, results) => {
            //     res.send('It Worked!');
            // });
        } else {
            res.status(422).send('No items in cart');
        }
    });
});

app.post('/api/summary', (req, res) => {
    db.query(`SELECT * FROM \`summary\``, (error, results) => {
        if(!results.length){
            const userId = req.session.userId;

            // Check if user id, send back error if no id
            if(!userId) {
                res.send({
                    success: false,
                    error: "There is no user id"
                });
                return;
            }

            const query = `SELECT p.name, p.price, i.quantity, c.id AS \`cartId\` FROM cart AS c JOIN products AS p 
                JOIN cart_meta AS i ON c.id=i.cart_id AND i.product_id=p.id WHERE c.status="incomplete" AND c.customer_id=${userId}`;

            db.query(query, (error, results) => {
                if(error){
                    res.send('failed');
                    return;
                }

                if(results.length) {
                    let totalQuantity = 0;
                    let subTotal = 0;
                    let cartId = results[0].cartId;
                    const tax = .0775;
                    const shipping_method = "Standard";
                    const shipping = 0;

                    results.map( item => {
                        totalQuantity += item.quantity;
                        subTotal += item.quantity * item.price;
                    });

                    const total = (subTotal * tax) + subTotal + shipping;
                    const sql = `INSERT INTO \`summary\` (cart_id, customer_id, total_quantity, subtotal, tax, shipping_method, shipping, total, date) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;
                    const inserts = [ cartId, userId, totalQuantity, subTotal, subTotal * tax, shipping_method, shipping, total, new Date() ];
                    const summaryAdd = mysql.format(sql, inserts);

                    db.query(summaryAdd, (err, results) => {
                        res.send('It Worked!');
                    });
                } else {
                    res.status(422).send('No items in cart');
                }
            });
        }
    });
});

/******* guest-checkout endpoint *******/
app.post('/api/guest-checkout', (req, res) => {
    const { first_name, last_name, mailing_address, mailing_city, mailing_state, mailing_zip, email_address, phone_number } = req.body;

    const sql = `INSERT INTO \`guest_checkout\` (first_name, last_name, mailing_address, mailing_city, mailing_state, mailing_zip, email_address, phone_number) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
    const inserts = [ first_name, last_name, mailing_address, mailing_city, mailing_state, mailing_zip, email_address, phone_number ];
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

app.get('/api/guest-checkout', (req, res) => {
    db.query(`SELECT first_name, last_name, mailing_address, mailing_city, mailing_state, mailing_zip FROM  \`guest_checkout\``, (error, results) => {
        res.send({
            results: results[0] || {}
        });
    });
});

/******* contact-message endpoint *******/
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
