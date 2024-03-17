const textArea = document.getElementById("textArea");

const btnEncriptador = document.getElementById("btnEncriptador");

const btnDesencriptador = document.getElementById("btnDesencriptador");

const contenidoFinal = document.getElementById("contenidoFinal");

const btnCopiar = document.getElementById("btnCopiar");

const textoPresentacion = document.getElementById ("textoPresentacion");

const imagen = document.getElementById ("imagen");

const sectionPresentacion = document.getElementById("sectionPresentacion");

let remplazar = [
    ["e", "enter"],
    ["i", "imes"],
    ["a", "ai"],
    ["o", "ober"],
    ["u", "ufat"],
]



btnEncriptador.addEventListener("click", () => {
    const texto = textArea.value.toLowerCase ()
    function encriptar(nuevoTexto){
        for (let i = 0; i < remplazar.length; i++){
            if (nuevoTexto.includes(remplazar [i] [0])){
                nuevoTexto = nuevoTexto.replaceAll(remplazar[i][0], remplazar[i][1]);
            };
        };
        return nuevoTexto
    }

    const textoEncriptado = encriptar (texto)

    contenidoFinal.innerHTML = textoEncriptado

    imagen.style.display = "none";

    textoPresentacion.style.display = "none";

    btnCopiar.style.display = "block";

    contenidoFinal.style.textAlign = "left";
    sectionPresentacion.style.justifyContent = "space-between";
    sectionPresentacion.style.padding = "1rem";
    sectionPresentacion.style.gap = "1rem"

    console.log (encriptar(texto))
});

btnDesencriptador.addEventListener("click", () => {
    const texto = textArea.value.toLowerCase(); 
    function desencriptar(nuevoTexto) {
        for (let i = 0; i < remplazar.length; i++) {
            if (nuevoTexto.includes(remplazar[i][1])) {
                nuevoTexto = nuevoTexto.replaceAll(remplazar[i][1], remplazar[i][0]);
            };
        };
        return nuevoTexto;
    }
     
    const textoDesencriptado = desencriptar(texto);
    imagen.style.display = "none";

    textoPresentacion.style.display = "none";

    btnCopiar.style.display = "block";

    contenidoFinal.style.textAlign = "left";
    sectionPresentacion.style.justifyContent = "space-between";
    sectionPresentacion.style.padding = "1rem";
    sectionPresentacion.style.gap = "1rem"
    contenidoFinal.innerHTML = textoDesencriptado;
});

btnCopiar.addEventListener("click", () => {
    let textoEncriptado = contenidoFinal.textContent;

    const elementoTemporal = document.createElement("textarea");
    elementoTemporal.value = textoEncriptado;
    elementoTemporal.setAttribute("readonly", "");
    elementoTemporal.style.position = "absolute";
    elementoTemporal.style.left = "-9999px";
    elementoTemporal.style.overflow = "hidden";
    document.body.appendChild(elementoTemporal);

    elementoTemporal.select();
    document.execCommand("copy");

    document.body.removeChild(elementoTemporal);

    alert("¡Texto copiado correctamente!");
});


