const reverseString = function(str) {
    let reversed=[];
    let separate= str.split('');
    for (let i=separate.length-1; i>=0;i--){
       reversed.push(separate[i]);
    }
    return reversed.join('');
};



// Do not edit below this line
module.exports = reverseString;
