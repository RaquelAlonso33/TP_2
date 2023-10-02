// fetch("json/servicios.json")
//  .then((response) => response.json())
//  .then ((json) => {
//   localStorage.setItem("servicios", JSON.stringify(json));
//  });

let servicios;

async function mostrarInfo(){
  servicios = localStorage.getItem("servicios");

  if( servicios == null){
    let response = await fetch("json/servicios.json");
    servicios = await response.json();

    localStorage.setItem("servicios", JSON.stringify(servicios));
  };

  if ( typeof servicios == "string"){
    servicios = JSON.parse(servicios);
  };

  console.log(servicios);

  // serviciosP.forEach((crearHTML));
};
const jsonServicios = JSON.parse(localStorage.getItem("servicios"));
const contenedor = document.querySelector(".container");
  // const enlace = document.getElementById("iconoMas");

console.log(jsonServicios);


  // enlace.addEventListener("click", function() {
  //   console.log("hice clic");
  jsonServicios.forEach((servicio) => {
    let div = document.createElement("div");
    div.className = "destinos";
    div.innerHTML = `
      <h4 class="servicio">${servicio.codigo}</h3>
      <p class="servicio">${servicio.titulo}</p>
      <img src="img/${servicio.imagen}">
      <p class="servicio">${servicio.descripcion}</p>
      <p class="servicio">${servicio.precio}</p>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      <i class="bi bi-star-fill"></i>
      `;
    contenedor.appendChild(div);
  });
  // }); 
  

