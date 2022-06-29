let lines = 1000000;
let result = 0;

for (let i = 1; i <= lines; i++) {
    if (i % 2 === 0) {
        console.log(`${i}^2 = ${Math.pow(i, 2)}`);
    }
}