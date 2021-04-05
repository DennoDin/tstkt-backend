const express = require("express");
require('dotenv').config();
const {PORT} = process.env || 9999;

const app = express();

app.get('/api', (req, res) => {
    res.send("Sup Bruh");
});

app.listen(PORT, () => {
    console.log(`app listening on http://localhost:${PORT}`)
});