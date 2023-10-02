// // Intento con el async y await

let serviciosP;

// creo una cosntante para la ul en dnd voy a agregar los elementos
let listaGrupo = document.querySelector("#list-group");

async function mostrarInfo(){
  serviciosP = localStorage.getItem("serviciosP");

  if( serviciosP == null){
    let response = await fetch("json/principal.json");
    serviciosP = await response.json();

    localStorage.setItem("serviciosP", JSON.stringify(serviciosP));
  };

  if ( typeof serviciosP == "string"){
    serviciosP = JSON.parse(serviciosP);
  };

  console.log(serviciosP);

  serviciosP.forEach((crearHTML));
};


// Recorro el json de servicios y creo, con un template, el html dinamico principal
const crearHTML = (servicio) => {
 let content = document.createElement("li");
  // creo items respetando los nombres de bootstrap
  content.className = "list-group-item data-id=${servicio.id}";
  content.innerHTML = `
    <h6>${servicio.titulo}</h3>
    <p class="descripcionPequeña">${servicio.descripcionPequeña}</p>
    <a href="servicios.html" target="_blank"><i class="bi bi-plus-circle-fill" id="iconoMas"></i></a>
    </li>
    `;
    
    listaGrupo.append(content);
  };


  mostrarInfo();


  // document.addEventListener('click',(e) =>{
  //   if(e.target.tagName == "LI"){
  //     console.log(e.target.dataset.id);
  //     // sessionStorage.setItem("id", e.target.dataset.id)
  //     // window.location = "servicios.html";
  //   }
  // });
  
// Ahora creo el fetch para el JSON de los servicios 


// fetch("json/servicios.json")
//  .then((response) => response.json())
//  .then ((json) => {
//   localStorage.setItem("servicios", JSON.stringify(json));
//  })

//   const jsonServicios = JSON.parse(localStorage.getItem("servicios"));
//   const contenedor = document.querySelector(".container");
//   const enlace = document.getElementById("iconoMas");

//   console.log(jsonServicios);

//   enlace.addEventListener("click", function(jsonServicios) {
//     console.log("hice clic");
//     jsonServicios.forEach((servicio) => {
//       let div = document.createElement("div");
//       div.className = "destinos";
//       div.innerHTML = `
//       <h3>${servicio.codigo}</h3>
//       `;
//       contenedor.appendChild(div);
//     })
//   }); 
 
  
  // Le agrego un evento a los iconos de la lista para que se abran en otro HTML

// const enlace = document.getElementById("iconoMas");
// enlace.addEventListener("click", traerServicios()); 
 
// function traerServicios(){
//     console.log(jsonServicios);
//   }



// Vamos a probar con asincronico: 

// async function cargarJson() {
//   const response = await fetch("json/principal.json");
//   const serviciosP = await response.json();
// // obtenemos el json y la guardamos en el localstorage
//  localStorage.setItem("serviciosP", JSON.stringify(serviciosP));
// }

// cargarJson();

// NO ME FUNCIONO!!!