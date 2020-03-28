"use strict";

const { Console } = require("console");

const util = require("util");
const timestamp = require("time-stamp");

class SharletPConsole extends Console {
  
  /* eslint-disable no-unused-vars */
  
  constructor(...args) {
    super({
      stdout: process.stdout,
      stderr: process.stderr,
      colors: true
    });
    
    this.config = require("./configs/config.js");
    
    this.colors = require("./modules/colors.js");
    
    this.def = true;
        
    this.debugLevel = 0;
  }
  
  /* eslint-enable no-unused-vars */
  
  /**
   * Returns the set configuration.
   *
   * @return {object} config
   */
  
  getConfig() {
    return this.config;
  }
  
  /**
   * Sets a specified value for given key in the configuration.
   *
   * @param {*} key
   * @paran {*} value
   *
   */
  
  setConfig(key, value) {
    this.config[key] = value;
  }
  
  /**
   * Returns the debug level.
   * 
   * @return {integer} debugLevel
   */  
  
  getDebugLevel() {
    return this.debugLevel;
  }
  
  /**
   * Sets the specified debug level.
   * 
   * @param {integer} debugLevel
   */
  
  setDebugLevel(debugLevel) {
    this.debugLevel = debugLevel;
  }
  
  /**
   * Returns the color codes.
   * 
   * @return {object} colors
   */
  
  getColors() {
    return this.colors;
  }
  
  /**
   * Returns the current timestamp.
   * 
   * @return {string} timestamp
   */
  
  getTimestamp() {
    return timestamp.utc("YYYY/MM/DD HH:mm:ss");
  }
  
  /**
   * Returns a bool to check if the given value is a color of colors.
   * 
   * @param {string} color
   * @return {bool}
   */
  
  isValidColor(color) {
    for (let clr in this.getColors()) {
      if (clr === color) {
        return true;
      } else {
        return false;
      }
    }
  }
  
  /**
   * Gets the requested color from colors.
   * 
   * @param {string} color
   * @return {integer}
   */
  
  getColor(color) {
    if (this.isValidColor(color) !== true);
    return this.colors[color];
  }
  
  /**
   * Returns the requested color from colors.
   * 
   * @param {string} color
   * @return {integer}
   */
  
  setColor(color) {
    return util.format(this.colors["ESCAPE"], this.getColor(color));
  }
  
  /**
   * Gets the defined value for configuration logging.
   * 
   * @return {bool}
   */
  
  getDef() {
    return this.def;
  }
  
  /**
   * Sets the defined bool for configuration logging.
   * 
   * @param {bool} b
   */
  
  setDef(b) {
    this.def = b;
  }
  
  /**
   * Returns the parsed head format.
   * 
   * @param {string} dataType
   * @param {string} color
   * @param {bool} def
   * @return {object}
   */
  
  headFormat(dataType, color, def = this.def) {
    let frmt = this.config.format;
      
    return def === false ? frmt["head"](dataType, this.getTimestamp(), this.setColor(frmt["colors"]["dataTypeColor"]), this.setColor(frmt["colors"]["timeStampColor"]), this.setColor("RESET"))
    
      :    
    
      `${this.setColor("BOLD_BRIGHT")}[ ${dataType} ]${this.setColor("RESET")} ${this.setColor("FG_DARK_GRAY")}( ${this.getTimestamp()} )${this.setColor("RESET")}\n`;
  }
  
  /**
   * Returns the parsed body format.
   * 
   * @param {string} data
   * @param {string} color
   * @param {bool} def
   * @return {object}
   */
  
  bodyFormat(data, color, def = this.def) {
    return def === false ? this.config.format["body"](data, this.setColor(color), this.setColor("RESET"))
    
      :
    
      `>>> ${this.setColor(color)} ${data} ${this.setColor("RESET")}`;
  }
  
  /**
   * Returns the parsed in data as a string.
   * 
   * @param {*} data
   * @return {string}
   */
  
  _parseData(data) {
    if (typeof data === "string") {
      return data;
    } else if (Array.isArray(data)) {
      return data.map(this._parseData).join("\n");
    } else if (typeof data === "object" && data !== null) {
      return util.inspect(data, {
        depth: 0,
        colors: true
      });
    } else if (data && data.constructor === Error) {
      return data.stack || data.message || String(data);
    } else {
      return this.error("Data Parsing Error!");
    }
    /* eslint-disable no-unreachable */
    
    return String(data);
    
    /* eslint-enable no-unreachable */
  }
  
  /**
   * Writes the log with given parameters.
   * 
   * @param {string} data
   * @param {string} color
   * @param {string} dataType
   */
  
  _writeLog(data, color, dataType) {
    data = this._parseData(data);
    
    super.log(`${this.headFormat(dataType)} ${this.bodyFormat(data, color)}`);
  }
  
  /**
   * Logs in the data from given parameters.
   * 
   * @param {string} data
   * @param {string} color
   * @param {string} dataType
   *
   * Types of In-Built Logs.
   *  ~log, info, notice, alert, warning, emergency, critical, error & debug.
   */
  
  log(data, color = "FG_LIGHT_GREEN", dataType = "LOG") {
    this._writeLog(data, color, dataType);
  }
  
  info(data, color = "FG_WHITE", dataType = "INFO") {
    this._writeLog(data, color, dataType);
  }
  
  notice(data, color = "FG_LIGHT_CYAN", dataType = "NOTICE") {
    this._writeLog(data, color, dataType);
  }
  
  alert(data, color = "FG_LIGHT_RED", dataType = "ALERT") {
    this._writeLog(data, color, dataType);
  }
  
  warn(data, color = "FG_LIGHT_YELLOW", dataType = "WARNING") {
    this._writeLog(data, color, dataType);
  }
  
  emergency(data, color = "FG_LIGHT_RED", dataType = "EMERGENCY") {
    this._writeLog(data, color, dataType);
  }
  
  critical(data, color = "FG_LIGHT_RED", dataType = "CRITICAL") {
    this._writeLog(data, color, dataType);
  }
  
  error(data, color = "FG_RED", dataType = "ERROR") {
    this._writeLog(data, color, dataType);
  }
  
  debug(data, color = "FG_DARK_GRAY", dataType = "DEBUG") {
    if (!this.debugLevel >= 1) return;
    this._writeLog(data, color, dataType);
  }
}

module.exports = SharletPConsole;