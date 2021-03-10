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

import { Console } from "console";
import util from "util";
import timestamp from "time-stamp";

import ColorConfig from "../configs/colors"

export default class SharletPConsoleCore extends Console {
  /* @param {any} configs */
  private configs: any;
  
  /* @param {number} debugLevel */
  private debugLevel: number;
  
  constructor() {
    super(process.stdout, process.stderr, true);
    
    this.configs = {
      "colors": ColorConfig
    };
    
    this.debugLevel = 0;
  }
  
  /**
   * Get the configuration file.
   *
   * @return {object} configs
   */
  
  public getConfigs(): object {
    return this.configs;
  }
  
  /**
   * Get the debug level.
   *
   * @return {number} debugLevel
   */
  
  public getDebugLevel(): number {
    return this.debugLevel;
  }
  
  /**
   * Set the debug level.
   *
   * @param {number} level
   * @return {void}
   */
  
  public setDebugLevel(level: number): void {
    this.debugLevel = level;
  }
  
  /**
   * Get the timestamp.
   *
   * @return {string}
   */
  
  public getTimestamp(): string {
    return (timestamp as any).utc("YYYY/MM/DD-HH:mm:ss")
  }
  
  /**
   * Checks if the given color is present in the colors configuration.
   *
   * @param {string} color
   * @return {boolean}
   */
  
  public isValidColor(color: string): boolean {        
    return (typeof this.configs.colors[color]) !== "undefined";
  }
  
  /**
   * Get a specfic color from the colors configuration.
   * 
   * @param {string} color
   * @return {any}
   */
  
  public getColor(color: string): any {
    return (this.isValidColor(color) ? this.configs.colors[color] : false);
  }
  
  /**
   * Get a specifix color but formatted from the color configuration.
   *
   * @param {string} color
   * @return {any}
   */
  
  public getFormattedColor(color: string): any {
    return util.format(this.configs.colors["ESCAPE"], this.getColor(color));
  }
  
  /**
   * Parse out the data provided to the logger for easy conversion to a string.
   *
   * @param {any} data
   * @return {string}
   */
  
  private _parseData(data: any): string {
    if (typeof data === "string") {
      data = data;
    } else if (Array.isArray(data)) {
      data = data.map(this._parseData).join("\n");
    } else if (typeof data === "object" && data !== null) {
      data = util.inspect(data, {
        depth: 0,
        colors: true
      });
    } else if (data && data.constructor === Error) {
      data =  data.stack || data.message || String(data);
    } else {
      data = data;
    }
       
    return String(data);
  }
  
  /**
   * Format the head section of the log output.
   *
   * @param {string} datatype
   * @param {string} color
   * @param {string} title
   * @return {string}
   */
  
  private headFormat(datatype: string, color: string, title: string): string {
    const c = (clr: string) => this.getFormattedColor(clr);  
            
    return `(${c("FG_DARK_GRAY")}${this.getTimestamp()}${c("RESET")}) ${c("BOLD_BRIGHT")}[${c("FG_BLUE")}${title}${c("RESET")}${c("BOLD_BRIGHT")}]${c("RESET")} #${c("UNDERLINE")}${c("BOLD_BRIGHT")}${this.getFormattedColor(color)}${datatype}${c("RESET")}:`;
  }
  
  /**
   * Format the body section of the log output.
   *
   * @param {string} data
   * @param {string} color
   * @return {string}
   */
  
  private bodyFormat(data: string, color: string): string {
    return `${this.getFormattedColor("RESET")}${data}`;
  }
  
  /**
   * Log the new formatted output.
   *
   * @param {string} data
   * @param {string} color
   * @param {string} datatype
   * @param {string} title
   * @return {void}
   */
  
  private _writeLog(data: string, color: string, datatype: string, title: string): void {
    data = this._parseData(data);
    
    super.log(`${this.headFormat(datatype, color, title)} ${this.bodyFormat(data, color)}`);
  }
  
  /**
   * Custom Console: Log Method
   *
   * @param {string} data
   * @param {string} title
   * @param {string} color
   * @param {string} datatype
   * @return {void}
   */
  
  log(data: string, title: string = process.title, color: string = "FG_LIGHT_GREEN", datatype: string = "LOG"): void {
    this._writeLog(data, color, datatype, title);
  }
  
  /**
   * Custom Console: Info Method
   *
   * @param {string} data
   * @param {string} title
   * @param {string} color
   * @param {string} datatype
   * @return {void}
   */
  
  info(data: string, title: string = process.title, color: string = "FG_WHITE", datatype: string = "INFO"): void {
    this._writeLog(data, color, datatype, title);
  }
  
  /**
   * Custom Console: Notice Method
   *
   * @param {string} data
   * @param {string} title
   * @param {string} color
   * @param {string} datatype
   * @return {void}
   */
  
  notice(data: string, title: string = process.title, color: string = "FG_LIGHT_CYAN", datatype: string = "NOTICE"): void {
    this._writeLog(data, color, datatype, title);
  }
  
  /**
   * Custom Console: Warn Method
   *
   * @param {string} data
   * @param {string} title
   * @param {string} color
   * @param {string} datatype
   * @return {void}
   */
  
  warn(data: string, title: string = process.title, color: string = "FG_LIGHT_YELLOW", datatype: string = "WARN"): void {
    this._writeLog(data, color, datatype, title);
  }
  
  /**
   * Custom Console: Alert Method
   *
   * @param {string} data
   * @param {string} title
   * @param {string} color
   * @param {string} datatype
   * @return {void}
   */
  
  alert(data: string, title: string = process.title, color: string = "FG_LIGHT_BLUE", datatype: string = "ALERT"): void {
    this._writeLog(data, color, datatype, title);
  }
  
  /**
   * Custom Console: Critical Method
   *
   * @param {string} data
   * @param {string} title
   * @param {string} color
   * @param {string} datatype
   * @return {void}
   */
  
  critical(data: string, title: string = process.title, color: string = "FG_LIGHT_MAGENTA", datatype: string =  "CRITICAL"): void {
    this._writeLog(data, color, datatype, title);
  }
  
  /**
   * Custom Console: Emergency Method
   *
   * @param {string} data
   * @param {string} title
   * @param {string} color
   * @param {string} datatype
   * @return {void}
   */
  
  emergency(data: string, title: string = process.title, color: string = "FG_RED", datatype: string = "EMERGENCY"): void {
    this._writeLog(data, color, datatype, title);
  }
  
  /**
   * Custom Console: Error Method
   *
   * @param {string} data
   * @param {string} title
   * @param {string} color
   * @param {string} datatype
   * @return {void}
   */
  
  error(data: string, title: string = process.title, color: string = "FG_LIGHT_RED", datatype: string = "ERROR"): void {
    this._writeLog(data, color, datatype, title);
  }
  
  /**
   * Custom Console: Debug Method
   *
   * @param {string} data
   * @param {string} title
   * @param {string} color
   * @param {string} datatype
   * @return {void}
   */
  
  debug(data: string, title: string = process.title, color: string = "FG_DARK_GRAY", datatype: string = "DEBUG"): void {
    if (this.debugLevel >= 1) {
      this._writeLog(data, color, datatype, title);
   }
  }
  
  /**
   * Custom Console: Debug-X Method
   *
   * @param {string} data
   * @param {string} title
   * @param {string} color
   * @param {string} datatype
   * @return {void}
   */
  
  debugX(data: string, title: string = process.title, color: string = "FG_DARK_GRAY", datatype: string = "DEBUG-X"): void {
    if (this.debugLevel >= 2) {
      this._writeLog(data, color, datatype, title);
   }
  }
}