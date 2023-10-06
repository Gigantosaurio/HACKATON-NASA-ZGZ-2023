function enviar() {
    const divElement = document.getElementById("popup");
    const UserText = document.getElementById('textUser').value; // Obtiene el valor del input al hacer clic en "Enviar"

    // Crea un nuevo elemento div para el mensaje
    const mensajeDiv = document.createElement("div");
    mensajeDiv.id = "miNuevoID"; // Asigna un ID al elemento creado
    mensajeDiv.classList.add("card1");

    // Agrega el contenido del mensaje al nuevo elemento
    mensajeDiv.innerHTML = `
        <p>${UserText}</p>
        `;

    // Agrega el nuevo mensaje a la lista de mensajes en "popup"
    divElement.appendChild(mensajeDiv);
}
