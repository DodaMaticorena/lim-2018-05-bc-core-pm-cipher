//Variable para establecer la funcionalidad del cifrado
const cod = (offset, string) => {
  let exit = '';
  let firstAsci = 0;
  let formula = 0;
  let offset1 = parseInt(offset);
  let lastAsci = "";

  for (let a = 0; a < string.length; a++){
    firstAsci = string.charCodeAt(a);
    if(64 < firstAsci && firstAsci < 91){
      formula = (firstAsci - 65 + offset1) % 26 + 65;
      lastAsci = String.fromCharCode(formula);
      exit += lastAsci;
      //o puede ser sin la variable lastAsci: exit = exit.concat(String.fromCharCode(formula));
    } else {
        formula[a] = firstAsci; 
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
   let lastAsci = "";
  
   for (let a = 0; a < string.length; a++){
     firstAsci = string.charCodeAt(a);
     if(64 < firstAsci && firstAsci < 91){
       formula = (firstAsci - 65 - (offset1 % 26) + 26) % 26 + 65;
       lastAsci = String.fromCharCode(formula);
       exit += lastAsci;
       //también puede ser sin la variable lastAsci: exit = exit.concat(String.fromCharCode(formula))
     } else {
        formula[a] = firstAsci; 
     }
   }
   return exit

}

//window
window.cipher = {
  encode: cod,
  decode: decod,
}