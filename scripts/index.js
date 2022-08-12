const vocalesEncrypt  = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat',
}

const getEncript = ( vocal ) => {
    return vocalesEncrypt[vocal]
}

const encrypt = ( mensaje ) => {
    let resultado = '';
    for( const letra of mensaje ) {
      resultado += vocalesEncrypt[letra] ? getEncript(letra) : letra        
    }
    return resultado;
}

const decrypt = ( mensaje ) => {
    for( let key in vocalesEncrypt ) {
        mensaje = mensaje.replace( vocalesEncrypt[key], key );
    }
    return mensaje;
}




