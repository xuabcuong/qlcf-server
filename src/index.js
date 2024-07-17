const express = require('express');
const app = express();
const port = 3333;

require('dotenv').config();
require('./config')
// Middleware
app.use(express.json());

// Routes

app.use('/api/v1', require('./routes/index'));

// Start server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
