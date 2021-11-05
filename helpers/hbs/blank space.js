const BlankSpace = function (value) {
  
  value = value+1;

  if (value >= 2 && value <= 17) {
    return true;
  }

  else if (value >= 21 && value <= 30) {
    return true;
  }

  else if (value >= 39 && value <= 48) {
    return true;
  }

  else if (value >= 127 && value <= 129) {
  
    return true;
  }

  else if (value >= 145 && value <= 147) {
  
    return true;
  }
  


};


exports.BlankSpace = BlankSpace;