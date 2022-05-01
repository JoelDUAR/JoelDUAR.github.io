let botonCopiar = document.querySelector("#copiar")

botonCopiar.addEventListener("click", function(){
    copiarAlPortapapeles()
    llamarBoton();
})

function llamarBoton(){
    let botonCopiado = document.querySelector("#copiarVerde");
    botonCopiado.classList.remove("invisible"); 
    botonCopiar.classList.add("invisible");
    let textoInput = document.querySelector("#texto-ingreso")
    textoInput.classList.remove("invisible");
}

function copiarAlPortapapeles(){
    let copiarCodigo = document.querySelector("#transformado")
    let inputFalso = document.createElement("input")
    inputFalso.setAttribute("value", copiarCodigo.innerHTML)
    document.body.appendChild(inputFalso);
    inputFalso.select();
    document.execCommand('copy');
    document.body.removeChild(inputFalso);
    
}








