/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('request');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = function (filePath, callback) {
  // TODO
  fs.readFile(filePath, 'utf-8', function(err, content) {
    if (!err) {
      console.log('success');
      contentArr = content.split('\n');
      callback(err, contentArr[0]);
    } else {
      console.log('error');
      callback(err, content);
    }
  });
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  // TODO
  request(url, function(err, response) {
    if (!err) {
      console.log('success');
      response = 200;
      callback(err, response);
    } else {
      console.log('error');
      callback(err, response);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
