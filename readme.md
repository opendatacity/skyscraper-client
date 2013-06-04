# SkyScraper Client

This is an API Client Library for SkyScraper Monitoring.

## Installation

````
npm install skyscraper-client
````

## Usage

````
var skyscraper = require("skyscraper-client")

skyscraper.connect(api_url, job_id);

/* send a start signal */
skyscraper.start();

/* send a ping signal */
skyscraper.ping();

/* send a success signal */
skyscraper.success();

/* send a warn signal */
skyscraper.warn([message]);

/* send an error signal */
skyscraper.error(message);

/* send a log message */
skyscraper.log(message);

/* send an end signal */
skyscraper.end();
````
