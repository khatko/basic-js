const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class VigenereCipheringMachine {
    constructor(type) {
        this.type = true;
        if (typeof type === "boolean") {
            this.type = type;
        }
    }

    encrypt(str, key) {
        let result = "";
        str = str.toUpperCase();
        let longKey = Array(Math.ceil(str.length / key.length)).fill(key).join("").toUpperCase();
        let spaceCount = 0;
        for (let i = 0; i < str.length; i++) {
            if (ALPHABET.indexOf(str[i]) >= 0) {
                result += ALPHABET[(ALPHABET.indexOf(str[i]) + ALPHABET.indexOf(longKey[i - spaceCount])) % ALPHABET.length];
            } else {
                result += str[i];
                spaceCount += 1;
            }
        }
        return this.type ? result : result.split("").reverse().join("");
    }

    decrypt(str, key) {
        let result = "";
        str = str.toUpperCase();
        let longKey = Array(Math.ceil(str.length / key.length)).fill(key).join("").toUpperCase();
        let spaceCount = 0;
        for (let i = 0; i < str.length; i++) {
            if (ALPHABET.indexOf(str[i]) >= 0) {
                result += ALPHABET[(ALPHABET.indexOf(str[i]) + ALPHABET.length - ALPHABET.indexOf(longKey[i - spaceCount])) % ALPHABET.length];
            } else {
                result += str[i];
                spaceCount += 1;
            }
        }
        return this.type ? result : result.split("").reverse().join("");
    }
}

module.exports = VigenereCipheringMachine;
