let mensajePrueba = 'Hola';
let mensajeEncriptadoPrueba = 'Hoberlai';

const vocales = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat'
}

const getEncript = ( vocal ) => {
    return vocales[vocal]
}

const mensajeEncriptado = () => {
    let mensaje = '';
    for( const letra of mensajePrueba ) {
      mensaje += vocales[letra] ? getEncript(letra) : letra        
    }
    
    return mensaje;
}






