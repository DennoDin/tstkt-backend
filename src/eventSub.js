const axios = require('axios')
require('dotenv');

function create(appAccessToken, eventSubType){
    if(appAccessToken === undefined){
        return "Invalid AppAccessToken"
    }
    const data = {
        "type": `${eventSubType}`,
        "version": "1",
        "condition": {
            "broadcaster_user_id": "12826"
        },
        "transport": {
            "method": "webhook",
            "callback": "https://blue-mule-29.loca.lt/auth",
            "secret": "aaaaaaaaaa"
        }
    }

    const headers = {
        'Client-ID': process.env.CLIENT_ID,
        Authorization: `Bearer ${appAccessToken}`,
        'Content-Type': 'application/json'
    }


    const options = {
        method: 'POST',
        url: 'https://api.twitch.tv/helix/eventsub/subscriptions',
        headers,
        data,
    };
    
    try {
        const result = axios.request(options)
        console.log(result);
    } catch (error) {
        return "Event Sub Failed"
    }

    return "CREATE!";
};

async function remove(appAccessToken, eventSubId){
    const headers = {
        'Client-ID': process.env.CLIENT_ID,
        Authorization: `Bearer ${appAccessToken}`,
    }

    const options = {
        method: 'DELETE',
        url: 'https://api.twitch.tv/helix/eventsub/subscriptions',
        params: {id: eventSubId},
        headers,
    };

    try {
        const result = await axios.request(options);
        console.log("RESULT: ", result)
    } catch (error) {
        console.log(error);
        console.log("Remove EventSub Failed :-(")
    }

    return "REMOOOVED!"
}

module.exports = { create, remove }