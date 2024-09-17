class forma{
    constructor(largura)
    {
        this.largura = largura
    }

}

class retangulo extends forma{
    constructor(largura,altura){
        super(largura);
        this.altura = altura;
    }

    calcularArea(altura,largura){
        return this.altura * this.largura
    }
}

class circulo extends forma{
    constructor(largura){
        super(largura);
        this.raio = (this.largura / 2)
    }

    calcularArea(){
       return Math.PI * (this.raio ** 2)
    }
}

const quadradinho = new retangulo(4,4);
console.log("Area do Retangulo: " + quadradinho.calcularArea());

const ovo = new circulo(4);
console.log("Area do circulinho: " + ovo.calcularArea());