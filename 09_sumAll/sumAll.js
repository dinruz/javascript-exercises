const sumAll = function(first,last) {
    let between = [];

    if ((!Number.isInteger(first)) || (!Number.isInteger(last))){ //if it is NOT integer
        return "ERROR";
    }
    else if ((first<0) || (last <0)) {
       return "ERROR";
    }

    else if (first<last){
        for (let i=first; i<=last; i++){
            if ((i>=first) && (i<=last)) {
               between.push(i);
            }
        }
    }
    else if (first>last){
        for (let i=first; i>=last; i--){
         if ((i<=first) && (i>=last)){
            between.push(i);
        }

        }
    }
    
total = between.reduce((sum,num)=>sum+num,0);
console.log(`Array: ${between}`);
console.log(`Sum: ${total}`);
return total;
}



sumAll(4,1) // returns 10


// Do not edit below this line
module.exports = sumAll;
