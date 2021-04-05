const express = require("express");
require('dotenv').config();
const {PORT} = process.env;

const app = express();

app.get('/', (req, res) => {
    res.send("Sup Bruh");
});

app.listen(PORT, () => {
    console.log(`app listening on http://localhost:${PORT}`)
});