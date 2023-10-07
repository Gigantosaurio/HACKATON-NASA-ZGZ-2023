// Obtén una referencia al elemento <select> y al elemento donde mostrarás el planeta seleccionado.
const selectPlaneta = document.getElementById("vivir");
const planetaSeleccionado = document.getElementById("planetaSeleccionado");

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
function mostrarPopup(contenidoHTML) {
  // Crea un elemento div para el popup
  const popup = document.createElement("div");
  popup.className = "popup";

  // Agrega el contenido HTML al popup
  popup.innerHTML = contenidoHTML;

  // Agrega el popup al cuerpo del documento
  document.body.appendChild(popup);

  // Agrega un evento de clic al popup para cerrarlo al hacer clic en cualquier parte del mismo
  popup.addEventListener("click", function () {
      cerrarPopup(popup);
  });
}

function cerrarPopup(popup) {
  // Elimina el popup del DOM
  document.body.removeChild(popup);
}

// Ejemplo de uso:
const contenidoHTML = `
  <div class="popup-content">
      <p>Este es un mensaje en el popup.</p>
      <button onclick="cerrarPopup(this.parentElement.parentElement)">Cerrar</button>
  </div>
`;

// Llama a la función mostrarPopup con el contenido HTML que deseas mostrar en el popup
mostrarPopup(contenidoHTML);