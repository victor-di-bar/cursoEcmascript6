//convertir a matrices

const data = 
{
    frontend: `Oscar`,
    backend: `Isabel`,
    design: `Ana`,
}

const entries = Object.entries(data);

console.log(entries);

console.log(entries.length);

//sacar valores sin los titulitos de frontend...

const date = 
{
    frontend: `Oscar`,
    backend: `Isabel`,
    design: `Ana`,
}

const values = Object.values(date); //no se tiene porque llamar a la const de la misma manera que despues del Object.

console.log(values);
console.log(values.length);

//padding

const string = `Hello`; //tiene length de 5 caracteres
console.log(string.padStart(7, `hi`)); //como le añadimos 2 al principio, le ponemos la suma que es 7
console.log(string.padEnd(7, `Ok`)); // Le añadimos 2 pero al final
console.log(`food`.padEnd(7, `okk`)); //no hace falta que se haya creado antes la variable o constante

//trailing comas

const obj = 
{
    name: `Oscar`, //se le añade esta coma aunque sea el último valor por si le queremos añadir algo en el futuro que no nos de error. 
}

// async y await

const helloWorld = () => 
{
    return new Promise ((resolve, reject) => 
    {
        (true)
            ? setTimeout(() => resolve(`Hello world`), 3000)
            : reject(new Error(`Test error`))
        
    })
};

const helloAsync = async () => 
{
    const hello = await helloWorld();
    console.log(hello);
};

helloAsync();

const anotherFunction = async () => 
{
    try 
    {
        const hello = await helloWorld();
        console.log(hello);
    }
    catch (error)
    {
        console.log(error)
    }
};

anotherFunction();