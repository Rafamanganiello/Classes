const carro = function(nome,potencia,copasPistao){

    nome = nome,
    potencia = potencia,
    copasPistao = copasPistao

    this.getNome = function(){
        return nome
    }
    this.getPotencia = function(){
        return potencia
    }
    this.getCopasPistao = function(){
        return copasPistao
    }
}   

    const Marquinhos = new carro('Relâmpago Marquinhos','750cv',8)

    console.log(Marquinhos.getCopasPistao())
    console.log(Marquinhos.getPotencia())
    console.log(Marquinhos.getNome())
    