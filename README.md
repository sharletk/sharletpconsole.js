# SharletPConsole.js
SharletPConsole.js is a extended version of Console with further extensions written for node.js.

For now it has basic features and minimal functions due to it being a personal project, more will be evantually added in the near future.

# How to install and use?
Note: The following package has not been yet pushed to npm as I usually use this for my own projects and install it from github.

In order to install the package run..

```
npm i github:sharletp/SharletPConsole.js
```

This will install the package to your modules folder.

Now in order for the package to function successfully, make sure you do include it in your code and create a instance of it.

Eg.
`
const SharletPConsole = require("sharletpconsole.js");

const console = new SharletPConsole.Console();
`

Or even a more fancier way of doing it...
`
const { Console } = require("sharletpconsole.js");

const console = new Console;
`

Thats it, now use it like you would use the in-built console, except now its evem better & fancy!