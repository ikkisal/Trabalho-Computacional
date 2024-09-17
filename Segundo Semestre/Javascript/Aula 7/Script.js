class Pessoa{
    #nome;
    #idade;
    constructor(nome,idade){
        this.#idade = idade;
        this.#nome = nome;
    }
    obterNome(){
        return this.#nome;
    }
    obterIdade(){
        return this.#idade;
    }
    obterDescricao(){
        console.log("Nome: " + this.#nome + " Idade: " + this.#idade)
    }
}
class Funcionario extends Pessoa{
    #departamento;
    constructor(nome,idade,departamento){
    super(nome,idade);
    this.#departamento = departamento;
    }
    obterDepartamento(){
        return this.#departamento;
    }
    obterDescricao(){
        console.log("Nome: " + this.obterNome() + " Idade: " + this.obterIdade() + " Departamento: " + this.obterDepartamento())
    }
}

class Cliente extends Pessoa{
    #dataCadastro;
    constructor(nome,idade,dataCadastro){
        super(nome,idade);
        this.#dataCadastro = dataCadastro;
    }
    obterDataCadastro(){
        return this.#dataCadastro;
    }
    obterDescricao(){
        console.log("Nome: " + this.obterNome() + " Idade: " + this.obterIdade() + " Data do Cadastro: " + this.obterDataCadastro())
    }
}

let pessoa1 = new Pessoa("Mateus",35);
let funcionario1 = new Funcionario("Joao",18,"Cringe");
let cliente1 = new Cliente("Eu ai",21,"24/07/2024")
let pessoas = [pessoa1,funcionario1,cliente1]
pessoas.forEach(Pessoa =>{
    Pessoa.obterDescricao();
})
//cliente1.obterDescricao();
//funcionario1.obterDescricao();
//pessoa1.obterNome();
//pessoa1.obterDescricao();