const funpipe = require('../funpipe');
const guardMostAsleepByMinute = require('./guardMostAsleepByMinute');
const sortByTime = require('./sortByTime');
const parseRecords = require('./parseRecords');
const guardsSleepingPattern = require('./guardsSleepingPattern');


module.exports = function(data) {
	return funpipe(data, sortByTime, parseRecords, guardsSleepingPattern, guardMostAsleepByMinute);
}

