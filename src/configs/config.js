/**
 *
 *
 *
 * ╭━━━┳╮╱╱╱╱╱╱╭╮╱╱╱╭╮╭━━━╮
 * ┃╭━╮┃┃╱╱╱╱╱╱┃┃╱╱╭╯╰┫╭━╮┃
 * ┃╰━━┫╰━┳━━┳━┫┃╭━┻╮╭┫╰━╯┃
 * ╰━━╮┃╭╮┃╭╮┃╭┫┃┃┃━┫┃┃╭━━╯
 * ┃╰━╯┃┃┃┃╭╮┃┃┃╰┫┃━┫╰┫┃
 * ╰━━━┻╯╰┻╯╰┻╯╰━┻━━┻━┻╯
 *
 *
 *
 *  @author SharletP
 *   @file config.js
 *   (c) ALL RIGHTS RESERVED.
 *
*/

"use strict";

const config = {
  /* #IMPORTANT NOTE#
  
  * DONT MESS WITH IT IF YOU DONT KNOW HOW TO!
  
  Make sure to set in the following values when writing the config's format (head & body) with the following data...
   DONT MISS ANY DETAILS!!!
   
   ~head
    - dataType
    - timeStamp
    - colors
    
   ~body
    - data
    - color   
    
 **EXAMPLE**
  "format": {
    colors: {
      dataTypeColor: "BOLD_BRIGHT",
      timeStampColor: "FG_DARK_GRAY"
    },
    
    head: (dataType, timeStamp, dataTypeColor, timeStampColor, resetColor) => `${dataTypeColor}[ ${dataType} ] ${resetColor}${timeStampColor}( ${timeStamp} ) ${resetColor}\n`,
    
    body: (data, baseColor, resetColor) => `>>> ${baseColor} ${data} ${resetColor}`
  }
  
  */
};

module.exports = config;