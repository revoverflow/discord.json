const Logger = require("./lib/logger");

Logger.info("discord.json v1.0");

const Discord = require('discord.js');
const client = new Discord.Client();

const config = require("./bot.json");

Logger.info("Loading configuration...");

const events = require("./core/events.js");
const commandmanager = require("./core/commands.js");
const reactionmanager = require("./core/reactionmsg.js");

client.on('ready', () => {
    Logger.info(`Logged in as ${client.user.tag}`);
    config.reaction_messages.forEach(message => {
        reactionmanager.createReactionMessage(client, message.channel_id, message.message_id, message.reaction, message.role_id);
    });
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

client.login(config.general.token);