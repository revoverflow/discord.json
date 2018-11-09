var config = require("../bot.json");
let Logger = require("../lib/logger");

var commandlist = [];

module.exports = {
    /**
     * Create the message listener
     *
     * @param {Discord.Client|module:discord.js.Client} client
     */
    initMessageListener: function (client) {
        client.on("message", msg => {
            commandlist.forEach(command => {
                if (msg.content == command.command) {
                    switch (command.action) {
                        case "send_message":
                            msg.channel.send(command.message);
                            break;
                        case "send_dm":
                            msg.author.send(command.message);
                            break;
                        case "switch_role":
                            if (msg.guild.roles.get(command.role_id)) {
                                if (!msg.member.roles.has(command.role_id)) {
                                    msg.member.addRole(msg.guild.roles.get(command.role_id));
                                    console.log("[ROLE] Role " + msg.guild.roles.get(command.role_id).name + " has been added to " + msg.author.username);
                                } else {
                                    msg.member.removeRole(msg.guild.roles.get(command.role_id));
                                    console.log("[ROLE] Role " + msg.guild.roles.get(command.role_id).name + " has been removed to " + msg.author.username);
                                }
                            } else {
                                Logger.error("(" + command.command + ") This role doesn't exist!");
                            }
                            break;
                        case "add_role":
                            if (msg.guild.roles.get(command.role_id)) {
                                if (!msg.member.roles.has(command.role_id)) {
                                    msg.member.addRole(msg.guild.roles.get(command.role_id));
                                    Logger.info("Role " + msg.guild.roles.get(command.role_id).name + " has been added to " + msg.author.username);
                                } else {
                                    msg.channel.send(":lock: **You already have this role.**")
                                }
                            } else {
                                Logger.error("(" + command.command + ") This role doesn't exist!");
                            }
                            break;
                        case "remove_role":
                            if (msg.guild.roles.get(command.role_id)) {
                                if (msg.member.roles.has(command.role_id)) {
                                    msg.member.removeRole(msg.guild.roles.get(command.role_id));
                                    Logger.info("Role " + msg.guild.roles.get(command.role_id).name + " has been removed to " + msg.author.username);
                                } else {
                                    msg.channel.send(":lock: **You don't have this role.**");
                                }
                            } else {
                                Logger.error("(" + command.command + ") This role doesn't exist!");
                            }
                            break;
                        case "purge":
                            if (msg.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) {
                                msg.channel.bulkDelete(100);
                            }
                            break;
                        default:
                            break;
                    }
                }
            });
        });
    },

    /**
     * Add the command to the commands array
     * 
     * @param {string} command 
     */
    registerCommand: function (command) {
        commandlist.push(command);
        Logger.info("Command " + command.command + " has been successfully registered !");
    },

    /**
     * UNUSABLE FUNCTION
     * 
     * @param {string} command 
     */
    deleteCommand: function (command) {

    }
}