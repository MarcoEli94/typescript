// Tipos
let batman:string = "Bruce";
let superman:string = "Clark";

let existe:boolean = false;

// Tuplas
let parejaHeroes:[string, string] = [batman,superman];
let villano:[string, number, boolean] = ["Lex Lutor",5,true];

// Arreglos
let aliados:string[] = ["Mujer Maravilla","Acuaman","San", "Flash"];

//Enumeraciones
let fuerzaFlash = 5;
let fuerzaSuperman = 100;
let fuerzaBatman = 1;
let fuerzaAcuaman = 0;

enum Fuerza{
  acuaman,
  batman,
  flash = 5,
  superman = 100
}

// Retorno de funciones
function actilet_batiseñal():string{
  return "activada";
}

function pedir_ayuda():void{
  console.log("Auxilio!!!");
}

// Aserciones de Tipots
let poder:string = "100";
let largoDelPoder:number = poder.length;
console.log( largoDelPoder );
