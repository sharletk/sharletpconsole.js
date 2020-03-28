const SharletPConsole = require("../src/SharletPConsole.js");
const Console = new SharletPConsole();

Console.info("Info");
Console.notice("Notice");
Console.log("Log");
Console.alert("Alert");
Console.warn("Warn");
Console.error("Error");
Console.emergency("Emergency");
Console.critical("Critical");
Console.debug("Debug");