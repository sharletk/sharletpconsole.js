const { Console } = require("console");

const config = require("../configs/config.js");
const colors = require("../modules/colors.js");

const util = require("util");
const moment = require("moment");

class SharletPConsole extends Console {
  constructor() {
    super(process.stdout, process.stderr);
  }
  
  setColor(clr) {
    return util.format(colors.ESCAPE, clr);
  }
  
  getTimestamp() {
    return moment().format("YYYY-MM-DD HH:mm:ss");
  }
  
  static parseData(data) {
    if(typeof data === "string") {
      return data;
    } else if(Array.isArray(data)) {
      return data.map(SharletPConsole.parseData).join("\n");
    } else if(typeof data === "object" && data !== null) {
      return util.inspect(data, {
        depth: 0,
        colors: true
      })
    } else if(typeof data === "Error") {
      return data.stack || data.message || String(data);
    } else {
      return "DATA PARSING ERROR!";
    }
    return String(data);
  }
  
  writeLog(data, dataType = "LOG") {
    data = SharletPConsole.parseData(data);
    dataType = dataType.toUpperCase();
    
    const time = config.GLOBAL["time"];
    const { message } = config.GLOBAL[dataType];
    
    const timestamp = time(`(${this.getTimestamp()})`);
    
    super.log(`${this.setColor(colors.BOLD_BRIGHT)}${String(dataType)}${this.setColor(colors.RESET)} ${timestamp} \n` + data.split("\n").map(str => `>>> ${message(str)}`).join("\n"));
  }
  
  log(...data) {
    this.writeLog(data, "LOG");
  }
  
  warn(...data) {
    this.writeLog(data, "WARN");
  }
  
  error(...data) {
    this.writeLog(data, "ERROR");
  }
  
  debug(...data) {
    this.writeLog(data, "DEBUG");
  }
}

module.exports = SharletPConsole;