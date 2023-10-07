
const input = document.querySelector('#fetch')
const conver = document.querySelector('.conversacion')

const asistente = document.querySelector('.caja')

let toggler = 1;

// Agrega un evento 'change' al elemento <select> para detectar cuando cambia la selección.
selectPlaneta.addEventListener("change", function () {
  // Obtiene el valor seleccionado del <select>.
  const planeta = selectPlaneta.options[selectPlaneta.selectedIndex].value;
  // Actualiza el texto en el elemento donde mostrarás el planeta seleccionado.
  planetaSeleccionado.textContent = planeta;
const planet = 'Venus';
const apiUrl = `https://planets-17f2.onrender.com/planets/getPlanet?name=${planet}`;
  // Realiza la solicitud fetch con la URL actualizada.
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    });
});
function mostrarPopup() {
  if(toggler == 1){
    toggler = 0
    asistente.style.visibility = "visible"
  }else{
    toggler = 1
    asistente.style.visibility = "hidden";
  }
}

async function apiCall(){
  const respuesta = await fetch(`http://127.0.0.1:5000/api?pregunta=${input.value}`, {method: 'POST',headers: {'Content-Type': 'application/json'}})
  const data = await respuesta.json()
  return data
}

async function showData(){
  const resp = await apiCall()
  console.log(resp)
  let ia = 
  `
      <div class="ia">
          <h5>Virtual Assistant</h5>
          <p>${resp.resultado}</p>
      </div>
  `
  let usuario = 
  `
      <div class="usuario">
          <h5>Me</h5>
          <p>${input.value}</p>
      </div>
  `

  conver.innerHTML += usuario
  conver.innerHTML += ia

}

function getApi(url) {
    fetch(url)
        .then(res => res.json())
        .then(jsonDelBack => {
            console.log(jsonDelBack);
            showInfo(jsonDelBack);
        })
}

const container = document.getElementById("container");
const descripcion = document.getElementsByClassName("descripcion");
const nombrePlaneta = document.getElementsByClassName("titulo");

function cerrarDivTitulo(){
    container.remove();
}

function showInfo(json) {
    const nuevoDiv = document.createElement('div');
    container.innerHTML = ``;
    nuevoDiv.classList.add('container');
    const nombre = json.name;
    const distancia = json.distanceFromSun;
    const descripcion = json.description;
    const lunas = json.numberOfMoons;
    const nombreSignificado = json.namesake;
    
    nuevoDiv.innerHTML = `
    
    <button class="cerrar" onclick="cerrarDivTitulo()">&#10006;</button>
    <div class="titulo">
    ${nombre}
    
    </div>
    <div class="descripcion">
    Distancia del Sol: ${distancia}.<br>
    <br>
    Descripcion: ${descripcion}<br>
    <br>
    Numero de lunas: ${lunas}.<br>
    <br>
    Significado del nombre: ${nombreSignificado}.<br>
    </div>`;
    
    container.appendChild(nuevoDiv);
}

getApi(apiUrl);
