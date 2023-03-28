const string = 'Hello World '

function char_rot(num, char) {
    const initCharCode = char.charCodeAt(0)
    let charCode = char.toLowerCase().charCodeAt(0)
    let newCharCode = charCode + num
    if (newCharCode > 122) {
        newCharCode = newCharCode - 26
    }
    if (initCharCode >= 65 && initCharCode <= 90) {
        return String.fromCharCode(newCharCode).toUpperCase()
    } else {
        return String.fromCharCode(newCharCode)
    }
}

function caesar(num, str) {
    let newStr = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[a-z]/i)) {
            newStr += char_rot(num, str[i])
        } else {
            newStr += str[i]
        }
    }
    return newStr
}

function caesarDecode(num, str) {
    return caesar(-num, str)
}

console.log("a chiffé: ",string);
console.log("chiffré: ", caesar(3, string));
console.log("déchiffré: ", caesarDecode(3, caesar(3, string)));