//Variable para establecer la funcionalidad del cifrado
const cod = (offset, string) => {
  let exit = '';
  let firstAsci = 0;
  let formula = 0;
  let offset1 = parseInt(offset);

  for (let a = 0; a < string.length; a++){
    firstAsci = string.charCodeAt(a);
    if(64 < firstAsci && firstAsci < 91){
      formula = (firstAsci - 65 + offset1) % 26 + 65;
      exit = exit.concat(String.fromCharCode(formula));
      //o puede ser con otra variable lastAsci: lastAsci = String.fromCharCode(formula); y exit += lastAsci;
    } else if (firstAsci === 32) {
        exit = exit.concat(String.fromCharCode(32));
    } 
  }
  return exit
}

//Variable para establecer la funcionalidad del descifrado
const decod = (offset, string) => {
  let exit = '';
  let firstAsci = 0;
  let formula = 0;
  let offset1 = parseInt(offset);
  
  for (let a = 0; a < string.length; a++){
    firstAsci = string.charCodeAt(a);
    if(64 < firstAsci && firstAsci < 91){
      formula = (firstAsci - 65 - (offset1 % 26) + 26) % 26 + 65;
      exit = exit.concat(String.fromCharCode(formula));
    } else if (firstAsci === 32) {
        exit = exit.concat(String.fromCharCode(32));   
    } 
  }
   return exit
}

//window
window.cipher = {
  encode: cod,
  decode: decod,
}