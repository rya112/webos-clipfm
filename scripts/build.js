const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config();

const configUrl = process.env.CONFIG_URL || "";

const jsContent = `window.env = { CONFIG_URL: "${configUrl}" };`;
fs.writeFileSync('./src/config.js', jsContent);