console.log("Working....") 
var numero = 11
let numero1; 
let numero2 = null 
let entero = 19 
let decimal = 4.5 
let string = "Inicio de Java" 
let boolean = false 
let fecha = new Date() 
let dd = fecha.getDate(),  
    mm = fecha.getMonth() + 1, 
    aa = fecha.getFullYear(), 
    hoy = `${aa}-${mm}-${dd}` 
const pi = 3.1416 
console.log("Outcome1 =", numero1)
console.log(`Outcome2 = ${numero2}`)
console.log(`Date = ${fecha}`)
console.log(`Day = ${dd} Month = ${mm} Year = ${aa}`)
console.log("Today is date: ", hoy)
console.log("Pi: ", pi)

let numeros = [7, 8, 9, 10, 11];
let colores =["yellow","brown","purple"]

const json = {              
    "carros": ["Picanto","Sportage"],
    "marca": "KIA"
};
const estudiante = {
    nombre: "Fernando",
    apellido: "Martinez",
    materias: ['Req. de Software', 'POO'],
    conocimientos: {
        lenguajes: [
            'JavaScript','C++','Python'
        ],
        Mat_aux: {
            Nivel3:'Marketing', Nivel4:'Ingles'
        }
    }
}; 

json.carros="Hyundai"
estudiante.apellido = "Durango"
estudiante.genero = "Masculino"

console.log('Object json', json, json.carros);
console.log('Object js',estudiante,estudiante.apellido);
console.log("Introduce Nivel4: ", estudiante.conocimientos.Mat_aux.Nivel4);


let num1 = 4
let num2 = 21

if (numero1==undefined){
    console.log(`If the variable is '${numero1}'`)
}
if (numero2==null){
    console.log(`If the variable is '${numero2}'`)
}
if (num1==4 || num2==0){
    console.log("Unos de los valores es 4")
}else if (num1==num2){
    console.log(`The values are the same: ${num1}=${num2}`)
}else{
    console.log(`The values are not the same: ${num1}!=${num2}`)
}


let n1 = 12
let n2 = n1 % 0;
switch(n2){
    case 0:
        console.log("Par")
        break;
    case 1:
        console.log("Impar")
        break;
    default:
        if(isNaN(n2))    
            console.log(`${n2}=Error`);
        break;
}
console.log("You left the switch")

let i=0
console.log("Bucle while",colores);
while (i < colores.length && colores[i] != "purple"){
    console.log(i, colores[i])
    i+=1
}
console.log("Bucle for", colores);
for (let index = 0; index < colores.length; index++) {
    console.log(i, colores[i]);
    
}
console.log("Bucle for con in", colores);
for(let j in colores){
    console.log(j, colores[j])
}
console.log("Bucle for con of, colores");
for(let color of colores){
    console.log(color)
}
const Carros=[
    {"Marca":"KIA", "Modelo":"Sportage"},
    {"Marca":"Cherry", "Modelo":"Tiggo3"},
    {"Marca":"Ford", "Modelo":"F-150"}
]

console.log("Presentation with of");
for(let carro of Carros){
    console.log(carro)
}
console.log("Foreach");
Carros.forEach(carro => console.log(carro.Marca))

const cars=Carros.map(car => car.Marca)
console.log("Map", cars);

const car=Carros.filter(car => car.Marca != "Cherry")
console.log("Filter", car);

const oneCar = Carros.find(car => car.Marca === "Cherry")
console.log("Find", oneCar);

function sumar(){
    console.log("Suma",10+15);
}
sumar()
const suma = () =>{
    console.log("Suma con Arrow Funcion", 5+13);
}
suma()
function multiplicar(nu1,nu2){
    return nu1*nu2
}
let respuesta = multiplicar(5,8)
console.log("Sin arrow", respuesta);
const mult = (nu1,nu2) => nu1 * nu2 
console.log("arrow",mult(3,9));

function dividir(n1,n2=2){
    let resp=0
    try {
        resp=n1/n2
    } catch (error) {
        console.log("An error ocurred: ", error.message);
    }
    return resp
}
resp = dividir(6)
console.log(resp);
resp = dividir(68,4)
console.log(resp);

const div = (n1,n2=3) =>{
    let resp=0
    try {
        resp=n1/n2
    } catch (error) {
        console.log("An error ocurred: ", error.message);
    }
    return resp
}
console.log(div(25));

fetch('https://pokeapi.co/api/v2/pokemon/')
    .then(r => r.json())
    .then(datos =>{
    })
    .catch(error => console.log("Error de api", error))


const obtenerDatos = async () =>{
    try {
        const resp= await fetch('https://pokeapi.co/api/v2/pokemon/')
        const datos = await resp.json()
    } catch (error) {
        console.log("Error de api", error)
    }
}
obtenerDatos()

let contenido = document.getElementById('content')
let variable = document.getElementById('variab')
console.log(contenido);
console.log(variable);
variable.innerHTML = 'Enteros, Decimales, String, Booleanas, Fechas';
variable.style.color = "brown"
variable.style.background = "#2f23"
console.log(variable);
let concepto = document.querySelector('.growth')
console.log(concepto);