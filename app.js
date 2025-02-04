let nombreAmigos = []

function agregarAmigo(){
    let registroNombre = document.getElementById('amigo').value;

        if (registroNombre === '') {
            alert("Por favor, inserte un nombre");
            return;
        } else {
            nombreAmigos.push(registroNombre);
        }   
 
    console.log(registroNombre);
    return;    
    
}


    


    
    






    

