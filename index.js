
var express = require('express')
var app = express();
var request = require('request');


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.set('port', (process.env.PORT || 8080))

app.get('/api/getMatches', function (req, res) {
  request('http://www.resultados-futbol.com/scripts/api/api.php?format=json&req=matchsday&key=0ba7ab83bf8a6178fcf594c6ee1141b1&country=es', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    res.json(body);
	  }
	})
})

var server = app.listen(app.get('port'), function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

})