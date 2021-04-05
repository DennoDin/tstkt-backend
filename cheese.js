const express = require("express");

const app = express();

app.get('/', (req, res) => {
    res.send("Sup Bruh");
});

app.listen(3000, () => {
    console.log("app listening on http://localhost:3000")
});