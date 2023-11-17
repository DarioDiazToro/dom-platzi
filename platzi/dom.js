
// const title = document.querySelector("h1");
// const img = document.createElement("img");

// title.innerText ='hola mundo';
// img.src ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwbVpmALnajnEYwp3BADrPjV6mOPCPcqDA0SYDxRou&s';

//  title.innerText = '';
//  title.appendChild(img);

//  const inputUno = document.querySelector(".input1");
//  const inputDos = document.querySelector(".input2");
//  const button = document.querySelector(".btn");
//  const borrar = document.querySelector(".btn2")
//  const span = document.querySelector(".res");

// //   console.log(inputUno.value);
//  button.addEventListener("click",()=>{
//    span.innerText = parseInt(inputUno.value) + parseInt(inputDos.value);
//  });

//  borrar.addEventListener("click",()=>{
//     inputUno.value = '';
//     inputDos.value = '';
//     span.innerText = '';
//  });

 const btn = document.querySelector(".btn");
 const nuevaTarea = document.querySelector("#nueva-tarea");
 const listaTareas = document.querySelector(".lista-tareas");


 btn.addEventListener("click",()=>{
  const li = document.createElement("li");

 li.addEventListener("click",()=>{
    li.classList.toggle("completed");
 });

 if(nuevaTarea.value ==''){
   alert("no hay texto tarea para agregar");
   li.remove("completed");
 }else{

    li.innerText = nuevaTarea.value;
    listaTareas.appendChild(li);
    nuevaTarea.value = '';
 }
 });
