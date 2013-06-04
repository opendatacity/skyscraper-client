# SkyScraper Client

This is an API Client Library for SkyScraper Monitoring.

## Installation

````
npm install skyscraper-client
````

## Usage

```` javascript
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

## Signals

* `start` thy scraperors execution has begun.
* `end` thy scraperors execution has ended.
* `ping` thy scraperor is still executed and has not yet broken apart.
* `success` thy scraperor has achieved a portion of a quest successfully.
* `warn` thy scraperor ran into troubles which may be worth looking upon.
* `error` thy scraperor has broken down and requires immediate attention.
* `log` thy scraperor wants something to be written down for a later look upon.

