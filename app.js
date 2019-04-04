const express = require('express');
const bodyParser = require('body-parser');
const path = require("path");
const app = express();

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname));
app.set('views', __dirname);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());



app.get('*', function (req, res) {
  res.render('index.html');
});

app.listen(app.get('port'), function () {});