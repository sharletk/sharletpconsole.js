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
 * @file colors
 * © All Rights Reserved
 *
 */
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Colors configuration.
 *
 * @return {object}
 */
const ColorsConfig = {
    ESCAPE: "\x1B[%dm",
    FG_BLACK: 30,
    FG_RED: 31,
    FG_GREEN: 32,
    FG_YELLOW: 33,
    FG_BLUE: 34,
    FG_MAGENTA: 35,
    FG_CYAN: 36,
    FG_WHITE: 37,
    FG_DARK_GRAY: 90,
    FG_LIGHT_RED: 91,
    FG_LIGHT_GREEN: 92,
    FG_LIGHT_YELLOW: 93,
    FG_LIGHT_BLUE: 94,
    FG_LIGHT_MAGENTA: 95,
    FG_LIGHT_CYAN: 96,
    FG_DEFAULT: 39,
    BG_RED: 41,
    BG_GREEN: 42,
    BG_BLUE: 44,
    BG_WHITE: 47,
    BG_DEFAULT: 49,
    RESET: 0,
    BOLD_BRIGHT: 1,
    UNDERLINE: 4,
    INVERSE: 7,
    BOLD_BRIGHT_OFF: 21,
    UNERLINE_OFF: 24,
    INVERSE_OFF: 27
};
exports.default = ColorsConfig;
