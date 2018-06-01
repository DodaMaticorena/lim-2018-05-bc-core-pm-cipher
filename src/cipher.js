const cod = (offset, string) => {
  let exit = '';
  let firstAsci = 0;
  let formula = 0;
  let lastAsci = '';
  for (let a = 0; a < string.length; a++){
    firstAsci = string.charCodeAt(a);
    formula = (firstAsci - 65 + offset) % 26 + 65;
    lastAsci = String.fromCharCode(formula);
    exit += lastAsci;
  }
  return exit
}

//debugger
//console.log(cod(2,'ABC'));

const decod = (offset, string) => {
   let exit = '';
   let firstAsci;
   let formula;
   let lastAsci;

   for (a = 0; a < string.length; a++){
    firstAsci = string.charCodeAt(a);
    formula = (firstAsci - 65 + offset) % 26 - 65;
    exit = exit.concat(String.fromCharCode(formula));
   }
   return exit

}

window.cipher = {
  encode: cod,
  decode: decod
}