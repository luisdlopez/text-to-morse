var fs = require('fs');
var byline = require('byline');
var _ = require('lodash');
var dictionnary = require('./dictionnary.json');

var arguments = process.argv;
var filename = arguments[2];

if (!filename) {

  console.error('No file name given');
  process.exit(1);

}

function readFile() {

  var readStream = byline(fs.createReadStream(filename, { encoding: 'utf8' }));

  readStream.on('data', function (line) {

    line = (_.map(line, function(letter) {

      return dictionnary[letter.toUpperCase()];

    })).join(' ');

    console.log(line);

  });
}

readFile();