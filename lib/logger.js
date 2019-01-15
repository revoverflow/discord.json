let moment = require("moment");
let colors = require("colors");

module.exports = class Logger {

    /**
     * Log info message
     *
     * @param {string} message
     */
    static info(message) {
        Logger.out(message, 0);
    }

    static debug(message) {
        Logger.out(message, 2);
    }

    static error(message) {
        Logger.out(message, 1);
    }

    static warn(message) {
        Logger.out(message, 3);
    }

    /**
     * Prefix of logger
     *
     * @return {string}
     */
    static prefix() {
        return `[${moment().format('H:mm:ss')}]`.inverse.cyan + " ";
    }

    /**
     * Display message to console
     *
     * @param {string} message
     */
    static out(message, type) {
        switch(type) {
            case 0: // Info
                console.log(Logger.prefix() + message);
                break;
            case 1: // Error
                console.log(Logger.prefix() + message.red);
                break;
            case 2: // Debug
                console.log(Logger.prefix() + message.yellow);
                break;   
            case 3:
                console.log("⚠️  ".yellow.inverse + message.yellow.inverse);
                break;
        }
    }

};