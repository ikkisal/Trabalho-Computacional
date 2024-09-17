class Animal{
    constructor(tamanho,cor,comendo){
        this.tamanho = tamanho;
        this.cor = cor;
        this.comendo = comendo;
    }

    comer(){
        
    }
}

class Cavalo extends Animal{
    constructor(tamanho,cor,comendo,raca,fugindo){
        super(tamanho,cor,comendo)
        this.raca = raca,
        this.fugindo = fugindo;
    }

    comer(comendo){
        if (comendo == true) {
            return "Comendo"
        }

        else {
            return "Não esta comendo"
        }
    }

    fugir(fugindo){
        if (fugindo == true){
            return "Fugindo"
        }
        else{
            return "Não esta fugindo"
        }
    }
}

class Leao extends Animal{
    constructor(tamanho,cor,comendo,juba,cacando){
        super(tamanho,cor,comendo)
        this.juba = juba;
        this.cacando = cacando;   
    }

    comer(comendo){
        if (comendo == true) {
            return "Comendo"
        }

        else {
            return "Não esta comendo"
        }
    }

    cacar(cacando){
        if (cacando == true) {
            return "Cacando"
        }
        else {
            return "Nao esta Cacando"
        }
    }
}

