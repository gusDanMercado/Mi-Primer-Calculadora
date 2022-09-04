//console.log("Estoy aqui Gustavo Mercado!!!");

//let miNumero = "Ocho"; //8.6; //5;
//console.log(miNumero);

//let resultado = true;
//console.log(resultado);

let edad = 24;
console.log("Mi edad es " + edad);

const miConstante = 90;
let x;

// condicionales:
if(edad >= 18 && edad%2===0){  // === pregunta si es el mismo dato y el mismo tipo 
    console.log("Es Mayor de edad y la edad es par!!!");
}
else{
    console.log("No es mayor de edad o la edad no es par!!!");
}

// otra forma mas simple de hacer esta condicion es:
let resultado = (edad >= 18 && edad%2==0);  //(edad >= 18 && edad%2==0) esto te devuelve true o false y este resultado se almacena en resultado
console.log(resultado);

// otra forma de hacer esto tambien es: (operador condicional ternario)
let resultado2 = (edad >= 18 && edad%2==0) ? "Es Mayor de edad y la edad es par!!!" : "No es mayor de edad o la edad no es par!!!";
console.log(resultado2)

let miNumero = 0
resultado2 = (miNumero > 0) ? "Mi numero es positivo" : "Mi numero es negativo";
console.log(resultado2);

let contador = 0;

while(contador <3){
    console.log("Hola a todos");
    contador = contador +1;
}

for(let i=0; i<6;i++){
    console.log("Chau a todos");
}

/// funciones:

let saludar = () => {
    console.log("Mi saludo Holaaaa!!!");
}

let saludar2 = (nombre, edad) => {
    console.log("Hola, mi nombre es: "+nombre);
    console.log("y mi edad es: "+edad)
}

saludar();  //llamada a la funcion
saludar2("Gustavo", 26);

let multiplicar = (num1, num2) => {
    return num1*num2;
}

resultado = multiplicar(8,9);
console.log(resultado);

// arreglos:
let arreglo = ["gustavo", "Daniel", "Mercado", 90, true];
console.log(arreglo);

for(let i=0;i<arreglo.length;i++){
    console.log("elemento de la posicion "+i+": "+arreglo[i]);
}

// objetos:
let persona = {
    nombre : "Gustavo",
    edad: 26,
    masculino: true
}
persona.comidaFavorita="Pizza";
persona.nombre="Gustavo Daniel";
console.log(persona.comidaFavorita);


let persona2 = {
    nombre : "Stella",
    edad: 22,
    masculino: false    
}

console.log(persona);
console.log(persona2);