// Aca estaba probando crear unos divs cuando apretara el icono o boton

// function pro1() {
//   let div = document.createElement("div");
//   let p = document.createElement("p");

//   p.innerHTML = "descripcion del producto";

//   div.appendChild(p);
//   list.appendChild(div);
// }


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