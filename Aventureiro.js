class Aventureiro{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(ataque){
        ataque = ["magia", "espada", "artes marciais", "shuriken"]
        switch(this.tipo){

            case 'mago':
                console.log(`O ${this.tipo} de nome ${this.nome} atacou usando ${ataque[0]}`)
                break;
             case 'guerreiro':
                console.log(`O ${this.tipo} de nome ${this.nome} atacou usando ${ataque[1]}`)
                break;
             case 'monje':
                console.log(`O ${this.tipo} de nome ${this.nome} atacou usando ${ataque[2]}`)
                break;
             case 'ninja':
                console.log(`O ${this.tipo} de nome ${this.nome} atacou usando ${ataque[3]}`)
                break;
            default:
                console.log(`O tipo ${this.tipo} usou um ataque generico`)

        }      
    }
}

let mago = new Aventureiro("Ankar", 85, "mago")
mago.atacar()
let guerreiro = new Aventureiro("Arthur", 30, "guerreiro")
guerreiro.atacar()
let monje = new Aventureiro("Abda", 55, "monje")
monje.atacar()
let ninja = new Aventureiro("Chan Li", 42, "ninja")
ninja.atacar()

