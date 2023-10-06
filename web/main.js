//test de fetch a la url que escucha nuestro "back" en python

const input = document.querySelector('#fetch')

async function apiCall(){
    const respuesta = await fetch(`http://127.0.0.1:5000/api?planeta_origen=${input.value}&planeta_destino=Marte&pregunta_asistente=test`, {method: 'POST',headers: {'Content-Type': 'application/json'}}) /* quitar segunda parte para usar el metodo GET */
    const data = await respuesta.json()
    return data
}

async function showData(){
    const resp = await apiCall()
    console.log(resp)
}
