var fs = require('fs');
var byline = require('byline');
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

    // TODO: use dictionnary
  });
}

readFile();