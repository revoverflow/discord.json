![discord.json](https://nsa39.casimages.com/img/2018/11/04/181104041539518569.png)

Discord.json | Make your own discord bot with json !
[Join our Discord server !](https://discord.gg/X5ccPhr)

![Sample configuration](https://nsa39.casimages.com/img/2018/11/04/181104042118770870.png)

```javascript
{
    "general": {
        "token": "ENTER YOUR TOKEN HERE"
    },
    "welcome": {
        "enabled": true,
        "type": "channel",
        "channel_id": "CHANNEL ID",
        "message": "Welcome {user} to the server !"
    },
    "commands": [
        {
           "command": "!command1",
           "action": "send_message",
           "message": "MESSAGE TO SEND IN CHANNEL"
        },
        {
            "command": "!command2",
            "action": "send_dm",
            "message": "MESSAGE TO SEND IN PRIVATE"
        },
        {
            "command": "!command3",
            "action": "add_role",
            "role_id": "ROLE ID"
        },
        {
            "command": "!command4",
            "action": "remove_role",
            "role_id": "ROLE ID"
        },
        {
            "command": "!command5",
            "action": "switch_role",
            "role_id": "ROLE ID"
        }
    ],
    "reaction_messages": [
        {
            "channel_id": "ENTER CHANNEL ID HERE",
            "message_id": "ENTER MESSAGE ID HERE",
            "action": "role",
            "role_id": "ID OF THE ROLE",
            "reaction": "🌠 REACTION AS AN EMOJI"
        }
    ]
}
```

## Advancement
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
    - [ ] purge
    - [ ] send_embed
    - [ ] create_invite
- [x] Reaction messages
    - [x] Role switch
- [ ] Embed support

## Links

- Used libraries :
[discord.js](https://github.com/discordjs/discord.js/)

- Useful websites :
[copy and paste emoji](https://www.copyandpasteemoji.com/)
