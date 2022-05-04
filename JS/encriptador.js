let botonEncriptar = document.querySelector(".boton-primario");
let textoImpreso = document.querySelector("#transformado")


botonEncriptar.addEventListener("click", function(event){
    event.preventDefault();

    let form = document.querySelector("#form")
    let textoInput = document.querySelector("#texto-ingreso");
    let textoIngresado = textoInput.value;
    let errores = [];
    let patron = /[^a-z]\s/;
    let expresion = new RegExp(patron,"g");
    if(textoIngresado == 0){
        errores.push("Ingrese texto") 
        return mostrarErrores(errores);
    }
    if(expresion.test(textoIngresado)){
        errores.push("Valor Incorrecto");
        return mostrarErrores(errores)
    }
    form.reset();
    let mensaje = document.querySelector(".mensaje")
    mensaje.innerHTML = "";
    llamarElementos(); 
    textoInput.classList.add("invisible");
    encriptar(textoIngresado);
    resetearBotonCopiar()
})

function encriptar(textoIngresado){
    textoImpreso.classList.remove("invisible");
    let textoEncriptado = textoIngresado.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
    textoImpreso.textContent = textoEncriptado
}

function llamarElementos(){
    let frente = document.querySelector("#frente");
    frente.classList.add("invisible"); 
    let dorso = document.querySelector("#dorso");
    dorso.classList.remove("invisible");
    let botonCopiar = document.querySelector("#copiar");
    botonCopiar.classList.remove("invisible");
}

function mostrarErrores(errores){
    let ul = document.querySelector(".mensaje");
    ul.innerHTML = "";
    errores.forEach(function(error){
        let li = document.createElement("li");
        li.textContent = error;
        ul.appendChild(li);
    });
}

