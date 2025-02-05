let nombreAmigos = []

function agregarAmigo(){
    let registroNombre = document.getElementById('amigo').value;

        if (registroNombre === '') {
            alert("Por favor, inserte un nombre");
            return;
        } else {
            nombreAmigos.push(registroNombre);

            limpiarCaja();
        }   
 
    console.log(registroNombre);
    return;  
      
    
}
function limpiarCaja(){
    document.getElementById('amigo').value = '';
}

    


    
    






    

