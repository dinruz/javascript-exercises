
const repeatString = function(string,num) {
    let repeated="";
    for (let i=0; i<num; i++){
        repeated += string;
    }
    if (num<0){
        return "ERROR";
    }
return repeated;
}
console.log(repeatString('hey',3));


// Do not edit below this line
module.exports = repeatString;
