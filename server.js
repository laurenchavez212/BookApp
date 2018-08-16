const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.set('view engine', 'ejs');

require("./config/routes")(app);


app.listen(port, function() {
  console.log('Listening on', port);
});
