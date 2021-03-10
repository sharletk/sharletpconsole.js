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
     * @param {any} datatype
     * @param {string} color
     * @param {string} title
     * @return {string}
     */
    private headFormat;
    /**
     * Format the body section of the log output.
     *
     * @param {any} data
     * @param {string} color
     * @return {string}
     */
    private bodyFormat;
    /**
     * Log the new formatted output.
     *
     * @param {any} data
     * @param {string} color
     * @param {any} datatype
     * @param {string} title
     * @return {void}
     */
    private _writeLog;
    /**
     * Custom Console: Log Method
     *
     * @param {any} data
     * @param {string} title
     * @param {string} color
     * @param {any} datatype
     * @return {void}
     */
    log(data: any, title?: string, color?: string, datatype?: string): void;
    /**
     * Custom Console: Info Method
     *
     * @param {any} data
     * @param {string} title
     * @param {string} color
     * @param {any} datatype
     * @return {void}
     */
    info(data: any, title?: string, color?: string, datatype?: string): void;
    /**
     * Custom Console: Notice Method
     *
     * @param {any} data
     * @param {string} title
     * @param {string} color
     * @param {any} datatype
     * @return {void}
     */
    notice(data: any, title?: string, color?: string, datatype?: string): void;
    /**
     * Custom Console: Warn Method
     *
     * @param {any} data
     * @param {string} title
     * @param {string} color
     * @param {any} datatype
     * @return {void}
     */
    warn(data: any, title?: string, color?: string, datatype?: string): void;
    /**
     * Custom Console: Alert Method
     *
     * @param {any} data
     * @param {string} title
     * @param {string} color
     * @param {any} datatype
     * @return {void}
     */
    alert(data: any, title?: string, color?: string, datatype?: string): void;
    /**
     * Custom Console: Critical Method
     *
     * @param {any} data
     * @param {string} title
     * @param {string} color
     * @param {any} datatype
     * @return {void}
     */
    critical(data: any, title?: string, color?: string, datatype?: string): void;
    /**
     * Custom Console: Emergency Method
     *
     * @param {any} data
     * @param {string} title
     * @param {string} color
     * @param {any} datatype
     * @return {void}
     */
    emergency(data: any, title?: string, color?: string, datatype?: string): void;
    /**
     * Custom Console: Error Method
     *
     * @param {any} data
     * @param {string} title
     * @param {string} color
     * @param {any} datatype
     * @return {void}
     */
    error(data: any, title?: string, color?: string, datatype?: string): void;
    /**
     * Custom Console: Debug Method
     *
     * @param {any} data
     * @param {string} title
     * @param {string} color
     * @param {any} datatype
     * @return {void}
     */
    debug(data: any, title?: string, color?: string, datatype?: string): void;
    /**
     * Custom Console: Debug-X Method
     *
     * @param {any} data
     * @param {string} title
     * @param {string} color
     * @param {any} datatype
     * @return {void}
     */
    debugX(data: any, title?: string, color?: string, datatype?: string): void;
}
