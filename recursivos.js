function testarValor(n){
  return typeof n === 'number' && Number.isInteger(n);
}

function somarInteiros(n){  
  function somar(n){
    if(n===1|| n===0)
      return 1;    
    return n + somar(n-1);
  }
  if(testarValor(n)){
    return somar(n);
    
  }   
}


function multiplicarInteiros(n){  
  function multiplicar(n){
    if(n===1)
      return 1;
    return n * multiplicar(n-1);
  }
  if(testarValor(n)){
    return multiplicar(n);    
  }   
}


function somarImpares(n){  
  var numero = -1;
  function somar(n){    
    numero +=2;
    if(n===1)
      return numero;
    return numero + somar(n-1);
  }
  if(testarValor(n)){
    return somar(n);    
  } 
}



