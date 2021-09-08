// funciones declaradas 
// funciones expresadas 
//funciones autojecutable 
//funciones flecha 


// funciones declaradas
//function saludos(nombre , apellido1,apellido2){
    //console.log(`Hola tu nombre es  ${nombre} ${apellido1} ${apellido2}`)
//} 
//saludos('maria', 'lopez', 'gutierres') 

// funciones expresadas  
//const saludo = function(nombre,apellido1,apellido2){
    //console.log(`Hola tu nombre es  ${nombre} ${apellido1} ${apellido2}`)
//} 
//saludo('maria','rivera','naranjo') 


// Constante flecha 
//const suma = (num1 , num2) =>{ 
    //console.log(num1+num2)

//} 
//suma(4 , 4) 
//const suma=(num1,num2) => console.log(num1 + num2) 
//suma(4,4)


// Funciones auto ejecutable  clasica
//const saludo=(function(){
    //console.log('Hola buenas noches')

//})() 

// funcion auto ejecutable moderna 
//const saludo=(()=>{
    //console.log('Hola buenas noches')

//})() 


//funcion clasica anomina autoejecutable 
//(function(){
   // console.log('Hola buenas tardes')
//})() 


// funcion moderna anomina autoejecutable 
(()=>{console.log("Hola como estas")})()