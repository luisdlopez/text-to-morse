var tone = require("tonegenerator");

var textCodes = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    ".": ".-.-.-",
    ",": "--..--",
    ":": "---...",
    "?": "..--..",
    "'": ".----.",
    "-": "-....-",
    "/": "-..-.",
    "(": "-.--.-",
    "\"": ".-..-.",
    "@": ".--.-.",
    "=": "-...-",
    " ": "/"
};

var tones = {
    ".": tone(300, 0.5),
    "-": tone(300, 1.5),
    "/": tone(1, 2.5),
    " ": tone(1, 1.5),
};

var audioCodes = {
    "A": [tones['.'], tones[' '], tones['-']], //".-",
    "B": [tones['-'], tones[' '], tones['.'], tones[' '], tones['.'], tones[' '], tones['.']], // "-...",
    "C": [tones['-'], tones[' '], tones['.'], tones[' '], tones['-'], tones[' '], tones['.']], //"-.-.",
    "D": [tones['-'], tones[' '], tones['.'], tones[' '], tones['.']], //"-..",
    "E": [tones['.']], //".",
    "F": [tones['.'], tones[' '], tones['.'], tones[' '], tones['-'], tones[' '], tones['.']], //"..-.",
    "G": [tones['-'], tones[' '], tones['-'], tones[' '], tones['.']], //"-..",, //"--.",
    "H": [tones['.'], tones[' '], tones['.'], tones[' '], tones['.'], tones[' '], tones['.']], //"....",
    "I": [tones['.'], tones[' '], tones['.']], //"..",
    "J": [tones['.'], tones[' '], tones['-'], tones[' '], tones['-'], tones[' '], tones['-']], //".---",
    "K": [tones['-'], tones[' '], tones['.'], tones[' '], tones['-']], //"-.-",
    "L": [tones['.'], tones[' '], tones['-'], tones[' '], tones['.'], tones[' '], tones['.']], //".-..",
    "M": [tones['-'], tones[' '], tones['-']], //"--",
    "N": [tones['-'], tones[' '], tones['.']], //"-.",
    "O": [tones['-'], tones[' '], tones['-'], tones[' '], tones['-']], //"---",
    "P": [tones['.'], tones[' '], tones['-'], tones[' '], tones['-'], tones[' '], tones['.']], //".--.",
    "Q": [tones['-'], tones[' '], tones['-'], tones[' '], tones['.'], tones[' '], tones['-']], //"--.-",
    "R": [tones['.'], tones[' '], tones['-'], tones[' '], tones['.']], //".-.",
    "S": [tones['.'], tones[' '], tones['.'], tones[' '], tones['.']], //"...",
    "T": [tones['-']], //"-",
    "U": [tones['.'], tones[' '], tones['.'], tones[' '], tones['-']], //"..-",
    "V": [tones['.'], tones[' '], tones['.'], tones[' '], tones['.'], tones[' '], tones['-']], //"...-",
    "W": [tones['.'], tones[' '], tones['-'], tones[' '], tones['-']], //".--",
    "X": [tones['-'], tones[' '], tones['.'], tones[' '], tones['.'], tones[' '], tones['-']], //"-..-",
    "Y": [tones['-'], tones[' '], tones['.'], tones[' '], tones['-'], tones[' '], tones['-']], //"-.--",
    "Z": [tones['-'], tones[' '], tones['-'], tones[' '], tones['.'], tones[' '], tones['.']], //"--..",
    "0": [tones['-'], tones[' '], tones['-'], tones[' '], tones['-'], tones[' '], tones['-'], tones[' '], tones['-']], //"-----",
    "1": [tones['.'], tones[' '], tones['-'], tones[' '], tones['-'], tones[' '], tones['-'], tones[' '], tones['-']], //".----",
    "2": [tones['.'], tones[' '], tones['.'], tones[' '], tones['-'], tones[' '], tones['-'], tones[' '], tones['-']], //"..---",
    "3": [tones['.'], tones[' '], tones['.'], tones[' '], tones['.'], tones[' '], tones['-'], tones[' '], tones['-']], //"...--",
    "4": [tones['.'], tones[' '], tones['.'], tones[' '], tones['.'], tones[' '], tones['.'], tones[' '], tones['-']], //"....-",
    "5": [tones['.'], tones[' '], tones['.'], tones[' '], tones['.'], tones[' '], tones['.'], tones[' '], tones['.']], //".....",
    "6": [tones['-'], tones[' '], tones['.'], tones[' '], tones['.'], tones[' '], tones['.'], tones[' '], tones['.']], //"-....",
    "7": [tones['-'], tones[' '], tones['-'], tones[' '], tones['.'], tones[' '], tones['.'], tones[' '], tones['.']], //"--...",
    "8": [tones['-'], tones[' '], tones['-'], tones[' '], tones['-'], tones[' '], tones['.'], tones[' '], tones['.']], //"---..",
    "9": [tones['-'], tones[' '], tones['-'], tones[' '], tones['-'], tones[' '], tones['-'], tones[' '], tones['.']], //"----.",
    ".": [tones['.'], tones[' '], tones['-'], tones[' '], tones['.'], tones[' '], tones['-'], tones[' '], tones['.'], tones[' '], tones['-']], //".-.-.-",
    ",": [tones['-'], tones[' '], tones['-'], tones[' '], tones['.'], tones[' '], tones['.'], tones[' '], tones['-'], tones[' '], tones['-']], //"--..--",
    ":": [tones['-'], tones[' '], tones['-'], tones[' '], tones['-'], tones[' '], tones['.'], tones[' '], tones['.'], tones[' '], tones['.']], //"---...",
    "?": [tones['.'], tones[' '], tones['.'], tones[' '], tones['-'], tones[' '], tones['-'], tones[' '], tones['.'], tones[' '], tones['.']], //"..--..",
    "'": [tones['.'], tones[' '], tones['-'], tones[' '], tones['-'], tones[' '], tones['-'], tones[' '], tones['-'], tones[' '], tones['.']], //".----.",
    "-": [tones['-'], tones[' '], tones['.'], tones[' '], tones['.'], tones[' '], tones['.'], tones[' '], tones['.'], tones[' '], tones['-']], //"-....-",
    "/": [tones['-'], tones[' '], tones['.'], tones[' '], tones['.'], tones[' '], tones['-'], tones[' '], tones['.']], //"-..-.",
    "(": [tones['-'], tones[' '], tones['.'], tones[' '], tones['-'], tones[' '], tones['-'], tones[' '], tones['.'], tones[' '], tones['-']], //"-.--.-",
    "\"": [tones['.'], tones[' '], tones['-'], tones[' '], tones['.'], tones[' '], tones['.'], tones[' '], tones['-'], tones[' '], tones['.']], //".-..-.",
    "@": [tones['.'], tones[' '], tones['-'], tones[' '], tones['-'], tones[' '], tones['.'], tones[' '], tones['-'], tones[' '], tones['.']], //".--.-.",
    "=": [tones['-'], tones[' '], tones['.'], tones[' '], tones['.'], tones[' '], tones['.'], tones[' '], tones['-']], //"-...-",
    " ": [tones['/']], //"/"
};

module.exports = {
    getTextCodes: function() { return textCodes; },
    getAudioCodes: function() { return audioCodes; }
};