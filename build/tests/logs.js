"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("../src/index"));
index_1.default.log("Log Test");
index_1.default.notice("Notice Test");
index_1.default.info("Info Test");
index_1.default.warn("Warn Test");
index_1.default.alert("Alert Test");
index_1.default.critical("Critical Test");
index_1.default.emergency("Emergency Test");
index_1.default.error("Error Test", "HOUSTON, WE HAVE A PROBLEM");
index_1.default.setDebugLevel(1);
index_1.default.debug("Debug Test", "SharletP");
index_1.default.setDebugLevel(2);
index_1.default.debugX("Debug-X Test", "says hi :)");
