let fs = require("fs");

let readFile = fs.readFileSync(process.argv[2]);

let readBuffer = readFile.toString();

let answer = readBuffer.split("\n").length - 1;

console.log(answer);
