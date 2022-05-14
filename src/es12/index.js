//replace all

const string = `javascript es maravilloso, con javascript puedo crear el futuro de la web`;

const replacedString = string.replace(`javascript`, `Python`); //replace solo cambia el primer elemento que se encuentra
console.log(replacedString);

const replacedString2 = string.replace(/javascript/g, `Python`); //de esta manera se cambian todos los valores que coincidan con el deseado.
console.log(replacedString2);

//hay otra manera --> con string.replaceAll() pero a mi no me funciona por la versión de node

//poner de forma privada ciertas cosas

class Message 
{
    #show(val)
    {
        console.log(val);
    };
    get #add(val)
    {
        console.log(`hei`);
    }
}

const message = new Message();
message.show(`Hola`);

//Promise any

const promise1 = new Promise((resolve, reject) => reject(`1`));
const promise2 = new Promise((resolve, reject) => resolve(`2`));
const promise3 = new Promise((resolve, reject) => resolve(`3`));

Promise.any([promise1, promise2, promise3]) //lo mismo no lo resuelve por la versión de node
    .then(response => console.log(response));


// con el WeakRef evitamos que ese elemento sea recogido por el manejador de la basura

class anyClass 
{
    constructor(element)
    {
        this.ref = new WeakRef(element)
    }
}

//operadores

let isTrue = true;
let isFalse = false;
console.log(isTrue &&= isFalse); //solo asigna si isTrue es verdadero --> devuelve falso

let isTrue = true;
let isFalse = false;
console.log(isTrue ||= isFalse); // solo asigna si isTrue es falso --> devuelve true

let isTrue = undefined;
let isFalse = false;
console.log(isTrue ??= isFalse); // solo asigna si isTrue es null o undefined --> devuelve falso


