const express = require('express');
const cors = require('cors');
const PORT = process.env.PORT || 9000;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('<h1>The server is working!</h1>');
});

app.listen(PORT, () => {
    console.log('Server running @ localhost:' + PORT);
}).on('error', (err) => {
    console.log('Server listen error, do you already have a server running on PORT:' + port);
});
