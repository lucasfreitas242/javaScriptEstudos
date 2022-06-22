let word = [];
let reverse = [];
const input = ["ovo", "ana", "pedro", "raiar", "rafael", "gama", "2002"];

function verifyPalindromns() {
    for (let i = 0; i < input.length; i++) {
        word = input[i];
        reverse = word.split("").reverse().join("");

        if (word === reverse) {
        console.log(`${word} é palíndromo!`);
        } else {
        console.log(`${word} NÃO é palíndromo!`);
        }
    }
}

console.log("Verifica se as palavras se caracterizam como Palíndromos!")

console.log(`O valor original é: ${input}`);
verifyPalindromns();