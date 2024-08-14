const textArea = document.querySelector(".textArea");
const mensajes = document.querySelector(".mensajes");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnBoton1() {
    if (validarTexto(textArea.value)) {
        const textoEncriptado = encriptar(textArea.value);
        mostrarTextoEncriptado(textoEncriptado);
    }
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]; 
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function btnBoton2() {
    if (validarTexto(textArea.value)) {
        const textoDesencriptado = desencriptar(textArea.value);
        mostrarTextoEncriptado(textoDesencriptado);
    }
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function validarTexto(texto) {
    const tieneMayusculas = /[A-Z]/.test(texto);
    const tieneAcentos = /[áéíóúÁÉÍÓÚ]/.test(texto);
    const tieneNumeros = /[0-9]/.test(texto);
    const tieneCaracteresE = /[Ü∞:*±€£¥¢!@#$%^&*(),.?":{}|<>+-/]/.test(texto);
    if (tieneMayusculas || tieneAcentos || tieneNumeros || tieneCaracteresE) {
        alert("Por favor, ingrese solo letras minúsculas y sin acentos.");
        return false;
    }
    
    return true;
}

function copiarTexto() {
    const mensajesText = mensajes.textContent;
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = mensajesText;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    try {
        const exitoso = document.execCommand("copy");
        if (exitoso) {
            alert("Texto copiado al portapapeles!");
        } else {
            alert("No se pudo copiar el texto.");
        }
    } catch (mistake) {
        alert("Error al copiar el texto: ", mistake);
    }
    document.body.removeChild(tempTextArea);
}

function mostrarTextoEncriptado(texto) {
    mensajes.textContent = texto;
    mensajes.style.backgroundImage = "none";
    ig.style.display = "none";
    ng.style.display = "none";
    
 
    const botonCopiar = document.querySelector(".copiar");
    if (texto) {
        botonCopiar.style.display = "block";
    } else {
        botonCopiar.style.display = "none";
    }
}