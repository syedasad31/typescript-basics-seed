const pizzas = [
    {
        name: 'Pepperoni',
        toppings: ['pepperoni']
    }
];

const mappedPizzas = pizzas.map(p => {
    return p.name.toUpperCase();
});
//console.log(mappedPizzas);

const pizza = {
    name: "Blazing inferno",

    /*getName: function () {
        setTimeout(() => {
            console.log(this.name);
        }, 1000);
    },*/
    getName: function () {
        const self = this;
        setTimeout(function () {
            console.log(self.name);
        }, 1000);
    },
}

//pizza.getName();


function multiply(a: number, b=1) {
    return a * b;
}
/*console.log(multiply(5));
console.log(multiply(5, 3));*/


const pizza2 = {
    name: 'Pepperoni',
    price: 15
}
const toppings = ['pepperoni'];
const order = {pizza2, toppings};
//console.log(order);
/*function sumAll(...arr: number[]) {
    return arr.reduce((p, n) => p + n);
}
console.log(sumAll(1, 2, 3));*/

function sumAll(message: string, ...arr: number[]) {
    console.log(message);
    return arr.reduce((p, n) => p + n);
}
//console.log(sumAll('Hello', 1, 2, 3));

