//operador de reposo

const obj = 
{
    name: `Oscar`,
    age: 32,
    country: `MX`,
};

let {name, ...all} = obj; // separamos guardando en name el name y en all el resto de valores
console.log(all); // como sólo llamo a all, sólo me devuelve age y country

// propiedades de propagación

const obj1 = 
{
    ...obj, //anida los dos elementos, los une
    country: `Tijuana`,
    gender: `male`,
};

console.log(obj1);

// promise.finally

const helloWorld = () => 
{
    return new Promise ((resolve, reject) =>
    {
        (true)
            ? setTimeout(() => resolve(`Hello world`), 3000)
            : reject(new Error`Test Error`)
    });
};

helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log(`Finalizó`))

// agrupar

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/ // para cada apartado detallamos los valores de que numero a que numero van 0-9 y los digitos que tienen

const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day);






