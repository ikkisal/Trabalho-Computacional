class Casa{
    constructor(proprietario, rua, bairro, cidade, numero){
        this.proprietario = proprietario;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.numero = numero;
    }
    getCasa(){
        console.log("O proprietario e:" + this.proprietario)
    }
    
    venda(novoProprietario){
        this.proprietario = novoProprietario;
    }
}



let casa1 = new Casa("Pedro","Wanwan","Jardim da Penha","Vitoria",73);
casa1.getCasa();


casa1.venda("Ikki");

casa1.getCasa();


