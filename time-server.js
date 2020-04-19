let net = require("net");

const server = net.createServer(function (socket) {
  let date = new Date();

  let year = date.getFullYear();
  let month = date.getMonth();
  let day = date.getDate();
  let hour = date.getHours();
  let minute = date.getMinutes();

  let stamp = `${year}-0${month + 1}-${day} ${hour}:0${minute}\n`;
  socket.end(stamp);
});

server.listen(process.argv[2]);
