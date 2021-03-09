import SharletPConsoleCore from "./structures/core/SharletPConsoleCore"
const sharletpconsole = new SharletPConsoleCore();
global.console = sharletpconsole;
export default sharletpconsole;