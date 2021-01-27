const fr= prompt("escribe una frase");

function maymin(frase){
    var resultado='la frase está formada por'
    if (frase===frase.toUpperCase()){
        resultado+=' mayúsculas'
    } 
    else if(frase===frase.toLowerCase()) {resultado+=' minúsculas'} 
    else{resultado+=' mayúsculas y minúsculas'}
    return resultado
}
alert(maymin(fr));