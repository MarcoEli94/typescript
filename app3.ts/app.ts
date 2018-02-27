type Veiculo = {
  carroceria:string,
  modelo:string,
  antibalas:boolean,
  pasajeros:number,
  disparar?:() => void
}
// Objetos
let batimovil:Veiculo = {
  carroceria: "Negra",
  modelo: "6x6",
  antibalas: true,
  pasajeros:4
};

let bumblebee:Veiculo = {
  carroceria: "Amarillo con negro",
  modelo: "4x2",
  antibalas: true,
  pasajeros:4,
  disparar(){ // El metodo disparar es opcional
    console.log("Disparando");
  }
};

type Villano = {
  nombre:string,
  edad:number,
  mutante:boolean
};
// Villanos debe de ser un arreglo de objetos personalizados
let villanos:Villano[] = [{
  nombre:"Lex Luthor",
  edad: 54,
  mutante:false
},{
  nombre: "Erik Magnus Lehnsherr",
  edad: 49,
  mutante: true
},{
  nombre: "James Logan",
  edad: undefined,
  mutante: true
}];

// Multiples tipos
// cree dos tipos, uno para charles y otro para apocalipsis

type mHero = {
  poder:string,
  estatura:number
}

type mVillian = {
  lider:boolean,
  miembros:string[]
}

let charles:mHero = {
  poder:"psiquico",
  estatura: 1.78
};

let apocalipsis:mVillian = {
  lider:true,
  miembros: ["Magneto","Tormenta","Psylocke","Angel"]
}

// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
let mystique: mHero | mVillian;

mystique = charles;
mystique = apocalipsis;
