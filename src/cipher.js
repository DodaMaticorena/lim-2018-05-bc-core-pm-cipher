const cod = (offset, string) => {
  let exit = '';
  let firstAsci = 0;
  let formula = 0;
  let offset1 = parseInt(offset);
  //let lastAsci = '';
//debugger
  for (let a = 0; a < string.length; a++){
    firstAsci = string.charCodeAt(a);
    if(64 < firstAsci && firstAsci < 91){
      formula = (firstAsci - 65 + offset1) % 26 + 65;
      exit = exit.concat(String.fromCharCode(formula));
    } else {
      exit = '?';
    }
  }
  return exit
}

const decod = (offset, string) => {
   let exit = '';
   let firstAsci = 0;
   let formula = 0;
   let offset1 = parseInt(offset);
   //let lastAsci = '';

   for (let a = 0; a < string.length; a++){
    firstAsci = string.charCodeAt(a);
    formula = (firstAsci - 65 - offset1) % 26 + 65;
    exit = exit.concat(String.fromCharCode(formula));
   }
   return exit

}

window.cipher = {
  encode: cod,
  decode: decod,
}