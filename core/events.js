let Logger = require("../lib/logger");

module.exports = {

    /**
     * Setup the welcome message on Discord Private Message
     *
     * @param {Discord.Client|module:discord.js.Client} client
     * @param {string} message
     * 
     * @returns {void}
     */
    initDmWelcome: function (client, message) {
        client.on("guildMemberAdd", member => {
            member.user.send(message.replace("{user}", member.user));
            Logger.info("Welcome is now setup !");
        });
    },

    /**
     * Setup the welcome message on Discord Private Message
     * 
     * @param {Discord.Client|module:discord.js.Client} client
     * @param channel
     * @param {string} message
     * 
     * @returns {void}
     */
    initChannelWelcome: function (client, channel, message) {
        client.on("guildMemberAdd", member => {
            client.channels.get(channel).send(message.replace("{user}", member.user).replace("{guild}", member.guild.name).replace("{id}", member.user.id));
            Logger.info("[INFO] Join message is now setup !");
        });
    }
}