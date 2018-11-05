module.exports = {
    createReactionMessage: (client, channel, message, reaction, role) => {
        client.channels.get(channel).fetchMessage(message).then(msg => {
            msg.react(reaction);
        });

        client.on("messageReactionAdd", (msgreact, user) => {
            if (msgreact.message.id === message) {
                if (msgreact.emoji == reaction) {
                    msgreact.message.guild.members.get(user.id).addRole(msgreact.message.guild.roles.get(role));
                }
            }
        });

        client.on("messageReactionRemove", (msgreact, user) => {
            if (msgreact.message.id === message) {
                if (msgreact.emoji == reaction) {
                    msgreact.message.guild.members.get(user.id).removeRole(msgreact.message.guild.roles.get(role));
                }
            }
        });
    }
}