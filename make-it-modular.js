const mymodule = require("./mymodule.js");

function logger(err, data) {
  if (err) return console.log(err);
  else {
    data.map((file) => console.log(file));
  }
}

mymodule(process.argv[2], process.argv[3], logger);

// "use strict";
// const filterFn = require("./solution_filter.js");
// const dir = process.argv[2];
// const filterStr = process.argv[3];

// filterFn(dir, filterStr, function (err, list) {
//   if (err) {
//     return console.error("There was an error:", err);
//   }

//   list.forEach(function (file) {
//     console.log(file);
//   });
// });
