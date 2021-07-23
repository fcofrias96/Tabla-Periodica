const Modulus = function (num1){
  num1 = num1 +1
  if(num1%18 ==0){
    return  true
  }
  else{
    return false
  }
  
}

exports.Modulus = Modulus;
