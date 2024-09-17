class Pessoa{
    constructor(nome,idade){
        this.nome = nome;
        this.idade = idade;
    }
    getPessoa(){
        console.log("Ola meu nome e " + this.nome + " e eu tenho " + this.idade + " anos")
        
    }
}

class Funcionario extends Pessoa{
    constructor(nome,idade,salario){
        super(nome,idade);//Chama o Constructor da Class Pessoa
        this.salario = salario;


    }
}

let Pessoa1 = new Pessoa("Wanwan",65)
let Pessoa2 = new Pessoa("Joao",18)
let funcionario1 = new Funcionario("Pedro",30,5000);
let coletivoDePessoas = [];

coletivoDePessoas.push(Pessoa1,Pessoa2)

//coletivoDePessoas[0].getPessoa()
//coletivoDePessoas[1].getPessoa()
console.log(funcionario1);


