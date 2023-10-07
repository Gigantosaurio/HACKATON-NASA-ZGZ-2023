// Obtén una referencia al elemento <select> y al elemento donde mostrarás el planeta seleccionado.
const selectPlaneta = document.getElementById("vivir");
const planetaSeleccionado = document.getElementById("planetaSeleccionado");

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

  // Actualiza la URL de la API con el planeta seleccionado.
  const url = "https://planets-17f2.onrender.com/planets/getPlanet?name=" + planeta;

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