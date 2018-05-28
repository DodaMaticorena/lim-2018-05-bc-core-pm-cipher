//Funciones y declaramos las variables
const texto = document.getElementById('textoEntrada');  

const numeroDesplazamiento = parseInt(document.getElementById('input'));

function encriptado (texto, numeroDesplazamiento) { 
  const cifrar = document.getElementById('botonCifrado');
    cifrar.addEventListener('click', formulaCifrar)  

  for (let a = 0; a < texto.length; a++){
    console.log(texto[a]) 
  }
}
const descifrar = document.getElementById('botonDescifrado');

const texto2 = document.getElementById('textoSalida');