var express = require('express');
var  GoogleMapsAPI = require('googlemaps');
var app = express();

var googleMapsConfig = {
  key:    '<YOUR-KEY>', // api key
  secure: true, // use https
};

var googleMaps = new GoogleMapsAPI(googleMapsConfig);

app.disable('x-powered-by');

app.get("/geocode/", function(request, response) {
  var geocodeParams = {
    "address" : request.query.address
  }
  googleMaps.geocode(geocodeParams, function(error, result) {
    response.send(result);
  });
});

app.listen(8888, function() {
  console.log("Started service on port 8888");
});
