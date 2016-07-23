var express = require('express');
var app = express();
var geocoder = require('geocoder');

app.disable('x-powered-by');

app.get("/geocode/", function(request, response) {
  geocoder.geocode(request.query.search, function(error, data) {
      response.send(data);
  });
});


app.get("/reverse/", function(request, response) {
  geocoder.geocode(request.query.lat, request.query.lng, function(error, data) {
      response.send(data);
  });
});


app.listen(8888, function() {
  console.log("Started service on port 8888");
});
