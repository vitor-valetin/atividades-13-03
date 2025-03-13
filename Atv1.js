
class Produto
{
    constructor(nome, preco, desconto)
    {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }

    calcDesconto()
    {
        try
        {
            if(this.desconto > 100)
            {
                throw new Error("O desconto deve ser menor que 100%.");
            }

            let descontado = this.preco - ((this.desconto / 100) * this.preco);

            return descontado;
        }catch (error)
        {
            console.error(`[!] ${error}`);
        }
    }
}

//Funcionando

let prod = new Produto("Pacote de Café 500g", 33.99, 15);
let valorDesconto = prod.calcDesconto();

console.log(`PRODUTO: ${prod.nome} | VALOR un.: R$ ${prod.preco} | DESCONTO: ${prod.desconto}% | VALOR TOTAL: ${valorDesconto.toFixed(2)}`);

//Com erro

let prodErr = new Produto("Pacote de Café 500g", 33.99, 110);
let valorErrDesc = prodErr.calcDesconto();