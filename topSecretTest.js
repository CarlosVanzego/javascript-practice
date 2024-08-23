function topSecret(str) {

  let decryptedMessage = ''; 
  
  for (let i = 0; i < str.length; i++){
    let char = str[i];
    
    let charCode = str[i].charCodeAt();
    
    if(char >= 'A' && char <= 'Z'){
       charCode = str[i].charCodeAt() - 3;
        console.log("i'm here")
      if( charCode < 65) charCode += 26
    }
    
      else if(char >= 'a' && char <= 'z'){
        charCode = str[i].charCodeAt() - 3;
        console.log("now here")
        if( charCode < 97) charCode += 26;
      }
    
    
        let newChar = String.fromCharCode(charCode);
        decryptedMessage += newChar;
  }

  return decryptedMessage; 
}

console.log(topSecret("Pb qdph lv Mrkq"))
console.log(topSecret("Wrs vhfuhw ilohv: Qr. 1935 Vxshu djhqw GBIgI, rq d gdun qljkw, vwroh wkh Wudlq wluh iurp Qdwlrqdo Pxvhxp, fdxvlqj $100 ploolrq lq gdpdjh."))
