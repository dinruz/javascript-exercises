const removeFromArray = function(arr,removeA,removeB,removeC,removeD) {
   for (let i=0; i<arr.length;i++); 
   const removed = arr.filter((num)=> ((num !== removeA)&&(num !== removeB)&&(num !== removeC)&&(num !== removeD)));
   console.log(removed);
console.log(`Original array: ${arr}`);
console.log(`Array without removed items: ${removed}`);
return removed;
};

removeFromArray(["hey", 2, 3, "ho"], "hey", 3); 

// Do not edit below this line
module.exports = removeFromArray;

