class Produto{
    #nome;
    #preco;

    constructor(nome,preco){
        this.#nome = nome;
        this.#preco = preco;
    }

    getNome(){
        return this.#nome
    }
    getPreco(){
        return this.#preco
    }
    getDescricao(){
        console.log("Nome: " + this.getNome() + "\nPreco: " + this.getPreco())
    }
    
}

class Eletronico extends Produto{
    #componente;
    constructor(nome,preco,componente){
        super(nome,preco);
        this.#componente = componente;
    }
    getComponente(){
        return this.#componente
    }

    getDescricao(){
        console.log("Nome: " + this.getNome() + "\nPreco: " + this.getPreco() + "\nComponente: " + this.getComponente())
    }
}

class Roupa extends Produto{
    #modelo;
    constructor(nome,preco,modelo){
        super(nome,preco);
        this.#modelo = modelo;
    }
    getModelo(){
        return this.#modelo
    }
    getDescricao(){
        console.log("Nome: " + this.getNome() + "\nPreco: " + this.getPreco() + "\Modelo: " + this.getModelo())
    }
}

let produto1 = new Produto("Wanwan",45.2)
let eletronico1 = new Eletronico("Geladeiro",200,"Geladinho")
let roupa1 = new Roupa("Calcinha", 2.50, "Masculina")

let produtos = [produto1,eletronico1,roupa1];
produtos.forEach(Produto=>{
    Produto.getDescricao();
    console.log("---------------------------------------")
}
)