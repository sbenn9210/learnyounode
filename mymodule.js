let fs = require("fs");
const path = require("path");

function getFileList(directory, fileType, callback) {
  fs.readdir(directory, function (err, list) {
    if (err) return callback(err);
    else {
      list.filter((file) => {
        if (path.extname(file).substring(1) == fileType) {
          return list;
        }
      });
      return callback(null, list);
    }
  });
}

module.exports = getFileList;

//   "use strict";
//   const fs = require("fs");
//   const path = require("path");

//   module.exports = function (dir, filterStr, callback) {
//     fs.readdir(dir, function (err, list) {
//       if (err) {
//         return callback(err);
//       }

//       list = list.filter(function (file) {
//         return path.extname(file) === "." + filterStr;
//       });

//       callback(null, list);
//     });
//   };
