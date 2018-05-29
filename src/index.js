//Funciones y declaramos las variables
let texto = document.getElementById('textoEntrada');  
let numeroDesplazamiento = document.getElementById('input');
const cifrar = document.getElementById('botonCifrado');
let texto2 = document.getElementById('textoSalida');


function encriptado (texto, numeroDesplazamiento) { 
  
    texto.addEventListener('input', ()=>{
      console.log(texto.value)
    }  )

  for (let a = 0; a < texto.length; a++){
    console.log(texto[a]) 
  }
}
const descifrar = document.getElementById('botonDescifrado');

