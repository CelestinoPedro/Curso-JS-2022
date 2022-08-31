/* Versão 1
const pessoa1 = {
    nome: 'Pedro Henrique',
    sobrenome: 'Moreira',
    idade: 25
};

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);*/

/* Segunda Versão
function criaPessoa (nome, sobrenome, idade){
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    };
}

const pessoa1 = criaPessoa('Pedro Henrique', 'Moreira Celestino', 32);
const pessoa2 = criaPessoa('Carolline Mamede', 'Queiroz', 32);
const pessoa3 = criaPessoa('Júlia', 'Moreira Celestino', 22);
const pessoa4 = criaPessoa('Henrique', 'Moreira Celestino', 0);

//console.log(´Meu nome é:${1pessoa1.nome} ${pessoa1.sobrenome} com idade de: ${pessoa1.idade}´);
console.log(pessoa1.nome)*/

function criaPessoa (nome, sobrenome, idade){
    return{
        nome,sobrenome,idade,

        Fala(){

            console.log(`A minha idade atual é ${this.idade}.`);
        },

        incrementaIdade(){
            this.idade++;
        }
    };
}

const pessoa1 = criaPessoa('Pedro Henrique', 'Moreira Celestino', 32);
const pessoa2 = criaPessoa('Carolline Mamede', 'Queiroz', 32);
const pessoa3 = criaPessoa('Júlia', 'Moreira Celestino', 22);
const pessoa4 = criaPessoa('Henrique', 'Moreira Celestino', 0);

console.log(`Meu nome é:${pessoa1.nome} ${pessoa1.sobrenome} com idade de: ${pessoa1.idade}`);
pessoa1.Fala();
pessoa1.incrementaIdade();
pessoa1.Fala();
pessoa1.incrementaIdade();

//console.log(pessoa2.nome);