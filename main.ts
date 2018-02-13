interface Avenger{
  nombre:string;
  edad:number;
}

var thor:Avenger = {
  nombre: "Thor",
  edad: 800
}


function desplegar(vengador:Avenger){
  console.log(`Desplegando a ${vengador.nombre} de ${vengador.edad} años`);
}

desplegar(thor);  
