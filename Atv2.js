
class Estoque
{
    constructor(produtos)
    {
        this.produtos = produtos;
    }

    addProduto(nome, preco, quantidade)
    {
        try
        {
            if(quantidade < 0)
            {
                throw new Error("A quantidade de items não pode ser menor que 0!");
            }else if(preco < 0)
            {
                throw new Error("O valor do item não pode ser menor que 0!");
            }

            this.produtos.push([nome, preco, quantidade]);
        } catch (error)
        {
            console.error(`[!] ${error}`);
        }
    }

    removeProduto(pesquisa)
    {
        try
        {
            let novoProdutos = [];

            this.produtos.forEach(produto => {
                console.log(produto);
            });
        } catch (error)
        {
            console.error(`[!] ${error}`);
        }
    }
}

let estoque = new Estoque([["Celular Samsung S35 Ultra", 12500, 10], ["Pacote de Café 500g", 33.99, 50]]);
estoque.addProduto("Garrafa da Água 500ml", 2, 25);