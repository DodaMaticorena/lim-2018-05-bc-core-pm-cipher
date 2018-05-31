//Declaramos las variables
let string = document.getElementById('entryText');  
let offset = document.getElementById('offset');
const encrypt = document.getElementById('butEncrypt');
let text2 = document.getElementById('exitText');

// if (texto.match([A-Za-Z])

// texto.addEventListener('input', ()=> {
//       console.log(texto.value)
//     }  )
// texto.addEventListener('input', ()=> {
//       console.log(numeroDesplazamiento.value)
//     } )

encrypt.addEventListener("click", ()=> {
  text2.value = cipher.encode(offset.value, string.value);
  text2.innerHTML = 
} )

const decrypt = document.getElementById('butDecrypt');

decrypt.addEventListener("click", ()=> {
  text2.value = cipher.decode(offset.value, string.value);
})

