const vocalesEncrypt  = {
    a: 'ai',
    e: 'enter',
    i: 'imes',
    o: 'ober',
    u: 'ufat',
}

const getEncrypt = ( vocal ) => {
    return vocalesEncrypt[vocal]
}

export const encrypt = ( mensaje ) => {
    let resultado = '';
    for( const letra of mensaje ) {
      resultado += vocalesEncrypt[letra] ? getEncrypt(letra) : letra        
    }
    return resultado;
}

export const decrypt = ( mensaje ) => {
    for( let key in vocalesEncrypt ) {
        mensaje = mensaje.replaceAll( vocalesEncrypt[key], key );
    }
    return mensaje;
}
