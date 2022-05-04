let botonDesencriptar = document.querySelector(".boton-secundario")


botonDesencriptar.addEventListener("click", function(evento){
    evento.preventDefault();
    let form = document.querySelector("#form")
    llamarElementos()
    desencriptar()
    resetearBotonCopiar()
    form.reset();
})

function desencriptar(){
    textoImpreso.classList.remove("invisible");
    let textoInput = document.querySelector("#texto-ingreso");
    textoIngresado = textoInput.value;
    let textoDesencriptado = textoIngresado.replace(/enter/gi,"e").replace(/imes/gi,"i").replace(/ai/gi,"a").replace(/ober/gi,"o").replace(/ufat/gi,"u");
    textoImpreso.textContent = textoDesencriptado
}

function resetearBotonCopiar(){
    let botonCopiado = document.querySelector("#copiarVerde");
    botonCopiado.classList.add("invisible"); 
    botonCopiar.classList.remove("invisible");
}