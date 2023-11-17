
//   const respuesta = 4;

//       let i = 0;
//        let pregunta;
//         do {
//              pregunta = parseInt(prompt("cuanto es 2 + 2")); 
//             if(pregunta === respuesta){
//                alert("Felicitaciones respondistes Bien!");
//            } else if(pregunta !=respuesta){
//               alert("Error");
//               console.log("veces"+i)
//            }
//            i++
//      }while (pregunta !=respuesta);

//   const validar =()=>{
//     let resultado = parseInt(prompt("Cuanto es 2+2"));
//      if(resultado===4){
//       alert("felicidades");
//      }else{
//         alert("Incorrecto");
//         validar();
//      }
//   };
//   validar();

 const semana =["Lunes","Martes","Miercoles","jueves","viernes","sabado","Domingo"]; 
   
//   const imprimir=(array)=>{
//      console.log(array[0]);
//   };
//   imprimir(semana);

//   const imprimirTodos=(array)=>{
//      array.forEach((dia) => {
//         console.log(`dia: ${dia}`);
//      });
//   };
//   imprimirTodos(semana);

 const persona ={
        nombre:"Dario",
        edad:20,
        correo:"correo@correo.com",
        generosFavoritos:["terror","comedia"]
 };

//  const imprimirObjeto=(Object)=>{
//     for(let element in Object){
//         console.log(element);
//         console.log(Object[element]);
//     }
//  };
//  imprimirObjeto(persona);

  const amigos = ["camilo","andes","juan"];

   const imprimirElementoPorElemento=(array)=>{
      for(let i = 0; i<array.length; i++){
          console.log(array[i]);
      }
   };
//    imprimirElementoPorElemento(amigos);

// const tipoSuscripcion = "basic";
//  const array = tipoSuscripcion.split(" ");

 const suscripciones = {
    basic:"bb",
    free:"ff",
    pro:"pp",
 };
 let  tipoSuscripcion = "basic"

 const arrayValues = Object.values(suscripciones);
 const arrayPropiedades = Object.keys(suscripciones);
 
  for(let i = 0; i<arrayPropiedades.length;i++){
     if(arrayPropiedades[i] === tipoSuscripcion){
        console.log(`tipo de suscripcion que tienes es  ${arrayPropiedades[i]} y puedes ${arrayValues[i]} `);
        break;
     };
  };
