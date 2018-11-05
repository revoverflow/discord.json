var config = require("../bot.json");

var commandlist = [];

module.exports = {        
    initMessageListener: function(client) {
        client.on("message", msg => {
            commandlist.forEach(command => {
                if(msg.content == command.command) {                    
                    switch (command.action) {
                        case "send_message":
                            msg.channel.sendMessage(command.message);
                            break;
                        case "send_dm":
                            msg.author.sendMessage(command.message);
                            break;
                        case "switch_role":
                            if(msg.guild.roles.get(command.role_id)) {
                                if(!msg.member.roles.has(command.role_id)) {
                                    msg.member.addRole(msg.guild.roles.get(command.role_id));
                                    console.log("[ROLE] Role " + msg.guild.roles.get(command.role_id).name + " has been added to " + msg.author.username);                  
                                } else {
                                    msg.member.removeRole(msg.guild.roles.get(command.role_id));
                                    console.log("[ROLE] Role " + msg.guild.roles.get(command.role_id).name + " has been removed to " + msg.author.username);                  
                                }
                            } else {
                                console.error("[ERROR] (" + command.command + ") This role doesn't exist!");
                            }
                            break;
                        case "add_role":
                            if(msg.guild.roles.get(command.role_id)) {
                                if(!msg.member.roles.has(command.role_id)) {
                                    msg.member.addRole(msg.guild.roles.get(command.role_id));
                                    console.log("[ROLE] Role " + msg.guild.roles.get(command.role_id).name + " has been added to " + msg.author.username);
                                } else {
                                    msg.channel.send(":lock: **You already have this role.**")
                                }        
                            } else {
                                console.error("[ERROR] (" + command.command + ") This role doesn't exist!");
                            }
                            break;
                        case "remove_role":
                            if(msg.guild.roles.get(command.role_id)) {
                                if(msg.member.roles.has(command.role_id)) {
                                    msg.member.removeRole(msg.guild.roles.get(command.role_id));
                                    console.log("[ROLE] Role " + msg.guild.roles.get(command.role_id).name + " has been removed to " + msg.author.username);
                                } else {
                                    msg.channel.sendMessage(":lock: **You don't have this role.**");
                                }
                            } else {
                                console.error("[ERROR] (" + command.command + ") This role doesn't exist!");
                            }
                            break;
                        case "purge":
                            if(msg.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) {
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
    registerCommand: function(command) {
        commandlist.push(command);
        console.log("[CMD] Command " + command.command + " has been successfully registered !");
    },
    deleteCommand: function(command) {
        
    }
}