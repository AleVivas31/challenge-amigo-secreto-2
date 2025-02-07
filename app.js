//variables
let nombreAmigos = []
let lista = document.getElementById('listaAmigos');

function agregarAmigo(){
    let registroNombre = document.getElementById('amigo').value.trim();
        //Validar si el campo esta vacio
        if (registroNombre === '') {
            alert("Por favor, inserte un nombre");
            return;
        
        // Validar si el nombre ya existe en la lista
        } if (nombreAmigos.includes(registroNombre)) {
            alert('Nombre ya existe, por favor intente con otro');
            // Agregar el nombre al arreglo
        } else {
            nombreAmigos.push(registroNombre);

            //Actualizar la lista en el DOM
            actualizarLista();

            //Limpiar el campo de entrada
            limpiarCaja();
            
    }       
}          

function limpiarCaja(){
    document.getElementById('amigo').value = '';
}

function actualizarLista(){
    lista.innerHTML = "";

    //Recorrer el arreglo y crear elementos <li>
    for (let i = 0; i < nombreAmigos.length; i++) {
        // Crear un elemento <li>
        const item = document.createElement("li");
        // Asignar el texto del amigo al <li>
        item.textContent = nombreAmigos[i];
        // Agregar el <li> al contenedor de la lista
        lista.appendChild(item);
      } 
}

function sortearAmigo() {

    //Validar si la lista tiene suficiente elementos para realizar sorteo
    if (nombreAmigos.length < 2){
        alert("No hay amigos suficientes para poder realizar el sorteo");
        return;
    }

    let sorteoAleatorio = Math.floor(Math.random() * nombreAmigos.length);

    let amigoSecreto = nombreAmigos[sorteoAleatorio];

    document.getElementById("resultado").innerHTML = `El amigo secreto es: <strong>${amigoSecreto}</strong>`;


}
    



    


    
    






    

