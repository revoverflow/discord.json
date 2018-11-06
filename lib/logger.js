let moment = require("moment");

module.exports = class Logger {

    /**
     * Log info message
     *
     * @param {string} message
     */
    static info(message) {
        Logger.out(message);
    }

    static error(message) {
        Logger.out(message);
    }

    /**
     * Prefix of logger
     *
     * @return {string}
     */
    static prefix() {
        return `[${moment().format('DD/MM/YY H:mm:ss')}] `;
    }

    /**
     * Display message to console
     *
     * @param {string} message
     */
    static out(message) {
        console.log(Logger.prefix() + message)
    }

};