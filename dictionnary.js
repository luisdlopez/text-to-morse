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

var base = 0.75;

var tones = {
    ".": tone(400, base), // base
    "-": tone(400, (base * 3)), // base * 3
    "/": tone(((44100) / 8), (base * 5)), // base * 5
    " ": tone(((44100) / 8), (base * 3)), // base * 3
    "beep_end": tone(((44100) / 8), (base)), // base * 3
};

var audioCodes = {
    "A": [tones['.'], tones['beep_end'], tones['-'], tones[' ']], //".-",
    "B": [tones['-'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones[' ']], // "-...",
    "C": [tones['-'], tones['beep_end'], tones['.'], tones['beep_end'], tones['-'], tones['beep_end'], tones['.'], tones[' ']], //"-.-.",
    "D": [tones['-'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones[' ']], //"-..",
    "E": [tones['.'], tones[' ']], //".",
    "F": [tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['-'], tones['beep_end'], tones['.'], tones[' ']], //"..-.",
    "G": [tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['.'], tones[' ']], //"-..",, //"--.",
    "H": [tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones[' ']], //"....",
    "I": [tones['.'], tones['beep_end'], tones['.'], tones[' ']], //"..",
    "J": [tones['.'], tones['beep_end'], tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['-'], tones[' ']], //".---",
    "K": [tones['-'], tones['beep_end'], tones['.'], tones['beep_end'], tones['-'], tones[' ']], //"-.-",
    "L": [tones['.'], tones['beep_end'], tones['-'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones[' ']], //".-..",
    "M": [tones['-'], tones['beep_end'], tones['-'], tones[' ']], //"--",
    "N": [tones['-'], tones['beep_end'], tones['.'], tones[' ']], //"-.",
    "O": [tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['-'], tones[' ']], //"---",
    "P": [tones['.'], tones['beep_end'], tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['.'], tones[' ']], //".--.",
    "Q": [tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['.'], tones['beep_end'], tones['-'], tones[' ']], //"--.-",
    "R": [tones['.'], tones['beep_end'], tones['-'], tones['beep_end'], tones['.'], tones[' ']], //".-.",
    "S": [tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones[' ']], //"...",
    "T": [tones['-'], tones[' ']], //"-",
    "U": [tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['-'], tones[' ']], //"..-",
    "V": [tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['-'], tones[' ']], //"...-",
    "W": [tones['.'], tones['beep_end'], tones['-'], tones['beep_end'], tones['-'], tones[' ']], //".--",
    "X": [tones['-'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['-'], tones[' ']], //"-..-",
    "Y": [tones['-'], tones['beep_end'], tones['.'], tones['beep_end'], tones['-'], tones['beep_end'], tones['-'], tones[' ']], //"-.--",
    "Z": [tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones[' ']], //"--..",
    "0": [tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['-'], tones[' ']], //"-----",
    "1": [tones['.'], tones['beep_end'], tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['-'], tones[' ']], //".----",
    "2": [tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['-'], tones[' ']], //"..---",
    "3": [tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['-'], tones['beep_end'], tones['-'], tones[' ']], //"...--",
    "4": [tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['-'], tones[' ']], //"....-",
    "5": [tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones[' ']], //".....",
    "6": [tones['-'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones[' ']], //"-....",
    "7": [tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones[' ']], //"--...",
    "8": [tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones[' ']], //"---..",
    "9": [tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['.'], tones[' ']], //"----.",
    ".": [tones['.'], tones['beep_end'], tones['-'], tones['beep_end'], tones['.'], tones['beep_end'], tones['-'], tones['beep_end'], tones['.'], tones['beep_end'], tones['-'], tones[' ']], //".-.-.-",
    ",": [tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['-'], tones['beep_end'], tones['-'], tones[' ']], //"--..--",
    ":": [tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones[' ']], //"---...",
    "?": [tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones[' ']], //"..--..",
    "'": [tones['.'], tones['beep_end'], tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['.'], tones[' ']], //".----.",
    "-": [tones['-'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['-'], tones[' ']], //"-....-",
    "/": [tones['-'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['-'], tones['beep_end'], tones['.'], tones[' ']], //"-..-.",
    "(": [tones['-'], tones['beep_end'], tones['.'], tones['beep_end'], tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['.'], tones['beep_end'], tones['-'], tones[' ']], //"-.--.-",
    "\"": [tones['.'], tones['beep_end'], tones['-'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['-'], tones['beep_end'], tones['.'], tones[' ']], //".-..-.",
    "@": [tones['.'], tones['beep_end'], tones['-'], tones['beep_end'], tones['-'], tones['beep_end'], tones['.'], tones['beep_end'], tones['-'], tones['beep_end'], tones['.'], tones[' ']], //".--.-.",
    "=": [tones['-'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['.'], tones['beep_end'], tones['-'], tones[' ']], //"-...-",
    " ": [tones['/'], tones[' ']], //"/"
};

module.exports = {
    getTextCodes: function() { return textCodes; },
    getAudioCodes: function() { return audioCodes; },
    getBase: function() { return base; }
};