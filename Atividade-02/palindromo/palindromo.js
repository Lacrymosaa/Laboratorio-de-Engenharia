function palindromo(value) {
    let aux;
    if (value.includes('-')) {
        aux = value
        .split('-')
        .join(' ')
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .split('')
        .filter((value) => value !== ' ');
    } else {
        aux = value
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .split('')
        .filter((value) => value !== ' ');
    }
    const frase = JSON.stringify(aux);
    const fraseReversa = JSON.stringify(aux.reverse());
    return frase === fraseReversa;
}