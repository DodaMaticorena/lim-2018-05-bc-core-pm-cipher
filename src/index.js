//Declaramos las variables
let string = document.getElementById('entryText');  
let offset = document.getElementById('offset');
const encrypt = document.getElementById('butEncrypt');
let text2 = document.getElementById('exitText');

//Escuchamos al evento click para obtener el resultado del cifrado
encrypt.addEventListener("click", ()=> {
  text2.value = cipher.encode(offset.value, string.value);
  text2.innerHTML = text2.value;
} )

//Variable de descifrado
const decrypt = document.getElementById('butDecrypt');

//Escuchamos al evento click para obtener el resultado del descifrado
decrypt.addEventListener("click", ()=> {
  text2.value = cipher.decode(offset.value, string.value);
  text2.innerHTML = text2.value;
})

