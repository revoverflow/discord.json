let Logger = require("../lib/logger");

module.exports = {
    initDmWelcome: function(client, message) {
        client.on("guildMemberAdd", member => {
            member.user.sendMessage(message.replace("{user}", member.user));
            Logger.info("Welcome is now setup !");
        });
    },
    initChannelWelcome: function(client, channel, message) {
        client.on("guildMemberAdd", member => {
            client.channels.get(channel).sendMessage(message.replace("{user}", member.user));
            Logger.info("[INFO] Join message is now setup !");
        });
    }
}