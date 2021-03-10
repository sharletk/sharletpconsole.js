/**
 *
 *╭━━━┳╮╱╱╱╱╱╱╭╮╱╱╱╭╮╭━━━┳━━━╮╱╱╱╱╱╱╱╱╱╱╱╭╮
 *┃╭━╮┃┃╱╱╱╱╱╱┃┃╱╱╭╯╰┫╭━╮┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱┃┃
 *┃╰━━┫╰━┳━━┳━┫┃╭━┻╮╭┫╰━╯┃┃╱╰╋━━┳━╮╭━━┳━━┫┃╭━━╮
 *╰━━╮┃╭╮┃╭╮┃╭┫┃┃┃━┫┃┃╭━━┫┃╱╭┫╭╮┃╭╮┫━━┫╭╮┃┃┃┃━┫
 *┃╰━╯┃┃┃┃╭╮┃┃┃╰┫┃━┫╰┫┃╱╱┃╰━╯┃╰╯┃┃┃┣━━┃╰╯┃╰┫┃━┫
 *╰━━━┻╯╰┻╯╰┻╯╰━┻━━┻━┻╯╱╱╰━━━┻━━┻╯╰┻━━┻━━┻━┻━━╯
 *
 * @author SharletP
 * @file SharletPConsoleCore
 * © All Rights Reserved
 *
 */
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
const util_1 = __importDefault(require("util"));
const time_stamp_1 = __importDefault(require("time-stamp"));
const colors_1 = __importDefault(require("../configs/colors"));
class SharletPConsoleCore extends console_1.Console {
    constructor() {
        super(process.stdout, process.stderr, true);
        this.configs = {
            "colors": colors_1.default
        };
        this.debugLevel = 0;
    }
    /**
     * Get the configuration file.
     *
     * @return {object} configs
     */
    getConfigs() {
        return this.configs;
    }
    /**
     * Get the debug level.
     *
     * @return {number} debugLevel
     */
    getDebugLevel() {
        return this.debugLevel;
    }
    /**
     * Set the debug level.
     *
     * @param {number} level
     * @return {void}
     */
    setDebugLevel(level) {
        this.debugLevel = level;
    }
    /**
     * Get the timestamp.
     *
     * @return {string}
     */
    getTimestamp() {
        return time_stamp_1.default.utc("YYYY/MM/DD-HH:mm:ss");
    }
    /**
     * Checks if the given color is present in the colors configuration.
     *
     * @param {string} color
     * @return {boolean}
     */
    isValidColor(color) {
        return (typeof this.configs.colors[color]) !== "undefined";
    }
    /**
     * Get a specfic color from the colors configuration.
     *
     * @param {string} color
     * @return {any}
     */
    getColor(color) {
        return (this.isValidColor(color) ? this.configs.colors[color] : false);
    }
    /**
     * Get a specifix color but formatted from the color configuration.
     *
     * @param {string} color
     * @return {any}
     */
    getFormattedColor(color) {
        return util_1.default.format(this.configs.colors["ESCAPE"], this.getColor(color));
    }
    /**
     * Parse out the data provided to the logger for easy conversion to a string.
     *
     * @param {any} data
     * @return {string}
     */
    _parseData(data) {
        if (typeof data === "string") {
            data = data;
        }
        else if (Array.isArray(data)) {
            data = data.map(this._parseData).join("\n");
        }
        else if (typeof data === "object" && data !== null) {
            data = util_1.default.inspect(data, {
                depth: 0,
                colors: true
            });
        }
        else if (data && data.constructor === Error) {
            data = data.stack || data.message || String(data);
        }
        else {
            data = data;
        }
        return String(data);
    }
    /**
     * Format the head section of the log output.
     *
     * @param {any} datatype
     * @param {string} color
     * @param {string} title
     * @return {string}
     */
    headFormat(datatype, color, title) {
        const c = (clr) => this.getFormattedColor(clr);
        return `(${c("FG_DARK_GRAY")}${this.getTimestamp()}${c("RESET")}) ${c("BOLD_BRIGHT")}[${c("FG_BLUE")}${title}${c("RESET")}${c("BOLD_BRIGHT")}]${c("RESET")} #${c("UNDERLINE")}${c("BOLD_BRIGHT")}${this.getFormattedColor(color)}${datatype}${c("RESET")}:`;
    }
    /**
     * Format the body section of the log output.
     *
     * @param {any} data
     * @param {string} color
     * @return {string}
     */
    bodyFormat(data, color) {
        return `${this.getFormattedColor("RESET")}${data}`;
    }
    /**
     * Log the new formatted output.
     *
     * @param {any} data
     * @param {string} color
     * @param {any} datatype
     * @param {string} title
     * @return {void}
     */
    _writeLog(data, color, datatype, title) {
        data = this._parseData(data);
        super.log(`${this.headFormat(datatype, color, title)} ${this.bodyFormat(data, color)}`);
    }
    /**
     * Custom Console: Log Method
     *
     * @param {any} data
     * @param {string} title
     * @param {string} color
     * @param {any} datatype
     * @return {void}
     */
    log(data, title = process.title, color = "FG_LIGHT_GREEN", datatype = "LOG") {
        this._writeLog(data, color, datatype, title);
    }
    /**
     * Custom Console: Info Method
     *
     * @param {any} data
     * @param {string} title
     * @param {string} color
     * @param {any} datatype
     * @return {void}
     */
    info(data, title = process.title, color = "FG_WHITE", datatype = "INFO") {
        this._writeLog(data, color, datatype, title);
    }
    /**
     * Custom Console: Notice Method
     *
     * @param {any} data
     * @param {string} title
     * @param {string} color
     * @param {any} datatype
     * @return {void}
     */
    notice(data, title = process.title, color = "FG_LIGHT_CYAN", datatype = "NOTICE") {
        this._writeLog(data, color, datatype, title);
    }
    /**
     * Custom Console: Warn Method
     *
     * @param {any} data
     * @param {string} title
     * @param {string} color
     * @param {any} datatype
     * @return {void}
     */
    warn(data, title = process.title, color = "FG_LIGHT_YELLOW", datatype = "WARN") {
        this._writeLog(data, color, datatype, title);
    }
    /**
     * Custom Console: Alert Method
     *
     * @param {any} data
     * @param {string} title
     * @param {string} color
     * @param {any} datatype
     * @return {void}
     */
    alert(data, title = process.title, color = "FG_LIGHT_BLUE", datatype = "ALERT") {
        this._writeLog(data, color, datatype, title);
    }
    /**
     * Custom Console: Critical Method
     *
     * @param {any} data
     * @param {string} title
     * @param {string} color
     * @param {any} datatype
     * @return {void}
     */
    critical(data, title = process.title, color = "FG_LIGHT_MAGENTA", datatype = "CRITICAL") {
        this._writeLog(data, color, datatype, title);
    }
    /**
     * Custom Console: Emergency Method
     *
     * @param {any} data
     * @param {string} title
     * @param {string} color
     * @param {any} datatype
     * @return {void}
     */
    emergency(data, title = process.title, color = "FG_RED", datatype = "EMERGENCY") {
        this._writeLog(data, color, datatype, title);
    }
    /**
     * Custom Console: Error Method
     *
     * @param {any} data
     * @param {string} title
     * @param {string} color
     * @param {any} datatype
     * @return {void}
     */
    error(data, title = process.title, color = "FG_LIGHT_RED", datatype = "ERROR") {
        this._writeLog(data, color, datatype, title);
    }
    /**
     * Custom Console: Debug Method
     *
     * @param {any} data
     * @param {string} title
     * @param {string} color
     * @param {any} datatype
     * @return {void}
     */
    debug(data, title = process.title, color = "FG_DARK_GRAY", datatype = "DEBUG") {
        if (this.debugLevel >= 1) {
            this._writeLog(data, color, datatype, title);
        }
    }
    /**
     * Custom Console: Debug-X Method
     *
     * @param {any} data
     * @param {string} title
     * @param {string} color
     * @param {any} datatype
     * @return {void}
     */
    debugX(data, title = process.title, color = "FG_DARK_GRAY", datatype = "DEBUG-X") {
        if (this.debugLevel >= 2) {
            this._writeLog(data, color, datatype, title);
        }
    }
}
exports.default = SharletPConsoleCore;
