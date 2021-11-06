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
WashCar<Combi>(mycombi)