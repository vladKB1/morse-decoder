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
    '-----':  '0',
};

function decode(expr) {
    s = expr.split(/(.{10})/);    

    let ans = "";

    for (let i = 0; i < s.length; i++) if (s[i].length != 0) {        
        if (s[i][0] == "*") {
            ans += " ";
            continue;
        }
        let letter = "";
        for (let j = s[i].length - 1; j >= 1; j -= 2) {
            if (s[i][j] == "1" && s[i][j - 1] == "1") {
                letter = "-" + letter;
            } else if (s[i][j] == "0" && s[i][j - 1] == "1") {
                letter = "." + letter;
            }
        }    
        
        ans += MORSE_TABLE[letter];
    }

    return ans;
}

module.exports = {
    decode
}

console.log(decode("00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"));