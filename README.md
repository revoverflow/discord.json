![discord.json](https://nsa40.casimages.com/img/2019/03/02/190302101053442737.png)
<p align="center">
    <img src="https://img.shields.io/travis/dotOverflow/discord.json.svg?style=for-the-badge" onclick="window.open('https://travis-   ci.org/dotOverflow/discord.json')"/>
    <img src="https://img.shields.io/github/last-commit/dotOverflow/discord.json.svg?style=for-the-badge"/>
    <img src="https://img.shields.io/github/languages/code-size/badges/shields.svg?style=for-the-badge"/>
    <img src="https://img.shields.io/discord/508586540734087170.svg?style=for-the-badge" onclick="window.open('https://discord.gg/X5ccPhr')"/>
</p>

- Discord.json | Make your own discord bot with json !
[Join our Discord server !](https://discord.gg/X5ccPhr)

![Sample configuration](https://nsa39.casimages.com/img/2018/11/04/181104042118770870.png)

```json
{
    "general": {
        "token": "",
        "debug": false
    },
    "welcome": {
        "enabled": true,
        "type": "channel",
        "channel_id": "508650923447287812",
        "message": "Welcome {user} to {guild} ! Your id is {id} !"
    },
    "commands": [{
            "command": "!hey",
            "action": "send_message",
            "message": "Hey!"
        },
        {
            "command": "!heymp",
            "action": "send_dm",
            "message": "Hey!"
        },
        {
            "command": "!givemyskill",
            "action": "add_role",
            "role_id": ""
        },
        {
            "command": "!removemyskill",
            "action": "remove_role",
            "role_id": ""
        },
        {
            "command": "!switchmyskill",
            "action": "switch_role",
            "role_id": ""
        }
    ],
    "reaction_messages": [{
        "channel_id": "",
        "message_id": "",
        "action": "role",
        "role_id": "",
        "reaction": "🌠"
    }],
    "presence": {
        "enabled": true,
        "type": "watching",
        "text": "discord.json <3",
        "streaming_url": "https://www.twitch.tv/thomasbysfr"
    }
}
```

![Advancement](https://nsa39.casimages.com/img/2018/11/04/181104042331851103.png)

- [x] Welcome
    - [x] Types (channel/dm)
    - [x] Message variable ({user})
- [ ] Leave message
- [ ] Command & actions
    - [x] send_message
    - [x] send_dm
    - [x] switch_role
    - [x] add_role
    - [x] remove_role
    - [x] purge
    - [ ] send_embed
    - [ ] create_invite
- [x] Reaction messages
    - [x] Role switch
- [ ] Embed support
- [ ] Utils classes
- [x] Debug mode

![Useful links](https://nsa39.casimages.com/img/2018/11/04/181104042331933180.png)

- Used libraries :
[discord.js](https://github.com/discordjs/discord.js/)

- Useful websites :
[copy and paste emoji](https://www.copyandpasteemoji.com/)
