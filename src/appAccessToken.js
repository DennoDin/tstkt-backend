const axios = require('axios');
const url = require('url');
require('dotenv');

async function getAppAccessToken(){
    const grant_type = `client_credentials`;
    const scope = `openid channel:manage:redemptions`
    const client_id = process.env.CLIENT_ID;
    const client_secret = process.env.CLIENT_SECRET;
    const params = new url.URLSearchParams({client_id, client_secret, grant_type, scope});
    
    let result;
    
    try {
        result = await axios.post(
            "https://id.twitch.tv/oauth2/token", 
            params.toString(), 
            (res) => console.log(res)
        );
    
    } catch (error) {
        return "noaccess"
    }

    return result.data.access_token;
}

module.exports = { getAppAccessToken }