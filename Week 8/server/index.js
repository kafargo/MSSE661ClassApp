// const express = require("express");
// const app = express();

// const port = process.env.PORT || 3001;

// app.use(express.static("public"));

// app.listen(port, function () {
//   console.log("Server started at http://localhost:%s", port);
// });

/**
 * the original index.js is above, the the below is updated to use https
 * details are here: https://timonweb.com/javascript/running-expressjs-server-over-https/
 */

const express = require("express");
var fs = require("fs");
var https = require("https");
const app = express();

const httpPort = process.env.PORT || 4000;
const httpsPort = process.env.HTTPS_PORT || 4443;

app.use(express.static("public"));

app.listen(httpPort, () => {
  console.log("Server started at http://localhost:%s", httpPort);
});

https
  .createServer(
    {
      key: fs.readFileSync(__dirname + "/server.key"),
      cert: fs.readFileSync(__dirname + "/server.cert"),
    },
    app
  )
  .listen(httpsPort, () => {
    console.log("Server started at http://localhost:%s", httpsPort);
  });
