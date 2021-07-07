const express = require("express");
require('dotenv').config();
const { getAppAccessToken } = require("./src/appAccessToken");
const {PORT} = process.env || 9999;
let appAccessToken;

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
    res.send(200)
})

app.get('/api', (req, res) => {
    res.send("Sup Bruh");
});

app.post('/auth', async (req, res) => {
    appAccessToken = await getAppAccessToken();
    
    if(appAccessToken === "noaccess"){
        res.sendStatus(400);
    } else {
        res.sendStatus(200);
    }
})

app.post('/subscribe/callback', (req, res) => {
    // TODO: Verify signature
    // req.get('Twitch-Eventsub-Message-Signature');
    console.log("POST/auth triggered!: ", req.body)
    res.send(req.body.challenge);
})

app.listen(PORT, () => {
    console.log(`app listening on http://localhost:${PORT}`)
});