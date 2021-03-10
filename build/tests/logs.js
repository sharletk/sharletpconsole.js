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
 * @file logs
 * © All Rights Reserved
 *
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../src/index");
global.console = index_1.sharletpconsole;
index_1.sharletpconsole.log("Log Test");
index_1.sharletpconsole.notice("Notice Test");
index_1.sharletpconsole.info("Info Test");
index_1.sharletpconsole.warn("Warn Test");
index_1.sharletpconsole.alert("Alert Test");
index_1.sharletpconsole.critical("Critical Test");
index_1.sharletpconsole.emergency("Emergency Test");
index_1.sharletpconsole.error("Error Test", "HOUSTON, WE HAVE A PROBLEM");
index_1.sharletpconsole.setDebugLevel(1);
index_1.sharletpconsole.debug("Debug Test", "SharletP");
index_1.sharletpconsole.setDebugLevel(2);
index_1.sharletpconsole.debugX("Debug-X Test", "says hi :)");
