type ContaBancaria ={
    saldo:number,
    depositar:(valor:number) => void
    saque:(valor:number) => void
}

type Correntista ={
    nome:string,
    contaBancaria:ContaBancaria,
}

let contaBancaria:ContaBancaria ={
    saldo:5000,
    depositar(valor:number){
        this.saldo += valor
    },
    saque(valor:number){
        this.saldo -= valor
    }
}

let correntista:Correntista ={
    nome:'Marcos',
    contaBancaria:contaBancaria,
}

correntista.contaBancaria.depositar(3000)
console.log(correntista)
correntista.contaBancaria.saque(2000)
console.log(correntista)