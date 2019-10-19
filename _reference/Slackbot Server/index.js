const Slackbot = require('slackbots')
const axios = require('axios')

const api = 'https://us-central1-jcn-trashtalk-544.cloudfunctions.net/'

const bot = new Slackbot({
    token: '',
    name: 'trash'
})

bot.on('start', () => {
    const params = { emoji: ":smiley:" }
    const body = {
    "text": "Would you like to play a game?",
    "attachments": [
        {
            "text": "Choose a game to play",
            "fallback": "You are unable to choose a game",
            "callback_id": "the_id_to_call",
            "color": "#3AA3E3",
            "attachment_type": "default",
            "actions": [
                {
                    "name": "game",
                    "text": "Chess",
                    "type": "button",
                    "value": "chess"
                },
                {
                    "name": "game",
                    "text": "Falken's Maze",
                    "type": "button",
                    "value": "maze"
                },
                {
                    "name": "game",
                    "text": "Thermonuclear War",
                    "style": "danger",
                    "type": "button",
                    "value": "war",
                    "confirm": {
                        "title": "Are you sure?",
                        "text": "Wouldn't you prefer a good game of chess?",
                        "ok_text": "Yes",
                        "dismiss_text": "No"
                    }
                }
            ]
        }
    ]
}

    bot.postMessageToChannel('general', 'hello', body)
})

bot.on('message', (data) => {
    console.log(data)
    if(data.type === 'message' && data.subtype !== 'bot_message') {
        const content = data.text.split('> ')
        if(content.length) {
            axios.post(api, content[1])
            .then(res => console.log(res.data))
            .catch(console.error)
        }
    }
})