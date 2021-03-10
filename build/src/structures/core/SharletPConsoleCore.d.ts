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
import { Console } from "console";
export default class SharletPConsoleCore extends Console {
    private configs;
    private debugLevel;
    constructor();
    /**
     * Get the configuration file.
     *
     * @return {object} configs
     */
    getConfigs(): object;
    /**
     * Get the debug level.
     *
     * @return {number} debugLevel
     */
    getDebugLevel(): number;
    /**
     * Set the debug level.
     *
     * @param {number} level
     * @return {void}
     */
    setDebugLevel(level: number): void;
    /**
     * Get the timestamp.
     *
     * @return {string}
     */
    getTimestamp(): string;
    /**
     * Checks if the given color is present in the colors configuration.
     *
     * @param {string} color
     * @return {boolean}
     */
    isValidColor(color: string): boolean;
    /**
     * Get a specfic color from the colors configuration.
     *
     * @param {string} color
     * @return {any}
     */
    getColor(color: string): any;
    /**
     * Get a specifix color but formatted from the color configuration.
     *
     * @param {string} color
     * @return {any}
     */
    getFormattedColor(color: string): any;
    /**
     * Parse out the data provided to the logger for easy conversion to a string.
     *
     * @param {any} data
     * @return {string}
     */
    private _parseData;
    /**
     * Format the head section of the log output.
     *
     * @param {string} datatype
     * @param {string} color
     * @param {string} title
     * @return {string}
     */
    private headFormat;
    /**
     * Format the body section of the log output.
     *
     * @param {string} data
     * @param {string} color
     * @return {string}
     */
    private bodyFormat;
    /**
     * Log the new formatted output.
     *
     * @param {string} data
     * @param {string} color
     * @param {string} datatype
     * @param {string} title
     * @return {void}
     */
    private _writeLog;
    /**
     * Custom Console: Log Method
     *
     * @param {string} data
     * @param {string} title
     * @param {string} color
     * @param {string} datatype
     * @return {void}
     */
    log(data: string, title?: string, color?: string, datatype?: string): void;
    /**
     * Custom Console: Info Method
     *
     * @param {string} data
     * @param {string} title
     * @param {string} color
     * @param {string} datatype
     * @return {void}
     */
    info(data: string, title?: string, color?: string, datatype?: string): void;
    /**
     * Custom Console: Notice Method
     *
     * @param {string} data
     * @param {string} title
     * @param {string} color
     * @param {string} datatype
     * @return {void}
     */
    notice(data: string, title?: string, color?: string, datatype?: string): void;
    /**
     * Custom Console: Warn Method
     *
     * @param {string} data
     * @param {string} title
     * @param {string} color
     * @param {string} datatype
     * @return {void}
     */
    warn(data: string, title?: string, color?: string, datatype?: string): void;
    /**
     * Custom Console: Alert Method
     *
     * @param {string} data
     * @param {string} title
     * @param {string} color
     * @param {string} datatype
     * @return {void}
     */
    alert(data: string, title?: string, color?: string, datatype?: string): void;
    /**
     * Custom Console: Critical Method
     *
     * @param {string} data
     * @param {string} title
     * @param {string} color
     * @param {string} datatype
     * @return {void}
     */
    critical(data: string, title?: string, color?: string, datatype?: string): void;
    /**
     * Custom Console: Emergency Method
     *
     * @param {string} data
     * @param {string} title
     * @param {string} color
     * @param {string} datatype
     * @return {void}
     */
    emergency(data: string, title?: string, color?: string, datatype?: string): void;
    /**
     * Custom Console: Error Method
     *
     * @param {string} data
     * @param {string} title
     * @param {string} color
     * @param {string} datatype
     * @return {void}
     */
    error(data: string, title?: string, color?: string, datatype?: string): void;
    /**
     * Custom Console: Debug Method
     *
     * @param {string} data
     * @param {string} title
     * @param {string} color
     * @param {string} datatype
     * @return {void}
     */
    debug(data: string, title?: string, color?: string, datatype?: string): void;
    /**
     * Custom Console: Debug-X Method
     *
     * @param {string} data
     * @param {string} title
     * @param {string} color
     * @param {string} datatype
     * @return {void}
     */
    debugX(data: string, title?: string, color?: string, datatype?: string): void;
}
