//funciones y valores por defecto

function newfunction(name, age, country)
{
    var name = name || "Oscar";
    var age = age || 23;
    var country = country || "España";
    console.log(name, age, country);
}

//ecma6

function newFunction2(name = "Oscar", age = 32, country = "España")
{
    console.log(name, age, country);
}

newfunction();
newFunction2();
newFunction2("Sergio", 25, "Honduras");

let hello = "hello";
let world = "world";
let epicPhrase = hello + " " + world;
console.log(epicPhrase);
let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//como saltar de linea concatenando y usando el \n

let lorem = "Quiero escribir una frase épica \n" + "otra frase épica";
console.log(lorem);

//ecma6

let lorem2 = `una frase top
otra frase top`;
console.log(lorem2);

//crear objetos y acceder a ellos

let person = 
{
    name: `Oscar`,
    age: 32,
    country: `MX`
}

console.log(person.name, person.age);

//ecma6

let {name, age} = person;
console.log(name, age); 

// arrays en ecma6

let team1 = [`Oscar`, `Julian`, `Ricado`];
let team2 = [`Valeria`, `Yesica`, `Camila`];

let education = [`David`, ...team1, ...team2];
console.log(education);

// let vs var --> var es global y let es local, es decir no puedes llamar con let a una variable desde fuera de su bloque.

{
    var globarVar = `Global var`;
}

{
    let globalLet = `Global let`;
}

console.log(globarVar);
console.log(globalLet); //da error

// variable const --> no cambia el valor una vez ya se le ha asignado un valor

const a = 1;
a = 2;
console.log(a); // da error

// objetos

let nombre = `Oscar`;
let edad = 32;

obj = {nombre: nombre, edad: edad};

//ecma6

obj2 = {nombre, edad};
console.log(obj2);

//Arrows function

const names = 
[
    {nombre: `Oscar`, edad: 25},
    {nombre: `Yesica`, edad: 26}
];

let listOfNames = names.map(function (item) {console.log(item.nombre);});

console.log(listOfNames);

//ecma6

let listOfNames2 = names.map(item => console.log(item.nombre));
console.log(listOfNames2);

//const listOfNames3 = (nombre, edad) => {...};

//const listOfNames4 = nombre => {...};

const square = num => num * num;

// promesas ecma6

const helloPromise = () => 
{
    return new Promise((resolve, reject) => 
    {
        if (true)
        {
            resolve(`Hey!`);
        }
        else
        {
            reject(`Ups!`);
         }
    });
}

helloPromise()
    .then(response => console.log(response))
    .catch(error => console.log(error));

//clases

class calculator 
{
    constructor()
    {
        this.valueA = 0;
        this.valueB = 0;
    }

    sum(valueA, valueB)
    {
        this.valueA = valueA;
        this.valueB = valueB;
        return this.valueA + this.valueB;
    }
}

const calc = new calculator();

console.log(calc.sum(2,2));

//importar partes de código

const hello = require(`./module`);

console.log(hello());

//Generators

function* helloWorld()
{
    if (true)
    {
        yield `Hello`;
    }
    if (true)
    {
        yield `World`;
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);

