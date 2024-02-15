# mcbot
A [mineflayer](https://github.com/PrismarineJS/mineflayer) based minecraft bot that allows for custom command addressing.

# Usage
First begin by creating a `.env` file, there is an example in the `example.env` file. Then change the config file in `config.js` to suit your needs.
```shell
npm i
node .
```
It is recommended to install [pm2](https://www.npmjs.com/package/pm2) to keep the instance running.
If you are running this on any other cloud based platform, you can directly clone this package:
```shell
git clone https://github.com/jeffplays2005/mcbot.git
cd mcbot
npm i
```
Make sure you change the `.env` file and config file first!

# Custom commands
You would need a basic understanding of Javascript to create custom commands. In the `/commands/text` directory, you can freely add folders as the `manager.js` file parses any folder that is in the `/commands/text` directory. Follow the `/commands/text/template.js` file to get started.
If you are using the bot in a server that does not allow for repeated messages, make sure you use the `unique` paramater that is passed through(this bypasses the checks for similar strings).

# Credits
[Mineflayer](https://github.com/PrismarineJS/mineflayer)

# License
MIT License

Copyright (c) 2024 jeffplays2005

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
