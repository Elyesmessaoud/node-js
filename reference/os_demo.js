const os = require("os");

console.log(os.platform());

console.log(os.arch());

console.log(os.cpus());

console.log(os.freemem() / 1e9);

console.log(os.totalmem() / 1e9);

console.log(os.homedir());

const date = new Date(os.uptime());
console.log(date);
