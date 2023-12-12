class hero {
    constructor(nome,idade,tipo,){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
        this.ataque = "" ;
        

        switch(tipo){
            case "Mago":
                this.ataque = "magia";
                break
            case "Guerreiro":
                this.ataque = "espada";
                break
            case "Monge":
                this.ataque = "artes marciais";
                break
            case "Ninja":
                this.ataque = "shuriken";
                break
        }
    }

    atacar(){
        console.log(`o ${this.tipo} atacou usando ${this.ataque}`)
    }

    // Coloquei mais uma função só para utilizar os outros dados inseridos
    selecionar(){
        console.log(`${this.nome} você escolheu a classe ${this.tipo}`)
    }
}

let newChar = new hero("João", 18, "Guerreiro")
let newChar1 = new hero("Maria", 19, "Ninja")
let newChar2 = new hero("Roberto", 22, "Mago")
let newChar3 = new hero("Fernanda", 25, "Monge")

newChar.selecionar();
newChar.atacar();
newChar1.selecionar();
newChar1.atacar();
newChar2.selecionar();
newChar2.atacar();
newChar3.selecionar();
newChar3.atacar();