![discord.json](https://nsa39.casimages.com/img/2018/11/04/181104041539518569.png)
[![Build Status](https://travis-ci.org/dotOverflow/discord.json.svg?branch=master)](https://travis-ci.org/dotOverflow/discord.json)
[![License: GPL v3](https://img.shields.io/badge/License-GPL%20v3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)

- Discord.json | Créez votre bot discord simplement avec un fichier JSON !
[Rejoins notre serveur Discord !](https://discord.gg/X5ccPhr)

![Sample configuration](https://nsa39.casimages.com/img/2018/11/04/181104042118770870.png)

```json
{
    "general": {
        "token": ""
    },
    "welcome": {
        "enabled": true,
        "type": "channel",
        "channel_id": "508650923447287812",
        "message": "Bienvenue {user} sur {guild} ! Ton id est le suivant : {id} !"
    },
    "commands": [{
            "command": "!hey",
            "action": "send_message",
            "message": "Salut !"
        },
        {
            "command": "!heymp",
            "action": "send_dm",
            "message": "Salut !"
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

- [x] Message de bienvenue
    - [x] Types (salon / message privé)
    - [x] Variables ({user}, {guild}, {id})
- [ ] Message lorsqu'un membre quitte le serveur
- [ ] Commandes & actions
    - [x] send_message -> Envoyer un message
    - [x] send_dm -> Envoyer un message privé au membre ciblé
    - [x] switch_role -> Echanger les rôles
    - [x] add_role -> Ajouter un rôle
    - [x] remove_role -> Enlever un rôle
    - [x] purge -> Purge
    - [ ] send_embed -> Envoyer un embed
    - [ ] create_invite -> Créer une invitation
- [x] Messages de réaction
    - [x] Echanger les rôles
- [ ] Support en format embed
- [ ] Classes utiles

![Useful links](https://nsa39.casimages.com/img/2018/11/04/181104042331933180.png)

- Bibliothèques utilisées :
[discord.js](https://github.com/discordjs/discord.js/)

- Autres sites :
[Copier et coller des émojis (Copy and paste emoji)](https://www.copyandpasteemoji.com/)
