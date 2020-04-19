const http = require("http");
const fs = require("fs");

const server = http.createServer(function (request, response) {
  let streamObj = fs.createReadStream(process.argv[3]);
  streamObj.pipe(response);
});

server.listen(process.argv[2]);

// "use strict";
// const http = require("http");
// const fs = require("fs");

// const server = http.createServer(function (req, res) {
//   res.writeHead(200, { "content-type": "text/plain" });
//********** Creating the headers to send with the response *********
//   fs.createReadStream(process.argv[3]).pipe(res);
// });

// server.listen(Number(process.argv[2]));
