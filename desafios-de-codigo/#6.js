class hero {
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        let ataque = ""
        if (this.tipo === "Mago"){
            ataque = "magia"
        } else if (this.tipo === "Guerreiro"){
            ataque = "esapada"
        } else if (this.tipo === "Monge"){
            ataque = "artes marciais"
        } else if (this.tipo === "Ninja"){
            ataque = "shuriken"
        }
        console.log(`O ${this.tipo} atacou usando ${ataque} `);
    }
}

let magoHugo = new hero("Hugo", 145, "Mago")
let ninjaJao = new hero("Jao", 15, "Ninja")


magoHugo.atacar()
ninjaHugo.atacar()