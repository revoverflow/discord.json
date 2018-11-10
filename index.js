const Logger = require("./lib/logger");
const Bot = require("./lib/bot");

Logger.info("discord.json v1.0");

// Import Discord and File manager
const Discord = require('discord.js');

Logger.info("Loading configuration...");
const fs = require("fs");

// Register plugins folder
const pluginsFolder = './plugins/';

var stdio = require('stdio');

// Import Core functions
const events = require("./core/events.js");
const commandManager = require("./core/commands.js");
const reactionManager = require("./core/reactionmsg.js");

// Create the client
let bot = new Bot(null);

// Register the bot config
const config = require("./bot.json");


// When bot is ready
bot.getClient().on('ready', () => {
    Logger.info(`Logged in as ${bot.getClient().user.tag}`);
    config.reaction_messages.forEach(message => {
        // ... 
        reactionManager.createReactionMessage(bot.getClient(), message.channel_id, message.message_id, message.reaction, message.role_id);
    });

    if (config.presence.enabled) {
        if (config.presence.type == "game") {
            bot.getClient().user.setActivity(config.presence.text, {
                type: 'PLAYING'
            });
        } else if (config.presence.type == "watching") {
            bot.getClient().user.setActivity(config.presence.text, {
                type: 'WATCHING'
            });
        } else if (config.presence.type == "streaming") {
            bot.getClient().user.setActivity(config.presence.text, {
                type: 'STREAMING',
                url: config.presence.streaming_url
            });
        } else {
            console.error("[ERROR] Unknown welcome message type : " + config.welcome.type);
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
    commandManager.registerCommand(command);
});

commandManager.initMessageListener(bot.getClient());

// Get ops from command lines
var ops = stdio.getopt({
    'token': {key: 'token', args: 1, description: 'Provide a token in the command line.', default: config.general.token},
});

bot.login(ops.token);