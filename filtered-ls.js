let fs = require("fs");
const path = require("path");

function getFileList(directory, fileType) {
  fs.readdir(directory, function (err, list) {
    if (err) console.log(err);
    else {
      list.filter((file) => {
        if (path.extname(file).substring(1) == fileType) {
          console.log(file);
        }
      });
    }
  });
}

getFileList(process.argv[2], process.argv[3]);

// ("use strict");
// const fs = require("fs");
// const path = require("path");

// const folder = process.argv[2];
// const ext = "." + process.argv[3];

// fs.readdir(folder, function (err, files) {
//   if (err) return console.error(err);
//   files.forEach(function (file) {
//     if (path.extname(file) === ext) {
//       console.log(file);
//     }
//   });
// });
