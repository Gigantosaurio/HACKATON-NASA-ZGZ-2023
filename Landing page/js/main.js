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
