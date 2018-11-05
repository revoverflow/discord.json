module.exports = {

    /**
     * Setup the welcome message on Discord Private Message
     * 
     * @param {Discord.client} client
     * @param {string} message
     * 
     * @returns {void}
     */
    initDmWelcome: function (client, message) {
        client.on("guildMemberAdd", member => {
            member.user.sendMessage(message.replace("{user}", member.user));
            console.log("[INFO] Welcome is now setup !");
        });
    },

    /**
     * Setup the welcome message on Discord Private Message
     * 
     * @param {Discord.client} client
     * @param {string} message
     * 
     * @returns {void}
     */
    initChannelWelcome: function (client, channel, message) {
        client.on("guildMemberAdd", member => {
            client.channels.get(channel).sendMessage(message.replace("{user}", member.user).replace("{guild}", member.guild.name).replace("{id}", member.user.id));
            console.log("[INFO] Join message is now setup !");
        });
    }
}