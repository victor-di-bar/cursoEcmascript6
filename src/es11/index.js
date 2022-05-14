const button = document.getElementById("btn");

button.addEventListener(`click`, async function () 
{
    const module = await import(`./file.js`);
    module.hello();
});





//otra clase
// big int

const aBigNumber = 9007199254740991n;

const anotherBigNumber = BigInt(9007199254740991);

console.log(aBigNumber);
console.log(anotherBigNumber);

// promise all settled

const promise1 = new Promise((resolve, reject) => reject(`reject`));
const promise2 = new Promise((resolve, reject) => resolve(`resolve`));
const promise3 = new Promise((resolve, reject) => resolve(`resolve 1`));

Promise.allSettled([promise1, promise2, promise3])
    .then(response => console.log(response));

//global this

console.log(window); //sale error
console.log(globalThis); //funciona en todas las plataformas

//operador nulo

const fooo = null ?? `default string`; // devuelve el string si el valor es nulo
console.log(fooo);

//optional chaining

const user = {};

console.log(user?.profile?.email); // los ? lo que hacen es que si no hay valores o no esta definido lo que se pregunta, no se rompe el codigo, simplemente te devuelve un undefined

if(user?.profile?.email)
{
    console.log(`email`);
}
else
{
    console.log(`no tenemos ese dato`);
}
