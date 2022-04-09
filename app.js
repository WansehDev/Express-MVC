const Express = require('express');
      PATH = require('path');
      PORT = process.env.PORT || 3000;
      bodyParser = require("body-parser");
      router = require('./routes');

const app = Express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(Express.static(PATH.join(__dirname, "./static")));

app.use('/', router);


app.listen(PORT, console.log("Server don start on port " + PORT));