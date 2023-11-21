class Car {
    constructor(brand, model, year, color, price, gas) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas;
    }

    honk() {
        console.log(`-----------------------------------------------------------------------------------------------------------------------------------`)
        console.log('Tuut Tuut');
        console.log(`Brand: ${this.brand},\nModel: ${this.model},\nYear: ${this.year},\nColor: ${this.color}, \nPrice: ${this.price}`);
        console.log(`-----------------------------------------------------------------------------------------------------------------------------------`)

    }

    raceTurn() {
        const currentYear = new Date().getFullYear();
        const gasLoss = this.year === currentYear ? 5 : 5 + (currentYear - this.year);
        this.gas = this.gas - gasLoss;
        if (this.gas < 0) {
            console.log(`${this.brand} ${this.model} : No Gas remaining i.e 0 liters`);
        } else {
            console.log(`${this.brand} ${this.model} : Gas remaining :${this.gas} liters`);
        }
    }
}

const car1 = new Car('Honda', 'CR-V', 2023, 'Red', 50000, 45);
const car2 = new Car('Ford', 'F-150', 2020, 'Black', 25000, 30);
const car3 = new Car('BMW', 'X5', 2022, 'Green', 60000, 65);
const car4 = new Car('Mazda', 'CX-5', 2019, 'White', 15000, 60);
const car5 = new Car('Audi', 'Q7', 2018, 'Silver', 52000, 47);
const car6 = new Car('Kia', 'Forte', 2020, 'Blue', 21000, 56);

car1.honk();
car2.honk();
car3.honk();
car4.honk();
car5.honk();
car6.honk();


for (let turn = 1; turn <= 7; turn++) {
    console.log(`-----------------Turn ${turn}-----------------------------------`);
    car1.raceTurn();
    car2.raceTurn();
    car3.raceTurn();
    car4.raceTurn();
    car5.raceTurn();
    car6.raceTurn();
    console.log('---------------------------------------------------------------');
}