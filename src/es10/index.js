

let array = [1,2,3, [1,2,3, [1,2,3]]];
console.log(array.flat(2)); // el 2 es el valor de la profundidad

let arreglo = [1,2,3,4,5];
console.log(arreglo.flatMap(value => [value, value * 2])); // para cada elemento lo que hace es mostrarlo y al lado mostrar el valor * 2

let hello = `      Hello`;
console.log(hello);
console.log(hello.trimStart()); //sirve para borrar los espacios del inicio del string

let hola = `Hello      `;
console.log(hola.trimEnd()); // borra los espacios del final del string

//Para manejar errores en el código

try 
{

}
catch
{

}

// from entries --> transformar arrays a objetos

let entries = [[`name`, `Oscar`], [`age`, 32]];
console.log(Object.fromEntries(entries));

//objeto de tipo simbolo

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);

