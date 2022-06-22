let input = [1, 2, 3, 4, 5, 6];

function verifyEvenNumber() {
    if (input.length > 0 ) {
        for (let i = 0; i < input.length; i++) {
            if (input[i] % 2 === 0) {
                input[i] = 0;
            }

        }
    console.log(`O valor atualizado é: ${input}`);

    }else {
        console.log("-1");
    }
}

console.log("Verifica se os números são pares e os substituem por 0!")

console.log(`O valor original é: ${input}`);
verifyEvenNumber();