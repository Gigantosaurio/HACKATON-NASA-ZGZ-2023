const planet = 'Venus';
const apiUrl = `https://planets-17f2.onrender.com/planets/getPlanet?name=${planet}`;



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