// constesto super global  = tenemos acceso desde cualquier archivo 
// contesto global = tenemos acceso desde todo el archivo 
//contexto local = el que  cuyo contexto esta dentro de una funcion 
// comtexto bloque = el que cuyo contexto esta dentro de un bloque 
// entre llaves como seria un bloque de un for o in if 
// impoetante : la variable var no respeta el conteto de bloque for o un if 

// contexto global
let velocidad = 8

// contexto  local 
function saltar(){
    var perro = "lucal";
} 

//contexto de bloque 

if(velocidad > 5){
    var gato = "venus"; 
    const perro = " lucas";
} 

console.log(gato)
