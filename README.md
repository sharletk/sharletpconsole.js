```╭━━━┳╮╱╱╱╱╱╱╭╮╱╱╱╭╮╭━━━┳━━━╮╱╱╱╱╱╱╱╱╱╱╱╭╮
┃╭━╮┃┃╱╱╱╱╱╱┃┃╱╱╭╯╰┫╭━╮┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱┃┃
┃╰━━┫╰━┳━━┳━┫┃╭━┻╮╭┫╰━╯┃┃╱╰╋━━┳━╮╭━━┳━━┫┃╭━━╮
╰━━╮┃╭╮┃╭╮┃╭┫┃┃┃━┫┃┃╭━━┫┃╱╭┫╭╮┃╭╮┫━━┫╭╮┃┃┃┃━┫
┃╰━╯┃┃┃┃╭╮┃┃┃╰┫┃━┫╰┫┃╱╱┃╰━╯┃╰╯┃┃┃┣━━┃╰╯┃╰┫┃━┫
╰━━━┻╯╰┻╯╰┻╯╰━┻━━┻━┻╯╱╱╰━━━┻━━┻╯╰┻━━┻━━┻━┻━━╯
```
# SharletPConsole.js
SharletPConsole.js: A extended version of Node.js Console but with more fancy features!

## Table of Contents
1. Requirements
2. Getting Started
3. Usage
4. Roadmap
5. Contributing
6. Licence
7. Contact
8. Conclusion

## Requirements
* Node.js `v12.x` or higher

## Getting Started
### Prerequisites
There are two ways which you can install:
1. Install using NPM (Recommended)
```shell
npm i sharletpconsole.js@3.0.0-pre --save
```

2. Install from github
```shell
npm i github:sharletp/sharletpconsole.js#stable --save
```

### Installation
Depending on whether you are using **javascript** or **typescript** below are the solutions:
* ### Javascript
```javascript
const sharletpconsole = require("sharletpconsole.js");
console.log("Hello world!");
```

Internally for javascript the console is automatically replaced with sharletpconsole when you do import it, making it super easy to get started with.
***
* ### Typescript
```typescript
import { sharletpconsole as console } from "sharletpconsole.js"
global.console = console

console.log("Hello world");
```

For typescript due to some complexities, you have to follow this.

## Usage
1. **Different Premade Console Methods**
 
  All of the associated log methods follows this syntax:
    
    Eg: `console.log(data, [options])`

  * `data` - Any: Data to be logged.
  * `title` - String: Process title of the current log. **Default: process.title**
  * `color` - String: Color of the log datatype. **Default: In-built color**
  * `datatype` - String: The type of log. **Default: Relative to the method used.**

  The different types of log methods used are: `log, notice, info, warn, alert, critical, emergency, error, debug, debugX`

## Roadmap
1. ~~Different premade console log methods~~
2. File logging system
3. Easy custom log format creation.

## Contributing
If you would like to contribute, please do so by creating a pull request for the specific version from the master branch.

## Licence
```
```

Distributed under the **GNU General Public Licence v3.0**. See `LICENCE` for more information.

## Contact
Name - SharletP<br>
Email: sharletman@gmail.com<br>
Discord: SharletP#2928

Project Link: https://github.com/sharletp/sharletpconsole.js

## Conclusion
I had created this for the sake of simplicity by using pre-made custom console methods and additional features in my projects. Feel free to use it as you'd like to in your own projects and if you do like it, leave a star to show the appreciation.

Best wishes,
God bless!
