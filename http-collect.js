const bl = require("bl");
const http = require("http");

http.get(process.argv[2], (response) => {
  response.pipe(
    bl(function (err, data) {
      if (err) return console.log(err);
      else {
        data = data.toString();
        console.log(data.length);
        console.log(data);
      }
    })
  );
});
