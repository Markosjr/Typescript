/*type ContaBancaria ={
    saldo:number,
    depositar:(valor:number) => void
    saque:(valor:number) => void
}

type Correntista ={
    nome:string,
    contaBancaria:ContaBancaria,
}

let contaBancaria:ContaBancaria ={
    saldo:-5000,
    depositar(valor:number){
       if (this.saldo <0) return console.log('Valor inválido')
        this.saldo += valor
    }, 
    saque(valor:number){
        let calc = this.saldo - valor
        if (calc <0) return console.log('Saldo insuficiente')
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
console.log(correntista) */



/*import { ZipCodeValidator  } from "./zipValidator";

let myValidator = new ZipCodeValidator ();
const ret = myValidator.isAcceptable('12349');
console.log(ret)*/

enum AprovalStatus {
    draft,
    submitted,
    approved,
    rejected
}

const request ={
    id:1,
    status: AprovalStatus.approved,
    description:'text'
}

if(request.status === AprovalStatus.approved) {
    console.log('The request is approved')
}