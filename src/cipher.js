const cod = (offset, string) => {
  let exit = '';
  let firstAsci;
  let formula;
  let lastAsci;
 
  for (let a = 0; a < string.length; a++){
    firstAsci = string[a].charCodeAt(a);
    formula = (firstAsci - 65 + offset) % 26 + 65;
    lastAsci = String.fromCharCode(formula);
    exit += lastAsci;
  }
  return exit
}

const decod = (offset, string) => {
   let exit = '';
   let firstAsci;
   let lastAsci;

   for (a = 0; a < string.length; a++){
    firstAsci = string[a].charCodeAt();
    lastAsci = ((firstAsci - 65 + offset) % 26 - 65);
    exit = exit.concat(String.fromCharCode(lastAsci));
   }
   return exit

}

window.cipher = {
  encode: cod,
  decode: decod
}