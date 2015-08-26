var fs = require('fs');
var byline = require('byline');
var _ = require('lodash');
var dictionnary = require('./dictionnary.json');

var tone = require("tonegenerator");
var header = require("waveheader");

var arguments = process.argv;
var filename = arguments[2];

if (!filename) {

  console.error('No file name given');
  process.exit(1);

}

var tones = {
  ".": tone(300, 0.5),
  "-": tone(300, 1.5),
  "/": tone(1, 2.5),
  " ": tone(1, 1.5),
};

function readFile() {

  var readStream = byline(fs.createReadStream(filename, { encoding: 'utf8' }));

  readStream.on('data', function (line) {

    line = (_.map(line, function(letter) {

      return dictionnary[letter.toUpperCase()];

    })).join(' ');

    console.log(line);

    var sound = [];

    _.forEach(line, function(letter) {

      sound = sound.concat(tones[letter]);
      sound = sound.concat(tone(1, 0.01));
    });

    // write to file (note conversion to buffer!)
    var writer = new fs.createWriteStream("morse.wav");
    writer.write(header( 44100 * (line.length * 2.5) )); // 44100 Hz * 10 seconds
    writer.write(new Buffer(sound));
    writer.end();
  });
}

readFile();