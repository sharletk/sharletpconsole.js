```

╭━━━┳╮╱╱╱╱╱╱╭╮╱╱╱╭╮╭━━━┳━━━╮╱╱╱╱╱╱╱╱╱╱╱╭╮
┃╭━╮┃┃╱╱╱╱╱╱┃┃╱╱╭╯╰┫╭━╮┃╭━╮┃╱╱╱╱╱╱╱╱╱╱╱┃┃
┃╰━━┫╰━┳━━┳━┫┃╭━┻╮╭┫╰━╯┃┃╱╰╋━━┳━╮╭━━┳━━┫┃╭━━╮
╰━━╮┃╭╮┃╭╮┃╭┫┃┃┃━┫┃┃╭━━┫┃╱╭┫╭╮┃╭╮┫━━┫╭╮┃┃┃┃━┫
┃╰━╯┃┃┃┃╭╮┃┃┃╰┫┃━┫╰┫┃╱╱┃╰━╯┃╰╯┃┃┃┣━━┃╰╯┃╰┫┃━┫
╰━━━┻╯╰┻╯╰┻╯╰━┻━━┻━┻╯╱╱╰━━━┻━━┻╯╰┻━━┻━━┻━┻━━╯

```

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)
![Node CI](https://github.com/sharletp/sharletpconsole.js/actions/workflows/nodejs.yml/badge.svg)
<a href="https://david-dm.org/alanshaw/david-www"><img src="https://david-dm.org/sharletp/sharletpconsole.js.svg" alt="Dependency Status"></a>
<a href="https://david-dm.org/alanshaw/david-www/?type=dev"><img src="https://david-dm.org/sharletp/sharletpconsole.js/dev-status.svg" alt="devDependency Status"></a>

# SharletPConsole.js
A extended version of Node.js Console but with more fancy features!<br>
**Version**: v3.0.1

![Console Log Example](https://github.com/sharletp/sharletpconsole.js/blob/master/.github/images/console_log_example.jpg "Console Log Example")

***

**Please Note:** Due to some internal issues which I am not able to figure out, you can only use this package under certain circumstances:
1. Inside of a javascript codebase.
2. Inside of a typescript codebase that uses typescript native compiler to transcompile as javascript.

If you ever try to run it with the use of `ts-node`, there will be alot of compile time errors.

*If you ever have any idea on how to fix this, please feel free to make a pull request on the master branch, thank you very much!*

## Table of Contents
1. [Requirements](https://github.com/sharletp/sharletpconsole.js#requirements)
2. [Getting Started](https://github.com/sharletp/sharletpconsole.js#getting-started)
3. [Usage](https://github.com/sharletp/sharletpconsole.js#usage)
4. [Roadmap](https://github.com/sharletp/sharletpconsole.js#roadmap)
5. [Contributing](https://github.com/sharletp/sharletpconsole.js#contributing)
6. [Licence](https://github.com/sharletp/sharletpconsole.js#licence)
7. [Contact](https://github.com/sharletp/sharletpconsole.js#contact)
8. [Conclusion](https://github.com/sharletp/sharletpconsole.js#conclusion)

## Requirements
* Node.js `v12.x` or higher

## Getting Started
### Prerequisites
There are two ways which you can install:
1. Install using NPM (Recommended)
```shell
npm install sharletpconsole.js@v3.0.1 --save
```

2. Install from github
```shell
npm install github:sharletp/sharletpconsole.js#v3.0.1 --save
```

### Installation
**Please Note:** The package internally sets itself as the global console whenever imported/required, please be adviced.

Depending on whether you are using **javascript** or **typescript** below are the solutions:
* ### Javascript
```javascript
const sharletpconsole = require("sharletpconsole.js");

console.log("Hello world!");
```

***
* ### Typescript
```typescript
import { sharletpconsole as console } from "sharletpconsole.js"

console.log("Hello world");
```

For typescript due to some complexities, you have to follow this.

## Usage
1. **Different Premade Console Methods**
 
  All of the associated log methods follows this syntax:
    
    Eg: console.log(data, [options])

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
[![FOSSA Status](https://app.fossa.com/api/projects/git%2Bgithub.com%2Fsharletp%2Fsharletpconsole.js.svg?type=large)](https://app.fossa.com/projects/git%2Bgithub.com%2Fsharletp%2Fsharletpconsole.js?ref=badge_large)

Distributed under the **GNU Lesser General Public Licence v3.0**.<br>See `LICENCE` for more information.

## Contact
Name - SharletP<br>
Email: sharletman@gmail.com<br>
Discord: SharletP#2928

Project Link: https://github.com/sharletp/sharletpconsole.js

## Conclusion
I had created this for the sake of simplicity by using pre-made custom console methods and additional features in my projects. Feel free to use it as you'd like to in your own projects and if you do like it, leave a star to show the appreciation.

Best wishes,<br>
God bless! 😄
