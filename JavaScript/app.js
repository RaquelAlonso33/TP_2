
// Le agrego un evento a los iconos de la lista para que se abran en otro HTML

const lista = document.getElementById("list-group");

lista.addEventListener("click", function() {
  console.log("click en el icono mas");
});

// Aca estaria llamando a los productos del archivo JSON sin el fetch

// const prod = JSON.parse(productos.json);

// Aca pruebo crear los elementos q van a ir en el html de los prod...
// Esto fue un intento de obtener el JSON sin saber de fetch jaja
// La idea era que en el EventListener de la lista me agregara un div y un parrafo con la informacion de cada servicio....

 //   let div = document.createElement("div");
  // let p = document.createElement("p");
  // p.innerHTML = JSON.parse(productos.json);
  // div.appendChild(p);
  // list.appendChild(div);


  // Aqui traigo el JSON ppal con el fetch, lo busco en la carpeta
fetch("json/principal.json")
.then((response) => response.json())
.then((json) => {
  localStorage.setItem("serviciosP", JSON.stringify(json));
  });
// Ahora lo obtengo con el getItem
const jsonPrincipal = JSON.parse(localStorage.getItem("serviciosP"));
// creo una cosntante para la ul en dnd voy a agregar los elementos
const listaGrupo = document.querySelector("#list-group");

// Recorro el json de servicios y creo, con un template, el html dinamico principal
jsonPrincipal.forEach((servicio) => {
 let content = document.createElement("li");
  // creo items respetando los nombres de bootstrap
  content.className = "list-group-item";
  content.innerHTML = `
    <h6>${servicio.titulo}</h3>
    <p class="descripcionPequeña">${servicio.descripcionPequeña}</p>
    <a href="servicios.html" target="_blank"><i class="bi bi-plus-circle-fill" id="iconoMas"></i></a>
    </li>
    `;
    
    listaGrupo.append(content);
  });


// Ahora creo el fetch para el JSON de los servicios 

fetch("json/servicios.json")
 .then((response) => response.json())
 .then ((json) => {
  localStorage.setItem("servicios", JSON.stringify(json));
 })

  const jsonServicios = JSON.parse(localStorage.getItem("servicios"));

  console.log(jsonServicios);