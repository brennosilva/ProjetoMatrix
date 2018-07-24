function testarValor(n){
  return typeof n === 'number';
}

function somarInteiros(n){    
  if(testarValor(n)){
     var soma = 0;
     for(var x=1; n--; x++){
      soma += x;
    }
    return soma;
  }  
}

function somarImpares(n){  
  var soma=0;
  if(testarValor(n)){
    for(var x=1; n-- ;x+=2){
    soma += x;
    }
    return soma;
  }
}

function multiplicarInteiros(n){  
  var soma=1;
  if(testarValor(n)){
    for(var x=1; n--;x++){
    soma *= x;
    }
    return soma;
  }
}