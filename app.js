var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 8080

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', port);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// Allow for arbitrary logging of data.
app.post('/log', function (req, res) {
  console.log('<-- |  POST received  | -->');
  console.log(req.body);
  res.send('POST request to the homepage');
})

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});
