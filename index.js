var fs = require('fs');
var byline = require('byline');
var _ = require('lodash');
var textCodes = require('./dictionnary').getTextCodes();
var audioCodes = require('./dictionnary').getAudioCodes();
var base = require('./dictionnary').getBase();

var tone = require("./tonegenerator");
var header = require("waveheader");

var arguments = process.argv;
var filename = arguments[2];

if (!filename) {

  console.error('No file name given');
  process.exit(1);

}

function readFile() {

  var startTime = new Date();

  var readStream = byline(fs.createReadStream(filename, { encoding: 'utf8' }));

  readStream.on('data', function (line) {

    var sound = [];

    line = (_.map(line, function(letter) {

      sound.push(audioCodes[letter.toUpperCase()]);
      return textCodes[letter.toUpperCase()];

    })).join(' ');

    sound = _.flatten(sound, true);

    // write to file (note conversion to buffer!)
    var writer = new fs.createWriteStream("morse.wav");
    writer.write(header( ((44100) / 4) * (line.length * 2.5) )); // 44100 Hz * xx seconds
    writer.write(new Buffer(sound));
    writer.end();

    var time = (new Date()) - startTime;
    console.log(line);
    console.log('Total time: %dms', time);

  });
}

readFile();