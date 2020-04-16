let fs = require("fs");
let items = undefined;
function read() {
  fs.readFile(process.argv[2], "utf8", function (err, fileContents) {
    if (err) {
      console.log(err);
    } else {
      console.log(fileContents.split("\n").length - 1);
    }
  });
}

read();
