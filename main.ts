/*enum Volumen{
  min = 1,
  med, // Siempre uno mas
  max = 10
}

let audio:number = Volumen.med;

console.log(audio);


console.log(Volumen[1]);*/
/*
function llamar_tia():void{
  console.log("Marcar numero");
  return 1;
}

let mensaje = llamar_tia();

console.log(mensaje);
*/
/*
function error(mensaje:any):never{ //Puntos criticos
  throw new Error(mensaje);
}

error("Error critico");
*/
/*
let cualquiera:any = "Warever";

let largoString:number = (<string>cualquiera).length;

console.log(largoString);
*/
/*
let heroe:string;

heroe = "Tony";

heroe = undefined;
*/
/*
let heroe:string = "Flash";

function imprimeHeroe(){
  return heroe;
}

let batisenial = function():string{
  return "Activada papu";
}

console.log(batisenial());
*/
/*
function nombreCompleto(nombre:string, apellido:string):string{
  return `${nombre} ${apellido}`;
}

let nombre = nombreCompleto("marco", "elizondo");

console.log(nombre);
*/

/*
function nombreCompleto(nombre:string, apellido?:string):string{
  if(apellido) return `${nombre} ${apellido}`;
  else return `${nombre}`;
}

let nombre = nombreCompleto("Marco");

console.log(nombre);
*/


// PARAMETRO POR DEFECTO! //
/*
function nombreCompleto(nombre:string, apellido?:string, capitalizado:boolean = false):string{
  if(apellido) return `${nombre} ${apellido}`;
  else return `${nombre}`;
}

let nombre = nombreCompleto("Marco");

console.log(nombre);
*/
/*
function nombreCompleto(nombre:string, ...restParamteres:string[]):string{
  return nombre + " " + restParamteres.join(" ");
}

let superman:string = nombreCompleto("Clark", "Joseph", "Kent");

let ironman:string = nombreCompleto("Antony", "Edward", "Haward", "Stark");

console.log(superman);
console.log(ironman);
*/

function sumar(a:number, b:number):number{

}

  let miFuncion;

  miFuncion = 10;

  miFuncion = sumar;
