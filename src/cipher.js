const cod = (positionNumb, text) => {
  let exit = "";
  let firstAsci;
  let lastAsci;

  for (let a = 0; a < text.length; a++){
    firstAsci = text[a].charCodeAt();
    lastAsci = firstAsci + positionNumb;
    exit = exit.concat(String.fromCharCode(lastAsci));
  }
  return exit
}

const decod = (positionNumb, text) => {
   

}

window.cipher = {
  encode: cod,
  decode: decod
}