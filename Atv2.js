
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

    removeProduto(nome)
    {
        try
        {
            let novosProdutos = [];
            novosProdutos = this.produtos.filter(produto => produto[0] != nome);

            if(novosProdutos.length === this.produtos.length)
            {
                throw new Error("Nome de produto inválido!");
            }

            this.produtos = novosProdutos;
        } catch (error)
        {
            console.error(`[!] ${error}`);
        }
    }

    aumentaQntdProduto(nome, quantidade)
    {
        try
        {
            if(quantidade < 0)
            {
                throw new Error("A quantidade de alteração deve ser maior do que 0!");
            }

            let verificar = false;

            this.produtos.forEach(prod => {
                if(prod[0] == nome)
                {
                    prod[2] += quantidade;
                    verificar = true;
                }
            });

            if(!verificar)
            {
                throw new Error("Nome de produto inválido!");
            }
        } catch (error)
        {
            console.error(`[!] ${error}`);
        }
    }

    diminuiQntdProduto(nome, quantidade)
    {
        try
        {
            let verificar = false;

            if(quantidade < 0)
            {
                throw new Error("A quantidade de alteração deve ser maior do que 0!");
            }

            this.produtos.forEach(prod => {
                if(prod[0] == nome)
                {
                    if(prod[2] - quantidade < 0)
                    {
                        throw new Error("A quantidade inserida é maior do que a de produtos disponíveis.");
                    }
                    prod[2] -= quantidade;
                    verificar = true;
                }
            });

            if(!verificar)
            {
                throw new Error("Nome de produto inválido!");
            }
        } catch (error)
        {
            console.error(`[!] ${error}`);
        }
    }
}

//Pode criar o estoque com ou sem produtos já cadastrados.
//let estoque = new Estoque([["Celular Samsung S35 Ultra", 12500, 10], ["Pacote de Café 500g", 33.99, 50]]);
let estoque = new Estoque([]);

estoque.addProduto("Garrafa da Água 500ml", 2, 25);
estoque.addProduto("Celular Samsung S35 Ultra", 12500, 10);
estoque.addProduto("Pacote de Café 500g", 33.99, 50);

estoque.produtos.forEach(produto => {
    console.log(produto);
});

console.log("========================================================");

estoque.removeProduto("Pacote de Café 500g");

estoque.produtos.forEach(produto => {
    console.log(produto);
});

console.log("========================================================");

estoque.aumentaQntdProduto("Garrafa da Água 500ml", 20);

estoque.produtos.forEach(produto => {
    console.log(produto);
});

console.log("========================================================");

estoque.diminuiQntdProduto("Celular Samsung S35 Ultra", 2);

estoque.produtos.forEach(produto => {
    console.log(produto);
});