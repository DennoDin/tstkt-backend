const axios = require('axios');
const url = require('url');

function getAppAccessToken(){
    const params = new url.URLSearchParams({"test": "hi"});
    axios.post(
        "https://id.twitch.tv/oauth2/token", 
        params.toString(), 
        (res) => console.log(res)
    )
    return "appAccessToken"
}

module.exports = { getAppAccessToken }