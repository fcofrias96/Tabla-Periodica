const objt = require("../../routes/home");
const array = objt.array;

const Info = function (key, index) {

    let array2 = null
    let array3 = [];
    for (x in array) {
  
      if (array[x][0] == key+1) {
  
  
        array2 = array[x];
  
        for (x in array2) {
  
          array3.push(array2[x]);
        }
  
        return array3[index];
      }
      else []
    }
  }

exports.Info = Info;