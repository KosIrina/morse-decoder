const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----': '0',
    ' ': ' '
};

function decode(expr) {
    // write your solution here
    let decodedString = '';

    let splitedString = [];
    for(let i = 0; i < expr.length; i += 10) {
        splitedString.push(expr.substr(i, 10));
    }

    splitedString.forEach((elem) => {
        let morseString = '';
        
        if (elem === '**********') {
            morseString += ' ';
        } else {
            for (let i = 0; i < elem.length; i += 2) {
                if (elem.charAt(i) + elem.charAt(i + 1) === '10') {
                    morseString += '.';
                } else if (elem.charAt(i) + elem.charAt(i + 1) === '11') {
                    morseString += '-';
                }
            }
        }
        
        decodedString += MORSE_TABLE[morseString];
    })

    return decodedString;

}

module.exports = {
    decode
}