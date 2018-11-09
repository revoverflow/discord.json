let Discord = require('discord.js')

module.exports = class Bot {
  /**
     * Constructor, set default param
     *
     * @param {string|null} token
     */
  constructor (token) {
    this._token = token
    this._client = new Discord.Client()
  }

  /**
     * Connect Discord to server
     *
     * @param {string|null} token
     * @return {Promise<string>}
     */
  login (token) {
    return this._client.login(token || this.getToken())
  }

  /**
     * Get Client class from Discord.js
     *
     * @return {Discord.Client|module:discord.js.Client}
     */
  getClient () {
    return this._client
  }

  /**
     * Get Token class from constructor
     *
     * @return {string}
     */
  getToken () {
    return this._token
  }
}
