import SharletPConsoleCore from "./structures/core/SharletPConsoleCore"
const sharletpconsole = new SharletPConsoleCore();
global.console = sharletpconsole;
const console = sharletpconsole;
export default console;