/*

class Car {
    label:string = 'Generic Car'
    numWheels: number = 5
    horn(){
        console.log("Beep!Beep!");
    }
}

class SUV extends Car {
    label: string = 'Gneric SUV'
    numWheels:number = 6
}

class Combi extends Car {
    label:string = 'Generic Combi'
    numWheels: number = 4
}

function WashCar < T extends Car>(car:T):T{
    console.log(`Washing ${car.label}`);
    console.log(`cleaning all ${car.numWheels}`);
    console.log(`Beeping ${car.horn()}`);
    return car;
}

const mySUV = new SUV ();
WashCar <SUV>(mySUV)

const mycombi = new Combi ();
WashCar<Combi>(mycombi) */



/*
function Person<T,N>(name:T,age:N):T{
    return name;

}

const rPerson = Person<string,number>('Marcos',23);
console.log(rPerson) */

/*
function log(data:any){
    return (target:any) =>{
        console.log(data);
        console.log(target);
    }
}

@log("Hello !")
@log('Hello 22!')
class qualquer{}

@log('Olá')
class teste{} */

interface Config {
    config:string
}

@logClassWithArgs ({config:'1'})
class Person{
    constructor(public name:string){}
}

function logClassWithArgs(filter:Config){
    return(target:object)=>{
        console.log(target)
        console.log(filter)

    if(filter.config ==='1'){
        console.log('config is 1');
    }
    }
}
