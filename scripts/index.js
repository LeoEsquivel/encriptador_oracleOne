import { encrypt, decrypt } from './encrypt.js';

const btnEncrypt = document.getElementById('encrypt')
const btnDecrypt = document.getElementById('decrypt');

const textArea = document.getElementById('mensaje');
const respuesta = document.getElementById('respuesta');

btnEncrypt.onclick = () => {
    tipoAccion(true);

}

btnDecrypt.onclick = () => {
    tipoAccion(false);
}

//Encriptar true, Desencriptar false
const tipoAccion = ( tipo ) => {
    let mensaje = textArea.value.toLowerCase();

    if( !mensaje ) {
        return console.log('No hay nada');
    }

    mensaje = tipo 
                   ? encrypt( mensaje ) 
                   : decrypt( mensaje ); 

    respuesta.innerHTML = mensaje;
    
}

