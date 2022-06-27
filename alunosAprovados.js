const alunos = [
    {
        nome: 'Guedes',
        nota: 1,
        turma: '1G'
    },
    {
        nome: 'Paulo',
        nota: 9,
        turma: '2B'
    },
    {
        nome: 'Souza Lima',
        nota: 4,
        turma: '1G'
    },
    {
        nome: 'Aroeiro',
        nota: 6,
        turma: '1G'
    },
    {
        nome: 'Suellen',
        nota: 10,
        turma: '2B'
    },
    {
        nome: 'Demagogo',
        nota: 0,
        turma: '2B'
    },
    {
        nome: 'Maiara',
        nota: 7,
        turma: '1G'
    }
]

let aprovados = alunosAprovados(alunos, 5);

function alunosAprovados(arr, media) {
    let aprovados = [];

    for(let i = 0; i < arr.length; i++) {

        const {nota, nome} = arr[i];

        if(nota >= media) {
            aprovados.push(nome);
        }
    }

    return aprovados;
}

console.log(`Os alunos aprovados foram: ${aprovados}!`);