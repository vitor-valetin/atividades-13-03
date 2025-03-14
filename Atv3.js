
class ContaBancaria
{
    constructor(nome, saldo)
    {
        try
        {
            if(saldo < 0)
            {
                throw new Error("O saldo incial deve ser maior do que 0!");
            }
            this.nome = nome.toString();
            this.saldo = saldo;
        } catch (error)
        {
            console.error(`[!] ${error}`);
        }
    }

    mostrarSaldo()
    {
        console.log("========== MINHA CONTA ==========");
        console.log(`Nome: ${this.nome}`);
        console.log(`Saldo: R$ ${this.saldo.toFixed(2)}`);
        console.log("=================================");
    }

    depositar(valor)
    {
        try
        {
            if(valor <= 0)
            {
                throw new Error("O valor depositado deve ser maior do que 0!");
            }

            this.saldo += valor;
        } catch (error)
        {
            console.error(`[!] ${error}`);
        }
    }

    sacar(valor)
    {
        try
        {
            if(valor <= 0)
            {
                throw new Error("O valor depositado deve ser maior do que 0!");
            }else if(this.saldo - valor < 0 )
            {
                throw new Error("O valor que está tentado depositar é maior que seu saldo!");
            }

            this.saldo -= valor;
        } catch (error)
        {
            console.error(`[!] ${error}`);
        }
    }
}

let conta = new ContaBancaria("Vitor Valentin Rohling Becker", 100);
conta.mostrarSaldo();

conta.depositar(12340.92);
conta.mostrarSaldo();

conta.sacar(1580.50);
conta.mostrarSaldo();