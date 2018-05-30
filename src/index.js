//Declaramos las variables
let texto = document.getElementById('entryText');  
let numeroDesplazamiento = document.getElementById('subsNumber');
const cifrar = document.getElementById('botonCifrado');
let texto2 = document.getElementById('textoSalida');

// if (texto.match([A-Za-Z])

// texto.addEventListener('input', ()=> {
//       console.log(texto.value)
//     }  )
// texto.addEventListener('input', ()=> {
//       console.log(numeroDesplazamiento.value)
//     } )

cifrar.addEventListener("click", ()=> {
  texto2.value = cipher.encode(numeroDesplazamiento.value, texto.value);
} )

const descifrar = document.getElementById('botonDescifrado');

descifrar.addEventListener("click", ()=> {
  texto2.value = cipher.decode(numeroDesplazamiento.value, texto.value);
})

