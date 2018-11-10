// Node module package.
const stdio = require('stdio');
const fs = require("fs");

// Class from lib directory
const Logger = require("./lib/logger");
const Bot = require("./lib/bot");

// Class from core directory
const events = require("./core/events.js");
const commandmanager = require("./core/commands.js");
const reactionmanager = require("./core/reactionmsg.js");

// Config file of bot
const config = require("./bot.json");

// Register plugins folder
const pluginsFolder = './plugins/';


Logger.info("discord.json v1.0");
Logger.info("Loading configuration...");

let bot;

bot = new Bot(null);
bot.getClient().on('ready', () => {
    config.reaction_messages.forEach(message => {
        reactionmanager.createReactionMessage(bot.getClient(), message.channel_id, message.message_id, message.reaction, message.role_id);
    });

    if (config.presence.enabled) {
        
        switch (config.presence.type) {
            case 'game':
                bot.getClient().user.setActivity(config.presence.text, { type: 'PLAYING' });
                break;
            case 'watching':
                bot.getClient().user.setActivity(config.presence.text, { type: 'WATCHING' });
                break;
            case 'streaming':
                bot.getClient().user.setActivity(config.presence.text, { type: 'STREAMING', url: config.presence.streaming_url });
                break;
            default:
                Logger.error(`Unknown welcome message type : ${config.welcome.type}`);
        }

    }

    // Register plugins
    fs.readdir(pluginsFolder, (err, files) => {
        files.forEach(file => {
            if(file.endsWith(".js")){
                Logger.info(`Register plugin : ${file}`);
                require(pluginsFolder+file).handle(bot.getClient());
            }
        });
    })
});

if (config.welcome.enabled) {
    if (config.welcome.type == "channel") {
        events.initChannelWelcome(bot.getClient(), config.welcome.channel_id, config.welcome.message);
    } else if (config.welcome.type == "dm") {
        events.initDmWelcome(bot.getClient(), config.welcome.message);
    } else {
        Logger.error("[ERROR] Unknown welcome message type : " + config.welcome.type);
    }
}

config.commands.forEach(command => {
    commandmanager.registerCommand(command);
});
commandmanager.initMessageListener(bot.getClient());

let ops = stdio.getopt({
    'token': {
        key: 'token',
        args: 1,
        description: 'Provide a token in the command line.',
        default: config.general.token
    },
});

bot.login(ops.token)
    .then(() => Logger.info(`Discord.json logged as ${bot.getClient().user.tag}`))
    .catch(err => Logger.error(`Discord.json error when logged: ${err}`));