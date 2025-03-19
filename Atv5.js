class Animal
{
    constructor(nome, especie, idade)
    {
        this.nome = nome;
        this.especie = especie;
        this.idade = idade;
    }

    fazerSom()
    {
        switch(this.especie)
        {
            case "Vaca":
                console.log("MUUUUU");
                break;
            case "Cachorro":
                console.log("AU AU");
                break;
            case "Gato":
                console.log("MIAU");
                break;
            case "Elefante":
                console.log("FUUMMMM UHHH");
                break;
            default:
                console.log("Som não identificado!");
        }
    }
}

let vaca = new Animal("Mimosa", "Vaca", 5);
vaca.fazerSom();

let cachorro = new Animal("Pipoca", "Cachorro", 8);
cachorro.fazerSom();

let gato = new Animal("Lilith", "Gato", 3);
gato.fazerSom();

let elefante = new Animal("Dumbo", "Elefante", 76);
elefante.fazerSom();

let ornintorrinco = new Animal("Perry", "Ornintorrinco", 5);
ornintorrinco.fazerSom();
