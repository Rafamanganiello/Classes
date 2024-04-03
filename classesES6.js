class carro{
    constructor (nome, potencia, copasPistao){
        this.nome = nome
        this.potencia = potencia
        this.copasPistao = copasPistao
    }
    copasGanhas(){
        console.log(`O ${this.nome} já ganhou ${this.copasPistao} Copas Pistão 
        em sua carreira`)
    }
}

    const Marquinhos = new carro ('Relâmpago Marquinhos','750cv', 8)

    Marquinhos.copasGanhas()