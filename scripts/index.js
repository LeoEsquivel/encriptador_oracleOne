import { encrypt, decrypt } from './encrypt.js';
import { showPopup } from './popup.js';

//Elementos del encrypt/decrypt
const btnEncrypt = document.getElementById('encrypt')
const btnDecrypt = document.getElementById('decrypt');

const textArea = document.getElementById('mensaje');
const respuesta = document.getElementById('respuesta');

const specialCharactersPattern = /[ `!@#$%^&*()_+\-=\[\]{}';:"\\|,.<>\/?~]/;


//Metodos para encrypt/decrypt
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
        showPopup('No se ha ingresado texto.', 'Por favor escriba algo para poder encriptarlo.');
        return;
    }

    if( specialCharactersPattern.test( mensaje )) {
        showPopup('Caracter no valido', 'No se aceptan los siguientes caracteres: ' + specialCharactersPattern);
        return console.log('Hay caracter no valido')
    }

    mensaje = tipo 
                   ? encrypt( mensaje ) 
                   : decrypt( mensaje ); 

    respuesta.innerHTML = mensaje;
    
}

