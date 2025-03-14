
class Carro
{
    constructor(modelo, cor, ano, chassi, marca, placa, nomeDono, cpfDono, ipva, tabFipe, motor, cavPotencia)
    {
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
        this.chassi = chassi;
        this.marca = marca;
        this.placa = placa;
        this.nomeDono = nomeDono;
        this.cpfDono = cpfDono;
        this.ipva = ipva.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});
        this.tabFipe = tabFipe.toLocaleString("pt-BR", {style: "currency", currency: "BRL"});;
        this.motor = motor;
        this.cavPotencia = cavPotencia;
    }

    mostrarInfo()
    {
        console.log("=============== INFORMAÇÕES ===============");
        console.log(`Modelo: ${this.modelo}`);
        console.log(`Cor: ${this.cor}`);
        console.log(`Ano: ${this.ano}`);
        console.log(`Chassi: ${this.chassi}`);
        console.log(`Marca: ${this.marca}`);
        console.log(`Placa: ${this.placa}`);
        console.log(`Proprietário: ${this.nomeDono}`);
        console.log(`CPF do Proprietário: ${this.cpfDono}`);
        console.log(`IPVA: R$ ${this.ipva}`);
        console.log(`Tabela FIP: R$ ${this.tabFipe}`);
        console.log(`Motor: ${this.motor}`);
        console.log(`Cavalos de Potência: ${this.cavPotencia}`);
        console.log("===========================================");
    }
}

let carro = new Carro("Aventador LP 700-4", 
                      "Cinza", 
                      2011, 
                      "3FA6P0HD2LR258374", 
                      "Lamborghini", 
                      "RXT4J25", 
                      "Vitor Valentin R. Becker", 
                      "000.000.000-00",
                      133941.67,
                      3826905,
                      "V12",
                      690);

carro.mostrarInfo();