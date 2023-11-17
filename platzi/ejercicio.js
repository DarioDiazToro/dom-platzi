
 const invertirTexto =(cadena='')=>{
    if(cadena == ''){
        console.warn("No hay texto");
    }
     let array = cadena.split("");
     console.log(array);
      let mensajeFinal = "";
        for(let i = array.length -1; i>=0;i--){
           mensajeFinal = mensajeFinal +  array[i];
        }
        console.log(mensajeFinal);
 };
 invertirTexto("Dario");
 invertirTexto("hola mundo");
 invertirTexto("javascript")