# geocode.js
Little webservice which transforms an address into gps coords and the other way around. 

## Setup

1. Get an google maps api key and edit the service.js file.
2. Install the dependencies: ```npm install express``` and ```npm install googlemaps```
3. Start the service ```node service.js```
4. Fire requests to ```http://<your_ip>:8888/geocode?address=<your_address>```
5. Enjoy the result

## TODO

Add more services like OSM or bing maps to gain more requests per day.
