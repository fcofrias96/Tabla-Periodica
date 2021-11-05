const Completing = function(array){

    let Array = [];

    for (x in array){

        Array.push([array[x][0],array[x][1]])
    }


    if(Array.length == 162){
    }

    else{

        let add = 163 - Array.length

        for (let i =1; i< add; i++){

            Array.push("x");

        }

    }

      return Array;  

}
exports.Completing = Completing;