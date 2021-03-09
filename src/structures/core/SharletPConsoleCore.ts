"use strict";

import { Console } from "console";
import util from "util";
import timestamp from "time-stamp";

import ColorConfig from "../configs/colors"

export default class Logger extends Console {
  private configs: any;
  private debugLevel: number;
  
  constructor() {
    super(process.stdout, process.stderr, true);
    
    this.configs = {
      "colors": ColorConfig
    };
    
    this.debugLevel = 0;
  }
  
  public getConfigs(): object {
    return this.configs;
  }
  
  public getDebugLevel(): number {
    return this.debugLevel;
  }
  
  public setDebugLevel(level: number): void {
    this.debugLevel = level;
  }
  
  public getTimestamp(): string {
    return (timestamp as any).utc("YYYY/MM/DD-HH:mm:ss")
  }
  
  public isValidColor(color: string): boolean {        
    return (typeof this.configs.colors[color]) !== "undefined";
  }
  
  public getColor(color: string): any {
    return (this.isValidColor(color) ? this.configs.colors[color] : false);
  }
  
  public getFormattedColor(color: string): any {
    return util.format(this.configs.colors["ESCAPE"], this.getColor(color));
  }
  
  private _parseData(data: any): any {
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
  
  private headFormat(datatype: string, color: string, title: string): string {
    const c = (clr: string) => this.getFormattedColor(clr);  
            
    return `(${c("FG_DARK_GRAY")}${this.getTimestamp()}${c("RESET")}) ${c("BOLD_BRIGHT")}[${c("FG_BLUE")}${title}${c("RESET")}${c("BOLD_BRIGHT")}]${c("RESET")} #${c("UNDERLINE")}${c("BOLD_BRIGHT")}${this.getFormattedColor(color)}${datatype}${c("RESET")}:`;
  }
  
  private bodyFormat(data: string, color: string): string {
    return `${this.getFormattedColor("RESET")}${data}`;
  }
  
  private _writeLog(data: string, color: string, datatype: string, title: string): void {
    data = this._parseData(data);
    
    super.log(`${this.headFormat(datatype, color, title)} ${this.bodyFormat(data, color)}`);
  }
  
  log(data: string, title: string = process.title, color: string = "FG_LIGHT_GREEN", datatype: string = "LOG"): void {
    this._writeLog(data, color, datatype, title);
  }
  
  info(data: string, title: string = process.title, color: string = "FG_WHITE", datatype: string = "INFO"): void {
    this._writeLog(data, color, datatype, title);
  }
  
  notice(data: string, title: string = process.title, color: string = "FG_LIGHT_CYAN", datatype: string = "NOTICE"): void {
    this._writeLog(data, color, datatype, title);
  }
  
  warn(data: string, title: string = process.title, color: string = "FG_LIGHT_YELLOW", datatype: string = "WARN"): void {
    this._writeLog(data, color, datatype, title);
  }
  
  alert(data: string, title: string = process.title, color: string = "FG_LIGHT_BLUE", datatype: string = "ALERT"): void {
    this._writeLog(data, color, datatype, title);
  }
  
  critical(data: string, title: string = process.title, color: string = "FG_LIGHT_MAGENTA", datatype: string =  "CRITICAL"): void {
    this._writeLog(data, color, datatype, title);
  }
  
  emergency(data: string, title: string = process.title, color: string = "FG_RED", datatype: string = "EMERGENCY"): void {
    this._writeLog(data, color, datatype, title);
  }
  
  error(data: string, title: string = process.title, color: string = "FG_LIGHT_RED", datatype: string = "ERROR"): void {
    this._writeLog(data, color, datatype, title);
  }
  
  debug(data: string, title: string = process.title, color: string = "FG_DARK_GRAY", datatype: string = "DEBUG"): void {
    if (this.debugLevel >= 1) {
      this._writeLog(data, color, datatype, title);
   }
  }
  
  debugX(data: string, title: string = process.title, color: string = "FG_DARK_GRAY", datatype: string = "DEBUG-X"): void {
    if (this.debugLevel >= 2) {
      this._writeLog(data, color, datatype, title);
   }
  }
}