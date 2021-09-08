const fruta =['manzana','mango','pina','uva','tomate','lulo'] 

const elemento=[true,{color:'rojo'},false,98,-34,'Hola que tal']  


// Arrays con objetos 
const persona={
    nombre:'luis',
    apellidos:'rivera',
    edad: 5,
    estado:{
        casado: true,
        soltero: false,

    },
    aficciones:['futbol','tenis','videojuegos','programacion']
} 


const empresa = [

    {
        id: 0,
        nombre:'lina',
        apellido: 'rivera',
        edad: 34
    }, 

    {
        id: 1,
        nombre:'juan',
        apellido: 'lopez',
        edad: 19
    }, 

    {
        id: 2,
        nombre:'julian',
        apellido: 'gonzales',
        edad: 20
    }, 
    {
        id: 3,
        nombre:'viviana',
        apellido: 'gomez',
        edad: 31
    }, 
    {
        id: 4,
        nombre:'yenni',
        apellido: 'naranjo',
        edad: 32
    },





]  
// metodo de arrays  
// concat: nos une dos arrays  o añadimos elementos 
console.log(fruta.concat('limon')) // Agregar una arrays 
console.log(fruta.concat('samdia'))
console.log(fruta.concat('aaaaa'))


// every nos obliga a que todos los elementos  de la lista 
// cumpla una determinada condicion 
//fruta.every(fruta=>{  

    //console.log(fruta !== 'samdia')

//})   


// metodo SOME en arrays  
// nos devuelve  el elemento por elemento si son true o son false 
//fruta.some(fruta=>{
    //console.log(fruta === 'samdia')
//}) 


// filter  
// filter  nos filtrar el arrays y nos devuelve otro arrays 
//con las condiciones que indiquemos
//fruta.filter(fruta=>{
    //if(fruta.length > 5){
        //console.log(`${fruta} tiene mas de 5 caracteres `)
    //}else{
        //console.log(`${fruta} tiene menos de 5 caracteres `)
    //}

//}) 

// find  nos encuentra las considencia que le ppongamos
//fruta.find(fruta=>{ // find es buscar y encontrar
    //if(fruta!=='manzana'){
        //console.log(fruta)
    //}
//}) 


// for each  
// nos recorre el arrays por cada elemento
// fruta.forEach(fruta=>{
//     if(fruta.length>3){
//         fruta ='helado de cocholate'
//         console.log(fruta)
    
//     }else{
//         console.log(fruta)
//     }
  
// })  



// Includes 
//console.log(fruta.includes('manzana'))

if(fruta.includes('pera') == true){
    console.log('existe');
}else{
    fruta.push('pera');
}
console.log(fruta)
