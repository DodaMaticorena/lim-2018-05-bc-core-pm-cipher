//Declaramos las variables
let text = document.getElementById('entryText');  
let positionNumb = document.getElementById('subsNumber');
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
  text2.value = cipher.encode(positionNumb.value, text.value);
} )

const decrypt = document.getElementById('butDecrypt');

decrypt.addEventListener("click", ()=> {
  text2.value = cipher.decode(positionNumb.value, text.value);
})

