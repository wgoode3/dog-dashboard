console.log("inside of server.js");

const express = require("express"),
          app = express(),
         port = 8000,
      DB_NAME = "dogdb";

app.use(express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.set('views', __dirname + '/views');
app.set('view engine', 'pug');

require('./utils/mongoose')(DB_NAME);
require('./utils/routes')(app);

app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});