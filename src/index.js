import { Z_ASCII } from "zlib";

//Funciones y declaramos las variables
let texto = document.getElementById('textoEntrada');  
let numeroDesplazamiento = document.getElementById('numDesplaz');
const cifrar = document.getElementById('botonCifrado');
let texto2 = document.getElementById('textoSalida');

// if (texto.match([A-Za-Z])

texto.addEventListener('input', ()=> {
      console.log(texto.value)
    }  )
texto.addEventListener("input", ()=> {
      console.log(numeroDesplazamiento.value)
    } )


cifrar.addEventListener("click", ()=> {
  texto2.innerHTML = encode(texto, numeroDesplazamiento);
} )

function encode(texto,numeroDesplazamiento) {
  let textoCifrar = [];
  const asc1;
  const asc2;
  for (let a = 0; a < texto.length; a++){
    const letras = texto.match([A-Za-z]);

  }
}


const descifrar = document.getElementById('botonDescifrado');

