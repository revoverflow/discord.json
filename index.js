const Logger = require("./lib/logger");

Logger.info("discord.json v1.0");

// Import Discord and File manager
const Discord = require('discord.js');

Logger.info("Loading configuration...");
const fs = require("fs")

var stdio = require('stdio');

// Import Core functions
const events = require("./core/events.js");
const commandmanager = require("./core/commands.js");
const reactionmanager = require("./core/reactionmsg.js");

// Create the client
const client = new Discord.Client();

// Register the bot config
const config = require("./bot.json");

console.log("[INFO] Loading configuration...");

// When bot is ready
client.on('ready', () => {
    Logger.info(`Logged in as ${client.user.tag}`);
    config.reaction_messages.forEach(message => {
        // ... 
        reactionmanager.createReactionMessage(client, message.channel_id, message.message_id, message.reaction, message.role_id);
    });

    if (config.presence.enabled) {
        if (config.presence.type == "game") {
            client.user.setActivity(config.presence.text, {
                type: 'PLAYING'
            });
        } else if (config.presence.type == "watching") {
            client.user.setActivity(config.presence.text, {
                type: 'WATCHING'
            });
        } else if (config.presence.type == "streaming") {
            client.user.setActivity(config.presence.text, {
                type: 'STREAMING',
                url: config.presence.streaming_url
            });
        } else {
            console.error("[ERROR] Unknown welcome message type : " + config.welcome.type);
        }
    }
});

if (config.welcome.enabled) {
    if (config.welcome.type == "channel") {
        events.initChannelWelcome(client, config.welcome.channel_id, config.welcome.message);
    } else if (config.welcome.type == "dm") {
        events.initDmWelcome(client, config.welcome.message);
    } else {
        Logger.error("[ERROR] Unknown welcome message type : " + config.welcome.type);
    }
}

config.commands.forEach(command => {
    commandmanager.registerCommand(command);
});

commandmanager.initMessageListener(client);

var ops = stdio.getopt({
    'token': {key: 'token', args: 1, description: 'Provide a token in the command line.', default: config.general.token},
});

client.login(ops.token);